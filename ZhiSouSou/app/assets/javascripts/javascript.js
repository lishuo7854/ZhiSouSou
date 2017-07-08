$(function (argument) {
  $('.menu').on('mouseover', function (argument) {
                    $(this) .css({
                      'color':'#F39800',
                      'background-color':'#F8F8F8'
                    }).siblings('.menu').css({
                      'background-color':'#fff',
                      'color':'#666666'
                    });

})

//客户


$('.l_head_right').mouseover(function (argument) {

	   $('.l_head_right').css('background-color','#F1F1F1')
         $('.header_right_display').show()
	  }).mouseout(function (argument) {

	   $('.l_head_right').css('background-color','#fff')
	    $('.header_right_display').hide()

	  })



$('.l_grzl_span').mouseover(function function_name(argument) {
	    $(this).css('background','#F1F1F1')
}).mouseout(function function_name(argument) {
	    $(this).css('background','#fff')
})




//企业监控筛选功能
$('.l_inp_sort').mouseover(function (argument) {
	   $(this).css({'background-color':'#0C93E9','color':'#fff'})
})          .mouseout(function (argument) {
	   $(this).css({'background-color':'#fff','color':'#666666'})
})          .click(function (argument) {
	    $(this).css({'background-color':'#0C93E9','color':'#fff'})
	    .off('mouseover mouseout').siblings('input').css({background: '#fff',color: '#666666'})
	        .mouseover(function (argument) {
	   $(this).css({'background-color':'#0C93E9','color':'#fff'})
})          .mouseout(function (argument) {
	   $(this).css({'background-color':'#fff','color':'#666666'})
})})



//企业详情页风险概述

$('.l_xq_middle_button_mid_ul_li').mouseover(function (argument) {
	   $(this).css({'background-color':'#fff','color':'#F39800' ,'border-top':'3px solid #F39800'})
})          .mouseout(function (argument) {
	   $(this).css({'background-color':'#F7F7F7','color':'#444444','border-top':'0px solid #F39800'})
})          .click(function (argument) {
	    $(this).css({'background-color':'#fff','color':'#F39800'})
	    .off('mouseover mouseout').siblings('li').css({'background-color': '#F7F7F7','color': '#444444','border-top':'0px solid #F39800'})

.mouseover(function (argument) {
	   $(this).css({'background-color':'#fff','color':'#F39800' ,'border-top':'3px solid #F39800'})
})          .mouseout(function (argument) {
	   $(this).css({'background-color':'#F7F7F7','color':'#444444','border-top':'0px solid #F39800'})
})    
	        })































})