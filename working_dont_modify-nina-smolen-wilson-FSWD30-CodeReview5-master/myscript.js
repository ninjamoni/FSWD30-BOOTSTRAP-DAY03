
class Daters {

	constructor(name, surname, age, likes) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.likes = likes;
	}
}

var newDaters = [
new Daters("John", "Doe", "25", 3),
new Daters("Jane", "Doe", "25", 2),
new Daters("Maxima", "Musterman", "25", 8),
new Daters("Max", "Musterman", "25", 2)
];


var allDaters = document.getElementById("datingPartners");

//-----LÓOP TO CREATE ALL DATERS -------------//

for (var i = 0; i < newDaters.length; i++) {
	allDaters.innerHTML += '<div class="daters" id="'+i+'"><div class="pic"><img src="img/img' + i + '.jpg";>'+
	'</div><div class="details">Name: ' + newDaters[i].name + 
	'<br>Surname: '  + newDaters[i].surname + 	
	'<br>Age: '       + newDaters[i].age +
	'<div class="votes">'+
	'<div id="counter" class="counter' + i + '">Likes: ' + newDaters[i].likes + '</div>' + //x+index (x0,x1...)
	'<button class="add ' + i + '" value="' + i + '"></button>'+
	'<button class="remove ' + i + '" value="' + i + '"></button>'+
	'<div class="heart"><img class="heartimg '+ i + '" src="img/like.png"></div></div></div></div>';
	console.log('"img/img' + i + '.jpg")>');
}



$(document).ready(function() {
	$("button.add").on('click', function() //works
	{ 
		//this.id calls the id from the button.add
		totalLikes = newDaters[this.value].likes += 1; 		
		console.log("Total Likes " + totalLikes + ", index: " + this.id); //i = 4 (último resultado del loop)
		$(".counter"+ this.value).html('Likes: ' + totalLikes);
		$(".heartimg."+this.value).css("visibility","visible"); //show heart 

		//--------OPTIONAL - TO ADD JUST ONE LIKE ---------------------
		$(".add."+this.value).css("display","none"); //hide button.add 
		$(".remove."+this.value).css("display","initial"); //show button.remove 
		//------------------------------------------------------------

	});
});

//-------OPTIONAL - DELETE ADDED LIKE (BACK TO ORIGINAL)-------

$(document).ready(function() {
	$("button.remove").on('click', function() //works
	{ 
		totalLikes = newDaters[this.value].likes -= 1; 
		console.log("Total Likes " + totalLikes + ", index: " + this.value); //i = 4 (último resultado del loop)
		$(".counter"+ this.value).html('Likes: ' + totalLikes);
		$(".remove."+this.value).css("display","none"); //in case you regret to addLike - hide button.remove
		$(".heartimg."+this.value).css("visibility","hidden"); //hide heart
		$(".add."+this.value).css("display","initial"); //in case you regret the action - show button.add
	});

});




/*
class Daters {

	constructor(name, surname, age, likes) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.likes = likes;
	}
}

var newDaters = [
new Daters("John", "Doe", "25", 3),
new Daters("Jane", "Doe", "25", 2),
new Daters("Maxima", "Musterman", "25", 8),
new Daters("Max", "Musterman", "25", 2)
];


var allDaters = document.getElementById("datingPartners");

//-----LÓOP TO CREATE ALL DATERS -------------//

for (var i = 0; i < newDaters.length; i++) {
	allDaters.innerHTML += '<div class="daters"><div class="pic"><img src="img/img' + i + '.jpg";>'+
	'</div><div class="details">Name: ' + newDaters[i].name + 
	'<br>Surname: '  + newDaters[i].surname + 	
	'<br>Age: '       + newDaters[i].age +
	'<div class="votes">'+
	'<div id="counter" class="x' + i + '">Likes: ' + newDaters[i].likes + '</div>' + //x+index (x0,x1...)
	'<button class="add" id="' + i + '"></button>'+
	'<button class="remove" id="' + i + '"></button>'+
	'<div class="heart"><img class="heartimg" id="'+ i + '" src="img/like.png"></div></div></div></div>';
	console.log('"img/img' + i + '.jpg")>');
}



$(document).ready(function() {
	$("button.add").on('click', function() //works
	{ 
		//this.id calls the id from the button.add
		totalLikes = newDaters[this.id].likes += 1; 		
		console.log("Total Likes " + totalLikes + ", index: " + this.id); //i = 4 (último resultado del loop)
		$(".x"+ this.id).html('Likes: ' + totalLikes);

		//--------OPTIONAL - TO ADD JUST ONE LIKE ---------------------
		$("#"+this.id+".add").css("display","none"); //hide button.add 
		$("img#"+this.id+".heartimg").css("visibility","visible"); //show heart 
		$("#"+this.id+".remove").css("display","initial"); //show button.remove 
		//------------------------------------------------------------

	});
});

$(document).ready(function() {
	$("button.remove").on('click', function() //works
	{ 
		totalLikes = newDaters[this.id].likes -= 1; 
		console.log("Total Likes " + totalLikes + ", index: " + this.id); //i = 4 (último resultado del loop)
		$(".x"+this.id).html('Likes: ' + totalLikes);


		//-------OPTIONAL - DELETE ADDED LIKE (BACK TO ORIGINAL)-------
		$("#"+this.id+".remove").css("display","none"); //in case you regret to addLike - hide button.remove
		$("#"+this.id+".heartimg").css("visibility","hidden"); //hide heart
		$("#"+this.id+".add").css("display","initial"); //in case you regret the action - show button.add
		//-------------------------------------------------------------



	});
});*/