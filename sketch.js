let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = parseInt(campoIdade.value());
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "A Origem";
    } else {
      if (idade >= 12) {
        if (gostaDeFantasia || gostaDeAventura) {
          return "Guardiões da Galáxia";
        } else {
          return "À Procura da Felicidade";
        }
      } else {
        if (gostaDeFantasia) {
          return "Harry Potter e a Pedra Filosofal";
        } else {
          return "Pets - A Vida Secreta dos Bichos";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Frozen: Uma Aventura Congelante";
    } else {
      return "Toy Story";
    }
  }
}
