import React from "react";
function CityList(props) {
    return (
        <>
            <ul>
                {props.filteredCities.map((city, index) => (
                    <li key={index}>
                        {city}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default CityList;