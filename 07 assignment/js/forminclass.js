$('#form').on('submit', function (event) {
	event.preventDefault();
//stop the form from submitting itself!
    
//start form validation of fields 
    
$fname = $('#fname').val();
var fname_minlength = 2 ;
checkLength($fname, fname_minlength);
    
var lname_minlength = 5;
$lname = $('#lname').val();
checkLength(fname, lname_minlength);
    
});


// checkLength -- check the length of a string, eg. greater than 3 characters 
function checkLength ( string_to_check, minimum_length) {

var slength = string_to_check.length; 
    
    var user_error_message ;
//console.log("length_of_string: " + length_of_string);

if (slength <= minimum_length) {
/*     if(!(slength>2)){     */ //alternative weay to writ ethis 
console.log ( 'string is too short!');
//user_error_message = "The username is too short! Must be at least greater than 2 letters.";

//$('h1').after ('<div class="user_error_message">' + user_error_message + '</div>');
    
//$('#name').addClass('error');    
}

else {
    console.log ('string is' + minimum_length + 'characters!');
}
}  //console.log("string length: " + slength );