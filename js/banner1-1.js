 var aItem = document.querySelectorAll("#box1 li");
        var oLeft = document.getElementById("left");
        var oRight = document.getElementById("right");
        var aSpan = document.querySelectorAll("#btn span");

        var oWrap = document.getElementById("box1");

        var nowIndex = 0; // 当前显示的下标;

        // 1. 手动循环;
        // 0 ~ 3;
        
        // 右侧按钮点击 是 下标自增;
        // 左侧按钮点击 是 下标自减;


        // 自增自减 都有头;
        oRight.onclick = function(){
            //                 4;
            if(nowIndex == aItem.length - 1){
                nowIndex = 0;
            }else{
                nowIndex ++;
            }
            // console.log(nowIndex);// 1 2 3 4 0  
            animate()
           
        }
        oLeft.onclick = function(){
            // nowIndex --;
            // console.log(nowIndex);
            if(nowIndex == 0){
                nowIndex = aItem.length - 1;
            }else{
                nowIndex --;
            }
            animate()
        }

        for(let i = 0 ; i < aSpan.length ; i ++){
            aSpan[i].onmouseover = function(){
                nowIndex = i;
                animate();
            }
        }

        
        function animate(){
            // 核心就是 nowIndex;
            // 
            // 动画效果;
            for(var i = 0 ; i < aItem.length ; i ++){
                aItem[i].className = "";
                aSpan[i].className = "";
            }
            aItem[nowIndex].className = "active";
            // span效果;
            aSpan[nowIndex].className = "active3";
            
        }
        
        oWrap.onmouseenter = function(){
            clearInterval(autoPlayTimer);
        }
        oWrap.onmouseleave = function(){
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(oRight.onclick, 3000)
        }
        // 2. 动画; css3 凑合;

        var autoPlayTimer = setInterval(oRight.onclick, 3000)
