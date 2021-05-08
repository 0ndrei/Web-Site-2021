class template {
    static cartProduct = (item) => (
        ` <li data-id="${item.id}">
                  <div class="remove__btn">
                     <em class="fas fa-trash-alt remove__item"></em>
                  </div>
        
                  <div class="product__img">
                     <img src="./${item.image}" alt="">
                  </div>
        
                  <div class="product__name">
                     <span>${item.name}</span>
                  </div>
        
                  <div class="product__quantity">
                     <em class="fas fa-minus-circle decrease__item"></em>
                     <span>${item.quantity}</span>
                     <em class="fas fa-plus-circle increase__item"></em>
                  </div>
                  
                  <div class="product__price">
                     $<span>${item.price}</span>
                  </div>
             </li>`
    );

    static shopProduct = item => (
        `<div class="item-container" data-id="${item.id}">
                  <div class="card-item">
                  <p class="item-name">${item.name}</p>
                     <img src="img/${item.tag}.png" alt="img" class="card-img">
                     <p class="item-description">${item.description}</p>
                  </div>
                  <h3 class="item-price">Price : $ <span class="item-price-value">${item.price}</span></h3>
                  <a class="add-cart"><em class="fa fa-shopping-basket add-to-cart"></em></a>
        </div>`
    )

}