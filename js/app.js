const seats = document.querySelectorAll(".seat");
  for (let seat of seats) {
    seat.addEventListener("click", function (event) {
      unique(seat);
      seatRemaining();
      ticketUnit();
      additionFieldInCard(seat);
      totalPrice();
      couponCode();
      couponCondition();
      enabledSubmit();
    });
  }
  
  
  getID("submit").addEventListener("click", function (event) {
    event.preventDefault();
  
    const name = getID("input_name");
    const number = getID("input_number");
  
    if (!(number.value === "")) {
      const success = getID("success");
      success.classList.remove("hidden");
      console.log(success);
  
      const sections = document.querySelectorAll("section");
      for (let section of sections) {
        section.classList.add("hidden");
      }
    }
  });
  
 
  getID("show").addEventListener("click", function () {
    const sections = document.querySelectorAll("section");
    for (let section of sections) {
      section.classList.remove("hidden");
    }
    const success = getID("success");
    success.classList.add("hidden");
    window.location.reload();
  });