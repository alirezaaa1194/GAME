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
  } else {
    p2 = id;
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
    btn.style.visibility = "visible";
    m4.innerText = c1 > c2 ? "بازیکن 1 برنده شد" : "بازیکن 2 برنده شد";
    assign = () => {};
  }
  p1turn = !p1turn;
  displayuser1.value = c1;
  displayuser2.value = c2;
}