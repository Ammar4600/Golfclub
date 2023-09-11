var cursur = document.querySelector("#cursur");
var blur = document.querySelector("#cursur-blur");
document.addEventListener("mousemove", (e)=>{
    cursur.style.top =  e.y  + "px"
    cursur.style.left =  e.x +25+ "px"
    blur.style.top =  e.y - 150 + "px"
    blur.style.left =  e.x - 150 + "px"
})

var h1all = document.querySelectorAll("#navbar h1")

h1all.forEach((element)=>{
    element.addEventListener("mouseenter", ()=>{
        cursur.style.scale = 4;
        cursur.style.border = "0.5px solid white"        
    cursur.style.transition = "800ms all"
        cursur.style.backgroundColor ="transparent"
    })
    element.addEventListener("mouseout", ()=>{
        cursur.style.scale = 1;
        cursur.style.border = "0.5px solid yellow";
        cursur.style.backgroundColor ="#ffff0082"
    })
})

var card = document.querySelectorAll(".overlay")

card.forEach((element)=>{
element.addEventListener("mouseenter", ()=>{
    cursur.style.scale = 4;
    cursur.style.transition = "1s all"
    cursur.style.border = "0.5px solid white";
    cursur.style.backgroundColor ="transparent"
})
element.addEventListener("mouseout", ()=>{
    cursur.style.scale = 1;
    cursur.style.border = "0.5px solid yellow";
    cursur.style.backgroundColor ="#ffff0082"
})
})

gsap.to("#navbar", {
    backgroundColor : 'black',
    height : "110px",
    duration : 0.5,
    opacity : 0.6,
    scrollTrigger:{
        trigger :"navbar",
        scroller: 'body',
        // markers :true,
        start :"top -10%",
         end :"top -11%",
         scrub : 3 ,
    }

})

gsap.to("#page2", {
    backgroundColor: "black",
    opacity:0.9,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 40%",
        end:"top 41%",
        scrub :3 ,
    }
}
)

gsap.to("#card-container",{
    backgroundColor:"black",
    opacity: 0.9,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start :"top -70%",
        end:"top -71%",
        //   markers :true,
        scrub :3,
    }
})


gsap.to("#page3",{
    backgroundColor :"black",
    opacity :0.9,
    scrollTrigger:{
        trigger:"#signup-banner",
        scroller:"body",
        start: "top 10%",
        end:"top 12%",
        scrub:3,
    }
})

gsap.to("#section #img1",{
    x:60,
    y:70,
    scrollTrigger:{
        trigger:"#signup-banner",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:3,
    }
})

gsap.to("#section #img2",{
    x:-60,
    y:-70,
    scrollTrigger:{
        trigger:"#signup-banner",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:3,
    }
})

gsap.to("#page4 #head",{
    y:-40,
    scrollTrigger:{
        trigger:"#section",
        scroller:"body",
        start:"top -4%",
        end:"top -5%",
        scrub:3,
    }
    
})