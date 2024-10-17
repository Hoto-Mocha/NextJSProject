export default function ShopBox({ item }) {
    return (
        <div className="shopBox">
            <div className="shopImg">
                <p>매장 이미지</p>
            </div>
            <div className="shopTextBlock">
                <p>{item.name}</p>
                <p>{item.address}</p>
                <p>{item.seat}</p>
            </div>
        </div>
    )
}