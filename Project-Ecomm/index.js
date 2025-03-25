let displayData = document.querySelector("#displayData")
let btn = document.getElementById("btn")



console.log(displayData);

let all_products = ""

async function FetchData(url) {
    let response = await fetch(url);
    try{
        let data = await response.json(); 
        console.log(data.products);
        all_products = data.products
        let  jsonData = JSON.stringify(all_products)
        localStorage.setItem("allproduct",jsonData)

        DisplayAllProduct(data.products)
    }
    catch(err){
        console.error(err);
    }
}
FetchData("https://dummyjson.com/products")
// the promises
// FetchData("https://dummyjson.com/products")
// fetch("https://dummyjson.com/products")
// .then((e)=>{return e.json()})
// .then((e)=>{
//     let {products} = e   // object destructuring
//     DisplayAllProduct(products)
// })
// .catch((error)=>{console.error(error);
// })

function DisplayAllProduct(p){
    
    let product_Details = p;
    // console.log(product_Details);
    
    let input = " ";
    product_Details.map((val)=>{
        console.log(val);
        let prod_id = val.id
        let prod_img = val.images[0]
        let prod_title = val.title
        let prod_cat = val.category
        let prod_price = val.price
        let prod_rating = val.rating
        input = input+`
        <div class="Main">
        <div class = "card">
        <img class = "img" src = ${prod_img} alt=${prod_title}/>
        <h1 class="title">${prod_title}</h1>
        <h2 class = "category">Category: ${prod_cat}</h2>
        <p class = "details"><span class = "price">Price: ${prod_price} 💲</span> <span class = "rating">Ratings: ${prod_rating}</span> </p>
        <a href = "ProductView.html" ><button onClick="getId(${prod_id})" class = "btn" id = "btn">View More</button></a>
        </div>
        </div>
        `
    })

    displayData.innerHTML = input
}

function getId(id){
    localStorage.setItem("id",id)
}

let search = document.getElementById("search")
search.addEventListener("input",(e)=>{
    let unValue =  e.target.value.toLowerCase();
    let filterData = all_products.filter((val)=>{
        return val.title.toLowerCase().includes(unValue) || val.category.toLowerCase().includes(unValue)
    })
    DisplayAllProduct(filterData)
 })