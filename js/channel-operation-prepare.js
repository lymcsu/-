$('.add-channel').click(function(){
	$('.right-alert').fadeIn('fast').animate({
		marginRight: "0px"
	}, 300);
});

/*  select打开ul js  */
$('body').click(function(e) {
    var _SpanSelect1 = $('#SpanSelect1'); // 设置目标区域
	if (!_SpanSelect1.is(e.target) && _SpanSelect1.has(e.target).length === 0) {
		$('#SpanSelect1').removeClass('open');
	} else {
		$('#SpanSelect1').toggleClass('open');
	}
	
	var _SpanSelect2 = $('#SpanSelect2'); // 设置目标区域
	if (!_SpanSelect2.is(e.target) && _SpanSelect2.has(e.target).length === 0) {
		$('#SpanSelect2').removeClass('open');
	} else {
		$('#SpanSelect2').toggleClass('open');
	}
});
/*  select打开ul js end */

/*  select选中改变btn文本 js  */
$('#SpanSelect1 .select-menu li').click(function() {
	$('#SpanSelect1 .select-menu li').removeClass('choosed');
	$(this).addClass('choosed');
	var btnMenuChooseText = $('#SpanSelect1 .select-menu li.choosed').text();
	$('#SpanSelect1 .select-btn p').text(btnMenuChooseText);
});

$('#SpanSelect2 .select-menu li').click(function() {
	$('#SpanSelect2 .select-menu li').removeClass('choosed');
	$(this).addClass('choosed');
	var btnMenuChooseText = $('#SpanSelect2 .select-menu li.choosed').text();
	$('#SpanSelect2 .select-btn p').text(btnMenuChooseText);
});
/*  select选中改变btn文本 js end */