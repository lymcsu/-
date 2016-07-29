$(function(){
	var	btnMenuChooseText = $('.form-select-btn.nth1').siblings(".form-select-menu").find(".choosed").text();
	$('.form-select-btn.nth1 p').text(btnMenuChooseText);
	var	btnMenuChooseText1 = $('.form-select-btn.nth2').siblings(".form-select-menu").find(".choosed").text();
	$('.form-select-btn.nth2 p').text(btnMenuChooseText1);
	var	btnMenuChooseText2 = $('.form-select-btn.nth3').siblings(".form-select-menu").find(".choosed").text();
	$('.form-select-btn.nth3 p').text(btnMenuChooseText1);
})
$('.form-select-menu li').click(function(){
	$('.form-select-menu li').removeClass('choosed');
	$(this).addClass('choosed');
	var	btnMenuChooseText = $(this).text();
	$(this).parent().siblings("button").find("p").text(btnMenuChooseText);
});
$('body').click(function(e){
	var _formSelect1 = $('.form-right .form-select-btn.nth1'); // 设置目标区域
    if (!_formSelect1.is(e.target) && _formSelect1.has(e.target).length === 0) { 
   	 	$('.form-select-btn.nth1').parent().removeClass('open');
    } else {
    	$('.form-select-btn.nth1').parent().toggleClass('open');
    }
    var _formSelect2 = $('.form-right .form-select-btn.nth2'); // 设置目标区域
    if (!_formSelect2.is(e.target) && _formSelect2.has(e.target).length === 0) { 
   	 	$('.form-select-btn.nth2').parent().removeClass('open');
    } else {
    	$('.form-select-btn.nth2').parent().toggleClass('open');
    }
    var _formSelect3 = $('.form-right .form-select-btn.nth3'); // 设置目标区域
    if (!_formSelect3.is(e.target) && _formSelect3.has(e.target).length === 0) { 
   	 	$('.form-select-btn.nth3').parent().removeClass('open');
    } else {
    	$('.form-select-btn.nth3').parent().toggleClass('open');
    }
});
$(".form-location-input-more-btn").on("click",function(){
	$(".form-location-input-tree").toggle();
})
$(".form-location-input-tree").find("a").on("click",function(){
	var text = $(this).text();
	$(".form-LocationInput input").val(text);
	$(".form-LocationInput span.placeholder").hide();
	$(".form-location-input-tree").hide();
})
$(function(){
    $(".special-tree").treemenu({delay:300}).openActive();
});

$(".special-tree").on('click','a',function(){
	$('.special-tree a').removeClass('active');
	$(this).addClass('active');
});
/* 分页 */
$('.js-tabs-div1 .pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 分页 */
$('.js-tabs-div2 .pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 分页 */
$('.js-tabs-div3 .pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 分页 */
$('.js-tabs-div4 .pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 分页 */
$('.js-tabs-div5 .pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 分页 */
$('.js-tabs-div6 .pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 分页 */
$('.three-table .nth1 .pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 分页 */
$('.three-table .nth2 .pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

/* 分页 */
$('.three-table .nth3 .pagination').twbsPagination({
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
	$("body").css("overflow","hidden");
});

$('.js-tabs-div3,.js-tabs-div1').on('click', '.text-btn', function() {
	$('.text-div').not('#new-event-div').fadeIn();
});

$('.text-div').on('click', '.tree_choose-alrte-div_close-btn, .ok-btn a', function() {
	$('.text-div').not('#new-event-div').fadeOut();
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
$('.top-operation-btn.nth1').click(function(){
	$('.main-alert').fadeIn();
})

$('.main-alert-closeBg,.cancel,.ok,.icon-close').click(function(){
	$('.main-alert').fadeOut();
});

//事件生成
$(".new-event").on("click",function(){
	$("#new-event-div").fadeIn();
});
$('#new-event-div').on('click', '.tree_choose-alrte-div_close-btn, .ok-btn a', function() {
	$("#new-event-div").fadeOut();
});

$("#new-event-div .SpanSelect").on("click",function(){
	$(this).toggleClass("open");
});

$('body').click(function(e) {
	var _fastNewBuilt = $('.SpanSelect.new-event-channel-select'); // 设置目标区域
    if (!_fastNewBuilt.is(e.target) && _fastNewBuilt.has(e.target).length === 0) { 
   	 	$('.SpanSelect.new-event-channel-select').removeClass('open');
    }
});

$('.three-table').on('click','table tbody tr',function(){
	$(this).siblings('tr').children('td:first-child').children('.radio-buttons').removeClass('checked');
	$(this).children('td:first-child').children('.radio-buttons').addClass('checked');
})


$('.right-alert-tabs-nav').on('click','.top-operation-btn.nth2',function(){
	if($(this).hasClass("operation-enable")){
		$(this).removeClass("operation-enable");
		$('.right-alert-content-main .btn-div').fadeOut();
		$('.right-alert-content-main.nth1 .form-items input,.right-alert-content-main.nth1 .form-items textarea').attr("disabled","disabled");
		$(".right-alert-content-main.nth1 .form-items .SpanSelect").addClass('disabled').removeClass('ture open');
	}else{
		$('.right-alert-tabs_menu li').removeClass('current');
		$('.right-alert-tabs_menu li.nth1').addClass('current');
		$('.right-alert_content').children().removeClass('current');
		$('.right-alert_content').children('.right-alert-content-main.nth1').addClass('current');
		$(this).addClass("operation-enable");
		$('.right-alert-content-main .btn-div').fadeIn();
		$('.right-alert-content-main.nth1 .form-items input,.right-alert-content-main.nth1 .form-items textarea').attr("disabled",false);
		$(".right-alert-content-main.nth1 .form-items .SpanSelect.disabled").removeClass('disabled').addClass('ture');
	}
});

$('.right-alert-content-main').on('click','.btn-div .cancel-btn,.btn-div .save-btn',function(){
	$('.right-alert-content-main .btn-div').fadeOut();
	$('.right-alert-content-main.nth1 .form-items input,.right-alert-content-main.nth1 .form-items textarea').attr("disabled","disabled");
	$(".right-alert-content-main.nth1 .form-items .SpanSelect").addClass('disabled').removeClass('ture open');
});

$(".right-alert-content-main.nth1 .form-items").on("click",".SpanSelect.ture",function(){
	$(this).toggleClass("open");
});