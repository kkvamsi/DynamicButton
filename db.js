$(document).ready(function(){

var count=0;
var count_rows=0;
var parent=$('.row').html();

function add_cols(id){
	var i=0;
	$('#'+id).find('.parentDiv').attr('class', function(i) {
		return 'parentDiv col' + i;
	});
};

function add_rows(){
	var i=0;
	$('body').find('.row').attr('id', function(i) {
		return 'row' + i;
	});
};

function add_colsleft(){
	$('body').find('.row').prepend('<div class="parentDiv"></div>');
};

function add_colsright(){
	$('body').find('.row').append('<div class="parentDiv"></div>');
};



$('.leftBtn').click(function(){

	count=++count;
	var leftPath=$(this).parent();
	
	if($(this).parents('.parentDiv').prev().html()==''){
		$(this).parents('.parentDiv').prev().remove();
	}
	else{

		if($(this).parents('.row').find('.parentDiv:first-child').html()==''){
			$(this).parents('.row').find('.parentDiv:first-child').remove();
		}
		else{
			add_colsleft();
			$(this).parents('.row').find('.parentDiv:nth-child(1)').remove();
		}
	}

	$(this).parent().clone(true).insertBefore(leftPath);
	$(this).parent().prev().find($('.mainButton')).text(count);
	add_cols($(this).parents('.row').attr('id'));

});

$('.rightBtn').click(function(){

	count=++count;
	var rightPath=$(this).parent();
	
	if($(this).parents('.parentDiv').next().html()==''){
		$(this).parents('.parentDiv').next().remove();
	}
	else{
		if($(this).parents('.row').find('.parentDiv:last-child').html()==''){
			$(this).parents('.row').find('.parentDiv:last-child').remove();
		}
		else{
			add_colsright();
			$(this).parents('.row').find('.parentDiv:last-child').remove();
		}
	}
	
	$(this).parents('.row').append('<div class="clear"></div>');

/*
	if($(this).parents('.parentDiv').next().html()==''){
		$(this).parents('.parentDiv').next().remove();
	}
	else{		
		add_colsright();
		$(this).parents('.parentDiv').next().remove();
	}

*/
	$(this).parent().clone(true).insertAfter(rightPath);
	$(this).parent().next().find($('.mainButton')).text(count);
	add_cols($(this).parents('.row').attr('id'));

});


$('.topBtn').click(function(){

	count=++count;
	count_rows=++count_rows;
	var topPath=$(this).parents('.row');
	$(this).parents('.parentDiv').addClass('active');
	$(this).parents('.row').clone(true).insertBefore(topPath);
	$(this).parents('.row').prev().attr("id",'row'+count_rows);
	$(this).parents('.row').prev().find('.parentDiv').addClass('border_white');
	$(this).parents('.row').prev().find('.active').removeClass('border_white');
	$(this).parents('.row').prev().find('.active').addClass('border_black');
	$(this).parents('.row').prev().find('.active').find($('.mainButton')).text(count);
	$(this).parents('.row').prev().find('.border_black').removeClass('active');
	$(this).parents('.row').prev().find('.border_white').html('');
	$(this).parents('.parentDiv').removeClass('active');
	add_cols('row'+count_rows);
	add_rows();

});




$('.downBtn').click(function(){

	count=++count;
	count_rows=++count_rows;
	var topPath=$(this).parents('.row');
	$(this).parents('.parentDiv').addClass('active');
	$(this).parents('.row').clone(true).insertAfter(topPath);
	$(this).parents('.row').next().attr("id",'row'+count_rows);
	$(this).parents('.row').next().find('.parentDiv').addClass('border_white');
	$(this).parents('.row').next().find('.active').removeClass('border_white');
	$(this).parents('.row').next().find('.active').addClass('border_black');
	$(this).parents('.row').next().find('.active').find($('.mainButton')).text(count);
	$(this).parents('.row').next().find('.border_black').removeClass('active');
	$(this).parents('.row').next().find('.border_white').html('');
	$(this).parents('.parentDiv').removeClass('active');
	add_cols('row'+count_rows);
	add_rows();

});

});
