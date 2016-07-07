$(function() {
    $('#jiugongge li').each(function() {
        var defaultWidth = $(this).width(); //图片默认宽度
        var defaultHeight = $(this).height();; //图片默认高度
        $(this).hover(function() {
            $(this).css('z-index', '20');
            $('a', this).css({
                'z-index': '40',
                margin: '-1px 0 0 -1px'
            });
            $('.top', this).stop().animate({
                top: -defaultHeight + 'px'
            }, 300);
            $('.right', this).stop().animate({
                left: defaultWidth + 'px'
            }, 300);
            $('.bottom', this).stop().animate({
                top: defaultHeight + 'px'
            }, 300);
            $('.left', this).stop().animate({
                left: -defaultWidth + 'px'
            }, 300);
        }, function() {
            $(this).css('z-index', '10');
            $('a', this).css({
                'z-index': '10',
                margin: '0'
            });
            $('img', this).stop().animate({
                left: '0',
                top: '0'
            }, 300);
        });
    });
    $(window).resize(function() {
        $('#jiugongge li').each(function() {
            var defaultWidth = $(this).width(); //图片默认宽度
            var defaultHeight = $(this).height();; //图片默认高度
            $(this).hover(function() {
                $(this).css('z-index', '20');
                $('a', this).css({
                    'z-index': '40',
                    margin: '-1px 0 0 -1px'
                });
                $('.top', this).stop().animate({
                    top: -defaultHeight + 'px'
                }, 300);
                $('.right', this).stop().animate({
                    left: defaultWidth + 'px'
                }, 300);
                $('.bottom', this).stop().animate({
                    top: defaultHeight + 'px'
                }, 300);
                $('.left', this).stop().animate({
                    left: -defaultWidth + 'px'
                }, 300);
            }, function() {
                $(this).css('z-index', '10');
                $('a', this).css({
                    'z-index': '10',
                    margin: '0'
                });
                $('img', this).stop().animate({
                    left: '0',
                    top: '0'
                }, 300);
            });
        });
    })



    // $("#tedian_ip2 h1").hide();
    // tedianfadeIn();
    // var tedianfadeIn =function(){

    //  var height=$(window).scrollTop();
    //  // if (height>1200) {
    //  //  // $("#tedian_ip2 h1").show();
    //  //  alert(height)
    //  // }
    //  console.log(height)
    // }
    // tedianfadeIn();
    $("#tedian_ip2 h1").hide();
    $("#tedian .tedian_ip3_con").hide();
    $("#tedian .tedian_ip4_con").hide();
    $("#tedian .tedian_ip5_con").hide();
    $("#tedian .tedian_ip6_con").hide();

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        //console.log(height);
        if (height > 400 && height < 800) {
            $('#tedian #tedian_ip2 hr').animate({ "width": "100px", "color": "rgba(255,255,255,0.8)" }, 1000);
            $("#tedian_ip2 h1").fadeIn(2000).css({ "font-size": "80px", "color": "rgba(255,255,255,0.8)" });

        }

        if (height > 800 && height < 1200) {
            $("#tedian_ip2 h1").fadeOut(2000);

        }

        if (height > 1600 && height < 2000) {
            $("#tedian .tedian_ip3_con").fadeIn(2000);

        }
        if (height > 3000 && height < 3500) {
            $("#tedian .tedian_ip4_con").fadeIn(2000);

        }
        if (height > 4800 && height < 5400) {
            $("#tedian .tedian_ip5_con").fadeIn(2000);

        }
        if (height > 5500 && height < 6000) {
            $("#tedian .tedian_ip6_con").fadeIn(2000);

        }



    })
    $(".ying_content").height(0, 0);
    var ii = null;
    $("#shopping_ip1 .shopping_ip1_right li").hover(function() {
        ii = $(this).index();
        $(".ying_content").height(0, 0);
        $(".ying_content").eq(ii).animate({ "height": "140px" }, 500);
    }, function() {
        $(".ying_content").eq(ii).animate({ "height": "0" });

    })

    // $("header #nav #ss").mouse(function(){
    //     $(".sshidden").show();
    // $("header #nav #ss").css({"background-color":"red"})

    // })
    // var countb = 1;
    // $("header #nav #ss").click(

    //     function() {
    //         countb++;
    //         var relc = countb % 2;
            
    //             switch(relc){
    //                 case 0:$(".sshidden").css({"width":"50%"});

    //             break;
    //             case 1:$(".sshidden").css({"width":"0%"});
    //                     // $('#boult').text('▼');
    //             break;
    //         }

    //     });

    $("header #nav #ss").mouseover(function(){
        $(".sshidden").css({"width":"50%"});
        $(this).css({"background-color": "#333","color": "#eee","height": "60px"})
    })
    $(".mycontainer").mouseover(function(){
        $(".sshidden").css({"width":"0%"});
        $("header #nav #ss").css({"background-color": "#f8f8f8","color": "#777","height": "60px"})

    })

    $("#hotwords li").click(function(){
        var a = $("input[type='text']").val();
        location.href="./xx.html?name="+a;
    })

    $(".search-submit").click(function(){
        var a = $("input[type='text']").val();
        location.href="./xx.html?name="+a;
    })

})
