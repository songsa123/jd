//jsonp的封装
function jsonp(url,call){
    return new Promise(function(resolve,reject){
        var cb_name = "HZ" + new Date().getTime();
        window[cb_name] = function(res){
            resolve(res);
        }
        var script = document.createElement("script");
        var opt = /\?/.test(url) ? "&" : "?";
        var path = url + opt + call + "=" + cb_name;
        script.src = path;
        document.body.appendChild(script);
        script.onload = function(){
            this.remove();
        }
    })
}

//GET 的promise版封装
function ajaxGet(url){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.send(null);
        xhr.onload = function(){
            if(xhr.status == 200){
                resolve(xhr.response);
            }
        }
    })
}

//ajax中POST  promise版封装
function ajaxPost(url,data){
    return new Promise(function(success){
        var xhr = new XMLHttpRequest();
        xhr.open("POST",url);
        xhr.setRequestHeader("Content-Type",
        "application/x-www-form-urlencoded;charset=utf-8 ");
        xhr.send(data);
        xhr.onload = function(){
            if(xhr.status == 200){
                success(xhr.response);
            }
        }
    })
}

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

function $(selector){
    var all = document.querySelectorAll(selector);
    if(all.length > 1) return all;
    return !all[0] ? null : all[0];
}


var details=$("#box1").children;
var buttons=$("#btn span");
    for( var i =0;i<buttons.length;i++){
        buttons[i].index=i;
        buttons[i].onmouseover=function(){
            for(var i =0;i<buttons.length;i++){
                buttons[i].className="";
                details[i].className="";
            }
            this.className="active"
            var index=this.index;
            details[index].className="active"

        }
    }
    


