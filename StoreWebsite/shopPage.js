/* starts of header section codes*/

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const headerSecondList = document.getElementsByClassName("header-second-nav-list")[0];
let card = document.getElementsByClassName("content-card-div");

toggleButton.addEventListener('click',()=>{
  headerSecondList.classList.toggle('active')
  toggleButton.classList.toggle('change')

})


/* main-section code */

function dropDown(){
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}

/* this is where you can show or hide the aside tag */

let mainAside = document.getElementById("main-section-aside");
let isClicked = true;
let showOrHideAside = document.querySelector("#showOrHideAside");

let firstCardContainer = document.getElementById("first-card-container");
let mainSectionBody = document.getElementById("main-section-body")
function hideAside(){

  if(isClicked){
    mainAside.style.display = 'none';
    showOrHideAside.innerHTML = "Hide Filter";
    firstCardContainer.style.gridTemplateColumns ="repeat(4, auto)";
    mainSectionBody.style.width = "100%"

    isClicked = false;
  }else{
    mainAside.style.display = 'flex'
    showOrHideAside.innerHTML = "Show Filter"
    firstCardContainer.style.gridTemplateColumns ="repeat(3, auto)"
   
    isClicked = true;
  }
}

/* main-contents code */

/* aside codes */
let genderList = document.getElementById("gender-div");
let conditionList = document.getElementById("condition-div");
let colorPalette = document.getElementById("color-palette")


let conditionCheckboxes = document.getElementById("condition-checkboxes");
let genderCheckboxes = document.getElementById("gender-checkboxes");
let colorListPalette = document.getElementById("color-list-palette") 

genderList.addEventListener(`click`, ()=>{

  genderCheckboxes.classList.toggle("gender-list");
})
conditionList.addEventListener(`click`, ()=>{

  conditionCheckboxes.classList.toggle("condition-list");
})
colorPalette.addEventListener(`click`,  ()=>{
  colorListPalette.classList.toggle("color-list")
})
/* main-section-body div codes */
/* this is where to pass the cards datas from the first page */

let data = sessionStorage.getItem("listview")

if(data == "shopList"){
 
  mainShop()

}else if(data == 'trendingList'){
  trendingList()
}else if(data == 'dealList'){
  bestDeals() 
}

