// Run init function on page load
window.onload = init;

// Initialize the content
function init() {
	$('<section id="main"></section>').appendTo('body');
	$('<table></table>').appendTo('#main');
	$('<div id="buttonrow"></div>').appendTo('#main');
	$('<button onclick="resetLetters()">Nollställ</button>').appendTo('#buttonrow');
	//$('<button onclick="unDo()">Ångra</button>').appendTo('#buttonrow');
	$('<audio id="click"><source src="audio/click.mp3" type="audio/mpeg"><source src="audio/click.wav" type="audio/wav"></audio>').appendTo('body');

	// Start writing the DOM
	showLetters();
}
// Write the table of letters
function showLetters() {
	var letters = [
		{"col1":"A<sub>1</sub><sup>9</sup>", "col2":"B<sub>3</sub><sup>2</sup>", "col3":"C<sub>8</sub><sup>1</sup>", "col4":"D<sub>1</sub><sup>5</sup>"}, 
		{"col1":"E<sub>1</sub><sup>8</sup>", "col2":"F<sub>3</sub><sup>2</sup>", "col3":"G<sub>2</sub><sup>3</sup>", "col4":"H<sub>3</sub><sup>2</sup>"},
		{"col1":"I<sub>1</sub><sup>5</sup>", "col2":"J<sub>7</sub><sup>1</sup>", "col3":"K<sub>3</sub><sup>3</sup>", "col4":"L<sub>2</sub><sup>5</sup>"},
		{"col1":"M<sub>3</sub><sup>3</sup>", "col2":"N<sub>1</sub><sup>6</sup>", "col3":"O<sub>2</sub><sup>6</sup>", "col4":"P<sub>4</sub><sup>2</sup>"},
		{"col1":"R<sub>1</sub><sup>8</sup>", "col2":"S<sub>1</sub><sup>8</sup>", "col3":"T<sub>1</sub><sup>9</sup>", "col4":"U<sub>4</sub><sup>3</sup>"},
		{"col1":"V<sub>3</sub><sup>2</sup>", "col2":"X<sub>8</sub><sup>1</sup>", "col3":"Y<sub>7</sub><sup>1</sup>", "col4":"Z<sub>8</sub><sup>1</sup>"},
		{"col1":"Å<sub>4</sub><sup>2</sup>", "col2":"Ä<sub>4</sub><sup>2</sup>", "col3":"Ö<sub>4</sub><sup>2</sup>", "col4":"Ø<sub>0</sub><sup>2</sup>"}
	];
	var table = $('table');
	var col = ["col1", "col2", "col3", "col4"];

	// Write letters in columns
	$.each(letters, function(i, ltrs) {
		var tr = $('<tr>');
		$.each(col, function(i, id) {
			var ltrId = ltrs[id].slice(0,-24);
			$('<td class="cell" onclick="reduceNumByOne(\''+ltrId+'\')">').html(ltrs[id]).attr('id', ltrId).appendTo(tr);
		});
		table.append(tr);
	});
}

function reduceNumByOne(id) {
	// For reducing numbers
	var td = $('#'+id);
	var sup = $('#'+id+' sup');
	var val = sup.html();
	// Variable for saving to LS
	var letter = id;
	
	if(sup.html() >= 1) {
		// Reduce num by 1
		sup.html(val-1);
		// Play click
		playAudio();
	}
	// If number of letters is 0
	if(sup.html() < 1) {
		td.css('backgroundColor', 'gray');
		sup.css('color', 'rgb(128,0,0)');
		sup.html(0);
	}
}

function resetLetters() {
	$('body').empty();
	init();
}

function playAudio() {
	// For playing click sound -- did not work when choosing object with jQuery [var click = $('#click');]
	var click = document.getElementById("click");
	click.play();
}

function unDo() {
	//javascript:history.back();
}