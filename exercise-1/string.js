function ucfirst(phrase){
	return phrase.charAt(0).toUpperCase() + phrase.substring(1)
}


function capitalize(phrase){
	var phrase = phrase.split(" ");
	var final = "";

	for ( var i = 0 ; i < phrase.length; i++){
		final += ucfirst(phrase[i])
		if( i < phrase.length - 1){
			final += " "
		}
	}

	return final;
}


function camelCase(phrase){
	return capitalize(phrase).replace(/[ ]/gm,"");
}


function snake_case(phrase){
	return phrase.toLowerCase().replace(/[ ]/gm,"_");
}

function leet(phrase){
	var parser = {
		A: "4",
		E: "3",
		I: "1",
		O: "0",
		U: "(_)",
		Y: "7",
		a: "4",
		e: "3",
		i: "1",
		o: "0",
		u: "(_)",
		y: "7"
	}

	for (var key in parser){
		phrase = phrase.replace(new RegExp('['+ key +']','gm'),parser[key]);
	} 

	return phrase;
}


function prop_access(objet, properties = null){
	var error = false;
	if(properties === null || properties === ""){
		return objet
	}else{
		var paths = properties.split(".");
		var current = objet;
		for(var path in paths){
			if( current.hasOwnProperty(paths[path])){
				current = current[paths[path]];
			}else{
				error = "";
				for(var i = 0; i <= path; i++){
					 error += paths[i];
					 if(i < path){
					 	error += ".";
					 }
				}
				error += " not exist";
				break;
			}
			
		}

		if(error){
			return error;
		}else{
			return current;
		}
		
	}

}

function verlan(phrase){
	phrase = phrase.split(" ");
	var final = "";
	for(var key in phrase){
		var temp = "";
		for(var i = phrase[key].length -1; i >=0; i--){
			temp += phrase[key][i];
		}
		if(key < phrase.length){
			temp += " ";
		}
		final += temp;

	}

	return final;
}

function yoda(phrase){
	return phrase.split(" ").reverse().join(" ");
}

function vig(phrase, salt){
	var bigSalt = "";
	var saltIndex = 0;
	for(var i = 0; i < phrase.length; i++){
		if(phrase[i] >= "a" && phrase[i] <= "z"){
			var test = (phrase[i].charCodeAt(0) + salt[saltIndex].charCodeAt(0)) % 26;
			test += "a".charCodeAt(0);
			bigSalt += String.fromCharCode(test);
			if(saltIndex >= salt.length-1){
				saltIndex = 0;
			}else{
				saltIndex++
			}
		}else{
			bigSalt += " ";
		}
	}

	return bigSalt;
}

