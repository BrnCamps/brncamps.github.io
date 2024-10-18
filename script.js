// Currency cotation
const USD = 5.70
const EUR = 6.19
const GBP = 7.43

// Obtained the elements of form 
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulating the input amount to receive only numbers.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g   
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturing it the submit event in form
form.onsubmit = (event) => {
  event.preventDefault()
  
  switch (currency.value){
    case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
    case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break
    case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break
  }
}

// Currency conversion function
function convertCurrency(amount, price, symbol){
  try {
    // Exibiting 
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    
    // Total account
    let total = amount * price

    // Formatation function
    total = formatCurrencyBRL(total).replace("R$", "")
    
    // Exibit the total is "Reais"
    result.textContent = `${total} Reais`

    // Applies a class to footer.
    footer.classList.add("show-result")
  } catch (error) {
    // Remove the footer class.
    footer.classList.remove("show-result")
    alert("Não foi possível converter, tente mais tarde.")
  }
}

// Format currency in BRL
function formatCurrencyBRL(value) {
    // convert to number to use on toLocaleString in a BRL format (R$00,00).
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}



