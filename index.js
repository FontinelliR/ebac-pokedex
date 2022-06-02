/**console.log('Construindo uma pokedex')
const div = document.createElement('div')
div.innerHTML = 'Criando uma pokedex'
console.log(div)
 */
const page = document.querySelector('#pokedex-page')
//page.appendChild(div)

//comunicação assincrona
fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response => {
        return response.json()
    })
    .then(async data => {
        const box = document.querySelector('#pokemon-box')
        page.innerHTML = ''

        for(let i = 0; i < data.results.length; i++){
            box.querySelector('#pokemon-name').innerHTML = data.results[i].name
            box.querySelector('#pokemon-name').style.
            textTransform = "captalize"
            const pokemonImage = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + data.results[i].name)
            const image = await pokemonImage.json()
           
            box.querySelector('#pokemon-img').src = image.sprites.front_default
            page.innerHTML += box.outerHTML
            //console.log(data.results[i].name) 
          //https://pokeapi.co/api/v2/pokemon-form/{id or name}/
        }
    })