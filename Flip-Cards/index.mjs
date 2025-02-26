document.querySelector("#app").innerHTML = `
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p>Front</p>
      </div>
      <div class="flip-card-back">
        <p>Back</p>
      </div>
    </div>
  </div>
`;

const flipCard = document.querySelector(".flip-card");
flipCard.addEventListener("click", () => {
  flipCard.classList.toggle("flipped");
});
