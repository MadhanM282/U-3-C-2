function display(data){
var arr = JSON.parse(localStorage.getItem("cart"))||[]
let count = arr.length;

    data.map(function (ele){
        
        
        let div = document.createElement("div");

        let name = document.createElement("h2");
        name.innerHTML= ele.strCategory;

        let img = document.createElement("img");
        img.src = ele.strCategoryThumb

        let price = document.createElement("h3");
        price.innerHTML =Math.floor(Math.random()*500)


        // let rs = Number(price.innerHTML);

        // // rs = rs.split("");
        // total = total + rs;
        // console.log('total', total);
        // localStorage.setItem("total",JSON.stringify(total))
        

        let button = document.createElement("button");
        button.innerHTML="Add To Cart"
        button.onclick = function () {
            document.querySelector(".count").innerHTML=""
            let items = []
            let obj = {
                name:name.innerHTML,
                img:img.src,
                price:price.innerHTML,
            }
            items.push(obj.name,obj.img,obj.price)
            arr.push(items)
            
            count++;
            document.querySelector(".count").append(count)
            
            localStorage.setItem("cart",JSON.stringify(arr))
        }


        div.append(img,name,price,button)
        document.querySelector(".main").append(div);
        
    })
    

}


async function list(){
    let url = `https://www.themealdb.com/api/json/v1/1/categories.php`

    let response = await fetch(url)

    let data = await response.json()
    console.log('data', data.categories);

    display(data.categories)
}
list()

function carting(){
    window.location.href = "cart.html"
}

