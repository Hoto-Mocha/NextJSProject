import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    const client = await connectDB;
    const db = client.db("project")

    const method = req.body._method || req.method

    const idSearchResult = await db.collection('member_admin').findOne({ id: req.body.id })
    const telSearchResult = await db.collection('member_admin').findOne({ tel: req.body.tel })

    if (method == "GET") {
        let member = await db.collection('member_admin').find().toArray()
        return res.status(200).json(member)
    }

    if (method == "POST") {
        let hash = await bcrypt.hash(req.body.pw, 10); //비밀번호 암호화, 두 번째 자리에는 아무 숫자나 입력가능

        let errorMsg = ''
        if (req.body.id == '') {
            errorMsg = '아이디가 누락되었습니다.'
        }
        else if (req.body.pw == '') {
            errorMsg = '비밀번호가 누락되었습니다.'
        }
        else if (req.body.tel == '') {
            errorMsg = '전화번호가 누락되었습니다.'
        }
        else if (req.body.type == 'ADMIN' && req.body.shopTel == '') {
            errorMsg = '매장 전화번호가 누락되었습니다.'
        }
        else if (req.body.name == '') {
            errorMsg = '이름이 누락되었습니다.'
        }
        else if (idSearchResult) {
            errorMsg = '이미 그 아이디로 회원가입이 되어 있습니다.'
        }
        else if (telSearchResult) {
            errorMsg = '이미 그 전화번호로 회원가입이 되어 있습니다.'
        }
        if (errorMsg != '') {
            return res.status(200).redirect(302, `/register/error?message=${encodeURIComponent(errorMsg)}`)
        }

        req.body.pw = hash //요청.body의 pw를 암호화된 비밀번호로 변경

        let newMember = { ...req.body }
        if (req.body.type == 'ADMIN') {
            await db.collection('member_admin').insertOne(newMember)
        }
        else {
            await db.collection('member_client').insertOne(newMember)
        }

        return res.status(200).redirect(302, '/')
    }

    if (method == 'PUT') {
        let dbCollection = ''
        if (req.body.session_type == "ADMIN") {
            dbCollection = 'member_admin'
        }
        else {
            dbCollection = 'member_client'
        }

        let member = await db.collection(dbCollection).findOne({ id: req.body.session_id }) //바꾸기 이전 id(세션에 저장된 id)를 바탕으로 DB에서 기존 멤버를 탐색
        let newMember = { ...member } //기존 멤버를 찾아서 복사
        if (req.body.pw !== '') { //비밀번호 필드에 새로운 비밀번호를 입력했다면
            let newHash = await bcrypt.hash(req.body.pw, 10); //비밀번호 암호화, 두 번째 자리에는 아무 숫자나 입력가능
            newMember.pw = newHash //새로운 비밀번호 지정
        }

        let errorMsg = ''
        if (req.body.id == '') {
            errorMsg = '아이디가 누락되었습니다.'
        }
        else if (req.body.tel == '') {
            errorMsg = '전화번호가 누락되었습니다.'
        }
        else if (req.body.name == '') {
            errorMsg = '이름이 누락되었습니다.'
        }
        else if (idSearchResult && member.id !== newMember.id) {
            errorMsg = '이미 그 아이디로 회원가입이 되어 있습니다.'
        }
        else if (telSearchResult && member.tel !== newMember.tel) {
            errorMsg = '이미 그 전화번호로 회원가입이 되어 있습니다.'
        }
        if (errorMsg != '') {
            return res.status(200).redirect(302, `/register/error?message=${encodeURIComponent(errorMsg)}`)
        }

        newMember.id = req.body.id;
        newMember.tel = req.body.tel;
        newMember.name = req.body.name;

        const updatedFields = getUpdatedFields(member, newMember)

        if (Object.keys(updatedFields).length === 0) {
            //변경된 사항이 없다면 그대로 반환
            return res.status(200).redirect(302, '/')
        }

        // DB 업데이트
        await db.collection(dbCollection).updateOne(
            { id: member.id },  // 기존 멤버를 ID로 조회
            { $set: updatedFields }  // 변경된 필드만 업데이트
        );

        return res.status(200).redirect(302, '/mypage/logout')
    }

    if (method == 'DELETE') {
        console.log("회원 탈퇴 기능 실행")
        console.log(req.body)
        let dbCollection = ''
        if (req.body.session_type == "ADMIN") {
            dbCollection = 'member_admin'
        }
        else {
            dbCollection = 'member_client'
        }
        await db.collection(dbCollection).deleteOne({ id: req.body.session_id }) //세션 id를 바탕으로 삭제할 데이터를 찾아 제거
        
        return res.status(200).redirect(302, '/mypage/logout')
    }
}

function getUpdatedFields(original, updated) {
    let changes = {}

    Object.keys(updated).forEach((key) => { //업데이트된 객체의 각 키들에 대해서
        if (original[key] !== updated[key]) { //이전 객체의 키에 대한 값과 이후 객체의 키에 대한 값이 다르면
            changes[key] = updated[key] //업데이트된 필드를 변경 사항에 추가한다.
        }
    })

    return changes //업데이트된 필드만을 담은 변경 사항을 반환한다.
}