$(document).ready(function(e) {
        $("#section-left-control,#section-right-control").bind({
            mouseenter: function() {
                $("#section-left-control,#section-right-control").fadeTo(200, 1);
            },
            mouseleave: function() {
                $("#section-left-control,#section-right-control").fadeTo(400, 0.3);
            }
        });
        var CURR = 1;
        var SIV = setInterval(function() {
            slideNext();
        }, 2000);
        $("#lanrenzhijia").mouseenter(function() {
            clearInterval(SIV);
        }).mouseleave(function() {
            SIV = setInterval(function() {
                slideNext();
            }, 2000);
        });
        $("#section-right-control").click(function() {
            slideNext();
        });
        $("#section-left-control").click(function() {
            slidePrevious();
        });

        function slideNext() {
            if (CURR >= 3) CURR = 1;
            else CURR++;
            slideTo(CURR);
        }

        function slidePrevious() {
            if (CURR <= 1) CURR = 3;
            else CURR--;
            slideTo(CURR);
        }

        function slideTo(c) {
            if (c == 1) {
                $("#slidershow_list_02,#slidershow_list_03").removeClass("current");
                $("#slidershow_list_01").addClass("current");
                $("#slidershow_panel").animate({
                    top: '0'
                }, 500);
            }
            if (c == 2) {
                $("#slidershow_list_01,#slidershow_list_03").removeClass("current");
                $("#slidershow_list_02").addClass("current");
                $("#slidershow_panel").animate({
                    top: '-470px'
                }, 500);
            }
            if (c == 3) {
                $("#slidershow_list_01,#slidershow_list_02").removeClass("current");
                $("#slidershow_list_03").addClass("current");
                $("#slidershow_panel").animate({
                    top: '-900px'
                }, 500);
            }
        }
    });