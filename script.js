
function calculatePrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const basePrice = 20; // Beispiel Basispreis
    const price = basePrice - (quantity * 0.05);
    document.getElementById('result').textContent = 
        `Berechneter Preis pro Stück: €${price.toFixed(2)} (geschätzt)`;
}
