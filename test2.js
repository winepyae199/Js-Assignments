function celsiusToFahrenheit(celsius) {
    
    const fahrenheit = (celsius * 9/5) + 32;
 
    const roundedFahrenheit = Math.round(fahrenheit * 100) / 100;
  
    return roundedFahrenheit;
  }
  
  const celsius1 = 25;
  const celsius2 = -10;
  
  const fahrenheit1 = celsiusToFahrenheit(celsius1);
  const fahrenheit2 = celsiusToFahrenheit(celsius2);
  
  console.log(`${celsius1}°C = ${fahrenheit1}°F`);
  console.log(`${celsius2}°C = ${fahrenheit2}°F`);
  