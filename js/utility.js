let count = 0;
let totalSeat = 40;
function seatRemaining() {
  const seatRemaining = document.getElementById("seat-left");
  totalSeat -= 1;
  seatRemaining.innerText = totalSeat;
}


function ticketCount() {
  const ticketCount = document.getElementById("ticket-count");
  count += 1;
  ticketCount.innerText = count;
}
const arr = [];
function unique(seat) {
  if (arr.includes(seat.innerText)) {
     alert("Already Book, Please select another one");
  } else if (arr.length > 3) {
     alert("Sorry, you can't select more than 4 tickets");
  } 
  
  arr.push(seat.innerText);
}


let totalTicketPrice = 0;
function totalPrice() {
  const eachTicketPrice = 550;
  totalTicketPrice += eachTicketPrice;
  const grandTotal = totalTicketPrice;
  document.getElementById("grand-total").innerText = grandTotal;
  document.getElementById("total-price").innerText = totalTicketPrice;
}



// submit Button Enable Function
function activeNext() {
  const number = document.getElementById("input-number");
  number.addEventListener("keyup", function (event) {
    if (!(event.target.value === "") && arr.length > 0) {
      document.getElementById("submit").removeAttribute("disabled");
    }
  });

  if (number.value.length > 0 && arr.length > 0) {
    document.getElementById("submit").removeAttribute("disabled");
  }
}
const couponInput = document.getElementById("coupon-input");
const couponBtn = document.getElementById("coupon-btn");

function couponCode() {
  if (arr.length === 4) {
    couponInput.removeAttribute("disabled");
    couponBtn.removeAttribute("disabled");
  }
}


function couponCondition() {
  couponBtn.addEventListener("click", function () {
    if (couponInput.value === "NEW15") {
      createDiscount(15);

    } else if (couponInput.value === "Couple 20") {
      createDiscount(20);
    } 
  });
}


function createDiscount(per) {
  let grandTotal = totalTicketPrice;
  const discount = Math.round((totalTicketPrice * per) / 100);
  grandTotal -= discount;
  document.getElementById("grand-total").innerText = grandTotal;
  document.getElementById("invalid-message").innerText = "";
  document.getElementById("input-div").classList.add("hidden");
}
