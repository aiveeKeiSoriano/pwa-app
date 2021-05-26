

export default function Card(props) {
    let [name, country, temp, icon, aqi] = props.info

    let getAQI = () => {
        if (aqi < 50) return ' 😁'
        else if (aqi < 100) return ' 😊'
        else if (aqi < 150) return ' 😐'
        else if (aqi < 200) return ' 😷'
        else if (aqi < 300) return ' 🤢'
        else return ' 💀'
    }

    return (
        <div className="card">
            <h3>{name + ', ' + country}</h3>
            <div className="temp">
                <div className="p">Temperature: {temp} &#730; C</div>
                <img src={icon} alt="icon" />
            </div>
            <div className="aqi">Air Quality Index: {aqi.toFixed(2) + getAQI()}</div>
        </div>
    )
}