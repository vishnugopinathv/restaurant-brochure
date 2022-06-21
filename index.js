const menu=[
    {
        item:"Masala Dosa",
        price:65,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"breakfast",
        image:"./menu-images/masala-dosa.webp"
    },
    {
        item:"Ghee roast",
        price:55,
        description:"who doesn't like a dosa with some extra ghee added",
        category:"breakfast",
        image:"./menu-images/ghee-roast.jpg"
    },
    {
        item:"rava Upma",
        price:45,
        description:"Delicious Upma made from Rava coconut chutney will be served with it",
        category:"breakfast",
        image:"./menu-images/Rava-Upma.jpg"
    },
    {
        item:"idli(3 Nos)",
        price:30,
        description:"breakfast can't get any better with some idly",
        category:"breakfast",
        image:"./menu-images/idli.jpg"
    },
    {
        item:"vada(3 Nos)",
        price:45,
        description:"How can you resist eating some crispy fried vada in the morning",
        category:"breakfast",
        image:"./menu-images/vada.jpg"
    },
    {
        item:"oothappam",
        price:30,
        description:"Thick dosa made better with veggies",
        category:"breakfast",
        image:"./menu-images/oothappam.jpg"
    },
    {
        item:"poori masala",
        price:55,
        description:"A set of 3 Pooris served with some delicious bhaji",
        category:"breakfast",
        image:"./menu-images/poori-masala.jpg"
    },
    {
        item:"bread toast",
        price:40,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"breakfast",
        image:"./menu-images/bread-toast.jpg"
    },
    {
        item:"Corn Flakes",
        price:50,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"breakfast",
        image:"./menu-images/corn-flakes.jpg"
    },
    {
        item:"Chicken Biriyani",
        price:150,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"lunch",
        image:"./menu-images/chicken-biriyani.jpg"
    },
    {
        item:"mutton biriyani",
        price:170,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"lunch",
        image:"./menu-images/mutton-biriyani.jpg"
    },

    {
        item:"beef biriyani",
        price:160,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"lunch",
        image:"./menu-images/beef-biriyani.jpg"
    },
    {
        item:"Veg pulao",
        price:110,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"lunch",
        image:"./menu-images/veg-pulao.JPG"
    },
    {
        item:"chicken Fried rice",
        price:140,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"lunch",
        image:"./menu-images/chicken-fried-rice.webp"
    },
    {
        item:"Veg Meals",
        price:70,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"lunch",
        image:"./menu-images/veg-meals.jpg"
    },
    {
        item:"veg fried rice",
        price:110,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"lunch",
        image:"./menu-images/veg-fried-rice.jpg"
    },
    {
        item:"Porotta(1 Nos)",
        price:10,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"dinner",
        image:"./menu-images/porotta.jpg"
    },
    {
        item:"Chapati(1 Nos)",
        price:9,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"dinner",
        image:"./menu-images/chapati.jpg"
    },
    {
        item:"Butter nan(1 set)",
        price:20,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"dinner",
        image:"./menu-images/butter-nan.jpg"
    },
    {
        item:"rotti(1 Nos)",
        price:15,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"dinner",
        image:"./menu-images/rotti.jpg"
    },
    {
        item:"Chicken curry",
        price:130,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"dinner",
        image:"./menu-images/chicken-curry.jpg"
    },
    {
        item:"Al faham(q)",
        price:120,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"dinner",
        image:"./menu-images/alfaham.jpg"
    },
    {
        item:"Panner masala",
        price:110,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"dinner",
        image:"./menu-images/paneer-masala.jpg"
    },
    {
        item:"Mushroom Masala",
        price:110,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"dinner",
        image:"./menu-images/mushroom-masala.jpg"
    },
    {
        item:"Shawaya(q)",
        price:120,
        description:"Goodness of dosa with some spicy and creamy masala",
        category:"dinner",
        image:"./menu-images/shawaya.jpg"
    },

];
const reviews=[{
    name:"Rajkumar pandey",
    image:"./review-images/rajkumar.jpg",
    review:"Amazing food, Awesome ambience and wonderful customer service"
},
{
    name:"Adhithya singh",
    image:"./review-images/adhithya.jpg",
    review:"Best place to have your friends and family over"
},
{
    name:"Jacob sakkariya",
    image:"./review-images/jacob.jpg",
    review:"peaceful atmosphere and delicious food.. what more can i ask for"
},
{
    name:"Divya sharma",
    image:"./review-images/divya.webp",
    review:"Delicious food and amazing customer for affordable prices"
},
{
    name:"Abhishek Kumar",
    image:"./review-images/abhishek.webp",
    review:"best breakfast i ever had this year, it felt like i'm eating at my home"
},
];
const about=[
    {
        title:"Vision",
        description:"vision"
    },
    {
        title:"Branches",
        description:"contact"
    },
    {
        title:"Contact",
        description:"contact"
    },
]   

