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

		if($(this).parents('.row').find('.parentDiv:nth-child(1)').html()==''){
			$(this).parents('.row').find('.parentDiv:nth-child(1)').remove();
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
	var _col=$(this).parents('.row').find('.parentDiv').length;
	
	if($(this).parents('.parentDiv').next('.parentDiv').html()==''){
		$(this).parents('.parentDiv').next('.parentDiv').remove();
	}
	else{
		if($(this).parents('.row').find('.parentDiv:nth-child('+_col+')').html()==''){
			$(this).parents('.row').find('.parentDiv:nth-child('+_col+')').remove();
		}
		else{
			add_colsright();
			$(this).parents('.row').find('.parentDiv:last-child').remove();
		}
	}
	$('body').find('.row').find('.clear').remove();
	$('body').find('.row').append('<div class="clear"></div>');
	
	$(this).parent().clone(true).insertAfter(rightPath);
	$(this).parent().next().find($('.mainButton')).text(count);
	add_cols($(this).parents('.row').attr('id'));

});


$('.topBtn').click(function(){

	count=++count;
	count_rows=++count_rows;
	var _col=$(this).parents('.parentDiv').attr('class');
	_col=_col.substring(_col.indexOf(' ')+1,_col.length);
	console.log(_col);
	
	if($(this).parents('.row').attr('id')=='row0'){
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
	}
	else if($(this).parents('.row').prev().find('.'+_col).html()==''){
		$(this).parents('.parentDiv').clone(true).insertBefore($(this).parents('.row').prev().find('.'+_col));
		add_cols($(this).parents('.row').attr('id'));
		$(this).parents('.row').prev().find('.'+_col).next('.'+_col).remove();
		$(this).parents('.row').prev().find('.'+_col).find($('.mainButton')).text(count);
	}
	
	else{
		/*$('.clear').remove();
		$('.row').append('<div class="clear"></div>');
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
		add_rows();*/
	}

});




$('.downBtn').click(function(){

	count=++count;
	count_rows=++count_rows;
	$('.clear').remove();
	$('.row').append('<div class="clear"></div>');
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
