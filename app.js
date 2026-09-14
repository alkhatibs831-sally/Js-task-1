const rawCustomerName = " Sara ";
const bookTitle = "JavaScript Basics";
const priceofonebook = 150;
const quantityInput = "3";
const shippingCost = 30;
const cleanedCustomerName = rawCustomerName.trim();
console.log(`Original Name: "${rawCustomerName}"`);
console.log(`Cleaned Name: "${cleanedCustomerName}"`);
const numericQuantity = Number(quantityInput);
console.log(`Original Quantity: ${quantityInput} (Type: ${typeof quantityInput})`);
console.log(`Numeric Quantity: ${numericQuantity} (Type: ${typeof numericQuantity})`);
const subtotal = unitPrice * numericQuantity;
const total = subtotal + shippingCost;
const receipt = ` 
Customer Name : ${cleanedCustomerName}
Book Title : ${bookTitle}
Unit Price : $${unitPrice.toFixed(2)}
Quantity : ${numericQuantity}
Subtotal : $${subtotal.toFixed(2)}
Shipping : $${shippingCost.toFixed(2)}
Total : $${total.toFixed(2)}`;
console.log(receipt);