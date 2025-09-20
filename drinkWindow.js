const modal = document.getElementById("drinkWindow");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalAlcoholPercent = document.getElementById("alcoholPercentText");
const modalImg = document.getElementById("modalImg");
const closeDrinkBtn = document.getElementById("closeModal");
console.log("loaded");
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () =>{
        console.log("clicked");
        modalTitle.textContent = card.dataset.title;
        modalText.textContent = card.dataset.text;
        modalImg.src = card.dataset.img;
        modalAlcoholPercent.textContent = card.dataset.alcoholPercent;
        console.log(card.dataset.alcoholPercent);
        modal.showModal();
    });
});

closeDrinkBtn.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", e => {
    if (e.target === modal) modal.close();
});