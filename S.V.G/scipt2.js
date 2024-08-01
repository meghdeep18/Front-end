var initialPath =`M 10 100 Q 500 100 1200 100` 

var finalPath = `M 10 100 Q 500 100 1200 100`

var string=document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path =`M 10 100 Q ${dets.x} ${dets.y} 1200 100`
    gsap.to("svg path",{
        attr: { d : path },
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    // path =`M 10 100 Q 500 ${dets.y} 999 100`
    gsap.to("svg path",{
        attr: {d:finalPath},
        duration:1,
        ease:"bounce.out"
    })
})
