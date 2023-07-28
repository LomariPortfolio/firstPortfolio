let txt = '//You can also use the buttons above to move in the website.';
let speed = 60;
let i = 0;
function haxxorEffect() {
    if (i < txt.length) {
    document.getElementById("haxxorAnim").innerHTML += txt.charAt(i);
    i++;
    setTimeout(haxxorEffect, speed);
  }
}
//this is a really simple but cool animation