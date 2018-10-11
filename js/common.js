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
