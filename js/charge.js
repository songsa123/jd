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