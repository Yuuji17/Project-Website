
// Function to extract query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to dynamically populate the form
function populateForm() {
    const itemName = getQueryParam('item');
    if (itemName) {
        document.getElementById('itemName').value = itemName; // Pre-fill the form
    }
}

// Run populateForm on page load
window.onload = populateForm;

 // Retrieve product data from localStorage
 const productImage = localStorage.getItem('productImage');
 const productTitle = localStorage.getItem('productTitle');
 const productPrice = localStorage.getItem('productPrice');

 // Populate order page with product data
 document.getElementById('productImage').src = productImage || 'default.jpg';
 document.getElementById('productTitle').textContent = productTitle || 'Product not found';
 document.getElementById('productPrice').textContent = productPrice || 'Price not available';