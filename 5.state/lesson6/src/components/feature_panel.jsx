import React from "react";
import "./Switch.css"

function FeaturePanel() {
    const [wifiEnabled, setWifiEnabled] = React.useState(false);
    const [bluetoothEnabled, setBluetoothEnabled] = React.useState(false);
    const [dark_modeEnabled, setDarkModeEnabled] = React.useState(false);

    function wifiToggle() {
        const newWifi = !wifiEnabled;
        setWifiEnabled(newWifi);
        alert(`Wifi ${newWifi ? "ON" : "OFF"}`);
    }

    function bluetoothToggle() {
        const newBluetooth = !bluetoothEnabled;
        setBluetoothEnabled(newBluetooth);
        alert(`Bluetooth ${newBluetooth ? "ON" : "OFF"}`);
    }

    function dark_modeToggle() {
        const newDarkMode = !dark_modeEnabled;
        setDarkModeEnabled(newDarkMode);
        alert(`Dark mode ${newDarkMode ? "ON" : "OFF"}`);
    }
    return (
        <>
            <h1>Feature Panel</h1>
            <div className="feature-panel">
                <div>
                    <h3>Wifi</h3>
                    <label className="switch">
                        <input type="checkbox" checked={wifiEnabled} onChange={wifiToggle}/>
                        <span className="slider"></span>
                    </label>
                </div>
                <div>
                    <h3>Bluetooth</h3>
                    <label className="switch">
                        <input type="checkbox" checked={bluetoothEnabled} onChange={bluetoothToggle}/>
                        <span className="slider"></span>
                    </label>
                </div>
                <div>
                    <h3>Dark mode</h3>
                    <label className="switch">
                        <input type="checkbox" checked={dark_modeEnabled} onChange={dark_modeToggle}/>
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default FeaturePanel;