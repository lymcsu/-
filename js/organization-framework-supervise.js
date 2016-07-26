$('body').click(function(e) {
    var _dropdownBody = $('.js-tabs-div1 .dropdown-body '); // 设置目标区域
    if (!_dropdownBody.is(e.target) && _dropdownBody.has(e.target).length === 0) { 
   	 	_dropdownBody.removeClass('open');
    } else {
    		_dropdownBody.toggleClass('open');
    }
    
    var _dropdownBody2 = $('.js-tabs-div2 .dropdown-body '); // 设置目标区域
    if (!_dropdownBody2.is(e.target) && _dropdownBody2.has(e.target).length === 0) { 
   	 	_dropdownBody2.removeClass('open');
    } else {
    		_dropdownBody2.toggleClass('open');
    }
});

$('.checked-box').not('.disabled,.all-checked-btn').click(function(){
	$(this).toggleClass('checked');
});

$('.js-tabs-div1 .checked-box.all-checked-btn').click(function(){
	if ($('.js-tabs-div1 .checked-box.all-checked-btn').hasClass('checked')){
		$('.js-tabs-div1 .checked-box').not('.disabled').removeClass('checked');
	} else {
		$('.js-tabs-div1 .all-checked-btn').addClass('checked');
		$('.js-tabs-div1 .checked-box').not('.disabled,.all-checked-btn').addClass('checked');
	}
});

$('.js-tabs-div2 .checked-box.all-checked-btn').click(function(){
	if ($('.js-tabs-div2 .checked-box.all-checked-btn').hasClass('checked')){
		$('.js-tabs-div2 .checked-box').not('.disabled').removeClass('checked');
	} else {
		$('.js-tabs-div2 .all-checked-btn').addClass('checked');
		$('.js-tabs-div2 .checked-box').not('.disabled,.all-checked-btn').addClass('checked');
	}
});

/* 分页 */
$('.pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});