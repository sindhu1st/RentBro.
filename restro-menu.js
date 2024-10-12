

// Get form and product list elements
const form = document.getElementById('add-product-form');
const productList = document.getElementById('product-list');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').files[0];

    // Validate form fields
    if (productName === '' || productDescription === '' || productPrice === '' || !productImage) {
        alert('Please fill in all fields');
    } else {
        // Create product object
        const product = {
            image: URL.createObjectURL(productImage),
            name: productName,
            description: productDescription,
            price: productPrice
        };

        // Add product to list
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
            </div>
        `;
        productList.innerHTML += productHTML;

        // Reset form fields
        form.reset();
    }
});
