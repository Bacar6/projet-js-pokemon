const buttonPrecedent = document.getElementById('buttonPrecedent');
const buttonSuivant   = document.getElementById('buttonSuivant');
const image = document.getElementById('image');
const numberPokemon = document.getElementById('numberPokemon');
const namePokemon = document.getElementById('namePokemon');
/*
const url = "https://api.thecatapi.com/v1/images/search?limit=10"

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
*/

const changeImagePokemon = async () => {
  let randomNumber = Math.ceil(Math.random() * 150) + 1;


  let changerPokemonPrecedentOuSuivant = 1;
  
  if (changerPokemonPrecedentOuSuivant < 1) {
    changerPokemonPrecedentOuSuivant = 150;
  } else if (changerPokemonPrecedentOuSuivant > 150) {
    changerPokemonPrecedentOuSuivant = 1;
  }





  const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  let data = await fetch(url);
  console.log(url);

  let response = await data.json();
  console.log(response);

  image.src = response.sprites.front_default;
  numberPokemon.innerHTML = `<h1># ${response.id}</h1>`;
  namePokemon.innerHTML = `<p><strong>${response.name}</strong></p>`;



}

changeImagePokemon()

buttonPrecedent.addEventListener("click", () => changeImagePokemon(-1));

buttonSuivant.addEventListener("click", changeImagePokemon);










