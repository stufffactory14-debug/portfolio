/* ==========================================
            LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 700);

});

/* ==========================================
            MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* ==========================================
            NAVBAR SCROLL
========================================== */

let lastScroll = 0;

window.addEventListener("scroll", () => {

    // Shadow Effect
    if(window.scrollY > 60){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

    // Hide & Show Navbar
    const current = window.pageYOffset;

    if(current <= 0){

        navbar.style.transform = "translateY(0)";
        return;

    }

    if(current > lastScroll){

        navbar.style.transform = "translateY(-100%)";

    }else{

        navbar.style.transform = "translateY(0)";

    }

    lastScroll = current;

});

/* ==========================================
            TYPED JS
========================================== */

new Typed("#typing",{

    strings:[

        "Full Stack Developer",

        "Java Developer",

        "MERN Stack Developer",

        "Problem Solver",

        "Software Engineer"

    ],

    typeSpeed:70,

    backSpeed:45,

    backDelay:1500,

    loop:true

});

/* ==========================================
            GSAP INTRO
========================================== */

window.addEventListener("load",()=>{

    gsap.from(".hero-tag",{

        y:40,

        opacity:0,

        duration:1

    });

    gsap.from(".hero-left h1",{

        y:50,

        opacity:0,

        duration:1,

        delay:.3

    });

    gsap.from(".hero-left h2",{

        y:40,

        opacity:0,

        duration:1,

        delay:.5

    });

    gsap.from(".hero-left p",{

        y:40,

        opacity:0,

        duration:1,

        delay:.7

    });

    gsap.from(".hero-buttons",{

        y:40,

        opacity:0,

        duration:1,

        delay:.9

    });

    gsap.from(".hero-social",{

        y:40,

        opacity:0,

        duration:1,

        delay:1.1

    });

    gsap.from(".profile-wrapper",{

        scale:.8,

        opacity:0,

        duration:1.2,

        delay:.6

    });

    gsap.from(".floating-card",{

        scale:0,

        opacity:0,

        stagger:.25,

        duration:.8,

        delay:1.2

    });

});

/* ==========================================
            ACTIVE NAVBAR
========================================== */

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop;

        if(scrollY>=sectionTop-180){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
            SCROLL INDICATOR
========================================== */

document.querySelector(".scroll-indicator")?.addEventListener("click",()=>{

    document.querySelector("#about").scrollIntoView({

        behavior:"smooth"

    });

});
/* ==========================================
            CUSTOM CURSOR
========================================== */

const cursor=document.querySelector(".cursor");

const blur=document.querySelector(".cursor-blur");

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

blur.style.left=e.clientX+"px";

blur.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.btn,.floating-card").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("hover");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("hover");

});

});
/* ==========================================
            HERO SPOTLIGHT
========================================== */

const hero=document.querySelector("#hero");

const light=document.querySelector(".mouse-light");

hero.addEventListener("mousemove",(e)=>{

const rect=hero.getBoundingClientRect();

light.style.left=e.clientX-rect.left+"px";

light.style.top=e.clientY-rect.top+"px";

});

/* ==========================================
        SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});
/* ==========================================
            MAGNETIC BUTTONS
========================================== */

const magneticButtons = document.querySelectorAll(".btn");

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});

/* ==========================================
            RIPPLE EFFECT
========================================== */

document.querySelectorAll(".ripple").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});
/* ==========================================
        PROJECT IMAGE SWITCHER
========================================== */

const preview = document.getElementById("projectPreview");

const tabs = document.querySelectorAll(".project-tab");

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(btn=>{

            btn.classList.remove("active");

        });

        tab.classList.add("active");

        preview.style.opacity="0";

        preview.style.transform="scale(.97)";

        setTimeout(()=>{

            preview.src=tab.dataset.image;

            preview.style.opacity="1";

            preview.style.transform="scale(1)";

        },180);

    });

});

/* ==========================================
        BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
