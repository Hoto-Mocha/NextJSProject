import Link from "next/link";
import ShopBox from "./shopBox";

export default function Home() {
  let shop1 = { name: "매장 1", address: "매장 주소1", seat: 21 }
  let shop2 = { name: "매장 2", address: "매장 주소2", seat: 22 }
  let shop3 = { name: "매장 3", address: "매장 주소3", seat: 23 }
  let shop4 = { name: "매장 4", address: "매장 주소4", seat: 24 }
  let shop5 = { name: "매장 5", address: "매장 주소5", seat: 25 }
  let shop6 = { name: "매장 6", address: "매장 주소6", seat: 26 }
  let shop7 = { name: "매장 7", address: "매장 주소7", seat: 27 }
  let shop8 = { name: "매장 8", address: "매장 주소8", seat: 28 }
  let shopArr = [shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8]
  return (
    <div>
      <div className="titleBG">
        <h1 className="title">반갑습니다.</h1>
      </div>
      <div className="divCenter">
        <input className="searchInput" placeholder="검색..."></input>
        <button className="generalBtn" style={{marginLeft:'10px'}}>검색</button>
        <Link className="generalBtn" href='/login' style={{marginLeft:'10px'}}>로그인</Link>
        <button className="generalBtn" style={{marginLeft:'10px'}}>회원가입</button>
      </div>
      <div className="shopBoxContainer">
        {
          shopArr.map((item, index) => {
            return (<ShopBox key={index} item={item}></ShopBox>)
          })
        }
      </div>
    </div>
  );
}
