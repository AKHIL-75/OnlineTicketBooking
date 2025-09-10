let selectedSeats = [];
let selectedMovie = "";

// Navigate to seat selection
function goToSeats(movie) {
  selectedMovie = movie;
  document.getElementById("selectedMovie").innerText = movie;
  document.getElementById("movies").classList.add("hidden");
  document.getElementById("seats").classList.remove("hidden");

  // Generate seat layout
  const seatGrid = document.getElementById("seatGrid");
  seatGrid.innerHTML = "";
  for (let i = 1; i <= 40; i++) {
    let seat = document.createElement("div");
    seat.classList.add("seat");
    seat.innerText = i;
    seat.addEventListener("click", () => selectSeat(seat, i));
    seatGrid.appendChild(seat);
  }
}

// Select seats
function selectSeat(seat, number) {
  if (seat.classList.contains("booked")) return;

  if (seat.classList.contains("selected")) {
    seat.classList.remove("selected");
    selectedSeats = selectedSeats.filter(s => s !== number);
  } else {
    seat.classList.add("selected");
    selectedSeats.push(number);
  }

  document.getElementById("seatNumbers").innerText = selectedSeats.join(", ") || "None";
  document.getElementById("totalPrice").innerText = selectedSeats.length * 150;
}

// Proceed to payment
function proceedToPayment() {
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat!");
    return;
  }
  document.getElementById("seats").classList.add("hidden");
  document.getElementById("payment").classList.remove("hidden");
}

// Payment form
document.getElementById("paymentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("payment").classList.add("hidden");
  document.getElementById("ticket").classList.remove("hidden");

  document.getElementById("ticketMovie").innerText = selectedMovie;
  document.getElementById("ticketSeats").innerText = selectedSeats.join(", ");
  document.getElementById("ticketID").innerText = "BK" + Math.floor(Math.random() * 100000);
});
