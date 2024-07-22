const button = document.getElementById("submitButton").addEventListener("click",function(event)
{
    event.preventDefault(); //retira o reload automatico
    const URL = document.getElementById("URL")
    safe(URL);
    fast(URL);
    codigo(URL); 

    console.log("URL inserido : ",URL.value);
}
)

//Verifica a velocidade da URL
//Dá erro em qualquer URL externo 
function fast(URL){
    const start = performance.now();
    fetch(URL.value)
    .then(response => 
        {
            const end = performance.now();
            const duration = end - start;  
            console.log("Tempo de carregamento: ", duration, "ms");
        }
    )
}

//Verifica se o URL possui "https://"
//Funciona
function safe(URL){
    fetch(URL.value)
    .then(response => 
        {
            console.log("Protocolo : ", document.location.protocol)
        }
    )
}

//Verifica o código
//Dá erro em qualquer URL externo 
function codigo(URL)
{
    fetch(URL.value).then(Response =>
        {
        console.log("Código = ", Response.status);
        }
    )
}