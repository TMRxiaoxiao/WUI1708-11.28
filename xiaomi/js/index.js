window.onload=function(){
    //nav
   var xiahua=document.querySelector('.xiahua');
   var xiahuaUl=document.querySelectorAll('nav > li > ul');
   var nav=document.querySelector('nav');
   var navLi=document.querySelectorAll('nav > li');
   console.log(nav,navLi);

    navLi.forEach(function(valNav,inNav){
        nav.onmouseover=function(){
            xiahua.classList.add('active');
        }
        nav.onmouseout=function(){
            xiahua.classList.remove('active');
        }
        valNav.onmouseover=function(){
            // xiahuaUl[inNav].style.height='100%';
            xiahuaUl[inNav].style.display='block';

        }
        valNav.onmouseout=function(){

            // xiahuaUl[inNav].style.height=0;
            xiahuaUl[inNav].style.display='none';
        }


});




    //轮播图
    var lunboImg=document.querySelectorAll('.lunbo-img');


    var neirong1=document.querySelectorAll('.neirong-1-left > li');


    neirong1.forEach(function (value1,index1) {
        value1.onmouseover=function(){
            lunboImg[index1].classList.add('active1');

        }
        value1.onmouseout=function(){
            lunboImg[index1].classList.remove('active1');

        }
    })
//                  产品4
    var chanpin4Li=document.querySelectorAll('.chanpin4-1-r > li > a');

    var section=document.querySelectorAll('.chanpin4-2 > section');

    var xiahuaxian=document.querySelectorAll('.xiahuaxian');
    chanpin4Li.forEach(function (valueli4,indexli4) {

        valueli4.onmouseover=function () {
            for(var i=0;i<section.length;i++){
                section[i].classList.remove('xianshi');
                chanpin4Li[i].classList.remove('chanpin4xianshi');
                xiahuaxian[i].classList.remove('xiahuaxianxianshi');
            }

            this.classList.add('chanpin4xianshi');
            xiahuaxian[indexli4].classList.add('xiahuaxianxianshi');
            section[indexli4].classList.add('xianshi');



        }
    })

//                  产品5
    var chanpin5Li=document.querySelectorAll('.chanpin5-1-r > li > a');

    var section5=document.querySelectorAll('.chanpin5-2 > section');

    var xiahuaxian5=document.querySelectorAll('.xiahuaxian5');
    chanpin5Li.forEach(function (valueli5,indexli5) {

        valueli5.onmouseover=function () {
            for(var i=0;i<section5.length;i++){
                section5[i].classList.remove('xianshi5');
                chanpin5Li[i].classList.remove('chanpin5xianshi');
                xiahuaxian5[i].classList.remove('xiahuaxianxianshi5');
            }

            this.classList.add('chanpin5xianshi');
            xiahuaxian5[indexli5].classList.add('xiahuaxianxianshi5');
            section5[indexli5].classList.add('xianshi5');



        }
    })
//                  产品6
    var chanpin6Li=document.querySelectorAll('.chanpin6-1-r > li > a');

    var section6=document.querySelectorAll('.chanpin6-2 > section');

    var xiahuaxian6=document.querySelectorAll('.xiahuaxian6');
    chanpin6Li.forEach(function (valueli6,indexli6) {

        valueli6.onmouseover=function () {
            for(var i=0;i<section6.length;i++){
                section6[i].classList.remove('xianshi6');
                chanpin6Li[i].classList.remove('chanpin6xianshi');
                xiahuaxian6[i].classList.remove('xiahuaxianxianshi6');
            }

            this.classList.add('chanpin6xianshi');
            xiahuaxian6[indexli6].classList.add('xiahuaxianxianshi6');
            section6[indexli6].classList.add('xianshi6');



        }
    });


//    轮播图

    var neirongTu=document.querySelector('.neirong-1-right');
    var imgActive=document.querySelector('.neirong-1-right > .img-active');
    var neirongImg=document.querySelectorAll('.neirong-tupian');
    var opacity=parseInt(getComputedStyle(imgActive,null).opacity);
    var yuandian=document.querySelector('.yuandian');
    var yuandianLi=document.querySelectorAll('.yuandian > .yuandian-a > div');
    var right=document.querySelector('.you');
    var left=document.querySelector('.zuo');
    var now=0;
    var next=0;
    var flag=true;
    function move(native='l',callback){
        if(native=='l'){
            next=now+1;
            if(next>neirongImg.length-1){
                next=0;
            }
        }
        if(native=='r'){
            next=now-1;
            if(next<0){
                next=neirongImg.length-1;
            }
        }
        neirongImg[next].classList.add('zindex');
        neirongImg[now].classList.remove('zindex');
        animate(neirongImg[now],{opacity:0});
        animate(neirongImg[next],{opacity:opacity},function(){
            flag=true;
        });
        yuandianLi[now].classList.remove('xy-1');
        yuandianLi[next].classList.add('xy-1');
        now=next;
    }
    var t=setInterval(move,3000);
    neirongTu.onmouseover=function(){
        clearInterval(t);
    }
    neirongTu.onmouseout=function(){
        t=setInterval(move,3000);
    }
    yuandian.onmouseover=function(){
        clearInterval(t);
    }
    yuandian.onmouseout=function(){
        t=setInterval(move,3000);
    }
    right.onclick=function(){
        if(flag){
            flag=false;
            move();
        }


    }
    left.onclick=function(){
        if(flag){
            flag=false;
            move('r');
        }
    }
    var to;
    yuandianLi.forEach(function (value,index) {
        value.onmouseover=function(){
            to=setTimeout(function(){
                neirongImg[next].classList.add('zindex');
                neirongImg[now].classList.remove('zindex');
                animate(neirongImg[now],{opacity:0});
                animate(neirongImg[index],{opacity:opacity});
                yuandianLi[now].classList.remove('xy-1');
                yuandianLi[index].classList.add('xy-1');
                now = index;

            },200);
        value.onmouseout=function(){
            clearTimeout(to);
        }
        }
    })



    //小米明星单品

    var chanpinnnn=document.querySelector('.chanpinnnnnn');
    var canL=document.querySelector('.cp2-1-r-l');
    var canR=document.querySelector('.cp2-1-r-R');
    var Canwidth=chanpinnnn.offsetWidth/2;
    var cleft=chanpinnnn.offsetLeft;
    canL.onclick=function(){
        animate(chanpinnnn,{left:-Canwidth});
        console.log(chanpinnnn.style.left);
    }
    canR.onclick=function(){
        animate(chanpinnnn,{left:0});
        console.log(chanpinnnn.style.left);
    }

    canL.onmouseenter=function(){
        this.style.color='#F87300';
    }
    canL.onmouseleave=function(){
        this.style.color='';
    }
    canR.onmouseenter=function(){
        this.style.color='#F87300';
    }
    canR.onmouseleave=function(){
        this.style.color='';
    }
    /*function moveCan(){

        if(chanpinnnn.style.left==0){
            animate(chanpinnnn,{left:-Canwidth});
        }
        if(chanpinnnn.style.left==-1226+'px'){
            animate(chanpinnnn,{left:0});
        }
    }
    var tC=setInterval(moveCan,3000);*/

    function aa(){
        animate(chanpinnnn,{left:-Canwidth});
    }
    function bb(){
        animate(chanpinnnn,{left:0});
    }
    var aat=setInterval(aa,3000);
    var bbt=setInterval(bb,6000);





//    内容
    function fengzhaung(tuZuo,tuYou,chanpin,cp9Lbd,cp9li){
        var c91Width=chanpin[1].offsetWidth;

        var nowKeng=0;
        var nextKeng=0;
        var flag=true;
        function moveKeng(place='r'){
            if(place=='r'){
                nextKeng=nowKeng+1;
                if(nextKeng>chanpin.length-1){
                    nextKeng=0;
                }
                chanpin[nextKeng].style.left=c91Width+'px';
                animate(chanpin[nowKeng],{left:-c91Width},function(){
                    flag=true;
                });
                animate(chanpin[nextKeng],{left:0},function(){
                    flag=true;
                });
            }
            if(place=='l'){
                nextKeng=nowKeng-1;
                if(nextKeng<0){
                    nextKeng=chanpin.length-1;
                }
                chanpin[nextKeng].style.left=-c91Width+'px';
                animate(chanpin[nowKeng],{left:c91Width},function(){
                    flag=true;
                });
                animate(chanpin[nextKeng],{left:0},function(){
                    flag=true;
                });
            }
            cp9li[nextKeng].classList.add('xian');
            cp9li[nowKeng].classList.remove('xian');
            nowKeng=nextKeng;

        }
        tuYou.onclick=function(){
            if(!flag){
                return;
            }
            flag=false;
            moveKeng();

        };
        tuZuo.onclick=function(){
            if(!flag){
                return;
            }
            flag=false;
            moveKeng('l');

        };

        cp9Lbd.forEach(function(cv,ci){
            cv.onclick=function(){
                if(ci>nowKeng){
                    chanpin[ci].style.left=c91Width+'px';
                    animate(chanpin[nowKeng],{left:-c91Width},function(){
                        flag=true;
                    });
                    animate(chanpin[ci],{left:0},function(){
                        flag=true;
                    });
                    cp9li[ci].classList.add('xian');
                    cp9li[nowKeng].classList.remove('xian');
                    nowKeng=ci;
                }
                else if(ci<nowKeng){
                    chanpin[ci].style.left=-c91Width+'px';
                    animate(chanpin[nowKeng],{left:c91Width},function(){
                        flag=true;
                    });
                    animate(chanpin[ci],{left:0},function() {
                        flag = true;
                    });
                    cp9li[ci].classList.add('xian');
                    cp9li[nowKeng].classList.remove('xian');
                    nowKeng=ci;
                }
            }
        })
    }

    //1
    var c91=document.querySelector('.c91');
    var tuZuo=document.querySelector('.chanpin9-2-b-1 >.tu-zuo');
    var tuYou=document.querySelector('.chanpin9-2-b-1 >.tu-you');
    var chanpin=document.querySelectorAll('.c91 > div');
    var cp9Lbd=document.querySelectorAll('.chanpin9-2-b-1 >.cp9-lbd >ul >section >div');
    var cp9li=document.querySelectorAll('.chanpin9-2-b-1 >.cp9-lbd >ul >li') ;
    fengzhaung(tuZuo,tuYou,chanpin,cp9Lbd,cp9li);

    //2
    var tuZuo2=document.querySelector('.chanpin9-2-b-2 >.tu-zuo');
    var tuYou2=document.querySelector('.chanpin9-2-b-2 >.tu-you');
    var chanpin2=document.querySelectorAll('.c92 > div');
    var cp9Lbd2=document.querySelectorAll('.chanpin9-2-b-2 >.cp9-lbd >ul >section >div');
    var cp9li2=document.querySelectorAll('.chanpin9-2-b-2 >.cp9-lbd >ul >li') ;
    fengzhaung(tuZuo2,tuYou2,chanpin2,cp9Lbd2,cp9li2);

//3
    var tuZuo3=document.querySelector('.chanpin9-2-b-3 >.tu-zuo');
    var tuYou3=document.querySelector('.chanpin9-2-b-3 >.tu-you');
    var chanpin3=document.querySelectorAll('.c93 > div');
    var cp9Lbd3=document.querySelectorAll('.chanpin9-2-b-3 >.cp9-lbd >ul >section >div');
    var cp9li3=document.querySelectorAll('.chanpin9-2-b-3 >.cp9-lbd >ul >li') ;
    fengzhaung(tuZuo3,tuYou3,chanpin3,cp9Lbd3,cp9li3);


//4
    var tuZuo4=document.querySelector('#mjsdjqr >.tu-zuo');
    var tuYou4=document.querySelector('#mjsdjqr >.tu-you');
    var chanpin4=document.querySelectorAll('.c94 > div');
    var cp9Lbd4=document.querySelectorAll('#mjsdjqr >.cp9-lbd >ul >section >div');
    var cp9li4=document.querySelectorAll('#mjsdjqr >.cp9-lbd >ul >li') ;
    fengzhaung(tuZuo4,tuYou4,chanpin4,cp9Lbd4,cp9li4);
    // console.log(tuZuo4,tuYou4,chanpin4,cp9Lbd4,cp9li4);

}