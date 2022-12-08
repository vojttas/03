function loadPaymentInfo() {
    let payMethod = document.getElementById("payment-option");
    let selectedPayMethod = payMethod.options[payMethod.selectedIndex].text;
    localStorage.setItem('payMethod', selectedPayMethod);
}

function loadClientBillingInfo() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone-number").value;
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    if (phoneNumber != null) {
        localStorage.setItem('phoneNumber', phoneNumber);
    } else {
        localStorage.setItem('phoneNumber', "nevyplněno");
    }
}

function printAllInfo() {
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let email = localStorage.getItem('email');
    let phoneNumber = localStorage.getItem('phoneNumber');
    let payMethod = localStorage.getItem('payMethod');
    let orderInfo = document.querySelector(".order-final-info");
    orderInfo.innerHTML += `
        <h3>Jméno: </h3><p>${firstName}</p>
        <h3>Přijmení: </h3><p>${lastName}</p>
        <h3>Email: </h3><p>${email}</p>
        <h3>Telefon: </h3><p>${phoneNumber}</p>
        <h3>Způsob platby: </h3><p>${payMethod}</p>          
        `
    let cartCost = localStorage.getItem('totalCost');
    let totalCartConst = +cartCost;
    let finalPrice = document.getElementById("basketTotal");
    finalPrice.innerHTML = totalCartConst.toString()+ " Kč";
    clearCart();
}

function clearCart(){
    localStorage.removeItem('productsInCart');
    localStorage.removeItem('totalCost');
    localStorage.removeItem('cartNumbers');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('phoneNumber');
    localStorage.removeItem('payMethod');
}