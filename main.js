const circles = document.getElementsByClassName("rating_number");
const card_button = document.querySelector(".card_button");
const card_back_rating_text = document.querySelector(".card_back_rating");
const card_back_reset = document.querySelector(".card_back_reset");

const card_front = document.querySelector(".card");
const card_back = document.querySelector(".card_back");

let rating_selected = 0;

for (const circle of circles) {
  circle.addEventListener("click", () => {
    const active = document.querySelector(".card_color_toggle");
    if (active) {
      active.classList.remove("card_color_toggle");
    }
    circle.classList.add("card_color_toggle");

    rating_selected = parseInt(circle.textContent);
  });
}

card_button.addEventListener("click", () => {
  card_front.style.display = "none";
  card_back.style.display = "flex";
  card_back_rating_text.textContent = `You selected ${rating_selected} out of 5`;
});

card_back_reset.addEventListener("click", () => {
  window.location.reload();
});
