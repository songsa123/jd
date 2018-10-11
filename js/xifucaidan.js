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