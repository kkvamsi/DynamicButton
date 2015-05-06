function check()
{

alert("Hello");
}


$(document).ready(function(){

$('#testButton').html('jquery working');
$('#addButton').click(function(){$('#parentDiv').clone(true).insertAfter(this);});
//$('#removeButton').click(function(){$('body').last().remove();});

}





);

