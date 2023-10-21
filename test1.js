
function calculateBMI(weight, height) {
    
    const bmi = weight / (height * height);
  
    const roundedBMI = Math.round(bmi * 10) / 10;
  
    return roundedBMI;
  }
  
  const weight1 = 70; // in kilograms
  const height1 = 1.75; // in meters
  
  const weight2 = 85; // in kilograms
  const height2 = 1.82; // in meters
  
  const bmi1 = calculateBMI(weight1, height1);
  const bmi2 = calculateBMI(weight2, height2);
  
  console.log(
    `For a weight of ${weight1} kg and height of ${height1} m, the BMI is: ${bmi1}`
  );
  console.log(
    `For a weight of ${weight2} kg and height of ${height2} m, the BMI is: ${bmi2}`
  );
  