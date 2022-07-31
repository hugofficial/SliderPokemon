const btnReght = document.getElementById("btn-reght");
const btnLeft = document.getElementById("btn-left");

const card = document.querySelectorAll(".card");

let cardCurrent = 0;

function hideSelectedCard() {
  const cardSelected = document.querySelector(".selected");
  cardSelected.classList.remove("selected");
}

function showCard(indexCard) {
  card[indexCard].classList.add("selected");
}

btnReght.addEventListener("click", function () {
  if (cardCurrent === card.length - 1) return;

  hideSelectedCard();

  cardCurrent++;
  showCard(cardCurrent);
});

btnLeft.addEventListener("click", function () {
  if (cardCurrent === 0) return;

  hideSelectedCard();

  cardCurrent--;
  showCard(cardCurrent);
});
