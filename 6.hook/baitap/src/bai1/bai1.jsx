import React from "react";
function Bai1() {
    const [selectedCar, setSelectedCar] = React.useState({
        carName: "",
        carColor: "",
    });
    function handleChange(e) {
        const {name, value} = e.target;
        setSelectedCar(prev => ({...prev, [name]: value}));
    }
    return (
        <>
            <h1>Select your car</h1>
            <label htmlFor="carName">Select your car:
                <select name="carName" id="carName" onChange={(e) => handleChange(e)}>
                    <option value={null}>Chọn loại xe</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Porches">Porches</option>
                    <option value="Lamborghini">Lamborghini</option>
                </select>
            </label>
            <label htmlFor="carColor">Select the color:
                <select name="carColor" id="carColor" onChange={(e) => handleChange(e)}>
                    <option value={null}>Chọn màu xe</option>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                </select>
            </label>
            <h2>You selected {selectedCar.carName} - {selectedCar.carColor}</h2>
        </>
    )
}
export default Bai1;