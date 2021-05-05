class Cart {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    _shippingPrice = 0;

    showCart() {
        const cartContainer = document.querySelector('.products');

        this.cart.forEach(product => {
            cartContainer.innerHTML += Template.cartProduct(product);
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

        this.validateName();

        validateButton.addEventListener('click', () => {
            this.validateData();
        })
    }

    validateName() {
        const fullName = document.getElementById('full__name');
        const city = document.getElementById('city');

        [fullName, city].forEach(element => {
            element.addEventListener('keyup', () => {
                element.value = element.value.replace(/[^a-zA-Z]/g, '')
            })
        });
    }

    optionHandler() {
        const selector = document.getElementById('delivery');
        selector.onchange = ((evt) => {
            this._shippingPrice = parseInt(evt.target.value);
            this.showSum(this.sumOfCart());
        });
    }

    validateData() {
        const phoneNumber = document.getElementById('phone');
        const address = document.getElementById('address');

        const addressRegexp = /^[a-zA-Z0-9\s,'-]{4,}$/;
        const phoneRegexp = /^[\+373|373]*[0]*[0-9]{7,8}$/;

        if (!(new RegExp(addressRegexp).test(address.value) && address.value.length < 20)) {
            console.log("Wrong Address");
            return;
        }

        if (!(new RegExp(phoneRegexp).test(phoneNumber.value))) {
            console.log("Wrong Phone Number");
            return;
        }

        console.log("Data Successfully Sent");
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









