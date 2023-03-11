document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    { name: "tiburon", img: "imagenes/tiburon1[1].jpg" },
    {
      name: "tiburon",
      img: "imagenes/tiburon2[1].jpg"
    },
    {
      name: "tiburon",
      img: "imagenes/tiburon3[1].jpg"
    },
    {
      name: "tiburon",
      img: "imagenes/tiburon4[1].jpg"
    },
    {
      name: "tiburon",
      img: "imagenes/tiburon5[1].jpg"
    },
    {
      name: "tiburon",
      img: "imagenes/tiburon6[1].jpg"
    },
    {
      name: "tiburon",
      img: "imagenes/tiburon1[1].jpg"
    },
    {
      name: "tiburon",
      img: "imagenes/tiburon2[1].jpg"
    },
    {
      name: "tiburon",
      img: "imagenes/tiburon3[1].jpg"
    },
    {
      name: "tiburon",
      img: "imagenes/tiburon4[1].jpg"
    },
    {
      name: "tiburon",
      img: "imagenes/tiburon5[1].jpg"
    },
    {
      name: "tiburon",
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
      carta.addEventListener("click", voltearcarta);
      cuadricula.appendChild(carta);
    }
  }

  function voltearcarta() {
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
