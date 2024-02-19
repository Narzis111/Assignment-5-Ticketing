let totalSet = 40;
let ticket = 0;
let totalTicketPrice = 0;
const arr = [];
const couponInput = getID("coupon_input");
const couponBtn = getID("coupon_btn");

// document.getElementById
function getID(id) {
  return document.getElementById(id);
}

// How many seat available in Bus.
function seatRemaining() {
  const seatsLeft = getID("seats-left");
  totalSet--;
  seatsLeft.innerText = totalSet;
}

// Ticket Unit create Function.
function ticketUnit() {
  const unit = getID("ticket-unit");
  ticket++;
  unit.innerText = ticket;
}

// create Ticket Unit Append Child in Card
function additionFieldInCard(seat) {
  const cardSection = getID("card_section");
  const createDiv = document.createElement("div");
  createDiv.innerHTML = `
  <p class="text-lg">${seat.innerText}</p>
  <p class="text-lg">Economy</p>
  <p class="text-lg">550</p>
  `;
  createDiv.classList.add("my-5", "flex", "justify-between");
  cardSection.appendChild(createDiv);
}

// Total Ticket Price Function
function totalPrice() {
  const totalId = getID("total_price");
  const perTicket = 550;
  totalTicketPrice += perTicket;
  const grandTotal = totalTicketPrice;
  getID("grand_total").innerText = grandTotal;
  totalId.innerText = totalTicketPrice;
}

// no Duplication Function and max Ticket Handling.
function unique(seat) {
  if (arr.includes(seat.innerText)) {
    throw alert("Already Book, Please select another one");
  } else if (arr.length > 3) {
    throw alert("Sorry, you can't select more than 4 tickets");
  } else {
    seat.classList.add("bg-green", "text-white");
  }
  arr.push(seat.innerText);
}

// submit Button Enable Function
function enabledSubmit() {
  const number = getID("input_number");
  number.addEventListener("keyup", function (event) {
    if (!(event.target.value === "") && arr.length > 0) {
      getID("submit").removeAttribute("disabled");
    }
  });

  if (number.value.length > 0 && arr.length > 0) {
    getID("submit").removeAttribute("disabled");
  }
}

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
  const discountParent = getID("discount_parent");
  discountParent.innerHTML = `
  <h6 class="font-semibold text-lg">DiscountPrice</h6>
  <h6 class="font-semibold text-lg">BDT <span>${discount}</span></h6>
  `;
  discountParent.classList.add("flex", "justify-between", "mt-2");
  grandTotal -= discount;
  getID("grand_total").innerText = grandTotal;
  getID("invalid_message").innerText = "";
  getID("input_div").classList.add("hidden");
}