/**
 * Created by LiJunFang on 2016/9/21.
 */
// alert($);
//顶部
$('#w li').hover(function () {
    if($(this).children('dl').length){
        $(this).addClass('li-activate');
    }
},function () {
    if($(this).children('dl').length){
        $(this).removeClass('li-activate');}
});
//购物车
$('#shortcut #content-top .logo-cart').hover(function () {
    $(this).addClass('hover-cart');
    $('#content-top .dorpdown-layer').addClass('hover');

},function () {
    $(this).removeClass('hover-cart');
    $('#content-top .dorpdown-layer').removeClass('hover');
});
//搜索区域
$('#shortcut #content-top .search .text').focus(function () {
    if( $(this).val()==$(this).attr('value'))
    {
        $(this).val('');
    }
});
$('#shortcut #content-top .search .text').blur(function () {
    if( $(this).val()==''){
        $(this).val($(this).attr('value'));
    }
});
//左侧导航折叠
$('#dd-inner .item').hover(function () {
    $(this).addClass('item-hover');
    var s =$(this).attr("class");
    var num= s.replace(/[^0-9]/ig,"");
    var str='#'+'category-item'+num;
    $(str).css('display','block');

},function () {
    $(this).removeClass('item-hover');
    var s =$(this).attr("class");
    var num= s.replace(/[^0-9]/ig,"");
    var str='#'+'category-item'+num;
    $(str).css('display','none');
});
// $('#focus .slider .carousel-inner .item').hover(function () {
//    $('.carousel-control').css('display','block') ;
// },function () {
//     $('.carousel-control').css('display','none') ;
// });
//轮播图
// $('.carousel-indicators li').hover(function () {
//    $(this).addClass('active');
// });
$('.content_middle').SliderCar();