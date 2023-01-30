const items=[
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/4.jpg",
    title:"blue sofa" },
    
    {img:"/1.jpg",
    title:"fucking sofa" },
    
    {img:"/5.jpg",
    title:"nice sofa" },
    
    {img:"/2.jpg",
    title:"fucking sofa" },
    
    {img:"/3.jpg",
    title:"fucking sofa" },
    
                               


]
const itemsContainer=document.querySelector(".container")
const pageBtn=document.querySelector(".pagebuttons")


  
 let currentPage=1
let itemsInPage=25

let countPages= Math.ceil(items.length/itemsInPage)


for(let i=1 ; i<=countPages ; i++){
const newBtn=document.createElement("button")
newBtn.classList.add("pagebtn")
newBtn.setAttribute("data-id",i)
newBtn.innerHTML=`${i}`
pageBtn.appendChild(newBtn)


}




function displayitems(itemss,container, conutinpage,btnnumb ){
    container.innerHTML=""


 let end=conutinpage*btnnumb
    let start=end-conutinpage
let realinpage= itemss.slice(start,end)

    realinpage.forEach(item=>{
const newDiv=document.createElement("div")
newDiv.classList.add("item")

newDiv.innerHTML=`

<img src="${item.img}"alt="">
<h3 class="title"> ${item.title}</h3>    
<h4 class="price"> price: 250$</h4>
`
container.appendChild(newDiv)
    })


}
 displayitems(items,itemsContainer,itemsInPage,currentPage)

const pageBtnSingle=document.querySelectorAll(".pagebtn")
pageBtnSingle.forEach(btn=>{

    btn.addEventListener("click",function(event){
        
const btnId= event.target.dataset.id
currentPage =Number(btnId)
displayitems(items,itemsContainer,itemsInPage,currentPage)
console.log(currentPage)

    })
})

//     items.forEach(item=>{
// const newDiv=document.createElement("div")
// newDiv.classList.add("item")
// newDiv.innerHTML=`
// <img src="${item.img}" alt="">
// <h3 class="title"> ${item.title}</h3>    
// <h4 class="price"> price: 250$</h4>
// `
// itemsContainer.appendChild(newDiv)
//     })


