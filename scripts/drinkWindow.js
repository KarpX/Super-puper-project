const modal = new bootstrap.Modal(document.getElementById("drinkWindow"));
const modalTitle = document.getElementById("drinkWindowLabel");
const modalText = document.getElementById("modalText");
const modalAlcoholPercent = document.getElementById("alcoholPercentText");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".carousel-item").forEach((card) => {
  card.addEventListener("click", () => {
    console.log("clicked");
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.text;
    modalImg.src = card.dataset.img;
    modalAlcoholPercent.textContent = card.dataset.alcoholPercent;
    console.log(card.dataset.alcoholPercent);
    modal.show();
  });
});

// closeDrinkBtn.addEventListener("click", () => {
//   document.body.style.overflow = "";
//   modal.close();
// });

// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     document.body.style.overflow = "";
//     modal.close();
//   }
// });
