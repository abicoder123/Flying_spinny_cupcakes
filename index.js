const cupcake = document.getElementById("cupcake");

cupcake.addEventListener("click", function() {
    const newCupcake = document.createElement("cupcake");
    newCupcake.textContent = "🧁";
    document.body.appendChild(cupcake);
});
