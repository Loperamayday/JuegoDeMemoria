document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    { name: "tiburon1", img: "imagenes/tiburon1[1].jpg" },
    {
      name: "tiburon2",
      img: "imagenes/tiburon2[1].jpg"
    },
    {
      name: "tiburon3",
      img: "imagenes/tiburon3[1].jpg"
    },
    {
      name: "tiburon4",
      img: "imagenes/tiburon4[1].jpg"
    },
    {
      name: "tiburon5",
      img: "imagenes/tiburon5[1].jpg"
    },
    {
      name: "tiburon6",
      img: "imagenes/tiburon6[1].jpg"
    },
    {
      name: "tiburon1",
      img: "imagenes/tiburon1[1].jpg"
    },
    {
      name: "tiburon2",
      img: "imagenes/tiburon2[1].jpg"
    },
    {
      name: "tiburon3",
      img: "imagenes/tiburon3[1].jpg"
    },
    {
      name: "tiburon4",
      img: "imagenes/tiburon4[1].jpg"
    },
    {
      name: "tiburon5",
      img: "imagenes/tiburon5[1].jpg"
    },
    {
      name: "tiburon6",
      img: "imagenes/tiburon6[1].jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  function verificarpareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/blank.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;
    if (cartasGanadas.length === cardsAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);

    if (cartasEscogidas.length === 2) {
      setTimeout(verificarpareja, 1000);
    }
  }
  crearTablero();
});
