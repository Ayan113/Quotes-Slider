const testimonials = [
    {
        name: "Naruto Uzumaki",
        photoUrl: "https://i.pinimg.com/564x/24/c8/70/24c870a91ad93fe3886c03d71bc32cbb.jpg",
        text: "I'm not just some kid anymore. I'm going to change the world, and I won't stop until I do. No matter how tough it gets, I'll keep moving forward because that's what being a ninja means.When people are protecting something truly special to them, they become as strong as they can be."
    },
    {
        name: "Eren Yeager",
        photoUrl:"https://i.pinimg.com/736x/31/b7/65/31b765be4c48181ec71682f486b873d9.jpg",
        text:"I'll tear down every wall that cages us, no matter the cost. Freedom isn't something you wait for—it's something you fight for.This world is cruel, but I'm going to destroy it and rebuild it with my own hands. I won't stop until every chain is broken."
    },
    {
        name:"Tanjiro Kamado",
        photoUrl:"https://i.pinimg.com/564x/01/68/8c/01688c6cb0a59977665afe6100f465a9.jpg",
        text:"I'll cut through any darkness, no matter how deep, to protect the ones I love. My resolve is unbreakable, and no matter how strong the enemy, I'll stand my ground. Compassion is my strength, and I'll fight with everything I have, never losing sight of my humanity, until the very end."
    },
];
const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEl=document.querySelector(".username"); 
let idx=0;
updateTestimonial()
function updateTestimonial(){
    const { name, photoUrl , text }=testimonials[idx];
    imgEl.src=photoUrl;
    textEl.innerText=text;
    usernameEl.innerText=name;
    idx++ ;
    if(idx === testimonials.length){    
        idx=0;

    }
    setTimeout(()=> {
        updateTestimonial();
    }, 5000);   

}