function Banner(){}
Object.assign(Banner.prototype , {
    init(){
        // 初始化;
        // 当前显示的图片下标;
        this.nowIndex = 0;
        // 元素;
       
        this.btn_list = document.querySelectorAll("#list-charge a");

        this.show_list = document.querySelectorAll(".box-charge .box-charge-1");
        this.ul = document.querySelector(".box-charge .box-charge-a");

        this.itmeNum = this.show_list.length;
        this.bindEvent()
    },  
    bindEvent(){
       
        for(var i = 0 ; i < this.btn_list.length ; i ++){
            this.btn_list[i].index = i;
            this.btn_list[i].onmouseover = this.toIndex.bind(this);
        }     
        
    },
    next(){
        if(this.nowIndex == this.itmeNum - 1){
            // 到了最后一张;
            this.ul.style.left = 0;
            this.nowIndex = 1;
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev(){
        if(this.nowIndex == 0){
            // 到了第一张;
            this.ul.style.left = -(this.itmeNum - 1) * 190 + "px";
            this.nowIndex = this.itmeNum - 2;
        }else{
            this.nowIndex --;
        }
        this.animate();
    },
    toIndex(event){
        var e = event || window.event
        var target = e.target || e.srcElement;
        this.nowIndex = target.index;
        this.animate();
    },
    animate(){
    
        $(this.ul).stop().animate({
            left:- this.nowIndex * 190
        })

    },
})
var banner = new Banner();
banner.init();
function $(selector){
    //选择器内部代码优化;
    var all = document.querySelectorAll(selector);
    if(all.length > 1) return all;
    // if(all[0] == undefined){
    //     return null;
    // }else{
    //     return all[0];
    // }   
    // 完整逻辑可以更新;         
    // 三目运算符;
    // return all[0] == undefined ? null : all[0];
    return !all[0] ? null : all[0];
}

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
    
		
//    function $(selector){
//     //选择器内部代码优化;
//     var all = document.querySelectorAll(selector);
//     if(all.length > 1) return all;
//     // if(all[0] == undefined){
//     //     return null;
//     // }else{
//     //     return all[0];
//     // }   
//     // 完整逻辑可以更新;         
//     // 三目运算符;
//     // return all[0] == undefined ? null : all[0];
//     return !all[0] ? null : all[0];
// }
   //点击点可以切换不同的页面
   var details1=$("#box").children;
   var buttons1=$("#dian span");
   for( var i =0;i<buttons1.length;i++){
       buttons1[i].index=i;
       buttons1[i].onmouseover=function(){
           for(var i =0;i<buttons1.length;i++){
               buttons1[i].className="";
               details1[i].style.opacity=0;
           }
           this.className="active"
           var index=this.index;
           details1[index].style.opacity=1;

       }
   }
function Banner(){}
Object.assign(Banner.prototype , {
    init(){
        // 初始化;
        // 当前显示的图片下标;
        this.nowIndex = 0;
        // 元素;
       
        this.btn_list = document.querySelectorAll("#dian1 li");

        this.show_list = document.querySelectorAll(".box2 .left-bottom");
        this.ul = document.querySelector(".container1 .box2");

        this.itmeNum = this.show_list.length;
        this.bindEvent()
    },  
    bindEvent(){
       
        for(var i = 0 ; i < this.btn_list.length ; i ++){
            this.btn_list[i].index = i;
            this.btn_list[i].onmouseover = this.toIndex.bind(this);
        }     
        
    },
    next(){
        if(this.nowIndex == this.itmeNum - 1){
            // 到了最后一张;
            this.ul.style.left = 0;
            this.nowIndex = 1;
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev(){
        if(this.nowIndex == 0){
            // 到了第一张;
            this.ul.style.left = -(this.itmeNum - 1) * 387 + "px";
            this.nowIndex = this.itmeNum - 2;
        }else{
            this.nowIndex --;
        }
        this.animate();
    },
    toIndex(event){
        var e = event || window.event
        var target = e.target || e.srcElement;
        this.nowIndex = target.index;
        this.animate();
    },
    animate(){
        // console.log(this.nowIndex);
        // 1. li 的动画;
        // 2. button 的动画;

        $(this.ul).stop().animate({
            left:- this.nowIndex * 387 
        })
        
        $(this.btn_list).removeClass("active");

        if(this.nowIndex == this.itmeNum - 1){
            this.btn_list[0].className = "active"
        }else{
            this.btn_list[this.nowIndex].className = "active";
        }
    },

})
var banner = new Banner();
banner.init();
  // 下标;
  function Banner(){}
  Object.assign(Banner.prototype , {
      init(){
          // 初始化;
          // 当前显示的图片下标;
          this.nowIndex = 0;
          // 元素;
         
          
          this.btn_list = document.querySelectorAll("#dian3 li");

          this.show_list = document.querySelectorAll("#box3 .box3-1");
          this.ul = document.querySelector(".container2 #box3");

          this.itmeNum = this.show_list.length;
          this.bindEvent()
      },  
      bindEvent(){
        //   this.btn_left.onclick = this.prev.bind(this);
        //   this.btn_right.onclick = this.next.bind(this);
          for(var i = 0 ; i < this.btn_list.length ; i ++){
              this.btn_list[i].index = i;
              this.btn_list[i].onmouseover = this.toIndex.bind(this);
          }     
          
      },
      next(){
          if(this.nowIndex == this.itmeNum - 1){
              // 到了最后一张;
              this.ul.style.left = 0;
              this.nowIndex = 1;
          }else{
              this.nowIndex ++;
          }
          this.animate();
      },
      prev(){
          if(this.nowIndex == 0){
              // 到了第一张;
              this.ul.style.left = -(this.itmeNum - 1) * 390 + "px";
              this.nowIndex = this.itmeNum - 2;
          }else{
              this.nowIndex --;
          }
          this.animate();
      },
      toIndex(event){
          var e = event || window.event
          var target = e.target || e.srcElement;
          this.nowIndex = target.index;
          this.animate();
      },
      animate(){
          // console.log(this.nowIndex);
          // 1. li 的动画;
          // 2. button 的动画;
          // this.ul.style.left = - this.nowIndex * 100 + "px";
          // jquery dom 调用 animate方法;
          $(this.ul).stop().animate({
              left:- this.nowIndex * 390 
          })
          
          $(this.btn_list).removeClass("active2");

          if(this.nowIndex == this.itmeNum - 1){
              this.btn_list[0].className = "active2"
          }else{
              this.btn_list[this.nowIndex].className = "active2";
          }
      },
    //   autoPlay(){
    //       this.autoTimer = setInterval(function(){
    //           this.next();
    //       }.bind(this),3000)
    //   }
  })
  var banner = new Banner();
  banner.init();
//   banner.autoPlay();
  // 下标;
  function Banner(){}
  Object.assign(Banner.prototype , {
      init(){
          // 初始化;
          // 当前显示的图片下标;
          this.nowIndex = 0;
          // 元素;
         
          
          this.btn_list = document.querySelectorAll("#dian2 li");

          this.show_list = document.querySelectorAll("#box4 .box4-1");
          this.ul = document.querySelector(".container3 #box4");

          this.itmeNum = this.show_list.length;
          this.bindEvent()
      },  
      bindEvent(){
        //   this.btn_left.onclick = this.prev.bind(this);
        //   this.btn_right.onclick = this.next.bind(this);
          for(var i = 0 ; i < this.btn_list.length ; i ++){
              this.btn_list[i].index = i;
              this.btn_list[i].onmouseover = this.toIndex.bind(this);
          }     
          
      },
      next(){
          if(this.nowIndex == this.itmeNum - 1){
              // 到了最后一张;
              this.ul.style.left = 0;
              this.nowIndex = 1;
          }else{
              this.nowIndex ++;
          }
          this.animate();
      },
      prev(){
          if(this.nowIndex == 0){
              // 到了第一张;
              this.ul.style.left = -(this.itmeNum - 1) * 390 + "px";
              this.nowIndex = this.itmeNum - 2;
          }else{
              this.nowIndex --;
          }
          this.animate();
      },
      toIndex(event){
          var e = event || window.event
          var target = e.target || e.srcElement;
          this.nowIndex = target.index;
          this.animate();
      },
      animate(){
          // console.log(this.nowIndex);
          // 1. li 的动画;
          // 2. button 的动画;
          // this.ul.style.left = - this.nowIndex * 100 + "px";
          // jquery dom 调用 animate方法;
          $(this.ul).stop().animate({
              left:- this.nowIndex * 390 
          })
          
          $(this.btn_list).removeClass("active2");

          if(this.nowIndex == this.itmeNum - 1){
              this.btn_list[0].className = "active2"
          }else{
              this.btn_list[this.nowIndex].className = "active2";
          }
      },
      autoPlay(){
          this.autoTimer = setInterval(function(){
              this.next();
          }.bind(this),3000)
      }
  })
  var banner = new Banner();
  banner.init();
  banner.autoPlay();
  // 下标;
  function Banner(){}
  Object.assign(Banner.prototype , {
      init(){
          // 初始化;
          // 当前显示的图片下标;
          this.nowIndex = 0;
          // 元素;
         
          
          this.btn_list = document.querySelectorAll("#dian4 li");

          this.show_list = document.querySelectorAll("#box5 .box5-1");
          this.ul = document.querySelector(".container4 #box5");

          this.itmeNum = this.show_list.length;
          this.bindEvent()
      },  
      bindEvent(){
        //   this.btn_left.onclick = this.prev.bind(this);
        //   this.btn_right.onclick = this.next.bind(this);
          for(var i = 0 ; i < this.btn_list.length ; i ++){
              this.btn_list[i].index = i;
              this.btn_list[i].onmouseover = this.toIndex.bind(this);
          }     
          
      },
      next(){
          if(this.nowIndex == this.itmeNum - 1){
              // 到了最后一张;
              this.ul.style.left = 0;
              this.nowIndex = 1;
          }else{
              this.nowIndex ++;
          }
          this.animate();
      },
      prev(){
          if(this.nowIndex == 0){
              // 到了第一张;
              this.ul.style.left = -(this.itmeNum - 1) * 390 + "px";
              this.nowIndex = this.itmeNum - 2;
          }else{
              this.nowIndex --;
          }
          this.animate();
      },
      toIndex(event){
          var e = event || window.event
          var target = e.target || e.srcElement;
          this.nowIndex = target.index;
          this.animate();
      },
      animate(){
          // console.log(this.nowIndex);
          // 1. li 的动画;
          // 2. button 的动画;
          // this.ul.style.left = - this.nowIndex * 100 + "px";
          // jquery dom 调用 animate方法;
          $(this.ul).stop().animate({
              left:- this.nowIndex * 390 
          })
          
          $(this.btn_list).removeClass("active2");

          if(this.nowIndex == this.itmeNum - 1){
              this.btn_list[0].className = "active2"
          }else{
              this.btn_list[this.nowIndex].className = "active2";
          }
      },
      autoPlay(){
          this.autoTimer = setInterval(function(){
              this.next();
          }.bind(this),3000)
      }
  })
  var banner = new Banner();
  banner.init();
  banner.autoPlay();
function Banner(){}
Object.assign(Banner.prototype , {
    init(){
        // 初始化;
        // 当前显示的图片下标;
        this.nowIndex = 0;
        // 元素;
       
        this.btn_list = document.querySelectorAll("#dian1 li");

        this.show_list = document.querySelectorAll(".box2 .left-bottom");
        this.ul = document.querySelector(".container1 .box2");

        this.itmeNum = this.show_list.length;
        this.bindEvent()
    },  
    bindEvent(){
       
        for(var i = 0 ; i < this.btn_list.length ; i ++){
            this.btn_list[i].index = i;
            this.btn_list[i].onmouseover = this.toIndex.bind(this);
        }     
        
    },
    next(){
        if(this.nowIndex == this.itmeNum - 1){
            // 到了最后一张;
            this.ul.style.left = 0;
            this.nowIndex = 1;
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev(){
        if(this.nowIndex == 0){
            // 到了第一张;
            this.ul.style.left = -(this.itmeNum - 1) * 387 + "px";
            this.nowIndex = this.itmeNum - 2;
        }else{
            this.nowIndex --;
        }
        this.animate();
    },
    toIndex(event){
        var e = event || window.event
        var target = e.target || e.srcElement;
        this.nowIndex = target.index;
        this.animate();
    },
    animate(){
        // console.log(this.nowIndex);
        // 1. li 的动画;
        // 2. button 的动画;

        $(this.ul).stop().animate({
            left:- this.nowIndex * 387 
        })
        
        $(this.btn_list).removeClass("active");

        if(this.nowIndex == this.itmeNum - 1){
            this.btn_list[0].className = "active"
        }else{
            this.btn_list[this.nowIndex].className = "active";
        }
    },

})
var banner = new Banner();
banner.init();
var gotop=document.getElementById("right-nav-list2").children[0];
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
gotop.onclick = function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

  var oTxt=document.getElementById("txt")
    var oRes=document.getElementById("res");
    oTxt.oninput=function(){
    	oRes.style.display="block";
        jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${this.value}&_ksTS=1537366960613_2433&k=1&area=c2c&bucketid=13`,"callback")
       
        .then(function(res){
            console.log(res)
            var html="";
            for(var i=0;i<res.result.length;i++){
                html+=`<li><a href="#">${res.result[i]}</a></li>`
            }
            oRes.innerHTML=html
        })
    }
    oRes.onmouseenter=function(){
    	oRes.style.display="block";
    }
    oRes.onmouseleave=function(){
    	oRes.style.display="none";    	
    }

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

 // 下标;
 function Banner(){}
 Object.assign(Banner.prototype , {
     init(){
         // 初始化;
         // 当前显示的图片下标;
         this.nowIndex = 0;
         // 元素;
        //  this.btn_left = document.querySelector("#left");
        //  this.btn_right = document.querySelector("#right");
         
         this.btn_list = document.querySelectorAll("#btn1 b");

         this.show_list = document.querySelectorAll("#right-1 a");
         this.ul = document.querySelector("#righta #right-1");

         this.itmeNum = this.show_list.length;
         this.bindEvent()
     },  
     bindEvent(){
        //  this.btn_left.onclick = this.prev.bind(this);
        //  this.btn_right.onclick = this.next.bind(this);
         for(var i = 0 ; i < this.btn_list.length ; i ++){
             this.btn_list[i].index = i;
             this.btn_list[i].onmouseover = this.toIndex.bind(this);
         }     
        //   // 额外加的;
        //  for(var i = 0 ; i < this.show_list.length ; i ++){
        //      this.show_list[i].style.background = (function(){
        //          var randomColor = "";
        //          randomColor = Math.round(parseInt("FFFFFF",16)*Math.random()).toString(16) ;   
        //          if(randomColor.length!= 6) {
        //              //调用上面函数
        //              return arguments.callee() 
        //          } 
        //          return "#" + randomColor;
        //      })()
        //  }
                 
     },
     next(){
         if(this.nowIndex == this.itmeNum - 1){
             // 到了最后一张;
             this.ul.style.left = 0;
             this.nowIndex = 1;
         }else{
             this.nowIndex ++;
         }
         this.animate();
     },
     prev(){
         if(this.nowIndex == 0){
             // 到了第一张;
             this.ul.style.left = -(this.itmeNum - 1) * 100 + "px";
             this.nowIndex = this.itmeNum - 2;
         }else{
             this.nowIndex --;
         }
         this.animate();
     },
     toIndex(event){
         var e = event || window.event
         var target = e.target || e.srcElement;
         this.nowIndex = target.index;
         this.animate();
     },
     animate(){
         // console.log(this.nowIndex);
         // 1. li 的动画;
         // 2. button 的动画;
         // this.ul.style.left = - this.nowIndex * 100 + "px";
         // jquery dom 调用 animate方法;
         $(this.ul).stop().animate({
             left:- this.nowIndex * 180 
         })
         
         $(this.btn_list).removeClass("active");

         if(this.nowIndex == this.itmeNum - 1){
             this.btn_list[0].className = "active"
         }else{
             this.btn_list[this.nowIndex].className = "active";
         }
     },
     autoPlay(){
         this.autoTimer = setInterval(function(){
             this.next();
         }.bind(this),2000)
     }
 })
 var banner = new Banner();
 banner.init();
 banner.autoPlay();
function Banner(){}
Object.assign(Banner.prototype , {
    init(){
        // 初始化;
        // 当前显示的图片下标;
        this.nowIndex = 0;
        // 元素;
       
        this.btn_list = document.querySelectorAll(".notice a");

        this.show_list = document.querySelectorAll(".cons-a .cons");
        this.ul = document.querySelector(".cons-a .cons-1");

        this.itmeNum = this.show_list.length;
        this.bindEvent()
    },  
    bindEvent(){
       
        for(var i = 0 ; i < this.btn_list.length ; i ++){
            this.btn_list[i].index = i;
            this.btn_list[i].onmouseover = this.toIndex.bind(this);
        }     
        
    },
    next(){
        if(this.nowIndex == this.itmeNum - 1){
            // 到了最后一张;
            this.ul.style.left = 0;
            this.nowIndex = 1;
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev(){
        if(this.nowIndex == 0){
            // 到了第一张;
            this.ul.style.left = -(this.itmeNum - 1) * 148 + "px";
            this.nowIndex = this.itmeNum - 2;
        }else{
            this.nowIndex --;
        }
        this.animate();
    },
    toIndex(event){
        var e = event || window.event
        var target = e.target || e.srcElement;
        this.nowIndex = target.index;
        this.animate();
    },
    animate(){
        // console.log(this.nowIndex);
        // 1. li 的动画;
        // 2. button 的动画;
        // this.ul.style.left = - this.nowIndex * 100 + "px";
        // jquery dom 调用 animate方法;
        $(this.ul).stop().animate({
            left:- this.nowIndex * 148 
        })
        
        // $(this.btn_list).removeClass("active");

        // if(this.nowIndex == this.itmeNum - 1){
        //     this.btn_list[0].className = "active"
        // }else{
        //     this.btn_list[this.nowIndex].className = "active";
        // }
    },
    // autoPlay(){
    //     this.autoTimer = setInterval(function(){
    //         this.next();
    //     }.bind(this),1000)
    // }
})
var banner = new Banner();
banner.init();
// banner.autoPlay();
function Banner(){}
Object.assign(Banner.prototype , {
    init(){
        // 初始化;
        // 当前显示的图片下标;
        this.nowIndex = 0;
        // 元素;
       
        this.btn_list = document.querySelectorAll(".messages a");

        this.show_list = document.querySelectorAll("#container-con-a .container1");
        this.ul = document.querySelector("#container-con-a .container-con");

        this.itmeNum = this.show_list.length;
        this.bindEvent()
    },  
    bindEvent(){
       
        for(var i = 0 ; i < this.btn_list.length ; i ++){
            this.btn_list[i].index = i;
            this.btn_list[i].onmouseover = this.toIndex.bind(this);
        }     
        
    },
    next(){
        if(this.nowIndex == this.itmeNum - 1){
            // 到了最后一张;
            this.ul.style.left = 0;
            this.nowIndex = 1;
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev(){
        if(this.nowIndex == 0){
            // 到了第一张;
            this.ul.style.left = -(this.itmeNum - 1) * 387 + "px";
            this.nowIndex = this.itmeNum - 2;
        }else{
            this.nowIndex --;
        }
        this.animate();
    },
    toIndex(event){
        var e = event || window.event
        var target = e.target || e.srcElement;
        this.nowIndex = target.index;
        this.animate();
    },
    animate(){
        // console.log(this.nowIndex);
        // 1. li 的动画;
        // 2. button 的动画;
        // this.ul.style.left = - this.nowIndex * 100 + "px";
        // jquery dom 调用 animate方法;
        $(this.ul).stop().animate({
            left:- this.nowIndex * 387 
        })
        
        $(this.btn_list).removeClass("active");

        if(this.nowIndex == this.itmeNum - 1){
            this.btn_list[0].className = "active"
        }else{
            this.btn_list[this.nowIndex].className = "active";
        }
    },
    // autoPlay(){
    //     this.autoTimer = setInterval(function(){
    //         this.next();
    //     }.bind(this),1000)
    // }
})
var banner = new Banner();
banner.init();
// banner.autoPlay();
//吸顶菜单
var oD2 = document.getElementById("d2");   
var oForm=document.getElementById("form1") 	
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTop >= 600){
        oD2.style.position = "fixed"
        oD2.style.opacity=1;
        oD2.style.height="50"+"px";
        oForm.style.height="33"+"px";

        // oD2.style.display="block";
        oD2.style.top = 0;

    }else{
        oD2.style.position = "absolute";
        oD2.style.opacity=0;   
        // oD2.style.display="none";

        oD2.style.top = 600 + "px";
    }
}