/* starts of header section codes*/

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const headerSecondList = document.getElementsByClassName("header-second-nav-list")[0];

toggleButton.addEventListener('click',()=>{
  
  headerSecondList.classList.toggle('active')
  toggleButton.classList.toggle('change')
})

/*  this is where you pass the data of the array to shop page  */

let shopButton = document.getElementById("shop-button");

shopButton.addEventListener(`click`, () =>{

  sessionStorage.setItem("listview" , "shopList")
  window.open("shopPage.html", "_self")
  
})
/* end of header section codes */

/* starts of second section codes*/
let slideIndex = 1
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}
function currentSlide(n){
  showSlides(slideIndex = n);
}
function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
/* end of second section codes*/

/* start of forth section codes*/
let trendArray =
[
  [
    "https://images.pexels.com/photos/7501135/pexels-photo-7501135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Women, Shoes",
    "Adidas Running Shoes",
    "300$"
  ],
  [
    "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Men, Shoes",
    "Nike Basketball Shoes",
    "199$",
  ],
  [
    "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Men, Shoes",
    "Nike Basketball Shoes",
    "199$",
  ],
  [
    "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Men, Shoes",
    "Nike Basketball Shoes",
    "199$",
  ],
  [
    "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Men, Shoes",
    "Nike Basketball Shoes",
    "199$",
  ],
  [
    "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Men, Shoes",
    "Nike Basketball Shoes",
    "199$",
  ],
  
  
]

let container = document.getElementById("forth-section-container");

trendArray.forEach(trend =>{
  container.innerHTML = container.innerHTML + 
  `
  <div id="card" class="forth-section-card ">

  <img id="product-img" src="${trend[0]}" alt="">

  <span id="product-listing">
  ${trend[1]}
  </span>
  <h4 id="product-name">${trend[2]}</h4>
  <br>
  <div class="price-div">

  <span id="product-price">${trend[3]}</span>

  <div class="price-icons" >
  <i class="fa-regular fa-heart scale-card" style="color: black;"></i>
  <i class="fa fa-shopping-bag scale-card" style="color:black;"></i>
  </div>
  </div>
  </div>

  `
})
/*  this is where you pass the data of the array to shop page  */

let moreOfTrending = document.getElementById('moreOfTrending');
moreOfTrending.addEventListener('click',()=>{
  sessionStorage.setItem("listview" , "trendingList")
  window.open("shopPage.html", "_self")
})

/*  this is where you pass the data of the cards to productInfo page  */


let forthCard = document.getElementsByClassName("forth-section-card");
var counter = 0;
for (let i = 0; i < forthCard.length; i++){
  forthCard[i].onclick = function() {
    sessionStorage.setItem("prodInfo" , "trendDeals")
    while( counter < forthCard.length){
      if (i === counter){
        sessionStorage.setItem('trendDeals',JSON.stringify(trendArray[counter]) )
      }

      counter++
    }
    
    window.open("productInfo.html" ,"_self" )
    sessionStorage.clear
  }

}

/* end of forth section codes*/

/* start of fifth section codes*/
let bestDeals = 
[
  [
    "https://i.pinimg.com/564x/2e/e1/25/2ee125c44f55f9ba271eed224a410d33.jpg",
    "Men, Football kits",
    "Brazil 2022/23 Stadium Home",
    "199$",
    "250$",
  ],
  [
    "https://i.pinimg.com/564x/20/6f/d5/206fd5f2e097717eee5a8e0ae94030c6.jpg",
    "Men, Football kits",
    "Saudi Arabia 2022/23 Away Jersey",
    "110 $",
    "199 $",
  ],
  [
    "https://i.pinimg.com/564x/76/a8/79/76a879179757d3a9ad2c12bc24e7457a.jpg",
    "Men, Football kits",
    "Man City Football Kit",
    "90 $",
    "140 $",
  ],
  [
    "https://i.pinimg.com/564x/b5/15/ad/b515ad05493a2a3686f10d6d82cf6910.jpg",
    "Men, Football kits",
    "Real Madrid 19/20 Home Kit",
    "200 $",
    "300 $",
  ],
  [
    "https://i.pinimg.com/564x/35/06/5d/35065d3b1a55c8dd0ff604849ff4a6df.jpg",
    "Men, Football kits",
    "Real Madrid 19/20 Away Kit",
    "199 $",
    "250 $",
  ],

]

let fifthContainer = document.getElementById("fifth-section-container");

bestDeals.forEach(deal =>{
  fifthContainer.innerHTML = fifthContainer.innerHTML + 
  `
  <div id="fifth-section-card" class="fifth-section-card" >

  <div class="product-details">

      <img id="product-img" src="${deal[0]}" alt="">

      <span id="product-listing">
          ${deal[1]}
      </span>
     
      <h4 id="product-name" > ${deal[2]}</h4>
      <br>
      <div class="price-div">
          <div class="price-content">
              <span id="product-price scale-card">${deal[3]}</span>
              <span id="product-discount">${deal[4]}</span>
          </div>
          <div class="price-icons" >
              <i class="fa-regular fa-heart scale-card" style="color: black;"></i>
              <i class="fa fa-shopping-bag scale-card" style="color:black;"></i>
          </div>
      </div>
  </div>

  </div>
  `
})

/*  this is where you pass the data of the cards to productInfo page  */

let fifthCard = document.getElementsByClassName("fifth-section-card");
var counter = 0;
for (let i = 0; i < fifthCard.length; i++){
  fifthCard[i].onclick = function() {
    sessionStorage.setItem("prodInfo" , "bestDeals")
    while( counter < fifthCard.length){
      if (i === counter){
        sessionStorage.setItem('data',JSON.stringify(bestDeals[counter]) )
      }

      counter++
    }
    
    window.open("productInfo.html" ,"_self" )
    sessionStorage.clear
  }

}


/*  this is where you pass the data of the array to shop page  */

let moreOfDeals = document.getElementById('moreOfDeals');
moreOfDeals.addEventListener('click',()=>{
  sessionStorage.setItem("listview" , "dealList")
  window.open("shopPage.html", "_self")
})
/* end of fifth section codes*/

