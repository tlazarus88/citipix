//pseudocode
//user enters name
//clicks submit
//name matches var, than background switches
//name does not match anything, than background stays the same SKIP THIS

//setting up var for city
var city;

//separate var to allow for trim
var str;

//ensure no functions happen until page is ready
$(document).ready(function() {
	noDefault();
	userSubmit();
});
//prevent new page load
function noDefault() {
	$("form").on('submit', function(event){
		event.preventDefault();
})};

//on submit functions
function userSubmit() {
	$("form").on('submit', function() {
		str = $('#city-type').val();
		city = $.trim(str);
		//alert(city); USED TO TEST CAPTURE OF VAL
		changeBackground();
		clearInput();
	});
};

//function defining the background changes
function changeBackground () {
	if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
		$("body").removeClass().addClass("sf");
	} else if (city === "New York" || city === "New York City" || city === "NYC") {
		$("body").removeClass().addClass("nyc");
	} else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
		$("body").removeClass().addClass("la");
	} else if (city === "Austin" || city === "ATX") {
		$("body").removeClass().addClass("austin");
	} else if (city === "Sydney" || city === "SYD") {
		$("body").removeClass().addClass("sydney");
	}
};

//returns input to original placeholder text
function clearInput() {
		$('#city-type').val('');
};

