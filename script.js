let productsection=document.querySelector(".products")

let request=new XMLHttpRequest();
request.onload=()=>{
    if(request.readyState===4){
        console.log("all is ok")
        if(request.status===200){
            let resopnse=JSON.parse(request.responseText)
            let products=resopnse.products
            console.log(products)
            products.map((element,index)=>{
                productsection.innerHTML+=`
                 <div class="cards">
                    <div class="card">
                 <img src="${element.thumbnail}" alt="">
                
                 <h3>title:${element.title}</h3>
                  <div class="parent">
                 <p>description:${element.description}</p>
                 <p>price:<span>${element.price}</span></p></div>
                <i class="fa-solid fa-heart" id="icon"></i>
               </div>
                 </div>
                
                `
                let icon=document.querySelector("#icon")
              
                    icon.addEventListener("click",()=>{
                        icon.classList.toggle("check")
                       
                    
                    
                }) 
                         
                })
               
     
           
        }
    }
};
request.open("Get","https://dummyjson.com/products",true);

request.send();
function getCategory(category){
    productsection.innerHTML="";
    let request=new XMLHttpRequest();
    request.onload=()=>{
        if(request.readyState===4){
            console.log("all is ok")
            if(request.status===200){
                let resopnse=JSON.parse(request.responseText)
                let products=resopnse.products
                console.log(products)
                products.map((element,index)=>{
                    productsection.innerHTML+=`

                       <div class="cards">
                    <div class="card">
                 <img src="${element.thumbnail}" alt="">
                 <h3>title:${element.title}</h3>
                 <p>description:${element.description}</p>
                 <p>price:<span>${element.price}</span></p>
                <i class="fa-regular fa-heart" id="icon" ></i>
               </div>
                 </div>
                 
                    `
                     let icon=document.querySelector("#icon")
                    icon.addEventListener("click",()=>{
                            icon.classList.toggle("check")
                   
                       })
                      
                })     

            }
        }
    };
    request.open("Get",`https://dummyjson.com/products/category/${category}`,true);
    request.send();

};

let productname=document.querySelector(".search")
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
      e.preventDefault();
      let out=productname.value;
      if(out=="")
        alert("nothing in the search ")
    else{
      searchproducts(out);
     
    }
      productname.value=""
});
function searchproducts(productname){
    productsection.innerHTML="";
    let request=new XMLHttpRequest();
    request.onload=()=>{
        if(request.readyState===4){
            console.log("all is ok")
            if(request.status===200){
                let resopnse=JSON.parse(request.responseText)
                let products=resopnse.products
                console.log(products)
                products.map((element,index)=>{
                    productsection.innerHTML+=`
                       <div class="cards">
                    <div class="card">
                 <img src="${element.thumbnail}" alt="">
                 <h3>title:${element.title}</h3>
                 <p>description:${element.description}</p>
                 <p>price:<span>${element.price}</span></p>
                <i class="fa-regular fa-heart" id="icon" ></i>
               </div>
                 </div>
                 
                    `
                })     
            }
        }
    
    };
    request.open("Get",`https://dummyjson.com/products/search?q=${productname}`,true);
    request.send();


};

                 
 