const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const timeEle = document.querySelectorAll(".times")

setInterval(() => {
    const date = new Date;
    timeEle[0].innerHTML = Day[date.getDay()];
    timeEle[1].innerHTML = date.getHours();
    timeEle[2].innerHTML = date.getMinutes();
    timeEle[3].innerHTML = date.getSeconds();
}),1000

const handleChangeBg = document.querySelector(".btnChangeBg")
const bgEle = document.querySelector(".GiangClock")

handleChangeBg.addEventListener("click", () => {
    const randomBg = Math.floor(Math.random() * 6) + 1;
    bgEle.style.backgroundImage = 'url(Giang'+randomBg+'.jpeg)'
})