import axios from "axios";

export async function getStaticProps() {
    const apiKey = '1aebf318fa91fd40e3d18cae5ed39f66';
    const city = 'hanoi'
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=1aebf318fa91fd40e3d18cae5ed39f66`;
    try {
        const response = await axios.get(url);
        const weather = response.data;
        return {
            props: {
                weather,
            },
        };
    } catch (error) {
        console.log(error.message);
        return {
            props: {
                weather: null,
            },
        };
    }
}

export default function Weather({weather}) {
    if (!weather) return <div>Không thể tải dữ liệu thời tiết.</div>;
    return (
        <>
            <h1>Weather Data</h1>
            <h2>Thời tiết hiện tại {weather.name}</h2>
            <p>Nhiệt độ: {weather.main.temp}</p>
            <p>Thời tiết: {weather.weather[0].description}</p>
            <p>Độ ẩm: {weather.main.humidity}</p>
        </>
    )
}