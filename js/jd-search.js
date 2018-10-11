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
