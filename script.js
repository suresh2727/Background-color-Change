var  colors = ['white' , 'green' , 'orange' , 'blue' , 'pink' , 'yellow' , 'burlywood' , 'purple' , 'greenyellow', 'black'];
var len =colors.length-1;


var btncontroller = document.getElementById('btn');
var spnacon = document.querySelector('.color');


setInterval(() => {
    var index = RandomNumber();
    document.body.style.backgroundColor = colors[index];
    spnacon.innerHTML = colors[index];
}, 2000);
btncontroller.addEventListener('click' , ()=>{
    var index = RandomNumber();
    document.body.style.backgroundColor = colors[index];
    spnacon.innerHTML = colors[index];
})

function RandomNumber() {
    return Math.round(Math.random()*len);
}