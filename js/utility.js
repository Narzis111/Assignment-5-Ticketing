let count = 0;
let totalSeat = 40;
let totalTicketPrice = 0;
const arraySeat = [];
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


function seatInfoAddition(seat) {
  const ticketRow = document.getElementById("ticket-row-container");
  const createRow = document.createElement("tr");
  createRow.innerHTML = `
  <td>${seat.innerText}</td>
  <td>Economy</td>
  <td>550</td>
 <hr>
  `;
  ticketRow.appendChild(createRow);
 
}

function unique(seat) {
  if (arraySeat.includes(seat.innerText)) {
     alert("Already Booked, Please select another one");
     document.getElementsByClassName("seat").setAttribute("disabled"); 
     
  } 
  else if (arraySeat.length > 3) {
     alert("Sorry, you can't select more than 4 tickets");
     document.getElementsByClassName("seat").setAttribute("disabled");
  } 
  else{
      seat.classList.add("bg-g_color");}

  arraySeat.push(seat.innerText);
}

function totalPrice() {
  const eachTicketPrice = 550;
  totalTicketPrice += eachTicketPrice;
  const grandTotal = totalTicketPrice;
  document.getElementById("total-price").innerText = totalTicketPrice;
  document.getElementById("grand-total").innerText = grandTotal;
}




function activeNext() {
  const number = document.getElementById("input-number");
  number.addEventListener("keyup", function (event) {
    if (!(event.target.value === "") && arraySeat.length > 0) {
      document.getElementById("submit").removeAttribute("disabled");
    }
  });

  if (number.value.length > 0 && arraySeat.length > 0) {
    document.getElementById("submit").removeAttribute("disabled");
  }
}
const coupon = document.getElementById("coupon-input");
const couponBtn = document.getElementById("coupon-btn");

function couponCode() {
  if (arraySeat.length === 4) {
    coupon.removeAttribute("disabled");
    couponBtn.removeAttribute("disabled");
  }
}


function couponValue() {
  couponBtn.addEventListener("click", function (){
    if (coupon.value === "NEW15") {
      createDiscount(15);

    } else if (coupon.value === "Couple 20") {
      createDiscount(20);
    } 
  });
}


function createDiscount(per) {
  let grandTotal = totalTicketPrice;
  const discount = Math.round((totalTicketPrice * per) / 100);
  grandTotal -= discount;
  document.getElementById("grand-total").innerText = grandTotal;
  document.getElementById("input-div").classList.add("hidden");
}
