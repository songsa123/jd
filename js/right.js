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