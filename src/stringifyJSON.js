// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var string = '';
	if (typeof obj == "object"){
		if (Array.isArray(obj)){
			string+= '['
			for(var i = 0; i < obj.length; i++){
				if (typeof obj[i] == "string"){
					string += '"' + obj[i] + '"';
				}
				else if(typeof obj[i] == "number" || typeof obj[i] == "boolean"){
					string += obj[i];
				}
				else if (typeof obj[i] == "object"){
					//RECURSIVE CASE
					string += stringifyJSON(obj[i]);
				}
				else if (typeof obj[i] == "function" || typeof obj[i] == "symbol" || typeof obj[i] == "undefined") {
					//function, symbols, and undefined types are omitted
					string += '';
				}
				if(i+1< obj.length){
					string +=',';
				}
			}
			return string += ']';
		}
		// If obj is not an array, it is js object
		else {
			if (obj == null){
				return "null";
			}
			string += '{';
			var keyArr = Object.keys(obj);
			for (var i = 0;  i < keyArr.length; i++){
				if (typeof obj[keyArr[i]] == "string"){
					string += '"' + keyArr[i] + '"' + ':' + '"' + obj[keyArr[i]] + '"';
				}
				else if(typeof obj[keyArr[i]] == "number" || typeof obj[keyArr[i]] == "boolean"){
					string += '"' + keyArr[i] + '"' + ':' + obj[keyArr[i]];
				}
				else if (typeof obj[keyArr[i]] == "object"){
					
					//RECURSIVE CASE
					string+= '"' + keyArr[i] + '"' + ':' + stringifyJSON(obj[keyArr[i]]);
				}
				else if (typeof obj[keyArr[i]] == "function" || typeof obj[keyArr[i]] == "symbol" || typeof obj[keyArr[i]] == "undefined") {
					//function, symbols, and undefined types are omitted
					string+= '';
				}
				if(i+1 < keyArr.length){
					string += ',';
				}
			}
			
			return string += '}'
		}
	}
	else{
		if (typeof obj == "string"){
			return string += '"' + obj + '"';
		}
		else if(typeof obj == "number" || typeof obj == "boolean"){
			return string += obj;
		}
		else if (typeof obj == "function" || typeof obj == "symbol" || typeof obj == "undefined") {
			//function, symbols, and undefined types are omitted
			return string+= '';
		}
	}
};