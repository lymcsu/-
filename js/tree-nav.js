/* 树形菜单js */
$('.tree').on('click', '.tree-primary-items,.tree-secondary-items', function() {
    $(this).toggleClass('open');
	$(this).parent().children('ul').slideToggle('fast');
});

$('.tree').on('click', '.tree-third-items', function() {
	$('.tree-third-items').removeClass('active');
    $(this).addClass('active');
    $(this).parent().children('ul').slideToggle('fast');
});

$('.tabs-wapper .tree-third-items').click(function(){
	$('.tabs-wapper .tree-third-items,.no-chirld').removeClass('active');
	$(this).addClass('active');
});

$('.tabs-wapper .no-chirld').click(function(){
	$('.tabs-wapper .no-chirld,.tabs-wapper .tree-third-items').removeClass('active');
	$(this).addClass('active');
});