const home=document.getElementById('home');
const navBtn=document.querySelectorAll(".nav-btn");
const header=document.querySelector("header")
const customer= document.getElementById("customer");
const img=document.getElementById("reviewimg");
const review=document.getElementById("review");
const rightArrow=document.querySelector(".right-arrow");
const leftArrow=document.querySelector(".left-arrow");
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>100){
        header.classList.add("active-header");
    }
    else{
        header.classList.remove("active-header");
    }
})
const optionBtn=document.querySelectorAll(".option-btn")
const menuContainer= document.querySelector(".menu-item-container");
window.addEventListener('DOMContentLoaded',()=>{
    customer.innerText=reviews[0].name;
    img.src=reviews[0].image;
    review.innerText=reviews[0].review;
    const filtered=menu.filter(val=>{
        return val.category==="breakfast";
    })
    const items=filtered.map(val=>{
        return `<div class="menu-item">
        <img src=${val.image} alt="" />
        <div class="item-description">
            <div class="item-price">
                <h1>${val.item}</h1>
                <span>${val.price}</span>
            </div>
            <p>
              ${val.description}
            </p>
        </div>
      </div>`
    })
    menuContainer.innerHTML=items.join("");
    optionBtn[0].classList.add("active-option-btn");
    boxHead[0].classList.add("active-box-head");
})
for(let i=0;i<optionBtn.length;i++){
    optionBtn[i].addEventListener('click',()=>{
        const itemId=optionBtn[i].id;
        const filtered=menu.filter(val=>{
            return val.category===itemId;
        })
        const items=filtered.map(val=>{
            return `<div class="menu-item">
            <img src=${val.image} alt="" />
            <div class="item-description">
                <h1>${val.item}</h1>
                <span>${val.price}</span>
                <p>
                  ${val.description}
                </p>
            </div>
          </div>`
        })
        menuContainer.innerHTML=items.join("");
        optionBtn[i].classList.add("active-option-btn");
        for(let j=0;j<optionBtn.length;j++){
            if(optionBtn[j].classList.contains("active-option-btn")&&(i!==j)){
                optionBtn[j].classList.remove("active-option-btn");
            }
        }
    })
}
let currentItem=0;
rightArrow.addEventListener('click',()=>{
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    customer.innerText=reviews[currentItem].name;
    img.src=reviews[currentItem].image;
    review.innerText=reviews[currentItem].review;
})
leftArrow.addEventListener('click',()=>{
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    customer.innerText=reviews[currentItem].name;
    img.src=reviews[currentItem].image;
    review.innerText=reviews[currentItem].review;
})
const submit=document.getElementById("submitbtn");
const form=document.getElementById('bookform');
submit.addEventListener('click',()=>{
    alert("Your Reservation has been Recieved");
    form.reset();

})
const btn=document.querySelectorAll('.btn');
const answer= document.querySelectorAll('.answer');
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',()=>{
        answer[i].classList.toggle("show-answer");
        btn[i].classList.toggle("fa-square-plus");
        btn[i].classList.toggle("fa-square-minus");
        for(let j=0;j<btn.length;j++){
            if(answer[j].classList.contains("show-answer")&&(i!==j)){
                answer[j].classList.remove("show-answer");
                btn[j].classList.remove("fa-square-minus");
                btn[j].classList.add("fa-square-plus");
            }
        }
    })
}
const boxHead= document.querySelectorAll(".about-box-head");
const boxDesc=document.querySelector(".about-desc")
for(let i=0;i<boxHead.length;i++){
    boxHead[i].addEventListener('click',()=>{
        const filtered=about.find(v=>{
            v.title=boxHead[i].id;
        })
        boxHead[i].classList.add("active-box-head");
    for(let j=0;j<boxHead.length;j++){
        if(boxHead[j].classList.contains("active-box-head")&&(i!==j)){
            boxHead[j].classList.remove("active-box-head");
        }
    }
    })
}
const burgerBtn=document.getElementById("burgerbtn");
const navBar=document.getElementById("navbar");
burgerBtn.addEventListener('click',()=>{
    navBar.classList.toggle("show-nav");
    burgerBtn.classList.toggle("fa-bars");
    burgerBtn.classList.toggle("fa-xmark");
    if(!header.classList.contains("active-header")){
        header.classList.toggle("active-header");
    }
    else if((window.pageYOffset<100)){
        header.classList.remove("active-header")
    }
})
for(let i=0;i<navBtn.length;i++){
    navBtn[i].addEventListener('click',()=>{
        navBar.classList.remove("show-nav");
        burgerBtn.classList.remove("fa-xmark");
        burgerBtn.classList.add("fa-bars")
    })
}




