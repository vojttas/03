let carts = document.querySelectorAll('.button-add-to-cart');

let productsFappz = [
    {
        name: 'Chov zvířat',
        tag: 'chov-zvirat',
        price: 281,
        inCart: 0,
    }
]
let productsPef = [
    {
        name: 'Business Intelligence',
        tag: 'business-intelligence',
        price: 92,
        inCart: 0,
    },
    {
        name: 'Cvičebnice z obecené ekonomie 2',
        tag: 'cvicebnice-z-obecne-ekonomie-2',
        price: 87,
        inCart: 0,
    }
]
let productsTf = [
    {
        name: 'Cvičení z manažerského účetnictví',
        tag: 'cviceni-z-manazerskeho-ucetnictvi',
        price: 125,
        inCart: 0,
    }
]
let productsFld = [
    {
        name: 'Lesnické stavby',
        tag: 'lesnicke-stavby',
        price: 220,
        inCart: 0,
    }
]
let productsFzp = [
    {
        name: 'Jednotkový hydrogram',
        tag: 'jednotkovy-hydrogram',
        price: 115,
        inCart: 0,
    }
]
let productsFtz = [
    {
        name: 'Fyziologie rostlin',
        tag: 'fyziologie-rostlin',
        price: 165,
        inCart: 0,
    }
]
let productsIvp = [
    {
        name: 'Život na přelomu tisíciletí',
        tag: 'zivot-na-prelomu-tisicileti',
        price: 145,
        inCart: 0,
    }
]

for (let i = 0; i < carts.length; i++) {
let categoryUrl = document.location.href.substring(document.location.href.lastIndexOf("/")+1, document.location.href.length);

    switch (categoryUrl){
        case 'category-fappz.html':
            carts[i].addEventListener('click', () => {
                cartNumbers(productsFappz[i]);
                totalCost(productsFappz[i]);
                changeCartImg();
            })
            break;
        case 'category-pef.html':
            carts[i].addEventListener('click', () => {
                cartNumbers(productsPef[i]);
                totalCost(productsPef[i]);
                changeCartImg();
            })
            break;
        case 'category-tf.html':
            carts[i].addEventListener('click', () => {
                cartNumbers(productsTf[i]);
                totalCost(productsTf[i]);
                changeCartImg();
            })
            break;
        case 'category-fld.html':
            carts[i].addEventListener('click', () => {
                cartNumbers(productsFld[i]);
                totalCost(productsFld[i]);
                changeCartImg();
            })
            break;
        case 'category-fzp.html':
            carts[i].addEventListener('click', () => {
                cartNumbers(productsFzp[i]);
                totalCost(productsFzp[i]);
                changeCartImg();
            })
            break;
        case 'category-ftz.html':
            carts[i].addEventListener('click', () => {
                cartNumbers(productsFtz[i]);
                totalCost(productsFtz[i]);
                changeCartImg();
            })
            break;
        case 'category-ivp.html':
            carts[i].addEventListener('click', () => {
                cartNumbers(productsIvp[i]);
                totalCost(productsIvp[i]);
                changeCartImg();
            })
            break;
    }
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart-items-number span').textContent = productNumbers;
    }
    changeCartImg();
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (action === "decrease") {
        localStorage.setItem('cartNumbers', productNumbers -= 1) ;
        document.querySelector('.cart-items-number span').textContent = productNumbers - 1;
    } else if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-items-number span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-items-number span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] === undefined) {
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

function totalCost(product, action) {
    let cartCost = localStorage.getItem('totalCost');

    if (action === "decrease") {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost - product.price);
    } else if (cartCost != null) {
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
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class="product-bg">
            <div class="product">
                <!--<ion-icon name="close-circle-outline" class="remove-car-img"></ion-icon>-->
                    <a href="skripta1.html" class="car-link"><img src="./img/skripta-img/${item.tag}.jpg" alt="${item.tag}"></a>
                    <span>${item.name}</span>
            </div>
            <div class="price">${item.price} Kč</div>
            <div class="quantity">
                <!--<ion-icon class="decrease" name="chevron-back-circle-outline"></ion-icon>-->
                <span>${item.inCart}</span>                
                <!--<ion-icon class="increase" name="chevron-forward-circle-outline"></ion-icon>-->
            </div>
            <div class="total">
            ${item.inCart * item.price} Kč
            </div>
        </div>
            
            `
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h3 class="basketTotalTitle">Celková cena: </h3>
            <h3 class="basketTotal" id="basketTotal">${cartCost} Kč</h3>
            
        `
    }
    deleteButtons();
    manageQuantity();
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/š/, 's').replace(/,/, '').replace(/ /g, '-');
            console.log(productName);
            localStorage.setItem('cartNumbers', productNumbers - cartItems
                [productName].inCart);
            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));
            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            hideNextBtn();
            displayCart();
            onLoadCartNumbers();
        });
    }

}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = localStorage.getItem('productsInCart');
    let currentQuantity = 0;
    let currentProduct = "";
    cartItems = JSON.parse(cartItems);

    for (let i = 0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.trim().toLowerCase().replace(/š/, 's').replace(/,/, '').replace(/ /g, '-');

            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });
    }
    for (let i = 0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', () => {
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.trim().toLowerCase().replace(/š/, 's').replace(/,/, '').replace(/ /g, '-');

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function changeCartImg() {
    let cart = document.querySelector('.cart-items-number span').textContent;
    let cartNumber = document.querySelector('.cart-items-number');
    /*console.log("cartText=", cart);*/
    if (cart !== "0") {
        document.querySelector('.cart-btn').src = "img/Cart_full.png";
        cartNumber.style.display = "block";

    } else {
        document.querySelector('.cart-btn').src = "img/Cart_empty.png";
        cartNumber.style.display = "none";
    }
}

function hideNextBtn() {
    let productNumbers = localStorage.getItem('cartNumbers');
    let nextStepBtn = document.querySelector('.button-next-step');
    if (productNumbers === "0" || productNumbers == null) {
        nextStepBtn.style.display = "none";
    } else {
        nextStepBtn.style.display = "block";
    }

}

onLoadCartNumbers();
displayCart();
