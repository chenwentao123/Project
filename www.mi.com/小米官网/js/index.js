window.onload = function(){
    //轮播图开始
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
//轮播图结束

//左右滚动开始
    var oScrollSub = document.getElementById('scroll-left-sub');
    var aScrollLi = document.getElementsByClassName('scroll-left-li');
    var aScrollSubLi = document.getElementsByClassName('scroll-sub-li');
    var aScrollBuy = document.getElementsByClassName('scroll-sub-buy');
    var aScrollItem1 = document.getElementsByClassName('star-scroll-item');
    var aScrollItem2 = document.getElementsByClassName('star-scroll-item2');
    var oStarNext = document.getElementById('star-scroll-next');
    var oStarLast = document.getElementById('star-scroll-last');
    var iStarParameter = -1;
    var fnStarTimer = function () {
        for (var i = 0; i < aScrollItem1.length; i++) {
            aScrollItem1[i].style.left = parseInt(aScrollItem1[i].style.left) + iStarParameter * 1226 + 'px';
        }
        for (var i = 0; i < aScrollItem2.length; i++) {
            aScrollItem2[i].style.left = parseInt(aScrollItem2[i].style.left) + iStarParameter * 1226 + 'px';
        }
        if (iStarParameter == -1) {
            oStarLast.className = '';
            oStarNext.className = 'disable';
        } else {
            oStarLast.className = 'disable';
            oStarNext.className = '';
        }
        iStarParameter *= -1;
    };
    var starTimer = setInterval(fnStarTimer, 5000);
    oStarLast.onclick = function () {
        if (oStarLast.className != 'disable') {
            fnStarTimer();
            clearInterval(starTimer);
            starTimer = setInterval(fnStarTimer, 5000);
        }
    };
    oStarNext.onclick = function () {
        if (oStarNext.className != 'disable') {
            fnStarTimer();
            clearInterval(starTimer);
            starTimer = setInterval(fnStarTimer, 5000);
        }
    };
//左右滚动结束
};

