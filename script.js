const FORM = document.getElementById("FORM").addEventListener('submit',function(event)
{
    event.preventDefault();
    const URL = document.getElementById("URL")
    safe(URL);
    fast(URL);
    codigo(URL);

    console.log("URL inserido : ",URL.value);
});

//Verifica a velocidade da URL
function fast(URL){
    const start = performance.now();
    fetch(URL.value)
    .then(response => {
            const end = performance.now();  // Tempo de término
            const duration = end - start;  // Cálculo da duração
            console.log("Tempo de carregamento: ", duration, "ms");
        }
    )
}

//Verifica se o URL possui "https://"
function safe(URL){
    fetch(URL.value)
    .then(response => 
        {
            console.log("Protocolo : ",document.location.protocol)
        }
    )
}

//Verifica o código 
function codigo(URL)
{
    fetch(URL.value).then(Response =>
        {
          console.log("Código = ", Response.status);
        }
    )
}