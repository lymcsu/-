$('body').click(function(e) {    
    var _fastNewBuilt = $('.js-tabs-div1 .SpanSelect'); // 设置目标区域
    if (!_fastNewBuilt.is(e.target) && _fastNewBuilt.has(e.target).length === 0) { 
   	 	$('.js-tabs-div1 .SpanSelect').removeClass('open');
    } else {
    		$('.js-tabs-div1 .SpanSelect').toggleClass('open');
    }
});

$('.checked-box').click(function(){
	$(this).toggleClass('checked');
});

/* 分页 */
$('.pagination').twbsPagination({
	totalPages: 35,
	visiblePages: 1
});

$(function(){
    $(".special-tree").treemenu({delay:300}).openActive();
});

$(".special-tree").on('click','a',function(){
	$('.special-tree a').removeClass('active');
	$(this).addClass('active');
});
