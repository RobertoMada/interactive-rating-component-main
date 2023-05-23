const ratingContainer = document.querySelector(".rating-container");
const tankyouContainer = document.querySelector(".tankyou-container");
const submitButton = document.querySelector(".button-submit");
const rating = document.querySelector(".js-rating-select");
const ratingButton = document.querySelectorAll(".rating-btn");

submitButton.addEventListener("click" , () => {
  if(rating.innerText !== ""){
    tankyouContainer.classList.remove("hidden");
    ratingContainer.classList.add("hidden");
  }
});

ratingButton.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerText = rate.innerText;
  })
})