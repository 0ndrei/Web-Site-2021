const data = [{
    id: 0,
    img: 'img/msi.png',
    name: 'MSI GF65',
    price: 25499,
    save: 2550,
    delievery: 'In 1 - 3 days',
    itemInCart: false
},
{
    id: 1,
    img: 'img/tucano.png',
    name: 'Tucano BACKPACK RAPIDO15.6',
    price: 300,
    save: 30,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 2,
    img: 'img/m313.png',
    name: 'MARVO "M313"',
    price: 228,
    save: 23,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 3,
    img: 'img/970evo.png',
    name: 'SSD 1.0TB Samsung',
    price: 2899,
    save: 290,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 4,
    img: 'img/asus.png',
    name: 'NB ASUS 15.6" G512LW',
    price: 29699,
    save: 2970,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 5,
    img: 'img/acer.png',
    name: 'ACER Nitro AN515-55 Obsidian Black (NH.Q7JEU.00F)',
    price: 21699,
    save: 2170,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 6,
    img: 'img/xiaomi.png',
    name: 'Xiaomi 15.6" Mi Gaming Notebook',
    price: 20999,
    save: 2100,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 7,
    img: 'img/microsoft.png',
    name: 'Microsoft Surface Pro 7 – 12.3" Touch-Screen',
    price: 23999,
    save: 2400,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 8,
    img: 'img/bag1.png',
    name: 'NB backpack - RivaCase 5560 Black/Pure Red',
    price: 324,
    save: 32,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 9,
    img: 'img/bag2.png',
    name: 'NB bag - RivaCase 8730 Grey Laptop',
    price: 343,
    save: 34,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 10,
    img: 'img/bag3.png',
    name: 'Xiaomi Simple Casual Backpack 20L 15.6" Blue',
    price: 365,
    save: 36,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 11,
    img: 'img/bag4.png',
    name: 'NB backpack - RivaCase 8065 Dark Blue Laptop',
    price: 385,
    save: 38,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 12,
    img: 'img/mouse1.png',
    name: 'Logitech Wireless Mouse M310 Silver',
    price: 354,
    save: 35,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 13,
    img: 'img/mouse2.png',
    name: 'Razer Mouse DeathAdder Essential, Black',
    price: 539,
    save: 53,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 14,
    img: 'img/mouse3.png',
    name: 'MARVO "M730W", Wireless Gaming Mouse, 1200/2400/3500dpi',
    price: 529,
    save: 52,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 15,
    img: 'img/mouse4.png',
    name: 'HYPERX Pulsefire Core Gaming Mouse, 400–6200 DPI',
    price: 639,
    save: 63,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 16,
    img: 'img/ssd1.png',
    name: 'M.2 NVMe SSD 128GB ADATA XPG SX6000 Lite',
    price: 729,
    save: 72,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 17,
    img: 'img/ssd2.png',
    name: '2.5" SSD 120GB Kingston A400',
    price: 579,
    save: 75,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 18,
    img: 'img/ssd3.png',
    name: '2.5" SSD 120GB Kingston HyperX FURY 3D',
    price: 639,
    save: 63,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
{
    id: 19,
    img: 'img/ssd4.png',
    name: 'M.2 NVMe SSD 480GB Corsair Force MP510',
    price: 2059,
    save: 205,
    delievery: 'In 3 - 4 days',
    itemInCart: false
},
];

/* navbar */
const responsiveCart = () => {
const x = document.getElementById("myTopnav");
if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
}
};

/* slideshow */
let slideIndex = 1;
const showSlides = n => {
let i;

let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {
    slideIndex = 1
}
if (n < 1) {
    slideIndex = slides.length
}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
};

showSlides(slideIndex);

const plusSlides = n => {
showSlides(slideIndex += n);
};

const currentSlide = n => {
showSlides(slideIndex = n);
};

