// Fungsi untuk menampilkan checkout
function showCheckout(productName, productPrice) {
    document.getElementById('checkout-section').style.display = 'block';
    document.getElementById('product-name').textContent = `Produk: ${productName}`;
    document.getElementById('product-price').textContent = `Harga: ${productPrice}`;
}

// Fungsi untuk menyembunyikan checkout
function hideCheckout() {
    document.getElementById('checkout-section').style.display = 'none';
}

// Fungsi untuk mengatur tampilan responsif
function adjustLayout() {
    const checkoutSection = document.getElementById('checkout-section');
    if (window.innerWidth <= 768) { // Maksimal lebar 768px (contoh untuk tampilan mobile)
        checkoutSection.style.width = '90%';
    } else {
        checkoutSection.style.width = '50%';
    }
}

function toggleMenu() {
    const navBar = document.querySelector('.nav-bar ul');
    navBar.classList.toggle('active');
}

document.querySelectorAll('.nav-bar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-bar ul').classList.remove('active');
    });
});


// Event listener untuk menyesuaikan layout ketika ukuran jendela berubah
window.addEventListener('resize', adjustLayout);

// Panggil fungsi adjustLayout saat halaman dimuat
window.addEventListener('load', adjustLayout);
