let hero1st = document.querySelector('.hero').firstElementChild;
hero1st.style.transition='2s';
hero1st.style.position ='relative';
hero1st.style.left ='-1000px';

let hero2nd = document.querySelector('.hero').children[1];
hero2nd.style.transition='2s';
hero2nd.style.position ='relative';
hero2nd.style.right='-1000px';



window.onload = () =>{
    document.querySelector('.hero').firstElementChild.style.left ='0px';
    document.querySelector('.hero').children[1].style.right ='0px';
    setTimeout(()=>{
        document.querySelector('.hero').firstElementChild.style.textShadow ='0 0 50px';
    },1000);
    setTimeout(()=>{
        document.querySelector('.hero').firstElementChild.style.textShadow ='none';
    },5000);
}

window.addEventListener('scroll', () =>{
    let aboutMe = document.querySelector('#aboutMe');
    if(window.scrollY > 100){
        
        aboutMe.firstElementChild.style.right='0px';

        aboutMe.children[1].style.right='0px';

    }

    let mySkills = document.querySelector('#mySkills');
    if(window.scrollY > 400){
        
        mySkills.firstElementChild.style.left='0px';

        mySkills.children[1].style.opacity='1';
    }

    let projectContainer = document.querySelector('.project-container');
    if(window.scrollY > 800){

        projectContainer.style.left ='50%';

    }

    
})



let navIcon = document.querySelector('#nav-icon');

navIcon.addEventListener('click', (e) => {
    let img = navIcon.querySelector('img');

    if (img.src.includes("closeIcon.svg")) {
            img.src = "images/icon.svg";
    } else {
        setTimeout(()=>{
            img.src = "images/closeIcon.svg";
        },500);
    }

    let menu = document.querySelector('#template-menu');
    let body = document.querySelector('body');
    window.scrollTo(0, 0);

    if (body.style.overflow === 'hidden') {
        body.style.overflowY = 'scroll';
    } else {
        body.style.overflow = 'hidden';
    }

    if (menu.style.left == '50%' && menu.style.top == '50%') {
        menu.style.left = '200%';
        menu.style.top = '-200%';
    } else {
        menu.style.left = '50%';
        menu.style.top = '50%';
    }
});

