let cookie = document.querySelector('.cookie-counter')

function incrementCookie() {
    cookie.innerHTML = parseFloat(cookie.innerHTML) + 1
}

let shopItems = [];

async function getShopItems() {
    const response = await fetch('https://cookie-upgrade-api.vercel.app/api/upgrades');
    const data = await response.json();
    shopItems = data.items; 
    renderShop(); 
}