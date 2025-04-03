let cartPage = document.getElementById("cartPage");
let itemPrice = document.getElementById("totalprice");
let cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    if (cartProduct.length > 0) {
        let price = 0;
        let input = "";
        
        cartProduct.forEach((val, index) => {
            price += val.price;
            input += `
            <div class="cart">
                <div>
                    <img class="cartImage" src="${val.images[0]}" alt="${val.title}" />
                </div>
                <div>${val.title}</div>
                <div>${val.price}</div>
                <div>
                    <p class="delete-item" data-index="${index}">
                        <i class="fa-solid fa-trash"></i>
                    </p>
                </div>
            </div>
            `;
        });

        cartPage.innerHTML = input;
        itemPrice.innerHTML = `${price.toFixed(2)}`;

        document.querySelectorAll(".delete-item").forEach((trashIcon) => {
            trashIcon.addEventListener("click", function () {
                let index = this.getAttribute("data-index");
                removeFromCart(index);
            });
        });
    } else {
        cartPage.innerHTML = `<h1>Cart is empty</h1>`;
        itemPrice.innerHTML = `0.00`;
    }
}

function removeFromCart(index) {
    cartProduct.splice(index, 1); // Remove item from array
    localStorage.setItem("cart", JSON.stringify(cartProduct)); // Update localStorage
    renderCart(); // Re-render the cart
}

// Initial render
renderCart();
