 function makeCupcakeFall(cupcake) {
      let top = 0;

      const fall = setInterval(function() {
        top += 5;
        cupcake.style.top = top + "px";

        if (top > window.innerHeight) {
          clearInterval(fall);
        }
      }, 20);
    }

    function createCupcake() {
      const newCupcake = document.createElement("span");
      newCupcake.textContent = "🧁";
      newCupcake.classList.add("cupcake");

      newCupcake.style.left = Math.random() * window.innerWidth + "px";
      newCupcake.style.top = "0px";

      document.body.appendChild(newCupcake);

      makeCupcakeFall(newCupcake);

      newCupcake.addEventListener("click", createCupcake);
    }

    // make the first cupcake work
    const firstCupcake = document.querySelector(".cupcake");
    firstCupcake.addEventListener("click", createCupcake);
  </script>
