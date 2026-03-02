    const cupcake = document.getElementById("cupcake");

    function randomPosition() {
      const maxWidth = window.innerWidth - 50;
      const randomX = Math.random() * maxWidth;
      cupcake.style.left = randomX + "px";
    }

    cupcake.addEventListener("click", function() {
      const newCupcake = document.createElement("span");
      newCupcake.textContent = "🧁";
      document.body.appendChild(newCupcake);

      randomPosition(); 
    });

    randomPosition();
