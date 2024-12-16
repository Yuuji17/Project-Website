 // Retrieve product data from localStorage
 const productImage = localStorage.getItem('productImage');
 const productTitle = localStorage.getItem('productTitle');
 const productPrice = localStorage.getItem('productPrice');

 // Populate order page with product data
 document.getElementById('productImage').src = productImage || 'default.jpg';
 document.getElementById('productTitle').textContent = productTitle || 'Product not found';
 document.getElementById('productPrice').textContent = productPrice || 'Price not available';