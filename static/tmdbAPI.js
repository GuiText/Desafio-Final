const api_key = 'api_key=7e7841ee36ddb051cb048b821c303b79'
const url_base = 'https://api.themoviedb.org/3'
const api_filmes = url_base + '/discover/movie?sort_by=popularity.desc&' + api_key
const poster = 'https://image.tmdb.org/t/p/w200'

const main = document.getElementById('main')


listaFilmes()    
async function listaFilmes(){
    try{
        const response = await fetch(api_filmes)
        const dados = await response.json()
        console.log(dados.results)
        exibirFilmes(dados.results)
    }catch(error){
        console.log(error)
    }
}

function exibirFilmes(dados){

    main.innerHTML= ''

    dados.forEach(filmes => {
        const { title, poster_path, release_date } = filmes;
        const tabelaFilme = document.createElement('div')
        tabelaFilme.classList.add('filme')
        tabelaFilme.innerHTML = `
        <img src="${poster + poster_path}" alt = "${title}">

        <div class="titulo-filme">
            <h3>${title}</h3>
            <p>${release_date}</p>
        </div>
    `

    main.appendChild(tabelaFilme)
    })
}

function mostrarDetalhes(filme){
    
}