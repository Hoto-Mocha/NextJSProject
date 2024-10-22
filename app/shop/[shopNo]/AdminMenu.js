export default function AdminMenu({ selectedSeat, shopNo, userId }) {
    return (
        <div>
            {(selectedSeat.state == "OCCUPIED" || selectedSeat.state == "BOOKED") && <form action="/api/seat" method="POST">
                <input type='hidden' defaultValue="PUT" name="_method" />
                <input type='hidden' defaultValue={shopNo} name="shopNo" />
                <input type='hidden' defaultValue={selectedSeat.no} name="seatNo" />
                <input type='hidden' defaultValue="VACANT" name="state" />
                <input type="hidden" defaultValue="" name="bookId" />
                <button type="submit" className="generalBtn" style={{marginBottom:'5px'}}>비어 있는 상태로 변경</button>
            </form>}

            {(selectedSeat.state == "VACANT" || selectedSeat.state == "BOOKED") && <form action="/api/seat" method="POST">
                <input type='hidden' defaultValue="PUT" name="_method" />
                <input type='hidden' defaultValue={shopNo} name="shopNo" />
                <input type='hidden' defaultValue={selectedSeat.no} name="seatNo" />
                <input type='hidden' defaultValue="OCCUPIED" name="state" />
                <input type="hidden" defaultValue="" name="bookId" />
                <button type="submit" className="generalBtn" style={{marginBottom:'5px'}}>점유 상태로 변경</button>
            </form>}

            {(selectedSeat.state == "VACANT" || selectedSeat.state == "OCCUPIED") && <form action="/api/seat" method="POST">
                <input type='hidden' defaultValue="PUT" name="_method" />
                <input type='hidden' defaultValue={shopNo} name="shopNo" />
                <input type='hidden' defaultValue={selectedSeat.no} name="seatNo" />
                <input type='hidden' defaultValue="BOOKED" name="state" />
                <input type="hidden" defaultValue={userId} name="bookId" />
                <button type="submit" className="generalBtn" style={{marginBottom:'5px'}}>예약 상태로 변경</button>
            </form>}
        </div>
    )
}