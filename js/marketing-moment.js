/* 分页 */
$('.pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

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
	
	var _SpanSelect3 = $('#SpanSelect3'); // 设置目标区域
	if (!_SpanSelect3.is(e.target) && _SpanSelect3.has(e.target).length === 0) {
		$('#SpanSelect3').removeClass('open');
	} else {
		$('#SpanSelect3').toggleClass('open');
	}
	
	var _SpanSelect4 = $('#SpanSelect4'); // 设置目标区域
	if (!_SpanSelect4.is(e.target) && _SpanSelect4.has(e.target).length === 0) {
		$('#SpanSelect4').removeClass('open');
	} else {
		$('#SpanSelect4').toggleClass('open');
	}
});

/*  select选中改变btn文本 js  */
$(function() {
	var btnMenuChooseText1 = $('#SpanSelect1 .select-menu li.choosed').text();
	$('#SpanSelect1 .select-btn p').text(btnMenuChooseText1);
	
	var btnMenuChooseText2 = $('#SpanSelect2 .select-menu li.choosed').text();
	$('#SpanSelect2 .select-btn p').text(btnMenuChooseText1);
	
	var btnMenuChooseText3 = $('#SpanSelect3 .select-menu li.choosed').text();
	$('#SpanSelect3 .select-btn p').text(btnMenuChooseText1);
	
	var btnMenuChooseText4 = $('#SpanSelect4 .select-menu li.choosed').text();
	$('#SpanSelect4 .select-btn p').text(btnMenuChooseText1);
});

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

$('#SpanSelect3 .select-menu li').click(function() {
	$('#SpanSelect3 .select-menu li').removeClass('choosed');
	$(this).addClass('choosed');
	var btnMenuChooseText = $('#SpanSelect3 .select-menu li.choosed').text();
	$('#SpanSelect3 .select-btn p').text(btnMenuChooseText);
});

$('#SpanSelect4 .select-menu li').click(function() {
	$('#SpanSelect4 .select-menu li').removeClass('choosed');
	$(this).addClass('choosed');
	var btnMenuChooseText = $('#SpanSelect4 .select-menu li.choosed').text();
	$('#SpanSelect4 .select-btn p').text(btnMenuChooseText);
});
/*  select选中改变btn文本 js end */

/* 表格中操作栏，开始暂停js */
$('.tabs_main').on('click','.running .state-btn',function(){
	$(this).parent('.operation').parent().removeClass('running').addClass('suspend');
});

$('.tabs_main').on('click','.suspend .state-btn',function(){
	$(this).parent('.operation').parent().removeClass('suspend').addClass('running');
});

/* 表格中操作栏，订阅js */
$('.tabs_main').on('click','.no-subscription .subscription-btn',function(){
	$(this).parent('.operation').parent().removeClass('no-subscription').addClass('subscription');
});

$('.tabs_main').on('click','.subscription .subscription-btn',function(){
	$(this).parent('.operation').parent().removeClass('subscription').addClass('no-subscription');
});

$('.moment-btn .add').click(function(){
	$('.set-up-moment').fadeIn();
});

$('.input-moment-name button').click(function(){
	var momentClassifyName = $(this).parent().children('input').val();
	$('.my-define-moment').prepend("<li><span class='tree-third-items'>"+ momentClassifyName +"</span><ul><ul/></li>");
	$(".input-moment-name input").attr("value","");
	$('.set-up-moment').hide();
});

$('.moment-btn .delete').click(function(){
	$('.my-define-moment li span.active').parent().remove();
});

$('.right-alert-content-main .tree-third-items').click(function(){
	$('.right-alert-content-main .tree-third-items').removeClass('active');
	$(this).addClass('active');
});

$('.my-define-moment').on('click', 'li span', function() {
	$('.right-alert-content-main .tree-third-items').removeClass('active');
    $(this).addClass('active');
});

// 右侧弹窗js
$('.tabs-wapper').on('click', '.tabs_nav-bottom .last-child button,td.name a', function() {
	$('.right-alert').fadeIn('fast').animate({
		marginRight: "0px"
	},300);
});

$('body').on('click', '.right-alert-closebg,.right-alert-closeBtn,.pull-right button', function() {
	$('.right-alert').animate({
		marginRight: "-875px",
	},300).fadeOut();
	$("body").css("overflow","hidden");
});