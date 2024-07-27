var tl = gsap.timeline()
tl.from("h2",{
    duration: 1,
    y:-20,
    opacity:0,
    delay:0.5
})
tl.from("h4",{
    duration: 1,
    y:-20,
    opacity:0,
    delay:0.5,
    stagger:0.3,
})
tl.from("h1",{
    duration: 2,
    y:30,
    opacity:0,
    delay:1,
})
