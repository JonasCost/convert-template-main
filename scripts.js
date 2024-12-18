//cotação de moedas do dia
const USD = 6.09
const EUR = 6.42
const GBP = 7.75

//obtendo os elementos do forms

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")
// manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () =>{

    const hasCharactersRegex = /\D+/g
 
// pegando o input e tirando as letras repondo elas por nada
    amount.value = amount.value.replace(hasCharactersRegex, "")
    
})

//capturando o evento de submit do formulario

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD" :
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR" :
            convertCurrency(amount.value, EUR, "€")   
            break
        case "GBP" :
            convertCurrency(amount.value, GBP, "£")       
    }
    
}

//Função para converter a moeda.

function convertCurrency(amount, price, symbol){

    try {
        // atualizando o conteudo da cotação da mooeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //calcula o total
        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")

        //exibir o resultado total
        result.textContent = `${total} Reais` 

        // aplica a classe que exibe o footer com resultados
        footer.classList.add("show-result")


    } catch (error){
        
        // remove a classe que exibe o footer ocultando ele
        
        footer.classList.remove("show-result")
        console.log("error")
        alert("Não foi possivel converter. Tente novamente")
    }
    

}

// formata a moeda em real do brasil
function formatCurrencyBRL(value){

    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

}






