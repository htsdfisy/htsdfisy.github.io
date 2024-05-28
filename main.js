
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
const socbody = document.getElementById('soc-body');
const miku = document.querySelector(".miku");
const hollow = document.querySelector(".hollow");
const achtle = document.getElementById('ach-title');
const indtle = document.getElementById('ind-title');
const soctle = document.getElementById('soc-title');
const menpro = document.getElementById('menu-profile');
const menach = document.getElementById('menu-achi');
const mensoc = document.getElementById('menu-soci');
const style = document.getElementById('style');
miku.addEventListener("click",()=>{
	miku.style.display = "none";
	hollow.style.display = "block";
	document.body.style.color = "black";
	menpro.src = "images/profilesb.png";
	menach.src = "images/achievementsb.png";
	mensoc.src = "images/socialsb.png";
	indbody.style.backgroundImage = "url(images/pxfuel.jpg)";
	achbody.style.backgroundImage = "url(images/mikubglong.jpg)";
	socbody.style.backgroundImage = "url(images/mikubgs.png)";
	achtle.src = "images/achievementb.png";
	indtle.src = "images/profileb.png";
	soctle.src = "images/socialp.png";
	header.style.backgroundColor = "#8FD1D370";
	style.href = "style2.css"
});
hollow.addEventListener("click",()=>{
	miku.style.display = "block";
	hollow.style.display = "none";
	document.body.style.color = "white";
	menpro.src = "images/profil.png";
	menach.src = "images/Achievements.png";
	mensoc.src = "images/social.png";
	achbody.style.backgroundImage = "url(images/1360353.png)";
	indbody.style.backgroundImage = "url(images/1360353.png)";
	socbody.style.backgroundImage = "url(images/1360353.png)";
	achtle.src = "images/achievement.png";
	indtle.src = "images/PROFILE.png";
	soctle.src = "images/socials.png";
	header.style.backgroundColor = "#00465D99";
	style.href = "style.css"
});
