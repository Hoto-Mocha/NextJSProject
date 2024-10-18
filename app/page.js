import Link from "next/link";
import ShopBox from "./shopBox";
import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("project")
  let shop = await db.collection('shop').find().toArray()
  console.log(shop)
  return (
    <div>
      <div className="titleBG">
        <h1 className="title">반갑습니다.</h1>
      </div>
      <div className="divCenter">
        <input className="searchInput" placeholder="검색..."></input>
        <button className="generalBtn" style={{marginLeft:'10px'}}>검색</button>
        <Link className="generalBtn" href='/login' style={{marginLeft:'10px'}}>로그인</Link>
        <Link className="generalBtn" href='/register' style={{marginLeft:'10px'}}>회원 가입</Link>
      </div>
      <div className="shopBoxContainer">
        {
          shop.map((item, index) => {
            return (<ShopBox key={index} item={item}></ShopBox>)
          })
        }
      </div>
    </div>
  );
}