function mainShop(){
  
  let shopArray = [
    [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "", // here is a small discreption for the product.
      "199$",
      "", // here is the discounted
    ],
    [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "",
      "199$",
      "",      
    ],
    [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "",
      "199$",
      "",
    ],
    [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "",
      "199$",
      "",
    ],
    [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "",
      "199$",
      "",

    ],
    [
      "https://i.pinimg.com/564x/2e/e1/25/2ee125c44f55f9ba271eed224a410d33.jpg",
      "Men, Football kits",
      "Brazil 2022/23 Stadium Home",
      "",
      "199$",
      "",
    ],
    [
      "https://i.pinimg.com/564x/20/6f/d5/206fd5f2e097717eee5a8e0ae94030c6.jpg",
      "Men, Football kits",
      "Saudi Arabia 2022/23 Away Jersey",
      "",
      "110 $",
      "",
    ],
    [
      "https://i.pinimg.com/564x/76/a8/79/76a879179757d3a9ad2c12bc24e7457a.jpg",
      "Men, Football kits",
      "Man City Football Kit",
      "",
      "90 $",
      "",
    ],
    [
      "https://i.pinimg.com/564x/b5/15/ad/b515ad05493a2a3686f10d6d82cf6910.jpg",
      "Men, Football kits",
      "Real Madrid 19/20 Home Kit",
      "",
      "200 $",
      "",
    ],
    [
      "https://i.pinimg.com/564x/35/06/5d/35065d3b1a55c8dd0ff604849ff4a6df.jpg",
      "Men, Football kits",
      "Real Madrid 19/20 Away Kit",
      "",
      "199 $",
      "",

    ],
  ]
  
  listView(shopArray)
  passData(shopArray)
  /*  this is where you pass the data of the cards to productInfo page  */
/* 
  let counter = 0;

  for (let i = 0; i < card.length ; i++)
  card[i].onclick = () =>{
    sessionStorage.setItem("prodInfo" , "shopPage")
    while(counter < card.length){
      if(i === counter){
        sessionStorage.setItem('shopData',JSON.stringify(shopArray[counter]))
      }

      counter++
    }
    window.open("productInfo.html" ,"_self" )
  }
   */
}
function trendingList(){
  let trendArray = [
    [
      "https://images.pexels.com/photos/7501135/pexels-photo-7501135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "",
      "199$",
      "",
    ],
    [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "",
      "199$",
      "",
    ],
    [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "",
      "199$",
      ""
    ],
    [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "",
      "199$",
      "",
    ],
    [
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "Men, Shoes",
      "Nike Basketball Shoes",
      "",
      "199$",
      "",
    ],
    
  ]
  listView(trendArray)
  passData(trendArray)
  /*  this is where you pass the data of the cards to productInfo page  */
 /*  let counter = 0;

  for (let i = 0; i < card.length ; i++)
  card[i].onclick = () =>{
    sessionStorage.setItem("prodInfo" , "shopPage")
    while(counter < card.length){
      if(i === counter){
        sessionStorage.setItem('shopData',JSON.stringify(trendArray[counter]))
      }

      counter++
    }
    window.open("productInfo.html" ,"_self" )
  }
 */
}
function bestDeals(){
  let dealArray =[
    [
      "https://i.pinimg.com/564x/2e/e1/25/2ee125c44f55f9ba271eed224a410d33.jpg",
      "Men, Football kits",
      "Brazil 2022/23 Stadium Home",
      "",
      "199$",
      "250$",
    ],
    [
      "https://i.pinimg.com/564x/20/6f/d5/206fd5f2e097717eee5a8e0ae94030c6.jpg",
      "Men, Football kits",
      "Saudi Arabia 2022/23 Away Jersey",
      "",
      "110 $",
      "199 $",
    ],
    [
      "https://i.pinimg.com/564x/76/a8/79/76a879179757d3a9ad2c12bc24e7457a.jpg",
      "Men, Football kits",
      "Man City Football Kit",
      "",
      "90 $",
      "140 $",
    ],
    [
      "https://i.pinimg.com/564x/b5/15/ad/b515ad05493a2a3686f10d6d82cf6910.jpg",
      "Men, Football kits",
      "Real Madrid 19/20 Home Kit",
      "",
      "200 $",
      "300 $",
    ],
    [
      "https://i.pinimg.com/564x/35/06/5d/35065d3b1a55c8dd0ff604849ff4a6df.jpg",
      "Men, Football kits",
      "Real Madrid 19/20 Away Kit",
      "",
      "199 $",
      "250 $",
    ],
  
  ]
  listView(dealArray)
  passData(dealArray)
  /*  this is where you pass the data of the cards to productInfo page  */
/* 
  let counter = 0;

  for (let i = 0; i < card.length ; i++)
  card[i].onclick = () =>{
    sessionStorage.setItem("prodInfo" , "shopPage")
    while(counter < card.length){
      if(i === counter){
        sessionStorage.setItem('shopData',JSON.stringify(dealArray[counter]))
      }

      counter++
    }
    window.open("productInfo.html" ,"_self" )
  }
   */
}
function listView(shopArray){

   
  let listContainer = document.getElementById('first-card-container')
  shopArray.forEach( item =>{

    listContainer.innerHTML = listContainer.innerHTML + 
    `
    
    <div id="content-card-div" class="content-card-div">

      <div class="product-details">
          <img id="prod-image" src="${item[0]}" alt="">
          <br>
          <span id="prod-listing">
             ${item[1]}
          </span>
          <h4 id="product-name">${item[2]}</h4>
          <br>
          <span id="prod-disc">${item[3]}</span>
          <div class="price-tag">
              <span id="prod-price">${item[4]}</span>
              <span id="prod-discount">${item[5]}</span>
          </div>
          <div class="btn-container">
            <div class="card-btns">
                <button id="cart-btn">Add To Cart</button>
                <button id="buy-btn">Buy now </button>
            </div>
          </div>
      </div>

    </div>
    `
  })
}

// the two fuctions below is for the mobile verstion of the aside tag
function showBottomSheet(){
  let container = document.querySelector("#bottomSheetContainer");
  let bottomSheet = document.querySelector("#bottomSheetContainer #bottom-sheet-content");
  let shopBody = document.querySelector("#shopBody")

  container.classList.add('active');
  shopBody.classList.add('active');
  setTimeout(()=>{

    bottomSheet.classList.add('active');
  }, 0.5)

}
function hideBottomSheet(){
  let container = document.querySelector("#bottomSheetContainer");
  let bottomSheet = document.querySelector("#bottomSheetContainer #bottom-sheet-content");
  let shopBody = document.querySelector("#shopBody")


  bottomSheet.classList.remove('active');
  shopBody.classList.remove('active');


  setTimeout(()=>{
    container.classList.remove('active')
  }, 400)
}

// this is where you pass card's data to the product page.
function passData(array){

  let counter = 0;

  for (let i = 0; i < card.length ; i++)
  card[i].onclick = () =>{
    sessionStorage.setItem("prodInfo" , "shopPage")
    while(counter < card.length){
      if(i === counter){
        sessionStorage.setItem('shopData',JSON.stringify(array[counter]))
      }

      counter++
    }
    window.open("productInfo.html" ,"_self" )
  }
  
 
}