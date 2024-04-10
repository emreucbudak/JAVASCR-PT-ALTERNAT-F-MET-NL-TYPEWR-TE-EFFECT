let deneme = "Ben Emre Üçbudak";
const denemem = document.querySelector("#deneme");
let deneme2 = "  Web Developer"
let b = 0;
let c = 14;
let d = 0;
let e = 0;
let f = 0;
function deneme1 () {
  if(e == 0) {
    deneme = "Ben Emre Üçbudak";
  }
  if(e == 1) {
    deneme = "Web Developerim";
  }
  if(e == 2) {
    deneme = "Öğrenciyim";
  }
  if (e ==3) {
    deneme = "21 Yaşındayım";
  }
  if(b<deneme.length) {
    denemem.textContent += deneme[b];
    b++;
  
  }
  else {
    if (d<deneme.length) {
      denemem.textContent = deneme.slice(0,c+1);
      c--;
      d++;
      if(c+2 == 0) {
        b = 0;
        d = 0;
        c = 14;
        e++;
        if (e == 1) {
          c--;
          b = 0;
        }
        if (e  == 2) {
          c = 8;
          b = 0;
        }
        if (e == 3) {
          c = 10;
          b = 0;
        }
        if (e == 4) {
          e = 0;
          b = 0;
        }
      }
    }
  }
}
setInterval(deneme1,100);