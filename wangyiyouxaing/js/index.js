

$(function () {
    $('#box').fullpage({
        'navigation':true,
        navigationTooltips: ['首页', '央视报道','视觉','交互','功能','待办邮件','联系人邮件','科技',
        '连接易信','马上体验'],
        scrollingSpeed: 1000,
        afterRender(){
            $(".section1").find(".first-li-img-top").addClass("firstTopActive");
            $(".section1").find(".wangyi").addClass("wangyiActive");
            $(".section1").find(".first-li-img-2").addClass("firstActive2");
            $(".section1").find(".first-li-img-3").addClass("firstActive3");
            $(".section1").find(".first-li > p").addClass("firstPActive")
        },
        afterLoad:function(anchorLink, index){
            if(index==1){
                $(".section1").find(".first-li-img-top").addClass("firstTopActive");
                $(".section1").find(".wangyi").addClass("wangyiActive");
                $(".section1").find(".first-li-img-2").addClass("firstActive2");
                $(".section1").find(".first-li-img-3").addClass("firstActive3");
                $(".section1").find(".first-li > p").addClass("firstPActive");
            }
            if(index==2){
                $(".section2").find(".second-li >h5").addClass("active2");
                $(".section2").find(".second-li >h1").addClass("active2");
                $(".section2").find(".second-li >p").addClass("active2P");
                $(".section2").find(".second-img-1").addClass("active2img1");
                $(".section2").find(".second-img-2").addClass("active2img2");
                $(".section2").find(".second-img-3").addClass("active2img3");
            }
            if(index==3){
                $(".section3").find(".three-li >h5").addClass("active3h");
                $(".section3").find(".three-li >h1").addClass("active3h");
                $(".section3").find(".three-li >p").addClass("active3p");
                $(".section3").find(".section3-img1").addClass("active3img1");
                $(".section3").find(".section3-img2").addClass("active3img2");
            }
            if(index==4){
                $(".section4").find(".fourth-li h1").addClass("active4");
                $(".section4").find(".fourth-li h5").addClass("active4");
                $(".section4").find(".fourth-li p").addClass("active4p");
                $(".section4").find(".section4-img1").addClass("active4img1");
                $(".section4").find(".section4-img2").addClass("active4img2");
            }
            if(index==5){
                $(".section5").find(".fifth-li h1").addClass("active5");
                $(".section5").find(".fifth-li h5").addClass("active5");
                $(".section5").find(".section5-pic section:nth-child(1)").addClass("active5section1");
                $(".section5").find(".section5-pic section:nth-child(2)").addClass("active5section2");
                $(".section5").find(".section5-pic section:nth-child(3)").addClass("active5section3");
                $(".section5").find(".section5-pic section:nth-child(4)").addClass("active5section4");
            }
            if(index==6){
                $(".section6").find(".sixth-li >h5").addClass("active6");
                $(".section6").find(".sixth-li >h1").addClass("active6");
                $(".section6").find(".sixth-li >p").addClass("active6p");
                $(".section6").find(".section6-img1").addClass("active6img1");
                $(".section6").find(".section6-img2").addClass("active6img2");
            }
            if(index==7){
                $(".section7").find(".seventh-li >h5").addClass("active7");
                $(".section7").find(".seventh-li >h1").addClass("active7");
                $(".section7").find(".seventh-li >p").addClass("active7p");
                $(".section7").find(".section7-img3").addClass("active7img3");
                $(".section7").find(".section7-img4").addClass("active7img4");
            }
            if(index==8){
                $(".section8").find(".eighth-li >h5").addClass("active8");
                $(".section8").find(".eighth-li >h1").addClass("active8");
                $(".section8").find(".eighth-li >p").addClass("active8p");
                $(".section8").find(".section8-img2").addClass("active8img2");
                $(".section8").find(".section8-img3").addClass("active8img3");
                $(".section8").find(".section8-img4").addClass("active8img4");
            }
            if(index==9){
                $(".section9").find(".ninth-li >h5").addClass("active9");
                $(".section9").find(".ninth-li >h1").addClass("active9");
                $(".section9").find(".section9-div >section:nth-child(1)").addClass("active9sec1");
                $(".section9").find(".section9-div >section:nth-child(2)").addClass("active9sec2");
                $(".section9").find(".section9-div >section:nth-child(3)").addClass("active9sec3");
            }
            if(index==10){
                $(".section10").find(".tan-li >h5").addClass("active10");
                $(".section10").find(".tan-li >p").addClass("active10");
                $(".section10").find(".section10-img1").addClass("active10img");
            }
        },
        'onLeave':function(index,nextIndex,drection){
            if(index==1){
                $(".section1").find(".first-li-img-top").removeClass("firstTopActive");
                $(".section1").find(".wangyi").removeClass("wangyiActive");
                $(".section1").find(".first-li-img-2").removeClass("firstActive2");
                $(".section1").find(".first-li-img-3").removeClass("firstActive3");
                $(".section1").find(".first-li > p").removeClass("firstPActive")
            }
            if(index==2){
                $(".section2").find(".second-li >h5").removeClass("active2");
                $(".section2").find(".second-li >h1").removeClass("active2");
                $(".section2").find(".second-li >p").removeClass("active2P");
                $(".section2").find(".second-img-1").removeClass("active2img1");
                $(".section2").find(".second-img-2").removeClass("active2img2");
                $(".section2").find(".second-img-3").removeClass("active2img3");
            }
            if(index==3){
                $(".section3").find(".three-li >h5").removeClass("active3h");
                $(".section3").find(".three-li >h1").removeClass("active3h");
                $(".section3").find(".three-li >p").removeClass("active3p");
                $(".section3").find(".section3-img1").removeClass("active3img1");
                $(".section3").find(".section3-img2").removeClass("active3img2");
            }
            if(index==4){
                $(".section4").find(".fourth-li h1").removeClass("active4");
                $(".section4").find(".fourth-li h5").removeClass("active4");
                $(".section4").find(".fourth-li p").removeClass("active4p");
                $(".section4").find(".section4-img1").removeClass("active4img1");
                $(".section4").find(".section4-img2").removeClass("active4img2");
            }
            if(index==5){
                $(".section5").find(".fifth-li h1").removeClass("active5");
                $(".section5").find(".fifth-li h5").removeClass("active5");
                $(".section5").find(".section5-pic section:nth-child(1)").removeClass("active5section1");
                $(".section5").find(".section5-pic section:nth-child(2)").removeClass("active5section2");
                $(".section5").find(".section5-pic section:nth-child(3)").removeClass("active5section3");
                $(".section5").find(".section5-pic section:nth-child(4)").removeClass("active5section4");
            }
            if(index==6){
                $(".section6").find(".sixth-li >h5").removeClass("active6");
                $(".section6").find(".sixth-li >h1").removeClass("active6");
                $(".section6").find(".sixth-li >p").removeClass("active6p");
                $(".section6").find(".section6-img1").removeClass("active6img1");
                $(".section6").find(".section6-img2").removeClass("active6img2");
            }
            if(index==7){
                $(".section7").find(".seventh-li >h5").removeClass("active7");
                $(".section7").find(".seventh-li >h1").removeClass("active7");
                $(".section7").find(".seventh-li >p").removeClass("active7p");
                $(".section7").find(".section7-img3").removeClass("active7img3");
                $(".section7").find(".section7-img4").removeClass("active7img4");
            }
            if(index==8){
                $(".section8").find(".eighth-li >h5").removeClass("active8");
                $(".section8").find(".eighth-li >h1").removeClass("active8");
                $(".section8").find(".eighth-li >p").removeClass("active8p");
                $(".section8").find(".section8-img2").removeClass("active8img2");
                $(".section8").find(".section8-img3").removeClass("active8img3");
                $(".section8").find(".section8-img4").removeClass("active8img4");
            }
            if(index==9){
                $(".section9").find(".ninth-li >h5").removeClass("active9");
                $(".section9").find(".ninth-li >h1").removeClass("active9");
                $(".section9").find(".section9-div >section:nth-child(1)").removeClass("active9sec1");
                $(".section9").find(".section9-div >section:nth-child(2)").removeClass("active9sec2");
                $(".section9").find(".section9-div >section:nth-child(3)").removeClass("active9sec3");
            }
            if(index==10){
                $(".section10").find(".tan-li >h5").removeClass("active10");
                $(".section10").find(".tan-li >p").removeClass("active10");
                $(".section10").find(".section10-img1").removeClass("active10img");
            }

        },
    });







})