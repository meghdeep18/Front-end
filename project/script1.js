gsap.to("#page1 h1",{
    transform:"translateX(-150%)",
   
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        scrub:3,
        start:"top 0%",
        end:"top -150%",
        pin:true,
    }
})