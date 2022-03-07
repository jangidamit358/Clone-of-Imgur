// https://api.imgur.com/post/v1/posts?client_id=88c1a76b6435585&filter%5Bsection%5D=eq%3Ahot&include=adtiles%2Cadconfig%2Ccover%2Cviral&page=1&sort=-time
let showAllBox = document.getElementById("showBox")
let data
let size = 0
fetch("https://api.unsplash.com/photos/?client_id=Xns1I3skPVZg7EqbS7cMEMyv-wgsziYcHlbUlWu7b9g")
    .then((data) => data.json())
    .then((res) => {
        data = res
        console.log(data)
        size = Math.floor(res.length / 4)
        //   console.log(res.length)  
        // console.log(size)
        let box1 = document.querySelector(".box1")
        let box2 = document.querySelector(".box2")
        let box3 = document.querySelector(".box3")
        let box4 = document.querySelector(".box4")

        console.log(size)
        for (let i = 0; i < size; i++) {
            // referrerpolicy="no-referrer"
            let oneItem = document.createElement("div")
            oneItem.setAttribute("class", "oneItem")
            oneItem.addEventListener("click", () => {
                window.location.href = "product.html"
            })


            oneItem.setAttribute("style", "background-image: url(" + data[i].urls.regular + ")");
            // oneItem.setAttribute("referrerpolicy","no-referrer")
            let textDiv = document.createElement("div")
            textDiv.setAttribute("class", "textDiv")
            let p = document.createElement("p")
            p.textContent = data[i].user.name
            // textDiv.textContent="aa"
            textDiv.append(p)
            oneItem.append(textDiv)
            box1.append(oneItem)


            let oneItem2 = document.createElement("div")
            oneItem2.setAttribute("class","oneItem")
            oneItem2.addEventListener("click",()=>{
                window.location.href="product.html"
            })
            

            oneItem2.setAttribute("style", "background-image: url("+ data[i+size].urls.regular +")");

            let textDiv2=document.createElement("div")
            textDiv2.setAttribute("class","textDiv")
            let p2=document.createElement("p")
            p2.textContent=data[i+size].user.name
            // textDiv.textContent="aa"
            textDiv2.append(p2)
            oneItem2.append(textDiv2)
            box2.append(oneItem2)


            let oneItem3 = document.createElement("div")
            oneItem3.setAttribute("class","oneItem")
            oneItem3.addEventListener("click",()=>{
                window.location.href="product.html"
            })
           

            oneItem3.setAttribute("style", "background-image: url("+ data[i+size+size].urls.regular +")");

            let textDiv3=document.createElement("div")
            textDiv3.setAttribute("class","textDiv")
            let p3=document.createElement("p")
            p3.textContent=data[i+size+size].user.name
            // textDiv.textContent="aa"
            textDiv3.append(p3)
            oneItem3.append(textDiv3)
            box3.append(oneItem3)


            let oneItem4 = document.createElement("div")
            oneItem4.setAttribute("class","oneItem")
            oneItem4.addEventListener("click",()=>{
                window.location.href="product.html"
            })
           

            oneItem4.setAttribute("style", "background-image: url("+ data[i+size+size+size].urls.regular +")");

            let textDiv4=document.createElement("div")
            textDiv4.setAttribute("class","textDiv")
            let p4=document.createElement("p")
            p4.textContent=data[i+size+size+size].user.name
            // textDiv.textContent="aa"
            textDiv4.append(p4)
            oneItem4.append(textDiv4)
            box4.append(oneItem4)
            
            
        }
    })

function nextpage() {
    window.location.href = "product.html"
}
// console.log(size)

