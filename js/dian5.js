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