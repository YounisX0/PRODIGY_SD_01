import React, { useState, useEffect} from 'react';

function TempratureConverter() {
  const [temp, setTemp] = useState('');
  const [unit, setUnit] = useState('°C');
  const [results, setResults] = useState({ fahrenheit: "", kelvin: "", celsius: "" });

  useEffect(() => {
   if(temp === '') {
      setResults({ fahrenheit: "", kelvin: "", celsius: "" });
    }
  }, [temp]);

  function handleTempChange(e) {
    setTemp(e.target.value);
  }

  function handleUnitChange(e) {
    setUnit(e.target.value);
  }

  function convertTemperature() {
    const temprature=parseFloat(temp);
    if (isNaN(temprature)) {
      alert("Please enter a valid number.");
      return;
    }
    let celsius, fahrenheit, kelvin;
    if(unit==='°C'){
        celsius=temprature;
        fahrenheit=(temprature*9/5)+32;
        kelvin=temprature+273.15;
    }
    else if(unit==='°F'){
        fahrenheit=temprature;
        celsius=(temprature-32)*5/9;
        kelvin=celsius+273.15;
    }
    else if(unit==='K'){
        kelvin=temprature;
        celsius=temprature-273.15;
        fahrenheit=(celsius*9/5)+32;
    }
    setResults({
      celsius: celsius.toFixed(2),
      fahrenheit: fahrenheit.toFixed(2),
      kelvin: kelvin.toFixed(2),
    });
  }

  return (
    <div className="temp-container">
      <h1>Temperature Converter</h1>
      <div className="input-select-container">
        <input
          type="number"
          value={temp}
          onChange={handleTempChange}
          placeholder="Enter Temperature"
        />
        <select value={unit} onChange={handleUnitChange}>
          <option value="°C">Celsius (°C)</option>
          <option value="°F">Fahrenheit (°F)</option>
          <option value="K">Kelvin (K)</option>
        </select>
        <button onClick={convertTemperature}>Convert</button>
      </div>
      <div>
        <p>Celsius: {results.celsius} °C</p>
        <p>Fahrenheit: {results.fahrenheit} °F</p>
        <p>Kelvin: {results.kelvin} K</p>
      </div>
    </div>
  );
}

export default TempratureConverter;
