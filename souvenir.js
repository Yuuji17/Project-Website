// Product data mapping
const productData = {
    souvenir1: { src: 'others menu pict/souvenir1.jpeg', title: 'Bracelets/Anklets', price: '₱ 90' },
    souvenir2: { src: 'others menu pict/souvenir2.jpg', title: 'Necklace/Earrings', price: '₱ 90' },
    souvenir3: { src: 'others menu pict/souvenir3.jpg', title: 'HandCrafted Novelties', price: '₱ 90' },
    tshirt1: { src: 'others menu pict/tshirt1.png', title: 'T-Shirt 1', price: '₱ 90' },
    tshirt2: { src: 'others menu pict/tshirt2.png', title: 'T-Shirt 2', price: '₱ 90' },
    tshirt3: { src: 'others menu pict/tshirt3.png', title: 'T-Shirt 3', price: '₱ 90' },
    tshirt4: { src: 'others menu pict/tshirt4.png', title: 'T-Shirt 4', price: '₱ 90' },
    tshirt5: { src: 'others menu pict/tshirt5.png', title: 'T-Shirt 5', price: '₱ 90' },
    tshirt6: { src: 'others menu pict/tshirt6.png', title: 'T-Shirt 6', price: '₱ 90' },
    tshirt7: { src: 'others menu pict/tshirt7.png', title: 'T-Shirt 7', price: '₱ 90' },
};

// Open modal
function openModal(product) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');

    const productInfo = productData[product];
    if (productInfo) {
        modalImage.src = productInfo.src;
        modalTitle.textContent = productInfo.title;
        modalPrice.textContent = productInfo.price;

        // Store product details in localStorage
        localStorage.setItem('productImage', productInfo.src);
        localStorage.setItem('productTitle', productInfo.title);
        localStorage.setItem('productPrice', productInfo.price);

        modal.style.display = 'block';
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
document.querySelector('.buy-button').addEventListener('click', function() {
    // Redirect to order.html when the "Buy" button is clicked
    window.location.href = 'order.html'; // Adjust the path as necessary
});
    