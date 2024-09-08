function pesquisar() {

  
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
  
    let campoPesquisa = document.getElementById("searchInput").value.trim();
    

    
    campoPesquisa = campoPesquisa.toLowerCase();

    let titulo = "";
    
    let descricao = "";

    // Itera sobre cada dado na array de dados

    if (campoPesquisa == "") {
        section.innerHTML = ` <p class="msgErroNdigitado"> Por favor Digite algo para Pesquisar! </p> `
        section.style.display = 'block'
      // nenhuma informação encontrada.
        return 
    }

    else {
      for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        // se o titulo includes campoPesquisa
        if ((dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) || dado.tags.includes(campoPesquisa)) 
          // Constrói o HTML para cada item do resultado
          resultados += `
            <div class="item-resultado">
              <h2>
                  <a href="">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <img class="item_imagem" src=${dado.img} alt=${dado.alt_img}>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;
        };
      }
      if (!resultados) {
        resultados = `<p class = "Nexiste"> Ainda não existe tutorial dessa farm... </p>`
      }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
    section.style.display = 'block'
}

// Seleciona o campo de pesquisa pelo ID
const campoPesquisa = document.getElementById("searchInput");

// Adiciona um event listener para o evento 'keypress'
campoPesquisa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        pesquisar();
    }
});