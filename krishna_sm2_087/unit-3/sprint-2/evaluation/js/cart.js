let cart = JSON.parse(localStorage.getItem("cart"))||[];
var total = 0;

function carts (){
    cart.map(function (ele,i){
        console.log(ele)
        let div = document.createElement("div");

        let name = document.createElement("h2");
        name.innerHTML= ele[0]
        console.log('name', name.innerHTML);



        let img = document.createElement("img");
        img.src = ele[1]
        console.log('src', img.src);

        let price = document.createElement("h3");
        price.innerHTML =Number(ele[2])

        document.querySelector(".price").innerHTML=""
        let p =document.createElement("p")
        p.innerHTML="Total: RS/-"
        add = document.createElement("p")
        total =total+Number(price.textContent)
        console.log('total', total);
        add.innerHTML = total;
        
        


        let button = document.createElement("button");
        button.innerHTML="Delete"
        button.onclick = function( ) {
        
            var del = JSON.parse(localStorage.getItem("cart"))
            del.splice(ele,1);

            localStorage.setItem("cart",JSON.stringify(del))
        }

        

        

        div.append(img,name,price,button)
        
        document.querySelector(".cart").append(div);
        document.querySelector(".price").append(p,add)
        
    })
    // var total = JSON.parse(localStorage.getItem("total"))||[];
    // document.querySelector(".price").append(total)
}
function checkout(){
    window.location.href = "checkout.html"
}

carts();