/* Shopping cart */
//add item to the cart
const addItem = () => {
totalAmount = 0;
totalItems = 0;
totalSaving = 0;
let clrNode = document.getElementById('item-body');
clrNode.innerHTML = '';
cartList.map((cart) => {
    let cartCont = document.getElementById('item-body');
    totalAmount = totalAmount + cart.price;
    totalSaving = totalSaving + cart.save;
    totalItems = totalItems + 1;

    let tempCart = document.createElement('div');
    tempCart.setAttribute('class', 'cart-list');
    tempCart.setAttribute('id', cart.id);

    let listImg = document.createElement('img');
    listImg.setAttribute('id', 'list-img');
    listImg.src = cart.img;
    tempCart.appendChild(listImg);

    let listName = document.createElement('h3');
    listName.setAttribute('class', 'list-name');
    listName.innerHTML = cart.name;
    tempCart.appendChild(listName);

    let listPay = document.createElement('h3');
    listPay.setAttribute('class', 'pay');
    listPay.innerHTML = cart.price;
    tempCart.appendChild(listPay);

    let listQuantity = document.createElement('h3');
    listQuantity.setAttribute('class', 'quantity');
    listQuantity.innerHTML = '1';
    tempCart.appendChild(listQuantity);

    let listTrash = document.createElement('i');
    listTrash.setAttribute('class', 'fa fa-trash ');
    listTrash.setAttribute('id', 'remove');
    tempCart.appendChild(listTrash);

    cartCont.appendChild(tempCart)

});
document.getElementById('total-amount').innerHTML = 'Total amount : lei ' + totalAmount;
document.getElementById('total-items').innerHTML = 'Total items : ' + totalItems;
document.getElementById('you-saved').innerHTML = 'You saved : lei ' + totalSaving;
document.getElementById('total').style.display = "block";
};


//back to main page
const refreshPage = () => {
detailsPage.style.display = 'none'
};


// hide your cart page
const hideCart = () => {
document.getElementById('main').style.display = "block";
document.getElementById('cart-container').style.display = "none";
};

const show = () => {
document.getElementById("slideID").style.display = "block";
document.getElementById("puncteID").style.display = "block";
};

//display your cart page
const displayCart = () => {
document.getElementById('main').style.display = "none";
document.getElementById('details-page').style.display = "none";
document.getElementById('cart-container').style.display = "block";
document.getElementById("slideID").style.display = "none";
document.getElementById("puncteID").style.display = "none";

if (cartList.length === 0) {
    document.getElementById('cart-with-items').style.display = "none";
    document.getElementById('empty-cart').style.display = "block";
} else {
    document.getElementById('empty-cart').style.display = "none";
    document.getElementById('cart-with-items').style.display = "block";
}
};
// add item to the cart
const addToCart = id => {
if (!data[id].itemInCart) {
    cartList = [...cartList, data[id]];
    addItem();
    alert('The product is added to the cart');
}
data[id].itemInCart = true
};

let cartList = []; //array to store cart lists

let i;
const detail = document.getElementsByClassName('card-item');
const detailsImg = document.getElementById('details-img');
const detailTitle = document.getElementById('detail-title');
const detailPrice = document.getElementById('detail-price');
const youSave = document.getElementById('you-save');
const detailsPage = document.getElementById('details-page');

const back = document.getElementById('buy');
back.addEventListener('click', refreshPage);
const addToCarts = document.querySelectorAll('#add-to-cart');
const cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click', displayCart);

let carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click', () => addToCart(getId));

let home = document.getElementById('home');

//click event to hide cart page and return to home page
home.addEventListener('click', hideCart);

//events on dynamically created element to remove items from list
document.addEventListener('click', (e) => {
if (e.target.id === `remove`) {
    removeFromCart(e.target.parentNode.id);
}
});

// details const
const handleDetail = (e) => {
detailsPage.style.display = 'block';
getId = e.currentTarget.parentElement.id;
detailsImg.src = data[getId].img;
detailTitle.innerHTML = data[getId].name;
detailPrice.innerHTML = 'Price : lei ' + data[getId].price;
youSave.innerHTML = 'You save : (lei ' + data[getId].save + ')';
};


//click event to display details page
for (i = 0; i < data.length; i++) {
detail[i].addEventListener('click', handleDetail)
}

let getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach(val => val.addEventListener('click', () => addToCart(val.parentNode.id)));

let totalAmount;
let totalItems;
let totalSaving;

//remove item from the cart
const removeFromCart = id => {
data[id].itemInCart = false;
cartList = cartList.filter((list) => list.id !== Number(id));
addItem();
if (cartList.length === 0) {
    document.getElementById('cart-with-items').style.display = "none";
    document.getElementById('empty-cart').style.display = "block";
}
};