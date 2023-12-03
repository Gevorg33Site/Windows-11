let startMenu = document.getElementById('start');
let body = document.getElementById('body');
let nada = document.querySelectorAll('.nada');
let powerBtn = document.getElementById('p-btn');
let notApps = document.querySelectorAll('.easyDoesIt');
let search = document.getElementById('search-box');
let meseng = document.getElementById('messeng');
let instagram = document.getElementById('insta');
let excel = document.getElementById('excel');
let vscode = document.getElementById('vscode');
let chrome1 = document.getElementById('chrome');
let angular2 = document.getElementById('angular');
let youtube = document.getElementById('youtube');
let adobe = document.getElementById('adobe');
let word = document.getElementById('word');
let Teams = document.getElementById('Teams');
let minecrosoft = document.getElementById('mincrosoft');
let photoshop = document.getElementById('photoshop');
let arrow = document.getElementById('arrow');
let settings = document.getElementById('settings')
let sett = document.getElementsByClassName('settings2');

    startMenu.addEventListener('click', () => {
    document.querySelector('.popup').classList.toggle("popActive");
    document.querySelector('.clicked').classList.toggle("hovActive");
})

startMenu.addEventListener('keydown', (event) => {
    if(event.code == ControlLeft || event.code == ControlRight ) {
    document.querySelector('.popup').classList.toggle("popActive");
    document.querySelector('.clicked').classList.toggle("hovActive");
    }
})

search.addEventListener('input', () => {
    let searched = search.value;
    let apps = document.getElementsByClassName('appImg');
    Array.from(apps).forEach(function (button) {
        let appName = button.getElementsByClassName('recAppName')[0].innerText;
        if (appName.includes(searched)) {
            button.style.display = "flex";
        }
        else {
            button.style.display = "none";
        }
    })
})

notApps.forEach((el) =>{
    el.addEventListener('click', () => {
        setTimeout(() => {
        }, 2000);
    })
})

powerBtn.addEventListener('click', function(){
    document.querySelector('.power-menu').classList.toggle("power-menu-vis");
})

nada.forEach((el) => {
    el.addEventListener('click', () => {    
        setTimeout(() => {
        }, 1500);
    })
})
const setDate = function () {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const taskDate = document.querySelector(`#taskDate`);
    taskDate.innerHTML = `${day}/${month + 1}/${year}`;
}

const setTime = function(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const taskTime = document.querySelector(`#taskTime`);
    taskTime.innerHTML = `${hour} : ${minute} : ${seconds}`;
}
const refresh = 1000;  
setInterval(setDate, refresh);
setInterval(setTime, refresh);

meseng.addEventListener('click', () => {
    window.location.href = 'https://www.messenger.com/';
})

insta.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/';
})

excel.addEventListener('click', () => {
    window.location.href ='https://эксель.онлайн/';
})

vscode.addEventListener('click', () => {
    window.location.href = 'https://vscode.dev/';
})

chrome1.addEventListener('click', () => {
    window.location.href = 'https://www.google.com/';
})

adobe.addEventListener('click', () => {
    window.location.href = 'https://dezignark.com/blog/design-a-browser-ui-adobe-xd-tutorial/';
})

word.addEventListener('click', () => {
    window.location.href = 'https://ворд.онлайн/';
})

angular2.addEventListener('click', () => {
    window.location.href = 'https://angular.io/guide/browser-support'
})

youtube.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/';
})

Teams.addEventListener('click', () => {
    window.location.href = 'https://www.microsoft.com/en-us/microsoft-teams/log-in';
})

minecrosoft.addEventListener('click', () => {
    window.location.href = 'https://www.microsoft.com/ru-tm/store/b/home';
})

photoshop.addEventListener('click', () => {
    window.location.href = 'https://fotoshoponline.ru/';
})

settings.addEventListener('click', () => {
    sett[0].classList.toggle('active');
})  