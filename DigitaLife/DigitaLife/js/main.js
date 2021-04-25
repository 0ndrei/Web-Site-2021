let carts = document.querySelectorAll('.add-cart');

let products = [
    /* new arrivals */
    {
    name: 'MSI GF65 Thin Gaming',
    tag: 'msi',
    price: 1422,
    inCart: 0
    },
    {
    name: 'Tucano BACKPACK',
    tag: 'tucano',
    price: 25,
    inCart: 0
    },
    {
    name: 'MARVO "M313"',
    tag: 'm313',
    price: 13,
    inCart: 0
    },
    {
    name: 'SSD 1.0TB Samsung 970 EVO',
    tag: '970evo',
    price: 162,
    inCart: 0
    },
    /* Popular goods */
    {
    name: 'Xiaomi Simple Casual Backpack',
    tag: 'bag3',
    price: 21,
    inCart: 0
    },
    {
    name: 'ASUS G512LW',
    tag: 'asus',
    price: 1655,
    inCart: 0
    },
    {
    name: 'HYPERX Pulsefire',
    tag: 'mouse4',
    price: 36,
    inCart: 0
    },
    {
    name: 'ACER Nitro AN515-55',
    tag: 'acer',
    price: 1200,
    inCart: 0
    },
    /* notebooks */
    {
    name: 'ASUS G512LW',
    tag: 'asus',
    price: 1655,
    inCart: 0
    },
    {
    name: 'ACER Nitro AN515-55 ',
    tag: 'acer',
    price: 1250,
    inCart: 0
    },
    {
    name: 'Mi Gaming Notebook',
    tag: 'xiaomi',
    price: 1170,
    inCart: 0
    },
    {
    name: 'Microsoft Surface Pro 7',
    tag: 'microsoft',
    price: 1338,
    inCart: 0
    },
    /* bags */
    {
    name: 'NB backpack - RivaCase 5560',
    tag: 'bag1',
    price: 18,
    inCart: 0
    },
    {
    name: 'NB bag - RivaCase 8730',
    tag: 'bag2',
    price: 19,
    inCart: 0
    },
    {
    name: 'Xiaomi Simple Casual Backpack',
    tag: 'bag3',
    price: 21,
    inCart: 0
    },
    {
    name: 'NB backpack - RivaCase 8065',
    tag: 'bag4',
    price: 22,
    inCart: 0
    },
    /* mouse */
    {
    name: 'Logitech Wireless Mouse',
    tag: 'mouse1',
    price: 20,
    inCart: 0
    },
    {
    name: 'Razer Mouse DeathAdder',
    tag: 'mouse2',
    price: 30,
    inCart: 0
    },
    {
    name: 'MARVO "M730W"',
    tag: 'mouse3',
    price: 30,
    inCart: 0
    },
    {
    name: 'HYPERX Pulsefire',
    tag: 'mouse4',
    price: 36,
    inCart: 0
    },
    /* hard disk */
    {
    name: 'ADATA XPG SX6000 Lite',
    tag: 'ssd1',
    price: 41,
    inCart: 0
    },
    {
    name: '120GB Kingston A400',
    tag: 'ssd2',
    price: 32,
    inCart: 0
    },
    {
    name: '120GB Kingston HyperX FURY',
    tag: 'ssd3',
    price: 36,
    inCart: 0
    },
    {
    name: '480GB Corsair Force MP510',
    tag: 'ssd4',
    price: 115,
    inCart: 0
    },
    /* notebooksp1 */
    {
    name: 'NB ASUS 15.6" X515MA',
    tag: 'note22',
    price: 750,
    inCart: 0
    },
    {
    name: 'NB Lenovo 15.6" IdeaPad 3',
    tag: 'note1',
    price: 725,
    inCart: 0
    },
    {
    name: 'HP 255 G7 Dark Ash Silver',
    tag: 'note5',
    price: 813,
    inCart: 0
    },
    {
    name: 'ACER Aspire A315-34',
    tag: 'note8',
    price: 562,
    inCart: 0
    },
    ]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if (productNumbers ) {
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

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined){
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

    if(cartCost != null) {
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
    if(cartItems && productContainer ) {
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