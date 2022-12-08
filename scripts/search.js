function saveValue() {
    let searchedValue = document.querySelector(".search-txt").value;
    localStorage.setItem("searchedValue", searchedValue);

}

function dispaySearchedValue() {
    let getSearchedValue = localStorage.getItem("searchedValue");
    console.log(getSearchedValue);
    let searched = document.querySelector('.searched');
    searched.innerHTML = `
        <p>Je nám líto, ale Vašemu požadavku neodpovídá žádný záznam. Ať hledám jak hledám, <b><i>${getSearchedValue}</i></b>
            jsem nenašel.</p>
        `
    if(getSearchedValue === ''){
        searched.innerHTML = `
        <p>Musíte zadat výraz, který chcete vyhledat</p>
        `
    }
}