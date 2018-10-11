 var aItem1 = document.querySelectorAll(".wrap");
var oLeft1 = document.getElementById("left1");
var oRight1 = document.getElementById("right1");
var oWrap1 = document.getElementById("wrap-1");

var nowIndex1 = 0;//当前位置下标

oRight1.onclick = function(){
    if(nowIndex1 == aItem1.length - 1){
        nowIndex1 = 1;
         oWrap1.style.marginLeft = 0;
    }else{
        nowIndex1 ++;
    }
    move( oWrap1,"marginLeft",-800 * nowIndex1);
}

oLeft1.onclick = function(){
    if(nowIndex1 ==0){
        nowIndex1 =aItem1.length - 2;
         oWrap1.style.marginLeft = -800*2 + "px";
    }else{
        nowIndex1--;
    }
    move(oWrap1,"marginLeft",-800 * nowIndex1);
}
    
		