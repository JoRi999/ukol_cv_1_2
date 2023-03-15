/*


// Úkol č. 1//


let salary = (wage, hours, days) => {
    wage = Number(prompt("Zadejte svou hrubou mzdu v korunách za hodinu."))
    hours = Number(prompt("Zadejte počet hodin, které denně odpracujete."))
    days = Number(prompt("Zadejte počet dní v měsíci, které odpracujete."))

   salary = Math.round(wage * hours * days)

    document.body.innerHTML = "Vaše hrubá měsíční mzda činí " + salary + " Kč.</br>"
    return salary

}

let grossSalary = salary()


function taxed() {
    let tax_percentage = Number(prompt("Zadejte procento zdanění."))
    let netSalary = Math.round(((100 - tax_percentage) * grossSalary) / 100 )
    document.body.innerHTML += "Vaše čistá měsíční mzda činí " + netSalary + " Kč."
    
}

taxed()



// Úkol č. 2 //



function calculate (number_1, operation, number_2) {    

    if(operation === "+") {
          document.body.innerHTML= number_1 + number_2

    } else if  (operation === "-"){
        document.body.innerHTML= number_1 - number_2
    }
      
    else if (operation === "*") {
        document.body.innerHTML= number_1 * number_2

    } else {
        document.body.innerHTML= number_1 / number_2
    }
}

console.log(calculate () )



// Úkol č. 3 // 

Viz samostatný soubor - ceník

*/