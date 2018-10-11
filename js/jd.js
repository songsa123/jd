 var timer=null;
    timer=setInterval(function(){
        var date = new Date(); 
            var now = date.getTime(); 
        
            //设置截止时间  
            var str="2018/10/01 08:55:50";
            
            var endDate = new Date(str); 
            var end = endDate.getTime(); 
            
            //时间差  
            var leftTime = end-now; 
            
            //定义变量 保存倒计时的时间  
        
            if (leftTime>=0) {  
        //   var  nDay = parseInt(leftTime/1000/60/60/24);  
            var nHour = parseInt(leftTime/1000/60/60);  
            var  nMinute = parseInt(leftTime/1000/60%60);  
            var nSecond = parseInt(leftTime/1000%60);

        //    if(nDay < 10){
        //     nDay = "0" + nDay;
        //     }  
            if(nHour < 10){
            nHour = "0" + nHour;
            }
            if(nMinute < 10){
                nMinute = "0" + nMinute;
            }
            if(nSecond < 10){
                nSecond = "0" + nSecond;
            }
                            
            } else{
                clearInterval(timer)
                return timer.innerHTML="活动结束，请下次早点来"

            } 
        //将倒计时赋值到div中  
        //  day.innerHTML = nDay+"天";
            hour.innerHTML = nHour; 
            minute.innerHTML = nMinute;
            second.innerHTML = nSecond;  

      
    },1000)