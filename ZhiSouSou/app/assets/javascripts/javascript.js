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
































})