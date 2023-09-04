document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const saleAmountInput = document.getElementById("saleAmount");
    const taxAmountParagraph = document.getElementById("taxAmount");

    calculateButton.addEventListener("click", function () {
        // Get the sale amount entered by the user
        const saleAmount = parseFloat(saleAmountInput.value);

        // Define the sales tax rate (you can adjust this)
        const taxRate = 0.08; // 8% sales tax

        // Calculate the tax amount
        const taxAmount = saleAmount * taxRate;

        // Display the tax amount on the webpage
        taxAmountParagraph.textContent = `Tax Amount: $${taxAmount.toFixed(2)}`;
    });
});
