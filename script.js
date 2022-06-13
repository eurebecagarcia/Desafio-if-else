let idade = 22;
if( idade > 18){
    console.log( "você é maior de idade")
}else {
    console.log( "você é menor de idade")
} 


let humano = true
if(idade > 18 && humano){
    console.log("você é um humano adulto")
}else{
    console.log("você não é humano e nem adulto")
}

let aniversario = "junho"
if( aniversario == "Janeiro" || aniversario == "Dezembro"){
    console.log('você faz aniversário em janeiro ou dezembro')
    
}else{
    console.log('você não faz aniversário em Dezembro ou Janeiro')
}

let nome= "Rebeca"
if(nome[0] == "R"){
    console.log("Seu nome começa com R")
}else{
    console.log("Seu nome não começa com R")
}

let sobrenome= "Garcia"
if(sobrenome.length > 6 || nome[0] == "E" ){
    console.log("seu sobrenome tem mais de 6 letra ou seu nome começa com a letra E")
}else{
    console.log("Seu sobrenome tem menos 6 letras ou seu nome não começa com E  ")
}    