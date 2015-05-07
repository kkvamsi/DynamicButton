$(document).ready(function(){

var count=0;

$('.leftBtn').click(
function()
{
count=++count;
var path=$(this).parent();
$(this).parent().clone(true).insertBefore(path);
//$(this).parent().prev().attr('class','parentDiv');
$(this).parent().prev().find($('.mainButton')).text(count);

}
);

$('.rightBtn').click(

function()
{
count=++count;
var path1=$(this).parent();
$(this).parent().clone(true).insertAfter(path1);
//$(this).parent().next().attr();
$(this).parent().next().find($('.mainButton')).text(count);


}
);


$('.topBtn').click(

function()
{
count=++count;

}
);




$('.downBtn').click(

function()
{
count=++count;
}

);


});
