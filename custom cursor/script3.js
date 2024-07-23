var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imagediv = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"back.out"
     })
})

imagediv.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:4,
        // background-Color:"blue"; 

    })

})
imagediv.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1

    })

})