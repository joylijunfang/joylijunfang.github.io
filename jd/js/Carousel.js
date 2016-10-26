/**
 * Created by LiJunFang on 2016/9/30.
 */

(function () {
    $.fn.Carousel=function (settings) {
        settings=jQuery.extend({
            "auto":true,
            "autoTime":2500,
            "time":200
        },settings)
        $.fn.Carousel.show($(this),settings);

    }
    $.fn.Carousel.show=function($this,settings){
        // alert("2");
        var _carousel_indicators=$this.children('.carousel-indicators');
            t='';
            t_i='';
        // alert(_carousel_indicators);
        if(settings.auto){
            $.fn.Carousel.autoCarousel(_carousel_indicators,$this,settings);
        }
        // alert("1");
        $('li',_carousel_indicators).hover(function () {
            // alert("3");
            var _this=$(this);
            if(settings.auto){
                clearTimeout(t_i);
            }
            if(_this.is('.active')==false){

                t=setTimeout(function () {
                    $('.carousel-inner .item',$this).hide();
                    // alert(('.carousel-inner .item',$this).eq($(this).index()));
                    // $('.carousel-inner .item',$this).animate({opacity:0},600);
                    $('.carousel-inner .item',$this).eq(_this.index()).animate({opacity:"show"});
                    // $('.carousel-inner .item',$this).eq(_this.index()).animate({opacity:1},600);
                    $('li',_carousel_indicators).removeClass('active');
                    _this.addClass('active');

                },settings.time);
            }
        },function () {
            t=''?null:clearTimeout(t);
            if(settings.auto){
                $.fn.Carousel.autoCarousel(_carousel_indicators,$this,settings);
            }
        });
        
    }
    $.fn.Carousel.autoCarousel=function (_carousel_indicators,$this,settings) {
        var _car_nums=_carousel_indicators.find('li').length,
        i=_carousel_indicators.find('active').index();
        t_i=setInterval(function () {
            i+=1;
            if(i==_car_nums){i=0;}
            // $('.carousel-inner .item',$this).eq(_this.index()).siblings().stop().animate({opacity:0},600);
            $('.carousel-inner .item',$this).hide();
            $('.carousel-inner .item',$this).eq(i).animate({opcity:"show"});
            $('li',_carousel_indicators).removeClass('active');
            _carousel_indicators.find('li:eq('+i+')').addClass('active');
        },settings.autoTime);
    }

})(jQuery)