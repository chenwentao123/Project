var oTab = document.getElementById('tab');
var aLi = oTab.getElementsByTagName('li');
var oPic = document.getElementById('picture');
var aImg = oPic.getElementsByTagName('img');
var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');
var iNowIndex =0;
var timer;

for(var i=0;i<aLi.length;i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function(){
        iNowIndex = this.index;
        for(var i=0;i<aLi.length;i++){
            aLi[i].className = '';
        }
        aLi[iNowIndex].className = 'choosed';
    }
    aLi[i].onclick = function(){
        iNowIndex = this.index;
        for(var i=0;i<aImg.length;i++){
            aImg[i].className = '';
        }
        aImg[iNowIndex].className = 'selected';
    }
}
oPrev.onclick = oNext.onclick = function(){
    for(var i=0;i<aLi.length;i++){
        aLi[i].className = '';
    }
    aLi[iNowIndex].className = 'choosed';
    aImg[iNowIndex].className = 'selected';
    if(this === oPrev){
        iNowIndex--;
        if(iNowIndex == -1){
            iNowIndex = aLi.length - 1;
        }
    }else{
        iNowIndex++;
        if(iNowIndex == aLi.length){
            iNowIndex = 0;
        }
    }
    for(var i=0;i<aImg.length;i++){
        aLi[i].className = '';
        aImg[i].className = '';
    }
    aLi[iNowIndex].className = 'choosed';
    aImg[iNowIndex].className = 'selected';
}
oPrev.onselectstart = oNext.onselectstart = function () {
    return false;
}
play();
oPic.onmouseover = function () {
    clearInterval(timer);
};
oPic.onmouseout = function () {
    play();
};
function play() {
    timer = setInterval(function () {
        oNext.onclick();
    }, 5000);
}