/// == UserScript ==
// @name Бот для Google
// @ пространство имен http://tampermonkey.net/
// @ версия 0.1
// @description пытается захватить мир!
// @author You
// @match https://www.google.com/*
// @ матч https://crushdrummers.ru/*
// @ совпадение https: //xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant none
// == / UserScript ==
function getCookie (name) {
  let match = document.cookie.match (новый RegExp (
    "(?: ^ |;)" + name.replace (/([\.$?* | {} \ (\) \ [\] \\\ / \ + ^]) / g, '\\ $ 1' ) + "= ([^;] *)"
  ));
  вернуть матчи? decodeURIComponent (соответствует [1]): undefined;
}
let sites = {
    "xn ---- 7sbab5aqcbiddtdj1e1g.xn - p1ai": ["Как звучит флейта", "Валторна", "Тромбон", "Кларнет", "Фагот", "Гобой", "Саксофон"],
    "crushdrummers.ru": ["Барабанное шоу", "Заказать шоу барабанщиков", "Барабанное шоу в Москве"]
}
let site = Object.keys (сайты) [Math.floor (Math.random () * Object.keys (sites) .length)];
пусть ключевые слова = сайты [сайт];
let randomIndex = Math.floor (Math.random () * keywords.length);
пусть ключевое слово = ключевые слова [randomIndex];
пусть googleInput = document.getElementsByName ('q') [0];
пусть btnK = document.getElementsByName ('btnK') [1];
let links = document.links;
if (btnK! = undefined) {
    пусть i = 0;
    document.cookie = "site =" + site;
    let timerId = setInterval (() => {
        googleInput.value + = ключевое слово [i ++];
        if (i == keyword.length) {
            clearInterval (timerId);
            btnK.click ();
        }
    }, 250);
} else if (location.hostname == "www.google.com") {
    site = getCookie ("сайт");
    let nextGooglePage = true;
    let currentGooglePage = document.getElementsByClassName ('YyVfkd') [0] .innerText;
    for (let i = 0; i <links.length; i ++) {
        let link = links [i];
        if (link.href.indexOf (site)! = - 1) {
            nextGooglePage = false;
            link.click ();
            перерыв;
        }
    }
    если (nextGooglePage && currentGooglePage <11) setTimeout (() => {document.getElementById ("pnnext"). click ()}, 1500);
    иначе, если (currentGooglePage == 11) location.href = "https://www.google.com/";
}еще{
    setInterval (() => {
        если (Math.random ()> = 0.8) location.href = "https://www.google.com/";
        let link = links [Math.floor (Math.random () * links.length)];
        if (link.href.indexOf (location.hostname)! = - 1) {
        link.click ();}
    }, 3000);
}