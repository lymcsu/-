/* 树形菜单js */
$('.tree').on('click', '.tree-primary-items,.tree-secondary-items', function() {
    $(this).toggleClass('open');//三级菜单添加open
	$(this).parent().children('ul').slideToggle('fast');//兄弟元素ul 打开
});

//三级菜单有四级菜单点击事件
$('.tree').on('click', '.tree-third-items.have-chirld', function() {
    $(this).toggleClass('active');//点击添加active
    $(this).parent().children('ul').slideToggle('fast');//兄弟元素ul 打开
});

//三级菜单没有四级菜单点击事件
$('#new-rule-customer-base .tree .tree-third-items.no-chirld').click(function(){
	$('#new-rule-customer-base .tree .tree-third-items,.no-chirld').removeClass('active');//三级菜单没有四级菜单的移除class active
	$(this).addClass('active');//点击的这个添加active
});

//三级菜单没有四级菜单点击事件
$('#customer-base-control .tree .tree-third-items.no-chirld').click(function(){
	$('#customer-base-control .tree .tree-third-items,.no-chirld').removeClass('active');//三级菜单没有四级菜单的移除class active
	$(this).addClass('active');//点击的这个添加active
});

$('.viewFramework-main .tree-third-items').click(function(){
	$('.viewFramework-main .tree-third-items').removeClass('active');//三级菜单没有四级菜单的移除class active
	$(this).addClass('active');//点击的这个添加active
});

