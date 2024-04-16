//https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/

let date_1 = new Date('05/09/2023 20:00:00'); //start date 9 May 2023 20:00:00 = xuexiao
let date_2 = new Date(); //now

//how many 90 minutes there are between now and the start date: days(date_1, date_2)
const days = (date_1, date_2) =>{
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.floor(difference / (1000 * 60 * 90)); //89 min = zero 90 min; 91 min = one 90 min
    return TotalDays;
}


//display time, refresh every sec
setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleString();
    
  let add = (days(date_1, date_2) + 1) * 1000 * 60 * 90; //add 90 min to the start of this session, getting the end of this session
  let diff = date_1.getTime() + add - d.getTime(); //calculate the diff between the end of this session and current time (in ms)
  let min = Math.floor((diff / (1000 * 60))<<0);
  let sec = Math.ceil((diff / 1000) % 60);
  document.getElementById("timeLeft").innerHTML = "—— 距离换图还有" + min + "分" + sec.toLocaleString("zh-CN",{minimumIntegerDigits: 2}) + "秒 ——";
}

let remainder = days(date_1, date_2)%6;

const img = [];
img[0]='./assets/feng.jpg';
img[1]='./assets/xx.jpg';
img[2]='./assets/huo.jpg';
img[3]='./assets/new.jpg';
img[4]='./assets/tu.jpg';

function calculate(){
    if (remainder == 0){
        document.title="推车什么地图？学校", 
        document.getElementById("mainImage").src = img[1],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之现在是学校啦！",
        document.getElementById("rotation").innerHTML = "<b>学校</b>>火山>机关>学校>风图>红沙"};
    if (remainder == 1){
        document.title="推车什么地图？火山", 
        document.getElementById("mainImage").src = img[2],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之现在是火山啦！",
        document.getElementById("rotation").innerHTML = "学校><b>火山</b>>机关>学校>风图>红沙"};
    if (remainder == 2){
        document.title="推车什么地图？机关", 
        document.getElementById("mainImage").src = img[3],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之现在是机关啦！",
        document.getElementById("rotation").innerHTML = "学校>火山><b>机关</b>>学校>风图>红沙"};
    if (remainder == 3){
        document.title="推车什么地图？学校", 
        document.getElementById("mainImage").src = img[1],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之现在是学校啦！",
        document.getElementById("rotation").innerHTML = "学校>火山>机关><b>学校</b>>风图>红沙"};
    if (remainder == 4){
        document.title="推车什么地图？风图", 
        document.getElementById("mainImage").src = img[0],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之现在是风图啦！",
        document.getElementById("rotation").innerHTML = "学校>火山>机关>学校><b>风图</b>>红沙"};
    if (remainder == 5){
        document.title="推车什么地图？红沙", 
        document.getElementById("mainImage").src = img[4],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之现在是沙图啦！",
        document.getElementById("rotation").innerHTML = "学校>火山>机关>学校>风图><b>红沙</b>"};
}
calculate();
