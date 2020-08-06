function render(data) {
  const pokemon = document.createElement("img");
  pokemon.setAttribute("src", data.sprites.fron_default);
  document.body.append(pokemon);
}

export default render;
