var gotop=document.getElementById("right-nav-list2").children[0];
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
gotop.onclick = function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
