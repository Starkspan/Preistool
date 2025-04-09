
function calculatePrice() {
    const material = document.getElementById("material").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const target = parseFloat(document.getElementById("targetPrice").value);
    
    // Beispielhafte Preisberechnung (Platzhalter)
    const basePrices = {
        stahl: 3.5,
        edelstahl: 4.2,
        aluminium: 3.8,
        messing: 5.0
    };
    
    const base = basePrices[material];
    const total = base * quantity;
    let message = `Preis für ${quantity} Stück aus ${material}: ${total.toFixed(2)} €`;
    
    if (!isNaN(target)) {
        if (total / quantity <= target) {
            message += " ✅ Zielpreis erreicht oder unterschritten.";
        } else {
            message += " ❌ Zielpreis überschritten.";
        }
    }
    
    document.getElementById("result").innerText = message;
}
