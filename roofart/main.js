// Переменные для первого поп-апа
const openPopUp = document.getElementById('open_pop_add');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
// Переменные для второго поп-апа
const openPopUpMin = document.getElementById('open_pop_min');
const closePopUpMin = document.getElementById('pop_up_close_min');
const popUpMin = document.getElementById('pop_up_min');
// Переменные для третьего поп-апа
const openPopUpTran = document.getElementById('open_pop_tran');
const closePopUpTran = document.getElementById('pop_up_close_tran');
const popUpTran = document.getElementById('pop_up_tran');
// - Рамки для дроплиста
const DropLin = document.getElementById('H');

// Открытие и закрытие первого поп-апа
openPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
})

closePopUp.addEventListener('click', () =>{
	popUp.classList.remove('active');
})

// Открытие и закрытие второго поп-апа
openPopUpMin.addEventListener('click', function(e){
	e.preventDefault();
	popUpMin.classList.add('active');
})

closePopUpMin.addEventListener('click', () =>{
	popUpMin.classList.remove('active');
})

// Открытие и закрытие третьего поп-апа
openPopUpTran.addEventListener('click', function(e){
	e.preventDefault();
	popUpTran.classList.add('active');
})
closePopUpTran.addEventListener('click', ()=>{
	popUpTran.classList.remove('active');
})

// Выключаю рамки для дроп листа 
DropLin.addEventListener('click', function(e){
	e.preventDefault();
})

//Закрытия инфо по транзакциям и открытия аналитики
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
function OpenJournal(){
  if(div1.style.display !== "none"){
    div1.style.display = "none";
    div2.style.display = "block";
  }
}

function OpenAnalytics(){
  if (div2.style.display !== "none") {
    div1.style.display = "block";
    div2.style.display = "none";
  }
}





// тестирование выпадающего списка
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);