function gerarNumero(){

    const inputMin = document.querySelector(".input-min").value
    const inputMax = document.querySelector(".input-max").value

    if(inputMin === "" || inputMax === ""){

        alert("Por favor, preencha os dois campos para sortear um número!!!")
        return;

    }


    const min = Number(inputMin);
    const max = Number(inputMax);
    
    if (min >= max) {
    alert("O valor 'Entre' não pode ser maior ou igual que o valor 'e'.");
    return;
}

    const Min = Math.ceil(inputMin)
    const Max = Math.floor(inputMax)
    const result = Math.floor( Math.random() * (Max - Min + 1)) + Min;

    const sorteado = document.querySelector(".numero-sorteado")

    sorteado.value = result
    sorteado.style.color = "red" 
    sorteado.style.backgroundColor = "white"
    sorteado.style.border = "5px solid red"

}

function resetar(){

    document.querySelector(".input-min").value="";
    document.querySelector(".input-max").value="";

    const sorteado = document.querySelector(".numero-sorteado")
    
    sorteado.value = "";
    sorteado.placeholder = "0";
    sorteado.style.backgroundColor = "";
    sorteado.style.border="";

}