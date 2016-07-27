/* 日期js */
//$(function () {
//	$('.datetimepicker').datetimepicker();
//});
$(function(){
	$(".select-menu li.choosed").each(function(){
		var	btnMenuChooseText = $(this).text();	
		$(this).parent().siblings(".select-btn").find("p").text(btnMenuChooseText);
	})
})
$('.select-menu li').click(function(){
	$(this).siblings().removeClass('choosed');
	$(this).addClass('choosed');
	var	btnMenuChooseText = $(this).text();
	$(this).parent().siblings(".select-btn").find("p").text(btnMenuChooseText);
});
/* 分页 */
$('.pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 右侧弹窗tab js */
$('.right-alert-tabs_menu li.nth1').click(function() {
	$('.right-alert-tabs_menu li').removeClass('current');
	$(this).addClass('current');
	$('.right-alert_content').children().removeClass('current');
	$('.right-alert_content').children('.right-alert-content-main.nth1').addClass('current');
});

$('.right-alert-tabs_menu li.nth2').click(function() {
	$('.right-alert-tabs_menu li').removeClass('current');
	$(this).addClass('current');
	$('.right-alert_content').children().removeClass('current');
	$('.right-alert_content').children('.right-alert-content-main.nth2').addClass('current');
});

$('.right-alert-tabs_menu li.nth3').click(function() {
	$('.right-alert-tabs_menu li').removeClass('current');
	$(this).addClass('current');
	$('.right-alert_content').children().removeClass('current');
	$('.right-alert_content').children('.right-alert-content-main.nth3').addClass('current');
});

// 右侧弹窗js
$('.tabs-wapper').on('click', 'td.name a', function() {
	$('.right-alert').fadeIn('fast').animate({
		marginRight: "0px"
	}, 300);
});

$('.js-tabs-div3,.js-tabs-div1').on('click', '.text-btn', function() {
	$('.text-div').fadeIn();
});

$('.text-div').on('click', '.tree_choose-alrte-div_close-btn, .ok-btn a', function() {
	$('.text-div').fadeOut();
});

$('.text-div').on('click', '.choose-phone-number li', function() {
	$(this).toggleClass('checked');
	$(this).children('div').toggleClass('checked');
});

$('.text-div').on('click', '.choose-customer-base li', function() {
	$('.choose-customer-base li').removeClass('checked');
	$(this).toggleClass('checked');
});

//新增策略
$('.add-strategy-btn').click(function(){
	$('.main-alert').fadeIn();
})

$('.main-alert-closeBg,.cancel,.ok,.icon-close').click(function(){
	$('.main-alert').fadeOut();
});

//事件生成
$(".new-event").on("click",function(){
	$("#new-event-div").fadeIn();
})
$('#new-event-div').on('click', '.tree_choose-alrte-div_close-btn, .ok-btn a', function() {
	$('this').fadeOut();
});
$(".SpanSelect").on("click",function(){
	$(this).toggleClass("open");
})

$('body').click(function(e) {
	var _fastNewBuilt = $('.SpanSelect'); // 设置目标区域
    if (!_fastNewBuilt.is(e.target) && _fastNewBuilt.has(e.target).length === 0) { 
   	 	$('.SpanSelect').removeClass('open');
    }
})