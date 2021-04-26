let carts = document.querySelectorAll('.add-cart');

let products = [
    /* Notebooks */
    {
        name: 'DELL G5 Black',
        tag: 'note25',
        price: 1970,
        inCart: 0
    },
    {
        name: 'Apple MacBook',
        tag: 'note27',
        price: 1920,
        inCart: 0
    },
    {
        name: 'Asus G712LW',
        tag: 'note26',
        price: 1850,
        inCart: 0
    },
    {
        name: 'HP EliteBook',
        tag: 'note28',
        price: 1900,
        inCart: 0
    },
    /* Mouse */
    {
        name: 'HYPERX Pulsefire',
        tag: 'mouse5',
        price: 125,
        inCart: 0
    },
    {
        name: 'RAZER Viper ',
        tag: 'mouse6',
        price: 135,
        inCart: 0
    },
    {
        name: 'Logitech Wireless',
        tag: 'mouse7',
        price: 145,
        inCart: 0
    },
    {
        name: 'Logitech Gaming',
        tag: 'mouse8',
        price: 150,
        inCart: 0
    },
    /* Bags */
    {
        name: 'Helmet Black',
        tag: 'bag5',
        price: 35,
        inCart: 0
    },
    {
        name: 'RivaCase Blue/Black',
        tag: 'bag6',
        price: 40,
        inCart: 0
    },
    {
        name: 'Xiaomi Mi City',
        tag: 'bag7',
        price: 45,
        inCart: 0
    },
    {
        name: 'Tucano Green',
        tag: 'bag8',
        price: 50,
        inCart: 0
    },
    /* Hard disk */
    {
        name: '4.0TB Samsung',
        tag: 'ssd5',
        price: 350,
        inCart: 0
    },
    {
        name: '1.0TB ADATA XPG',
        tag: 'ssd6',
        price: 250,
        inCart: 0
    },
    {
        name: '2.0TB Kingston',
        tag: 'ssd7',
        price: 300,
        inCart: 0
    },
    {
        name: '1.0TB Samsung',
        tag: 'ssd8',
        price: 200,
        inCart: 0
    },
    /* Cooling */
    {
        name: 'Cooling Pad Canyon',
        tag: 'cooling1',
        price: 35,
        inCart: 0
    },
    {
        name: 'Cooling Pad Gembird',
        tag: 'cooling2',
        price: 40,
        inCart: 0
    },
    {
        name: 'Suport Gembird',
        tag: 'cooling3',
        price: 54,
        inCart: 0
    },
    {
        name: 'Cooling Pad Gembird',
        tag: 'cooling4',
        price: 55,
        inCart: 0
    },
    /* Chargers */
    {
        name: 'Charger For Acer',
        tag: 'charger1',
        price: 40,
        inCart: 0
    },
    {
        name: 'Charger For HP',
        tag: 'charger2',
        price: 35,
        inCart: 0
    },
    {
        name: 'Charger For HP',
        tag: 'charger3',
        price: 50,
        inCart: 0
    },
    {
        name: 'Charger For Samsung',
        tag: 'charger4',
        price: 45,
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cart Cost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="./IMG/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
            <ion-icon name="remove-circle-outline"></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon name="add-circle-outline"></ion-icon>
            </div>
            <div class="total">$${item.inCart * item.price},00</div>
            `;
        });
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cartCost},00</h4>        
            </div>
        `;
    }
}

onLoadCartNumbers();
displayCart();

/* Buton credit */
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

/* Buton go-to-shop */
function goshop() {
    location.replace("Products.html");
}