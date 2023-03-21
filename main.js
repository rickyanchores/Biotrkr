
//BUTTON
let btn = document.querySelector(".calculate")
// RESULTS BMR
let result = document.querySelector(".resultBMR")
let bmrNormal = document.querySelector(".bmr-normal")
let bmrLow = document.querySelector(".bmr-low")
// RESULT BMI
let bmiResult = document.querySelector(".bmi-result")


// FUNCTION CALCULATE BMR
const calculateBMR = (weight,height,age) => {

  this.weight =	weight;
	this.height = height;
	this.age = age;

  let bmr = weight * 10 + height * 6.25 - age * 4.92 - 5
  console.log(bmr)
  
  bmrNormal.innerHTML = bmr
  bmrLow.innerHTML = bmr * 1.2
}
// FUNCTION CALCULATE BMI 
const calculateBMI = (weight,height) => {
	let bmi = (weight / height / height) * 10000
  console.log(bmi)
  bmiResult.innerHTML = bmi
}



//BTN fire function
btn.addEventListener("click", () => {
	console.log("FIRE")
  
  // VARIABLES
  let weight = document.querySelector(".weight").value
  let height = document.querySelector(".height").value
  let age = document.querySelector(".age").value
  
  calculateBMR(parseInt(weight),parseInt(height),parseInt(age))
  calculateBMI(parseInt(weight),parseInt(height))
})



