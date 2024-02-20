 const seats = document.querySelectorAll(".seat");
  for (let seat of seats) {
    seat.addEventListener("click", function (event) {
      ticketCount();
      seatRemaining();
      unique(seat);
      totalPrice();
      couponCode();
      couponCondition();
      activeNext();
    });
  }

  for (const seat of seats) {
      seat.addEventListener("click", function handleSelect(event) {
        const ticketNumber = event.target.innerText;
        const ticketClass = "Economy";
        const price = 550;
      
        const selectedContainer = document.getElementById("ticket-row-container");
        const tr = document.createElement("tr");

        const td = document.createElement("td");
        td.innerText = ticketNumber;
    
        const td1 = document.createElement("td");
        td1.innerText = ticketClass;

        const td2 = document.createElement("td");
        td2.innerText = price;

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
      
        selectedContainer.appendChild(tr);

        event.target.style.backgroundColor = "green";
    
      });
    }


