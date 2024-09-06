function pesquisar(){
    let section = document.getElementById('resultados-pesquisa')

    let campoPesquisa = document.getElementById('campo-pesquisa').value

    if (!campoPesquisa){
        alert('Sua pesquisa está vazia!')
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = '';
    let titulo = '';
    let genero = '';
    let tags = '';


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        genero = dado.genero.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta">Gênero ${dado.genero}</p>
                    <p class="descricao-meta">Temporadas ${dado.temporadas} temporadas</p>
                    <p class="descricao-meta">Em andamento ${dado.emAndamento}</p>
                    <p class="descricao-meta">Onde posso encontrar ${dado.streaming}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
           `
        } 
    }

    if (!resultados){
        alert('Nada foi encontrado.')
    }

    section.innerHTML = resultados
}

