function preencheProdutosDoBanco() {
  fetch("http://localhost:8080/produto")
    .then((response) => response.json())
    .then((data) => formataComoTabela(data))
    .catch((error) => console.error("Erro ao carregar produtos:", error));
}

function formataComoTabela(data) {
  let tabelaProdutos = document.getElementById("tabela-produtos");
  tabelaProdutos.innerHTML = "";  
  data.forEach((produto) => {
    let paraInserir = `
      <tr>
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.descricao}</td>
        <td>${produto.quantidade}</td>
        <td>
          <button onclick="editarProduto(${produto.id})">Editar</button>
          <button onclick="deletarProduto(${produto.id})">Deletar</button>
        </td>
      </tr>
    `;
    tabelaProdutos.innerHTML += paraInserir;  
  });
}

 
function insereProduto() {
  const id = document.getElementById("id").value;
  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const quantidade = document.getElementById("quantidade").value;

   
  if (!id || !nome || !descricao || !quantidade) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const produto = {
    id: id,
    nome: nome,
    descricao: descricao,
    quantidade: quantidade,
  };

  fetch("http://localhost:8080/produto", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",  
    },
    body: JSON.stringify(produto),  
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Produto inserido com sucesso!");
      preencheProdutosDoBanco();  
    })
    .catch((error) => {
      console.error("Erro ao inserir produto:", error);
    });
}


function editarProduto(id) {
  alert(`Função de edição do produto com id: ${id} será implementada.`);
}

 
function deletarProduto(id) {
  if (confirm("Tem certeza que deseja deletar este produto?")) {
    fetch(`http://localhost:8080/produto/${id}`, {
      method: "DELETE",  
    })
      .then((response) => response.json())
      .then(() => {
        alert("Produto deletado com sucesso!");
        preencheProdutosDoBanco();  
      })
      .catch((error) => {
        console.error("Erro ao deletar produto:", error);
      });
  }
}