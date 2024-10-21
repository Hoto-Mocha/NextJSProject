export default function Legends() {
    return (
        <div className="legendBox">
            <div className="legend">
                <div className="legendColorBox" style={{backgroundColor:'blue'}}/>: 예약
            </div>
            <div className="legend">
                <div className="legendColorBox" />: 점유
            </div>
            <div className="legend" style={{marginBottom:0}}>
                <div className="legendColorBox" style={{backgroundColor:'lightgreen'}}/>: 비어있음
            </div>
        </div>
    )
}