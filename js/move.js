function move(dom,attr,target){
    // 1. 定时器;
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        // 2. 计算速度;
        var iNow = parseInt(getStyle(dom,attr));
        var speed = (target - iNow) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        // 3. 终止;
        if(iNow == target){
            clearInterval(dom.timer);
            return 0;
        }
        // 4. 运动;
        dom.style[attr] = iNow + speed + "px";
    },50)
}
function getStyle(dom,attr){
    if(getComputedStyle){
        return getComputedStyle(dom)[attr];
    }else{
        return dom.currentStyle[attr];
    }
}
