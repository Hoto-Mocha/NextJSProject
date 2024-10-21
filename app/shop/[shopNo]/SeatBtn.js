'use client'

export default function SeatBtn({item, setSelectedSeat}) {
    let bgColor = 'lightgreen'
    if (item.state == 'BOOKED') {
        bgColor = 'blue'
    }
    if (item.state == 'OCCUPIED') {
        bgColor = 'red'
    }
    return (
        <div className="seatBtn" style={{backgroundColor:bgColor}} onClick={() => {setSelectedSeat(item)}}>
            <p>{item.no+1}</p>
        </div>
    )
}