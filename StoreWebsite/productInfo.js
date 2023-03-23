/* starts of header section codes*/

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const headerSecondList = document.getElementsByClassName("header-second-nav-list")[0];

toggleButton.addEventListener('click',()=>{
    headerSecondList.classList.toggle('active')
    toggleButton.classList.toggle('change')

})

let title = document.getElementById("prod-title");
let img = document.getElementById("img");
let oldPrice = document.getElementById("old-price");
let newPrice = document.getElementById("new-price");
let category = document.getElementById("category");

// to change the text from New Price to Price
let newPriceTag = document.getElementById("newPrice")

// to display some items or not
let priceDiv = document.querySelector(".price-div")

let displayItems = sessionStorage.getItem("prodInfo")
if(displayItems == "trendDeals"){
    trendDeals()
}else if (displayItems == "bestDeals"){
    bestDeals()
}else if( displayItems == "shopPage"){
    shopPage()
}


function trendDeals(){
    let data = JSON.parse(sessionStorage.getItem('trendDeals'));
    img.src = data[0]
    title.innerHTML = data[2]
    priceDiv.style.display = "none"
    newPriceTag.innerHTML = "Price:"
    newPrice.innerHTML = data[3]
    category.innerHTML = data[1]
    console.log(data)
}
function bestDeals(){
    let data = JSON.parse(sessionStorage.getItem('data'));
    img.src = data[0]
    title.innerHTML = data[2]
    priceDiv.style.display = "flex"
    newPriceTag.innerHTML = "New Price:"
    oldPrice.innerHTML = data[4]
    newPrice.innerHTML = data[3]
    category.innerHTML = data[1]
    console.log(data)

}
function shopPage(){
    let data = JSON.parse(sessionStorage.getItem('shopData'));
    img.src = data[0]
    title.innerHTML = data[2]
    
    if (data[5] !== ""){
        priceDiv.style.display = "flex"
        oldPrice.innerHTML = data[5]
        newPriceTag.innerHTML = " New Price:"
    }else{
        priceDiv.style.display = "none"
        newPriceTag.innerHTML = "Price:"
    }
    newPrice.innerHTML = data[4]
    category.innerHTML = data[1]
    console.log(data)
}