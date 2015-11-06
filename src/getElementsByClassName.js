// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var matched = [];
  var matchClass = function(element) {
  	if(element.classList && element.classList.contains(className)){
  		matched.push(element);
  	}
  	if (element.childNodes){
  		for (var i = 0; i < element.childNodes.length; i++){
  			matchClass(element.childNodes[i]);
  		}
  	}
  };
  matchClass(document.body)
  return matched;
};


//use document.body, element.childNodes, element.classList