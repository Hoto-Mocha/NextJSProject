export default function ShopDetail({name, address, tel}) {
    return (
        <div className="legendBox">
            <p>매장 이름: {name}</p>
            <p>매장 주소: {address}</p>
            <p>매장 전화번호: {tel}</p>
        </div>
    )
}