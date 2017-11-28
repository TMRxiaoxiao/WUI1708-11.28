

$(document).ready(function(){

   /* *****************nav****************************/
    var xiahua=$('.xiahua');
    var xiahuaUl=$('nav > li > ul');
    var nav=$('nav');
    var navLi=$('nav > li');

    navLi.each(function(inNav,valNav){
        nav.hover(function(){
            xiahua.addClass('active');
        },function(){
            xiahua.removeClass('active');
        })
        $(valNav).hover(function(){
            xiahuaUl.eq(inNav).show();
        },function(){
            xiahuaUl.eq(inNav).hide();
        })
    });
    /* *****************nav****************************/

   /********************** 轮播图左侧****************************/
    var lunboImg=$('.lunbo-img');
    var neirong1=$('.neirong-1-left > li');
    neirong1.each(function (index1,value1) {

        $(value1).hover(function(){
            lunboImg.eq(index1).addClass('active1');
        },function(){
            lunboImg.eq(index1).removeClass('active1');
        })
    })
    /********************** 轮播图左侧****************************/


        /***********************选项卡*******************************/
        /****封装函数*****/
        function xuanxiangka(chanpin,section,xiahuaxian) {

            $(chanpin).each(function (indexli,valueli) {

                $(valueli).mouseover(function () {
                    for(var i=0;i<section.length;i++){
                        section.eq(i).removeClass('xianshi');
                        chanpin.eq(i).removeClass('chanpin4xianshi');
                        xiahuaxian.eq(i).removeClass('xiahuaxianxianshi');
                    }
                    $(this).addClass('chanpin4xianshi');
                    xiahuaxian.eq(indexli).addClass('xiahuaxianxianshi');
                    section.eq(indexli).addClass('xianshi');
                });
            });
        }

            /***********执行函数***************/
            /*******************产品4***********/
    var chanpin4Li=$('.chanpin4-1-r > li > a');
    var section=$('.chanpin4-2 > section');
    var xiahuaxian=$('.xiahuaxian');
    xuanxiangka(chanpin4Li,section,xiahuaxian);

    /*******************产品5***********/
    var chanpin5Li=$('.chanpin5-1-r > li > a');
    var section5=$('.chanpin5-2 > section');
    var xiahuaxian5=$('.xiahuaxian5');
    xuanxiangka(chanpin5Li,section5,xiahuaxian5);
    /*******************产品6***********/
    var chanpin6Li=$('.chanpin6-1-r > li > a');
    var section6=$('.chanpin6-2 > section');
    var xiahuaxian6=$('.xiahuaxian6');
    xuanxiangka(chanpin6Li,section6,xiahuaxian6);
        /***********************选项卡*******************************/


   /**************************轮播图********************************************/

    var neirongTu=$('.neirong-1-right');
    var imgActive=$('.neirong-1-right > .img-active');
    var neirongImg=$('.neirong-tupian');
    var yuandian=$('.yuandian');
    var yuandianLi=$('.yuandian > .yuandian-a > div');
    var right=$('.you');
    var left=$('.zuo');
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
        neirongImg.eq(next).addClass('zindex');
        neirongImg.eq(now).removeClass('zindex');
        neirongImg.eq(now).animate({opacity:0},500);
        neirongImg.eq(next).animate({opacity:1},500,function(){
            flag=true;
        });
        yuandianLi.eq(now).removeClass('xy-1');
        yuandianLi.eq(next).addClass('xy-1');
        now=next;
    }
    var t=setInterval(move,3000);
    neirongTu.hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,3000);
    })
    yuandian.hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,3000);
    })

    right.click(function(){
        if(flag){
            flag=false;
            move();
        }
    })
    left.click(function(){
        if(flag){
            flag=false;
            move('r');
        }
    })
    var to;
    yuandianLi.each(function (index,value) {
        $(value).hover(function(){
            to=setTimeout(function(){
                neirongImg.eq(index).addClass('zindex');
                neirongImg.eq(now).removeClass('zindex');

                neirongImg.eq(now).animate({opacity:0},500);
                neirongImg.eq(index).animate({opacity:1},500);

                yuandianLi.eq(now).removeClass('xy-1');
                yuandianLi.eq(index).addClass('xy-1');
                now = index;

            },200);
        },function(){
            clearTimeout(to);
        })
    })

    /**************************轮播图********************************************/
    /********************************小米明星单品******************************/

    var chanpinnnn=$('.chanpinnnnnn');
    var canL=$('.cp2-1-r-l');
    var canR=$('.cp2-1-r-R');
    var Canwidth=chanpinnnn.outerWidth()/2;
    var cleft=chanpinnnn.position().left;
    canL.click(function(){
        chanpinnnn.animate({left:-Canwidth},500);
    })
    canR.click(function(){
        chanpinnnn.animate({left:0},500);
    })

    canL.mouseenter(function(){
        $(this).css({color:"#F87300"});
    })
    canL.mouseleave(function(){
        $(this).css({color:""});
    })
    canR.mouseenter(function(){
        $(this).css({color:"#F87300"});
    })
    canR.mouseleave(function(){
        $(this).css({color:""});
    })

    function aa(){
        chanpinnnn.animate({left:-Canwidth},500);

    }
    function bb(){
        chanpinnnn.animate({left:0},500);
    }
    var aat=setInterval(aa,3000);
    var bbt=setInterval(bb,6000);
    /********************************小米明星单品******************************/

  /* *********************内容****************************************/
    function fengzhaung(tuZuo,tuYou,chanpin,cp9Lbd,cp9li){
        var c91Width=chanpin.first().outerWidth();

        var nowKeng=0;
        var nextKeng=0;
        var flag=true;
        function moveKeng(place='r'){
            if(place=='r'){
                nextKeng=nowKeng+1;
                if(nextKeng>chanpin.length-1){
                    nextKeng=0;
                }
                chanpin.eq(nextKeng).css({left:c91Width});
                chanpin.eq(nowKeng).animate({left:-c91Width},500,function(){
                    flag=true;
                });
                chanpin.eq(nextKeng).animate({left:0},500,function(){
                    flag=true;
                });
            }
            if(place=='l'){
                nextKeng=nowKeng-1;
                if(nextKeng<0){
                    nextKeng=chanpin.length-1;
                }
                chanpin.eq(nextKeng).css({left:-c91Width});
                chanpin.eq(nowKeng).animate({left:c91Width},500,function(){
                    flag=true;
                });
                chanpin.eq(nextKeng).animate({left:0},500,function(){
                    flag=true;
                });

            }
            cp9li.eq(nextKeng).addClass('xian');
            cp9li.eq(nowKeng).removeClass('xian');
            nowKeng=nextKeng;

        }
        tuYou.click(function(){
            if(!flag){
                return;
            }
            flag=false;
            moveKeng();

        });
        tuZuo.click(function(){
            if(!flag){
                return;
            }
            flag=false;
            moveKeng('l');

        });

        cp9Lbd.each(function(ci,cv){
            $(cv).click(function(){
                if(ci>nowKeng){
                    chanpin.eq(ci).css({left:c91Width});
                    chanpin.eq(nowKeng).animate({left:-c91Width},500,function () {
                        flag=true;
                    });
                    chanpin.eq(ci).animate({left:0},500,function () {
                        flag=true;
                    });
                    cp9li.eq(ci).addClass("xian");
                    cp9li.eq(nowKeng).removeClass("xian");
                    nowKeng=ci;
                }
                else if(ci<nowKeng){
                    chanpin.eq(ci).css({left:-c91Width});
                    chanpin.eq(nowKeng).animate({left:c91Width},500,function(){
                        flag = true;
                    })
                    chanpin.eq(ci).animate({left:0},500,function(){
                        flag = true;
                    })

                    cp9li.eq(ci).addClass('xian');
                    cp9li.eq(nowKeng).removeClass('xian');
                    nowKeng=ci;
                }
            })
        })
    }

    //1
    var c91=$('.c91');
    var tuZuo=$('.chanpin9-2-b-1 >.tu-zuo');
    var tuYou=$('.chanpin9-2-b-1 >.tu-you');
    var chanpin=$('.c91 > div');
    var cp9Lbd=$('.chanpin9-2-b-1 >.cp9-lbd >ul >section >div');
    var cp9li=$('.chanpin9-2-b-1 >.cp9-lbd >ul >li') ;
    fengzhaung(tuZuo,tuYou,chanpin,cp9Lbd,cp9li);

    //2
    var tuZuo2=$('.chanpin9-2-b-2 >.tu-zuo');
    var tuYou2=$('.chanpin9-2-b-2 >.tu-you');
    var chanpin2=$('.c92 > div');
    var cp9Lbd2=$('.chanpin9-2-b-2 >.cp9-lbd >ul >section >div');
    var cp9li2=$('.chanpin9-2-b-2 >.cp9-lbd >ul >li') ;
    fengzhaung(tuZuo2,tuYou2,chanpin2,cp9Lbd2,cp9li2);

//3
    var tuZuo3=$('.chanpin9-2-b-3 >.tu-zuo');
    var tuYou3=$('.chanpin9-2-b-3 >.tu-you');
    var chanpin3=$('.c93 > div');
    var cp9Lbd3=$('.chanpin9-2-b-3 >.cp9-lbd >ul >section >div');
    var cp9li3=$('.chanpin9-2-b-3 >.cp9-lbd >ul >li') ;
    fengzhaung(tuZuo3,tuYou3,chanpin3,cp9Lbd3,cp9li3);


//4
    var tuZuo4=$('#mjsdjqr >.tu-zuo');
    var tuYou4=$('#mjsdjqr >.tu-you');
    var chanpin4=$('.c94 > div');
    var cp9Lbd4=$('#mjsdjqr >.cp9-lbd >ul >section >div');
    var cp9li4=$('#mjsdjqr >.cp9-lbd >ul >li') ;
    fengzhaung(tuZuo4,tuYou4,chanpin4,cp9Lbd4,cp9li4);
    // console.log(tuZuo4,tuYou4,chanpin4,cp9Lbd4,cp9li4);


















})