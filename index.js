const cupcake = document.getElementById("cupcake");

cupcake.addEventListener("click", function() {
    const newCupcake = document.createElement("div");
    newCupcake.textContent = "🧁";
    document.body.appendChild(newCupcake);
});