/* 分页插件 */
$('.pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

//checked box
$('.checked-box').not('.disabled,.all-checked-btn').click(function(){
	$(this).toggleClass('checked');
});

$('.js-tabs-div2 .checked-box.all-checked-btn').click(function(){
	if ($('.js-tabs-div2 .checked-box.all-checked-btn').hasClass('checked')){
		$('.js-tabs-div2 .checked-box').not('.disabled').removeClass('checked');
	} else {
		$('.js-tabs-div2 .all-checked-btn').addClass('checked');
		$('.js-tabs-div2 .checked-box').not('.disabled,.all-checked-btn').addClass('checked');
	}
});

//清单客户群显示新增删除按钮
$('#rule-customer-base ul li').click(function(){
	$('.tabs_nav-right').hide();
});

//规则客户群隐藏新增删除按钮
$('#inventory-customer-base ul li').click(function(){
	$('.tabs_nav-right').show();
});

/* 新增规则客户群树形第四级菜单提示tips */
$(function() {
	$('.tree-third-items + ul li span').tipso({
		width: 'auto',
		delay: null,
		position: 'right',
		background: '#4F555D',
		speed: 50
	});
});

// 新增规则客户群条件按钮 或、且、非、左括号、右括号
$('.chart--btn li button').click(function(){
	var btnText = $(this).text();
	$('.chart-body').append("<div class='condition-content animated3 fadeIn'><button class='condition-btn'>"+ btnText +"</button><button class='delete-condition'><i class='iconfont icon-delete'></i></button></div>");
});

// 点击 .delete-condition 删除条件按钮
$('body').on('click', '.delete-condition', function() {
    $(this).parent('.condition-content').remove();
});

// 点击 .delete-btn 清空所有条件 
$('body').on('click', '.delete-btn', function(){
	$('.chart-body').children('.condition-content,.condition-content2').remove();
});

// 点击 .delete-condition2 删除 客户群条件
$('body').on('click', '.delete-condition2', function() {
    $(this).parent('.condition-content2').remove();
});

// 新增规则客户群弹窗
$('.customer-base-btn').on('click', '#newRuleCustomerBase', function() {
	$('#new-rule-customer-base').fadeIn('fast').animate({
		marginRight: "0px"
	}, 300);
});

// 导入清单客户群弹窗
$('.customer-base-btn').on('click', '#importInventoryCustomerBase', function() {
	$('#import-inventory-customer-base').fadeIn('fast').animate({
		marginRight: "0px"
	}, 300);
});

//保存客户群名称至已配置客户群
$('.js-tabs-div2 .tabs_nav .tabs_nav-left button').click(function(){
	var name = $('.js-tabs-div2 .tabs_nav .tabs_nav-left input').val();
		tableTbody = $('.tabs_body-right-finish table tbody');
	tableTbody.append("<tr><td>"+ name +"</td><td class='operation'><button>修改</button> <button>估算</button> <button class='dlt last-child'>删除</button></td></tr>");
});

//树形菜单弹窗多选
$('.tree_choose-alrte-div_body li.col-1-3').click(function(){
	$(this).children('.checked-box').toggleClass('checked');
});

//新建规则客户群树形菜单弹窗
$('.js-alert-liuliangyunying').click(function(){
	$('#liuliangyunying').fadeIn();
	var a = $('#liuliangyunying');
    		b = $('#liuliangyunying').height();
    		a.css("margin-top", - b / 2 +"px");
});

$('#liuliangyunying .tree_choose-alrte-div_close-btn,#liuliangyunying .ok-btn').click(function(){
	$('#liuliangyunying').fadeOut();
});

$('.tree_choose-alrte-div li').not('.select-menu li').click(function(){
	$('.tree_choose-alrte-div li').removeClass('checked');
	$(this).addClass('checked');
});

$('#liuliangyunying .ok-btn').click(function(){
	var spanText = $('#liuliangyunying .checked span').text();
	$('.chart-body').append("<div class='condition-content2 animated3 fadeIn'><span>"+ spanText +"</span><a class='delete-condition2'><i class='iconfont icon-close'></i></a></div>");	
});

$('#name .ok-btn').click(function(){
	var inputText = $('#name input').val();
	$('.chart-body').append("<div class='condition-content2 animated3 fadeIn'><span>"+ inputText +"</span><a class='delete-condition2'><i class='iconfont icon-close'></i></a></div>");	
});

$('.name-btn').click(function(){
	$('#name').fadeIn();
	var a = $('#name');
    		b = $('#name').height();
    		a.css("margin-top", - b / 2 +"px");
});

$('#name .tree_choose-alrte-div_close-btn,#name .ok-btn').click(function(){
	$('#name').fadeOut();
});

$('.ruwangshijian').click(function(){
	$('#network-time').fadeIn();
	var a = $('#network-time');
    		b = $('#network-time').height();
    		a.css("margin-top", - b / 2 +"px");
});

$('#network-time .tree_choose-alrte-div_close-btn,#network-time .ok-btn').click(function(){
	$('#network-time').fadeOut();
});

$('.tree_choose-alrte-div_body .col-full.btn1').click(function(){
	$('.selet-choose-dete.div2').hide();
	$('.selet-choose-dete.div1').show();
});

$('.tree_choose-alrte-div_body .col-full.btn2').click(function(){
	$('.selet-choose-dete.div1').hide();
	$('.selet-choose-dete.div2').show();
});

$('.city-btn').click(function(){
	$('#city').fadeIn();
	var a = $('#city');
    		b = $('#city').height();
    		a.css("margin-top", - b / 2 +"px");
});

$('#city .tree_choose-alrte-div_close-btn,#city .ok-btn').click(function(){
	$('#city').fadeOut();
});

/* 右侧弹窗tab js */
$('#customer-base-control .right-alert-tabs_menu li.nth1').click(function() {
	$('#customer-base-control .right-alert-tabs_menu li').removeClass('current');
	$(this).addClass('current');
	$('#customer-base-control .right-alert_content').children().removeClass('current');
	$('#customer-base-control .right-alert_content').children('#customer-base-control .right-alert-content-main.nth1').addClass('current');
});

$('#customer-base-control .right-alert-tabs_menu li.nth2').click(function() {
	$('#customer-base-control .right-alert-tabs_menu li').removeClass('current');
	$(this).addClass('current');
	$('#customer-base-control .right-alert_content').children().removeClass('current');
	$('#customer-base-control .right-alert_content').children('#customer-base-control .right-alert-content-main.nth2').addClass('current');
});

// 选择框
$('body').click(function(e) {
    var _fastNewBuilt = $('.select1'); // 设置目标区域
    if (!_fastNewBuilt.is(e.target) && _fastNewBuilt.has(e.target).length === 0) { 
   	 	$('.select1').removeClass('open');
    } else {
    		$('.select1').toggleClass('open');
    }
});

$('body').click(function(e) {
    var _fastNewBuilt = $('.select2'); // 设置目标区域
    if (!_fastNewBuilt.is(e.target) && _fastNewBuilt.has(e.target).length === 0) { 
   	 	$('.select2').removeClass('open');
    } else {
    		$('.select2').toggleClass('open');
    }
});

$('body').click(function(e) {
    var _fastNewBuilt = $('.select3'); // 设置目标区域
    if (!_fastNewBuilt.is(e.target) && _fastNewBuilt.has(e.target).length === 0) { 
   	 	$('.select3').removeClass('open');
    } else {
    		$('.select3').toggleClass('open');
    }
});

/*  select选中改变btn文本 js  */
$(function(){
	var	btnMenuChooseText = $('.selet-choose-dete.div1 .select-menu li.choosed').text();
	$('.selet-choose-dete.div1 .select-btn p').text(btnMenuChooseText);
});

$(function(){
	var	btnMenuChooseText = $('.selet-choose-dete.div2 .select1 .select-menu li.choosed').text();
	$('.selet-choose-dete.div2 .select1 .select-btn p').text(btnMenuChooseText);
});

$(function(){
	var	btnMenuChooseText = $('.selet-choose-dete.div2 .select2 .select-menu li.choosed').text();
	$('.selet-choose-dete.div2 .select2 .select-btn p').text(btnMenuChooseText);
});

$('.select-menu li').click(function(){
	$(this).parent('.select-menu').children('li').removeClass('choosed');
	$(this).addClass('choosed');
	var	btnMenuChooseText = $(this).text();
	$(this).parent().parent().children('.select-btn').children('p').text(btnMenuChooseText);
});
/*  select选中改变btn文本 js end */

/* 日期js */
$($.date_input.initialize);