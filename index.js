const cupcake = document.getElementById("cupcake");

cupcake.addEventListener("click", function() {
    const newCupcake = document.createElement("span");
    newCupcake.textContent = "🧁 ";
    document.body.appendChild(newCupcake);
});
