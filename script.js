// Handle Order Now buttons
const orderButtons = document.querySelectorAll(".order-btn");
const orderForm = document.getElementById("order-form");
const flowerNameInput = document.getElementById("flowerName");
const quantityInput = document.getElementById("quantity");
const vaseCheckbox = document.getElementById("addVase");
const totalPriceInput = document.getElementById("totalPrice");

// When any Order Now button is clicked
let basePrice = 25; // Set your flower base price (you can update per flower later)

orderButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const flowerCard = e.target.closest(".flower");
        const flowerName = flowerCard.querySelector("h3").textContent;

        flowerNameInput.value = flowerName;
        orderForm.classList.remove("hidden");
        document.getElementById("orderDetails").classList.remove("hidden");
        document.getElementById("confirmation").classList.add("hidden");

        calculateTotal(); // Call total calculation
        orderForm.scrollIntoView({ behavior: "smooth" });
    });
});

// Calculate total on any change
quantityInput.addEventListener("input", calculateTotal);
vaseCheckbox.addEventListener("change", calculateTotal);

function calculateTotal() {
    let quantity = parseInt(quantityInput.value) || 1;
    let withVase = vaseCheckbox.checked;
    let total = basePrice * quantity + (withVase ? 15 : 0);
    totalPriceInput.value = `$${total}`;
}

document.getElementById("orderDetails").addEventListener("submit", function(e) {
    e.preventDefault();
    this.classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");
});

// Handle form submission
document.getElementById("orderDetails").addEventListener("submit", function(e) {
    e.preventDefault();

    // Hide form, show confirmation
    this.classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");
});
