import React from "react";
import SearchInput from "./search_input.jsx";
import CityList from "./city_list.jsx";
function City() {
    const [cities, setCities] = React.useState(["Ha Noi", "TP HCM", "Da Nang"]);
    const [filteredCities, setFilteredCities] = React.useState(cities);
    function handleSearch(keyword) {
        setFilteredCities(cities.filter((product) => product.toLowerCase().includes(keyword.toLowerCase())));
    }
    return (
        <>
            <h1>Search the city</h1>
            <SearchInput handleSearch={handleSearch} />
            <CityList filteredCities={filteredCities} />
        </>
    )
}
export default City;