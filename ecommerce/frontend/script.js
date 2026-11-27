
let cartCount = 0;

// Add product to cart
function addToCart() {
    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert("Product added to your cart!");
}

// Search products
function searchProducts() {
    let input = document
        .getElementById("searchInput")
        .value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    let found = 0;

    products.forEach(function(product) {
        let productName = product
            .querySelector("h3")
            .textContent.toLowerCase();

        if (productName.includes(input)) {
            product.style.display = "block";
            found++;
        } else {
            product.style.display = "none";
        }
    });

    if (found === 0) {
        alert("No products found!");
    }
}
