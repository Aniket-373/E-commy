
let allproduct = JSON.parse(localStorage.getItem("allproduct"));
let uniqueid = JSON.parse(localStorage.getItem("id"))
let productcnt= document.querySelector("#productcnt")

let uniqueProduct = allproduct.find((val)=>{
    return val.id === uniqueid
})

if(uniqueProduct){
displaySpecificProduct(uniqueProduct);
}
else{
    alert("Product Not Found")
}

function displaySpecificProduct(p){
 let input = " ";
    
        let prod_img = p.images[0]
        let prod_title = p.title
        let prod_cat = p.category
        let prod_desc = p.description
        let prod_price = p.price
        let prod_rating = p.rating
        let prod_warranty = p.warrantyInformation
        let status = p.availabilityStatus
        let prod_reviews = p.reviews[0]

        
        
        input = input+`
        <div class="Main">
        <div class = "card">
        <img class = "img" src = ${prod_img} alt=${prod_title}/>
        <div class = "desc">
        <h1 class="title">${prod_title}</h1>
        <h1 class = "description">${prod_desc}</h1>
        <h2 class = "category">Category: ${prod_cat}</h2>
        <p class = "details"><span class = "price">Price: ${prod_price} 💲</span> <span class = "rating">Ratings: ${prod_rating} ⭐</span> </p>
        <span class = "warranty"> ${prod_warranty}</span>
        <span class = "status">${status}</span>
        <div class = "reviews">
        <h1>Reviews 📨</h1>
        <p>Reviews: ${prod_reviews.rating}</p>
        <p>Comments: ${prod_reviews.comment}</p>
        <p>Date: ${prod_reviews.date}</p>
        <p>Name: ${prod_reviews.reviewerName}</p>
        <p>Email: ${prod_reviews.reviewerEmail}</p>

        </div>
        <button id="addtocart" >Add To Cart</button>
        </div>
        </div>
        </div>
        `;

productcnt.innerHTML = input
}

 // to add product in cart
 let addtocart = document.getElementById("addtocart")
 addtocart.addEventListener("click",()=>{
     let cartProduct = JSON.parse(localStorage.getItem("cart")) || []
     let isPresent = cartProduct.find((val)=>{
         return val.id === uniqueProduct.id
     })
     if(isPresent){
         alert("Product already in cart")
     }
     else{
         cartProduct.push(uniqueProduct);
     localStorage.setItem("cart", JSON.stringify((cartProduct)))
     alert("Product added to cart")
     }
     window.location.href = "cart.html"
 })