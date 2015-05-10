$(document).ready(function(){

var count=0;

$('.leftBtn').click(
function()
{
count=++count;
var leftPath=$(this).parent().parent();
$(this).parent().parent().clone(true).insertBefore(leftPath);
//$(this).parent().prev().attr('class','parentDiv');
$(this).parent().parent().prev().find($('.mainButton')).text(count);

}
);

$('.rightBtn').click(

function()
{
count=++count;
var rightPath=$(this).parent().parent();
$(this).parent().parent().clone(true).insertAfter(rightPath);
//$(this).parent().next().attr();
$(this).parent().parent().next().find($('.mainButton')).text(count);


}
);


$('.topBtn').click(

function()
{
count=++count;
var topPath=$(this).parent();
$(this).parent().parent().clone(true).insertBefore(topPath);
$(this).parent().prev().find($('.mainButton')).text(count);

}
);




$('.downBtn').click(

function()
{
count=++count;
var downPath=$(this).parent();
$(this).parent().parent().clone(true).insertAfter(downPath);
$(this).parent().next().find($('.mainButton')).text(count);
}

);


});
