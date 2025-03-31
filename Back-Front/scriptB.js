function botaozinho() {
    let pBanco = document.querySelector('#produtos-banco');
    fetch('http://localhost:8080/Produto/get')
    .then((response) => response.json())
    .then((data) => pBanco.innerHTML = JSON.stringify(data))
    .catch((error) => console.error('Erro:',error));
}