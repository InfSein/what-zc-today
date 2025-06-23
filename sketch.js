//https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/

let date_1 = new Date('06/22/2025 23:00:00'); //start date 06/22/2025 23:00:00 = cf
let date_2 = new Date(); //today

//days between today and the start date: days(date_1, date_2)
const days = (date_1, date_2) =>{
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.floor(difference / (1000 * 3600 * 24));
    return TotalDays;
}


//display time, refresh every sec
setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleString();
}

let remainder = days(date_1, date_2)%4;

console.log(
  'date1:', date_1,
  'date2:', date_2,
  'difference:', date_2.getTime() - date_1.getTime(),
  'days:', days(date_1, date_2),
  'remainder:', remainder
)

const img = [];
img[0]='./assets/cf.png';
img[1]='./assets/sb.png';
img[2]='./assets/cy.png';
img[3]='./assets/zd.png';

function calculate(){
    if (remainder == 0){
        document.title="今天什么战场？尘封", 
        document.getElementById("mainImage").src = img[0],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是尘封啦！",
        document.getElementById("zcrotation").innerHTML = "碎冰>草原>阵地<b>尘封</b>"};
    if (remainder == 1){
        document.title="今天什么战场？碎冰", 
        document.getElementById("mainImage").src = img[1],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是碎冰啦！",
        document.getElementById("zcrotation").innerHTML = "<b>碎冰</b>>草原>阵地>尘封"};
    if (remainder == 2){
        document.title="今天什么战场？草原", 
        document.getElementById("mainImage").src = img[2],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是草原啦！",
        document.getElementById("zcrotation").innerHTML = "碎冰><b>草原</b>>阵地>尘封"};
    if (remainder == 3){
        document.title="今天什么战场？阵地", 
        document.getElementById("mainImage").src = img[3],
        document.getElementById("mainImage").alt = "你看到这行字因为图没显示出来 总之今天是阵地啦！",
        document.getElementById("zcrotation").innerHTML = "碎冰>草原><b>阵地</b>>尘封"};

}
calculate();
