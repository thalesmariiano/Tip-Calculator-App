
const tipShowAmount = document.querySelector("#tip-amount")
const totalPerPerson = document.querySelector("#total")
const resetBtn = document.getElementById("reset-btn")

var bill_input = document.getElementById("bill-input")
var peoples_input = document.getElementById("peoples-input")
var customPercent = document.getElementById("custom-btn")

function percent_calculator(bill, percent, peopleA){
	let tip_amount = (bill / 100) * percent 
	let total_bill = bill + tip_amount
	let total_per_person = total_bill / peopleA

	tipShowAmount.innerHTML = `$${tip_amount.toLocaleString("en")}`
	totalPerPerson.innerHTML = `$${total_per_person.toLocaleString("en")}`

	resetBtn.style.opacity = "1";
	resetBtn.style.cursor = "pointer"
	resetBtn.addEventListener("click", reset_calculator)
}

function reset_calculator(){
	resetBtn.removeEventListener("click", reset_calculator)	

	percent_calculator(0,0,1)
	bill_input.value = ""
	peoples_input.value = ""
	customPercent.value = ""
	resetBtn.style.opacity = ".5";
	resetBtn.style.cursor = "default"
}

document.querySelectorAll(".percent-btn").forEach(btn => {
	btn.addEventListener("click", e => {
		let billAmount = Number(bill_input.value)
		let peoplesAmount = Number(peoples_input.value)

		if(e.target.nodeName == "BUTTON"){
			let percent = Number(e.target.getAttribute("data-percent"))

			if(peoplesAmount == 0){
				document.getElementById("peoples-number-container").style.border = "2px solid red"
				document.getElementById("number-error").style.opacity = "1"
			}else{
				percent_calculator(billAmount, percent, peoplesAmount)

				document.getElementById("peoples-number-container").style.border = "none"
				document.getElementById("number-error").style.opacity = "0"
			}
		}
	})
})

customPercent.addEventListener("input", () => {
	let billAmount = Number(bill_input.value)
	let peoplesAmount = Number(peoples_input.value)
	let percent = Number(customPercent.value)

	if(peoplesAmount == 0){	
		document.getElementById("peoples-number-container").style.border = "2px solid red"
		document.getElementById("number-error").style.opacity = "1"
	}else{
		percent_calculator(billAmount, percent, peoplesAmount)

		document.getElementById("peoples-number-container").style.border = "none"
		document.getElementById("number-error").style.opacity = "0"	
	} 
})