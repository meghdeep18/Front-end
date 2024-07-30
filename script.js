gsap.from("#page #box",{
    scale:0,
    duration:2,
    rotate:360,
})
gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    rotate:360,
    delay:1,
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        scrub:true}
})

gsap.from("#page2 #box",{
    scale:0,
    duration:2,
    rotate:360,
    delay:1,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        scrub:true}
})