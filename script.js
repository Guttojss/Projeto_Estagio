
const FORM = document.getElementById("FORM").addEventListener('submit',function(event)
{
    event.preventDefault();
    const URL = document.getElementById("URL")
    safe(URL);
    fast(URL);
    codigo(URL);

    console.log("URL inserido");
});

//Verifica a velocidade da URL
// NAO FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
function fast(URL){
    const start = performance.now();
    fetch(URL.value)
    .then(response => {
            const end = performance.now();  // Tempo de término
            const duration = end - start;  // Cálculo da duração
            console.log("Tempo de carregamento: ", duration, "ms");
        })}

//Verifica se o URL possui "https://"
function safe(URL){
    if(URL.value.includes("https://"))
        {
            console.log("é safe kk")
        }
}

//Verifica o código
//FUNCIONAAAAAA     
function codigo(URL)
{
    fetch(URL.value).then(Response =>
    {
    console.log("Código = ", Response.status);
    }
    )}