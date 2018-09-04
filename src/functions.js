export function calculateBMI(height, weight, heightUnit, weightUnit) {
  let h;
  let w;
  if (heightUnit === "in") {
    h = height * 0.0254;
  } else {
    h = height;
  }
  if (weightUnit === "lb") {
    w = weight * 0.453592;
  } else {
    w = weight;
  }
  const BMI = w / (h * h);

  return BMI.toFixed(1);
}

export function translateBMItoText(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  }
  if (bmi >= 18.5 && bmi <= 25) {
    return "Normal";
  }
  if (bmi > 25 && bmi < 30) {
    return "OverWeight";
  }
  if (bmi >= 30) {
    return "Obese";
  }
}
