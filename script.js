 
 // Function to open the modal
 function openModal(product) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');

    // Set modal content based on the product
    if (product === 'blueberry') {
        modalImage.src = 'pictures/blueberry soda.jpg';
        modalTitle.textContent = 'Blueberry Soda Pop';
        modalPrice.textContent = '₱ 90';
    }else if (product === 'greenapple') {
            modalImage.src = 'pictures/green apple soda.jpg';
            modalTitle.textContent = 'GreenApple Soda Pop';
            modalPrice.textContent = '₱ 90';
    }else if (product === 'kiwi'){
         modalImage.src = 'pictures/kiwi soda.jpg';
         modalTitle.textContent = 'Kiwi Soda Pop';
         modalPrice.textContent = '₱ 90';
    }else if (product === 'lychee'){
        modalImage.src = 'pictures/lychee soda.jpg';
        modalTitle.textContent = 'Lychee Soda Pop';
        modalPrice.textContent = '₱ 90';
    }else if (product === 'strawberry'){
        modalImage.src = 'pictures/strawberry soda.jpg';
        modalTitle.textContent = 'Strawberry Soda Pop';
        modalPrice.textContent = '₱ 90';


    }else if (product === 'blueberry_yakult'){
        modalImage.src = 'fruity yakult/blueberry fruity.jpg';
        modalTitle.textContent = 'Blueberry Fruity Yakult';
        modalPrice.textContent = '₱ 100';
    }else if (product === 'greenapple_yakult'){
        modalImage.src = 'fruity yakult/green apple fruity.jpg';
        modalTitle.textContent = 'GreenApple Fruity Yakult';
        modalPrice.textContent = '₱ 100';
    }else if (product === 'kiwi_yakult'){
        modalImage.src = 'fruity yakult/kiwi fruity.jpg';
        modalTitle.textContent = 'Kiwi Fruity Yakult';
        modalPrice.textContent = '₱ 100';
    }else if (product === 'lychee_yakult'){
        modalImage.src = 'fruity yakult/lychee fruity.jpg';
        modalTitle.textContent = 'Lychee Fruity Yakult';
        modalPrice.textContent = '₱ 100';
    }else if (product === 'strawberry_yakult'){
        modalImage.src = 'fruity yakult/strawberry fruity.jpg';
        modalTitle.textContent = 'Strawberry Fruity Yakult';
        modalPrice.textContent = '₱ 100';
        

    }else if (product === 'coffee_1'){
        modalImage.src = 'hot coffee pict/coffee1.jpg';
        modalTitle.textContent = 'Cofee Caramel';
        modalPrice.textContent = '₱ 100';
    }else if (product === 'coffee_5'){
        modalImage.src = 'hot coffee pict/coffee5.jpg';
        modalTitle.textContent = 'Americano';
        modalPrice.textContent = '₱ 100';
    }else if (product === 'coffee_3'){
        modalImage.src = 'hot coffee pict/coffee3.jpg';
        modalTitle.textContent = 'Cafe Matcha Latte';
        modalPrice.textContent = '₱ 100';
    }else if (product === 'coffee_4'){
        modalImage.src = 'hot coffee pict/coffee4.jpg';
        modalTitle.textContent = 'Hot Choco';
        modalPrice.textContent = '₱ 100';
    }else if (product === 'coffee_2'){
        modalImage.src = 'hot coffee pict/coffee2.jpg';
        modalTitle.textContent = 'Hot Mocha';
        modalPrice.textContent = '₱ 100';


    }else if (product === 'iced_coffee1'){
        modalImage.src = 'iced coffee pict/iced coffee1.jpg';
        modalTitle.textContent = 'Iced Matcha Berry';
        modalPrice.textContent = '₱ 140';
    }else if (product === 'iced_coffee2'){
        modalImage.src = 'iced coffee pict/iced coffee2.jpg';
        modalTitle.textContent = '>Iced Creamy Matcha';
        modalPrice.textContent = '₱ 135';
    }else if (product === 'iced_coffee3'){
        modalImage.src = 'iced coffee pict/iced coffee3.jpg';
        modalTitle.textContent = 'Iced Choco Berry';
        modalPrice.textContent = '₱ 140';
    }else if (product === 'iced_coffee4'){
        modalImage.src = 'iced coffee pict/iced coffee4.jpg';
        modalTitle.textContent = 'Iced Choco HazelNut';
        modalPrice.textContent = '₱ 145';
    }else if (product === 'iced_coffee5'){
        modalImage.src = 'iced coffee pict/iced coffee5.jpg';
        modalTitle.textContent = 'Iced Caramel Latte';
        modalPrice.textContent = '₱ 145';
    }else if (product === 'iced_coffee6'){
        modalImage.src = 'iced coffee pict/iced coffee6.jpg';
        modalTitle.textContent = 'Iced Cafe Latte';
        modalPrice.textContent = '₱ 130';
    }else if (product === 'iced_coffee7'){
        modalImage.src = 'iced coffee pict/iced coffee7.jpg';
        modalTitle.textContent = 'Iced Ichigo Cafe Latte';
        modalPrice.textContent = '₱ 140';
    }else if (product === 'iced_coffee8'){
        modalImage.src = 'iced coffee pict/iced coffee8.jpg';
        modalTitle.textContent = 'Iced Dirty Matcha';
        modalPrice.textContent = '₱ 140';


    }else if (product === 'pasta1'){
        modalImage.src = 'others menu pict/pasta1.jpg';
        modalTitle.textContent = 'Carbonara';
        modalPrice.textContent = '₱ 140';
    }else if (product === 'pasta2'){
        modalImage.src = 'others menu pict/pasta2.jpg';
        modalTitle.textContent = 'Beef Italian';
        modalPrice.textContent = '₱ 140';
    }else if (product === 'pasta3'){
        modalImage.src = 'others menu pict/pasta3.jpg';
        modalTitle.textContent = 'Pesto';
        modalPrice.textContent = '₱ 140';
    }


    else if (product === 'waffle1'){
        modalImage.src = 'others menu pict/waffle1.jpg';
        modalTitle.textContent = 'Mango Overload';
        modalPrice.textContent = '₱ 140';
    }else if (product === 'waffle2'){
        modalImage.src = 'others menu pict/waffle2.jpg';
        modalTitle.textContent = 'Choco Overload';
        modalPrice.textContent = '₱ 100';
    }else if (product === 'waffle3'){
        modalImage.src = 'others menu pict/waffle3.jpg';
        modalTitle.textContent = 'Cookies Overload';
        modalPrice.textContent = '₱ 140';
    }

    localStorage.setItem('productImage', modalImage.src);
    localStorage.setItem('productTitle', modalTitle.textContent);
    localStorage.setItem('productPrice', modalPrice.textContent);


    modal.style.display = 'block';
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
