// Calculate payable price ulll
function calculatePayablePrice(unitPrice, quantity) {
  return unitPrice * quantity;
}
 
document.addEventListener('DOMContentLoaded', function () {
  const unitPrice = 100;
  const quantityInput = document.getElementById('quantity');
  const payablePrice = document.getElementById('payablePrice');
  let quantityError = document.getElementById('quantityError');
 
  if (!quantityError) {
    quantityError = document.createElement('span');
    quantityError.id = 'quantityError';
    quantityError.style.color = 'red';
    quantityError.style.marginLeft = '8px';
    quantityInput.insertAdjacentElement('afterend', quantityError);
  }
 
  function updatePayablePrice() {
    const quantity = parseInt(quantityInput.value, 10) || 0;
    if (quantity < 0) {
      quantityError.textContent = 'Quantity cannot be negative';
      payablePrice.textContent = '';
    } else if (quantity === 0) {
      quantityError.textContent = 'Quantity must be greater than 0';
      payablePrice.textContent = '';
    } else {
      quantityError.textContent = '';
      payablePrice.textContent = calculatePayablePrice(unitPrice, quantity);
    }
  }
 
  quantityInput.addEventListener('input', updatePayablePrice);
  updatePayablePrice();
});
 