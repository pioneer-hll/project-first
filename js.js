/**
 * Created by hll on 2017/7/20.
 */
window.onload=function(){
    var navbtn=document.getElementById("navbtn");
    var nav_inner=document.getElementById("nav_inner")
    var navbtn_word=document.getElementById("navbtn_word")
    var nav_topword=document.getElementById("nav_topword");
    navbtn_word.onclick=function(){
        nav_inner.style.display="block";
        nav_topword.style.display="block";
        navbtn_word.style.display="none";
    }
    nav_topword.onclick=function(){
        nav_inner.style.display="none";
        nav_topword.style.display="none";
        navbtn_word.style.display="block";
    }



    //轮播图
    var nice10=document.getElementById("nice10");
    var ul=nice10.children[0];
    var ol=nice10.children[1];
    var ullis=ul.children;
    var imgWidth=nice10.offsetWidth;
    for(var i=0;i<ullis.length;i++){
        var li=document.createElement("li");
        li.innerHTML=i+1;
        ol.appendChild(li);
    }
    var ollis=ol.children;
    ollis[0].className="current";
    var firstImg=ullis[0].cloneNode(true);
        ul.appendChild(firstImg);
    // have  bug
    for(var j=0;j<ollis.length;j++){
        ollis[j].index=j;
        ollis[j].onmouseover=function(){
            for(var k=0;k<ollis.length;k++){
                ollis[k].className="";
            }
            this.className="current";
            var target=-this.index*imgWidth;
            animate(ul,target);
        }

    };





         function animate(obj, target) {
             clearInterval(obj.timer);
             obj.timer = setInterval(function () {
                 var leader = obj.offsetLeft;
                 var step = 10;
                 step = leader < target ? step : -step;//step有了正负
                 if (Math.abs(leader - target) >= Math.abs(step)) {
                     leader = leader + step;
                     obj.style.left = leader + "px";
                 } else {
                     obj.style.left = target + "px";//手动放到终点
                     clearInterval(obj.timer);
                 }
             }, 15);
         }



}


// 固定导航栏
$(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>=0){
            $(".navbox").css("position","fixed").css("top",0);
            $(".bg_main").css("marginTop",$(".navbox").height());
            $("#nav_inner").css("display","none");
            $("#nav_topword").css("display","none");
            $("#navbtn_word").css("display","block");
        }else{
            $(".navbox").css("position","static");
            $(".bg_main").css("marginTop",0);
        }
    })
})




//换图
$(function(){
    $(".cyclo>ul>li").mouseover(function(){
        $(this).children("a").css("display","none").next(".dv").css("display","block").parent().siblings("li").children("a").css("display","block").next(".dv").css("display","none");
    }).mouseout(function(){
        $(this).children("a").css("display","block").next(".dv").css("display","none");
//                $(this).children("li").css("display","block");
//                $(this).children(".dv").css("display","none");
    });

})


