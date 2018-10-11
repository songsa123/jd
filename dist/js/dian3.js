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