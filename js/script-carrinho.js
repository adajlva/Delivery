let modal = document.querySelectorAll(".produtos");
let excluir = document.querySelectorAll(".bi-trash");

for (let i = 0; i < excluir.length; i++) {
  excluir[i].addEventListener("click", function (event) {
    if (!event.target.classList.contains(".bi-trash")) {
      modal[i].remove();
    }
  });
}


// Obtenha todos os elementos relevantes
let icones = document.querySelectorAll(".icones");
let textoProdutos = document.querySelectorAll(".numero-produto");

// Adicionando os ouvintes de evento para cada conjunto de ícones
icones.forEach(function(icone, index) {
  let decrementar = icone.querySelector(".bi-dash-square");
  let incrementar = icone.querySelector(".bi-plus-square");
  let textoProduto = textoProdutos[index];
  let quantidadeProduto = parseInt(textoProduto.textContent);

  incrementar.addEventListener("click", function() {
    quantidadeProduto++;
    textoProduto.innerHTML = quantidadeProduto;
  });

  decrementar.addEventListener("click", function() {
    if (quantidadeProduto <= 1) {
      alert("A quantidade de produtos não pode ser menor que 1.");
    } else {
      quantidadeProduto--;
      textoProduto.innerHTML = quantidadeProduto;
    }
  });
});
