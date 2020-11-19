/*js01-01.html에 쓰임*/
function over2(obj){
    obj.src = "./images/jjang2.jpg";
}

function out2(obj){
    obj.src = "./images/jjang3.jpg";
}

// var img4 = document.getElementById("img4");
// img4.addEventListener("mouseover",function(){
//     img4.src = "./images/jjang2.jpg"
// });
// img4.addEventListener("mouseout", function(){
//     img4.src = "./images/jjang3.jpg"
// });

var img4 = document.getElementById("img4");
img4.addEventListener("mouseover", over3);
img4.addEventListener("mouseout", out3);
function over3(){
    img4.src = "./images/jjang2.jpg"
}
function out3(){
    img4.src = "./images/jjang3.jpg"
}