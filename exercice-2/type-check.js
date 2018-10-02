function type_check_v1(arg1, arg2){

	switch(arg2){
		case "array":
				return Array.isArray(arg1);
			break;
		case "null":
			return arg1 === null;
			break;
		default:
			if((typeof arg1) === arg2){
				return true;
			}
			break;
	}
	/*
	if((typeof arg1) === arg2){
		return true;
	}
	*/
	return false;
}


function type_check_v2(arg1, arg2){
	var checked = false;

	if(arg2.enum){
		for(var e in arg2.enum){
			if(arg2.enum[e] === arg1){
				checked = true;
			}
		}
	}

	if(arg2.type){
		switch(arg2.type) {
			case "object":
				checked = type_check_v1(arg1, arg2.type);
				break;
			case "string":
				checked = (arg1 === arg2.value);
				break;
		}
	}

	return checked
}

function type_check_v3(){

}

console.log("");
console.log("===============================");
console.log("===============================");
console.log("======== TYPE CHECK V1 ========");
console.log("===============================");
console.log("===============================");
console.log("");



console.log(type_check_v1(1, "number"));
console.log(type_check_v1(undefined, "number"));
console.log(type_check_v1([], "array"));

console.log("");
console.log("===============================");
console.log("===============================");
console.log("======== TYPE CHECK V2 ========");
console.log("===============================");
console.log("===============================");
console.log("");

console.log(type_check_v2(1,{enum:["coucou",1,2,true]}));
console.log(type_check_v2("coucou",{type:"string", value: "coucou"}));
console.log(type_check_v2("coucou",{type:"object"}));
console.log(type_check_v2({foo:"bar"},{type:"object"}));



console.log("");
console.log("===============================");
console.log("===============================");
console.log("======== TYPE CHECK V3 ========");
console.log("===============================");
console.log("===============================");
console.log("");