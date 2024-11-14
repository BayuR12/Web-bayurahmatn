function showCheckout(productName, productPrice) {
    document.getElementById("checkout-section").style.display = "block";
    document.getElementById("product-name").textContent = "Produk: " + productName;
    document.getElementById("product-price").textContent = "Harga: " + productPrice;


    const overlay = document.createElement("div");
    overlay.className = "checkout-overlay";
    overlay.onclick = hideCheckout;
    document.body.appendChild(overlay);
}

function hideCheckout() {
    document.getElementById("checkout-section").style.display = "none";

    const overlay = document.querySelector(".checkout-overlay");
    if (overlay) {
        overlay.remove();
    }
}
