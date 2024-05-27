
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const indbody = document.getElementById('ind-body');
const achbody = document.getElementById('ach-body');
const miku = document.querySelector(".miku");
const hollow = document.querySelector(".hollow");
const ach = document.getElementById('ach-title')
miku.addEventListener("click",()=>{
	miku.style.display = "none";
	hollow.style.display = "block";
	indbody.style.backgroundImage = "url(images/pxfuel.jpg)";
	achbody.style.backgroundImage = "url(images/mikubglong.jpg)";
	ach.src = "images/achievementb.png";
});
hollow.addEventListener("click",()=>{
	miku.style.display = "block";
	hollow.style.display = "none";
	achbody.style.backgroundImage = "url(images/1360353.png)";
	indbody.style.backgroundImage = "url(images/1360353.png)";
	ach.src = "images/achievement.png";
});
