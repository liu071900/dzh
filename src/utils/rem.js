// 设计稿中 屏幕宽度
const DESGIN_WITTH = 1536;
// 设计稿中 屏幕高度
const DESGIN_HEIGHT = 722;

var _currentRem = 16;


window.onload = function(){
    resizeRem()
};

window.onresize = function(){
    resizeRem()
};

// 初始值为16PX
function setRem(initValue=_currentRem){
    _currentRem = initValue;
    var html = document.getElementsByTagName("html")[0];
    html.style.fontSize =  initValue + "px";
}

function rem2Px(remRate){
    return remRate*_currentRem
}


// 窗口变化时候调整rem
function resizeRem(){
    let owidth = document.body.clientWidth;
    if(owidth>=1904){
        setRem(24)
    }else if(owidth<1904 && owidth>=1264){
        setRem(16)
    }else if(owidth<1350 && owidth>=1024){
        setRem(12)
    }else if(owidth<1024 && owidth>=900){
        setRem(8)
    }else{
        setRem(12)
    }
}





export {
    setRem,rem2Px

}
