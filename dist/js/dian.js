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