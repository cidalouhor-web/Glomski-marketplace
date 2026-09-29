let cart = JSON.parse(localStorage.getItem('glomski_market_cart') || '{"count":0,"total":0,"items":[]}');

function updateCartUI() {
    document.getElementById('count').innerText = cart.count;
    document.getElementById('total').innerText = cart.total.toLocaleString();
    localStorage.setItem('glomski_market_cart', JSON.stringify(cart));
}

function addToCart(price, name, sellerId, subaccount, shopName) {
    cart.count++;
    cart.total += price;
    cart.items.push({ name: name, price: price, sellerId: sellerId, subaccount: subaccount, shopName: shopName });
    updateCartUI();
    alert(name + ' added from ' + shopName);
}

function orderWhatsApp() {
    if (cart.count == 0) { alert('Cart empty'); return; }
    localStorage.setItem('glomski_market_cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
}

function filterProducts(cat) {
    document.querySelectorAll('.product').forEach(p => {
        p.style.display = (cat == 'all' || p.dataset.cat == cat)? 'block' : 'none';
    });
}

function searchProducts() {
    let q = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.product').forEach(p => {
        p.style.display = p.dataset.name.includes(q)? 'block' : 'none';
    });
}

updateCartUI();
