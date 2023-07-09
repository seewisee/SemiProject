
/* 좋아요 누르면 하트 채워지기 */

var cnt = 1;

function likeBtnClick() {

    const img = document.getElementById("likeBtnImg");
    img.src = "../img/heart-fill.svg";

    if(cnt%2==1) {
        img.src = "../img/heart-fill.svg";
    }else {
        img.src = "../img/heart.svg";
    }
    cnt++;
}