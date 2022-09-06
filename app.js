var namepl1=prompt('بازیکن شماره 1، اسم خودت رو وارد کن');
var namepl2=prompt('بازیکن شماره 2، اسم خودت رو وارد کن');
const sang = document.getElementById("sang");
const kaghaz = document.getElementById("kaghaz");
const gheychi = document.getElementById("gheychi");
const displayuser1 = document.getElementById("displayuser1");
const displayuser2 = document.getElementById("displayuser2");
const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const m4 = document.getElementById("m4");
var btn = document.getElementById("btn");
var pl1 = document.getElementById("pl1");
var pl2 = document.getElementById("pl2");
var scoretext = document.getElementById("scoretext");
var scoretext2 = document.getElementById("scoretext2");
if(namepl1=='' || namepl2==''){
  er.style.display="block"
  sang.style.display="none";
  kaghaz.style.display="none";
  gheychi.style.display="none";
  displayuser1.style.display="none";
  displayuser2.style.display="none";
  m1.style.display="none";
  pl1.style.display="none";
  pl2.style.display="none";
  scoretext.style.display="none";
  scoretext2.style.display="none";
  btn.style.visibility = "visible";
}
else{
pl1.innerHTML=":نوبت " + namepl1 + " عه";
pl2.innerHTML=":نوبت " + namepl2 + " عه";
scoretext.innerHTML=namepl1;
scoretext2.innerHTML=namepl2;
displayuser1.value = 0;
displayuser2.value = 0;
let c1 = 0,
  c2 = 0,
  l = 0;
let p1, p2;
let p1turn = true;
const p1win = ["RS", "PR", "SP"];
const level = [m1, m2, m3];
function assign(id) {
  if (p1turn) {
    p1 = id;
pl1.style.display="none"
pl2.style.display="block"
  } else {
    p2 = id;
    pl1.style.display="block"
    pl2.style.display="none"
    if (p1 == p2) {
    } else {
      l++;
      level.forEach((el) => {
        if (level.indexOf(el) != l) el.style.display = "none";
        else el.style.display = "block";
      });
      if (p1win.includes(p1 + p2)) {
        c1++;
      } else {
        c2++;
      }
    }
  }
  if (l == 3) {
    m4.style.display = "block";
    pl1.style.display="none"
    btn.style.visibility = "visible";
    m4.innerText = c1 > c2 ? namepl1+ " برنده شد" : namepl2+ " برنده شد";
    assign = () => {};
  }
  p1turn = !p1turn;
  displayuser1.value = c1;
  displayuser2.value = c2;
}
}