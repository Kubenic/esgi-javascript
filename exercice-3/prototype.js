String.prototype.ucfirst = function(){
	if(this === null ){
		return "";
	}else{
		return this.charAt(0).toUpperCase() + this.substring(1)
	}
}


String.prototype.capitalize = function(){
	if(this === null ){
		return ""
	}else{

		var phrase = this.split(" ");
		var final = "";

		for ( var i = 0 ; i < phrase.length; i++){
			final += this.ucfirst(phrase[i])
			if( i < phrase.length - 1){
				final += " "
			}
		}

		return final;
	}
}


String.prototype.camelCase = function(){
	if(this === null ){
		return ""
	}else{
		return this.capitalize(this).replace(/[ ]/gm,"");
	}
}


String.prototype.snake_case = function(){
	if(this === null ){
		return ""
	}else{
		return this.toLowerCase().replace(/[ ]/gm,"_");
	}
}

String.prototype.leet = function(){
	if(this === null ){
		return ""
	}else{
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
			phrase = this.replace(new RegExp('['+ key +']','gm'),parser[key]);
		} 

		return phrase;
	}
}


Object.prototype.prop_access = function(properties = null){
	var error = false;
	if(properties === null || properties === ""){
		return this;
	}else{
		var paths = properties.split(".");
		var current = this;
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

String.prototype.verlan = function(){
	if(this === null ){
		return ""
	}else{
		var phrase = this.split(" ");
		var final = "";
		for(var key in phrase){
			var temp = "";
			for(var i = phrase[key].length -1; i >=0; i--){
				temp += phrase[key][i];
			}
			if(key < this.length){
				temp += " ";
			}
			final += temp;

		}

		return final;
	}
}

String.prototype.yoda = function(){
	if(this === null ){
		return ""
	}else{
		return this.split(" ").reverse().join(" ");
	}
}

String.prototype.vig = function(salt){
	if(this === null || salt === null){
		return "";
	}else{
		var bigSalt = "";
		var saltIndex = 0;
		for(var i = 0; i < this.length; i++){
			if(this[i] >= "a" && this[i] <= "z"){
				var test = (this[i].charCodeAt(0) + salt[saltIndex].charCodeAt(0)) % 26;
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
}



console.log("test".ucfirst());
console.log("test".capitalize());
console.log("test".camelCase());
console.log("test".snake_case());
console.log("test".leet());
console.log("test".verlan());
console.log("test".yoda());
console.log("test".vig("coup"));
console.log({animal: {foo : "bar"}}.prop_access("animal.foo"));
