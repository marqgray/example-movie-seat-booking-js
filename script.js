const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = String(selectedSeatsCount);
  total.innerText = "$" + String(selectedSeatsCount * ticketPrice);
};

movieSelect.addEventListener("change", (e) => {
  ticketPrice = e.target.value;
  updateSelectedCount();
});

container.addEventListener("click", (e) => {
  const element = e.target;
  if (
    element.classList.contains("seat") &&
    !element.classList.contains("occupied")
  ) {
    element.classList.toggle("selected");
    updateSelectedCount();
  }
});

updateSelectedCount();
