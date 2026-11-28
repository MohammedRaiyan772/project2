
let cartCount = 0;

// Add product to cart
function addToCart() {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
    alert("Product added to your cart!");
}

// Load products from Flask backend
async function loadProducts() {
    const productList = document.getElementById("productList");

    try {
        const response = await fetch("/api/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        productList.innerHTML = "";

        products.forEach(function(product) {
            const card = document.createElement("div");
            card.className = "product-card";

            const image = document.createElement("div");
            image.className = "product-image";
            image.textContent = "🛍️";

            const name = document.createElement("h3");
            name.textContent = product.name;

            const price = document.createElement("p");
            price.textContent = "₹" + product.price;

            const category = document.createElement("p");
            category.textContent = product.category;

            const button = document.createElement("button");
            button.textContent = "Add to Cart";
            button.addEventListener("click", addToCart);

            card.append(image, name, price, category, button);
            productList.appendChild(card);
        });

    } catch (error) {
        productList.textContent = "Unable to load products. Please try again.";
        console.error(error);
    }
}

// Search products
function searchProducts() {
    let input = document.getElementById("searchInput")
        .value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    let found = 0;

    products.forEach(function(product) {
        let productName = product.querySelector("h3")
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

// Load products when page opens
loadProducts();
