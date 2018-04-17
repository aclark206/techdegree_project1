// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var myvar = setInterval(printQuote, 10000);

/* array of quote objects that contain the quote, source, year, citation, and catagory */
var quotes = [
	{quote:'I do know one thing about me: I don\'t measure myself by others\' expectations or let others define my worth.', 
	source:'Sonia Sotomayor',
	year:2013,
	citation:'A Justice Deliberates: Sotomayor On Love, Health And Family". "Morning Edition" with Nina Totenberg',
	tags:'politics'},
	{quote:'Dreaming, after all, is a form of planning.', 
	source:'Gloria Steinem',
	tags:'politics'},
	{quote:'Celebrate what you\'ve accomplished, but raise the bar a little higher each time you succeed.',
	source:'Mia Hamm',
	year:2013,
	citation:'“Go For The Goal: A Champion\'s Guide To Winning In Soccer And Life”, p.23, Harper Collins',
	tags:'sports'},
	{quote:'I\'m a feminist.  I\'ve been a female for a long time now.  It\'d be stupid not to be on my own side.',
	source:'Maya Angelou',
	tags:'literature'},
	{quote:'Culture is an accumulation of decisions.',
	source:'Ben Thompson',
	tags:'business'},
	{quote:'Boredom is a choice.  Like tardiness.  Or interrupting.',
	source:'Mike Rowe',
	tags:'business'},
	{quote:'I began to realize how important it was to be an enthusiast in life.  If you are interested in something, go at it full speed.  Embrace it with both arms, hug it, love it, and above all else become passionate about it.  Lukewarm is not good.',
	source:'Roald Dahl',
	tags:'literature'},
	{quote:'Success is not final, failure is not fatal: it is the courage to continue that counts.',
	source:'Winston S. Churchill',
	tags:'politics'},
	{quote:'Create the highest, grandest vision possible for your life, because you become what you believe',
	source:'Oprah Winfrey',
	year:1998,
	tags:'entertainment'}
];

/*
	returns a random quote object from the array quotes
*/
function getRandomQuote(){
	var index = 0;
	index = Math.floor(Math.random() * quotes.length);
	
	return quotes[index];
	
}

/*
	Returns a string with a random RGB color
*/
function getRandomColor(){
	var randomInt = Math.floor((Math.random() + 1) * 255);
	var color = "rgb(";
	color += Math.floor(Math.random() * 255) + ', ';
	color += Math.floor(Math.random() * 255) + ', ';
	color += Math.floor(Math.random() * 255) + ')';
	return color;
}

/*
	Change background color to a randomly generated color
*/
function changeBackgroundColor(){
	
	document.body.style.background = getRandomColor();
	
}


/*
   Prints a random Quote to the webpage along with the source, year, citation, and category if available. 
*/
function printQuote(){
	
	// get a quote and meta data to display
	var thisQuote = getRandomQuote();
	
	
	// generate the html around the quote and meta data
	var html = '<div id="quote-box">';
	html += '<p class="quote"> ' + thisQuote.quote + ' </p>';
	html += '<p class="source">' + thisQuote.source ;
	
	if (thisQuote.citation){
		html += '<span class="citation"> ' + thisQuote.citation + ' </span>';
	}
	if (thisQuote.year){
		html += '<span class="year"> ' + thisQuote.year + ' </span>';
	}
	if (thisQuote.tags){
		html += '<span class="tags"> ' + thisQuote.tags + ' </span>';
	}
	html += '</p> </div>';
	
	// display the quote
	document.getElementById('quote-box').innerHTML = html;
	
	//change the background color
	changeBackgroundColor();
	
	
}