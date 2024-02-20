 const seats = document.querySelectorAll(".seat");
  for (const seat of seats) {
    seat.addEventListener("click", function (event) {
      unique(seat);
      ticketCount();
      seatRemaining();
      seatInfoAddition(seat);
      totalPrice();
      couponCode();
      couponValue();
      activeNext();
    });
  }

  