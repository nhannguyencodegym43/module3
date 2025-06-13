export async function getStaticProps () {
    const res = await fetch('https://api.covid19api.com/total/country/vietnam');
    const dataCovid = await res.json();
    return {
        props: {
            dataCovid,
        },
    };
}
export default function COVID ({dataCovid}) {
    return (
        <>
            <h1>Vietnam's COVID-19 Information</h1>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {dataCovid.map(data => {
                    return (
                        <tr key={data.Date}>
                            <td>{data.Date}</td>
                            <td>{data.Confirmed}</td>
                            <td>{data.Active}</td>
                            <td>{data.Recovered}</td>
                            <td>{data.Deaths}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}