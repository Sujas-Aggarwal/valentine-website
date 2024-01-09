gsap.to(".heart-intro",{
    y:"-50%",
    duration:2.25,
    delay:2,
    ease:"power1.inOut"
})
gsap.to(".heart-intro",{
    y:"-100%",
    duration:2.25,
    delay:6.25,
    ease:"power1.inOut"
})

const noButton = document.querySelector(".no-button");
const options = document.querySelector(".options")
noButton.addEventListener("mouseover",()=>{
    options.classList.toggle("reversed")
})

gsap.from(".content",{
    y:"100vh",
    duration:1.5,
    ease:"power1.out",
    stagger:1,
    delay:8.25
})

gsap.from(".top-img",{
    y:"-100%",
    duration:0.5,
    delay:9.5
})
gsap.from(".bottom-img",{
    y:"100%",
    duration:0.5,
    delay:9.5
})

const yesButton = document.querySelector(".yes-button");
yesButton.addEventListener("click",()=>{
    gsap.to(".thank-you",{
        y:"-100%",
        duration:1,
        ease:"power1.inOut"
    })
        const chipiAudio = document.getElementsByClassName("chipi-chipi")[0]
    chipiAudio.play()
})
