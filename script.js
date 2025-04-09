
function calculatePrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const setupCost = 60;
    const programmingCost = 30;
    const totalFixedCost = setupCost + programmingCost;
    const fixedCostPerPart = totalFixedCost / quantity;

    const basePartCost = 10; // Beispiel-Basispreis
    const pricePerPart = fixedCostPerPart + basePartCost;

    const targetPrice = parseFloat(document.getElementById('targetPrice').value);

    let resultText = `Kalkulierter Preis pro Stück: €${pricePerPart.toFixed(2)}`;
    if (!isNaN(targetPrice)) {
        resultText += `<br>Zielpreisvergleich: ${pricePerPart <= targetPrice ? '✔️ Unter dem Zielpreis' : '❌ Über dem Zielpreis'}`;
    }

    document.getElementById('result').innerHTML = resultText;
}
