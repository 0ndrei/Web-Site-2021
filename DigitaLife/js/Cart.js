class Cart {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    _shippingPrice = 0;

    showCart() {
        const cartContainer = document.querySelector('.products');

        this.cart.forEach(product => {
            cartContainer.innerHTML += template.cartProduct(product);
        });
        const totalContainer = document.querySelector(".total__container");

        totalContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal">${this.sumOfCart()} $</h4>
        </div>`
    }

    showSum(value) {
        document.querySelector('.basketTotal').innerHTML = `${value} $`
    }

    sumOfCart() {
        return this.cart.reduce((accumulator, value) => {
            return accumulator + value.quantity * value.price
        }, 0) + this._shippingPrice
    }

    validationHandler() {
        const validateButton = document.getElementById('order__items');

        validateButton.addEventListener('click', () => {
            this.validateData();
        })
    }


    optionHandler() {
        const selector = document.getElementById('delivery');
        selector.onchange = ((evt) => {
            this._shippingPrice = parseInt(evt.target.value);
            this.showSum(this.sumOfCart());
        });
    }

    validateData() {
        const full__name = document.getElementById("full__name");
        const phoneNumber = document.getElementById('phone');
        const email = document.getElementById("email");
        const address = document.getElementById('address');
        const city = document.getElementById("city");
        const addressRegexp = /^[a-zA-Z0-9\s,'-]{4,}$/;
        const phoneRegexp = /^[\+373|373]*[0]*[0-9]{7,8}$/;
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const cityRegexp = /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;

        if (!(new RegExp(/^[a-zA-Z ]{2,30}$/).test(full__name.value))) {
            console.log("Wrong Name");
            return;
        }

        if (!(new RegExp(phoneRegexp).test(phoneNumber.value))) {
            console.log("Wrong Phone Number");
            return;
        }

        if (!(new RegExp(emailRegexp).test(email.value))) {
            console.log("Wrong Email");
            return;
        }

        if (!(new RegExp(addressRegexp).test(address.value) && address.value.length < 20)) {
            console.log("Wrong Address");
            return;
        }

        if (!(new RegExp(cityRegexp).test(city.value))) {
            console.log("Wrong City");
            return;
        }

        localStorage.setItem('phone', phoneNumber.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('city', city.value);
        localStorage.setItem('fullName', full__name.value);
        localStorage.setItem('orderedItems', JSON.stringify(this.cart));
        localStorage.setItem('shippingPrice', this._shippingPrice.toString());

        localStorage.removeItem('cart');

        alert("Your order has been taken over by the administrator and you will be called soon.");
    }

    removeMulti() {
        const btns = document.querySelectorAll('.remove__item');

        btns.forEach(button => {
            button.addEventListener('click', evt => {
                this.removeItem(evt);
            })
        })
    }

    quantityHandler() {
        const increaseBtns = document.querySelectorAll(".increase__item");
        const decreaseBtns = document.querySelectorAll(".decrease__item");

        increaseBtns.forEach(btn => {
            btn.addEventListener('click', (evt) => {
                this.increaseQuantity(evt);
            })
        });

        decreaseBtns.forEach(btn => {
            btn.addEventListener('click', (evt) => {
                this.decreaseQuantity(evt);
            })
        })
    }

    increaseQuantity(evt) {
        const id = Number(evt.target.parentElement.parentElement.getAttribute("data-id"));
        this.cart.map(item => {
            if (item.id === id) {
                item.quantity++;
                evt.target.parentElement.querySelector("span").innerHTML = `${item.quantity}`;
                this.showSum(this.sumOfCart());
            }
        });
        this.showCartCount(this.getCartQuantity());
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }

    decreaseQuantity(evt) {
        const id = Number(evt.target.parentElement.parentElement.getAttribute("data-id"));
        this.cart.map(item => {
            if (item.id === id) {
                if (item.quantity === 1) return;
                item.quantity--;
                evt.target.parentElement.querySelector("span").innerHTML = `${item.quantity}`;
                this.showSum(this.sumOfCart());
            }
        });
        this.showCartCount(this.getCartQuantity());
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }


    removeItem(evt) {
        const currId = Number(evt.target.parentElement.parentElement.getAttribute("data-id"));
        const index = this.cart.findIndex(element => element.id === currId);

        this.cart.splice(index, 1);

        evt.target.parentElement.parentElement.remove();

        this.showCartCount(this.getCartQuantity());
        localStorage.setItem("cart", JSON.stringify(this.cart));
        document.querySelector(".basketTotal").innerHTML = `${this.sumOfCart()} $`;
    }

    showCartCount(value) {
        document.getElementById("cartValue").innerHTML = `${value}`;
    }

    getCartQuantity() {
        return this.cart.reduce((accumulator, value) => {
            return accumulator + value.quantity
        }, 0)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cart = new Cart();
    cart.showCart();
    cart.showCartCount(cart.getCartQuantity());
    cart.removeMulti();
    cart.quantityHandler();
    cart.validationHandler();
    cart.optionHandler();
});