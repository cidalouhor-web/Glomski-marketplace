// Marketplace helper - calculates commission
const COMMISSION_RATE = 0.10; // 10% for Glomski

function calculateSplit(totalAmount) {
    let commission = Math.floor(totalAmount * COMMISSION_RATE);
    let sellerAmount = totalAmount - commission;
    return { commission, sellerAmount };
}

function formatNaira(amount) {
    return '₦' + amount.toLocaleString();
      }
