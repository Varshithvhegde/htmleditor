
var j=0;
function update(i) {
	if(i==0){
	let htmlCode=document.getElementById("htmlCode").value;
	let cssCode=document.getElementById("cssCode").value;
	let javascriptCode=document.getElementById("javascriptCode").value;
	let text=htmlCode+"<style>"+cssCode+"</style>"+"<scri"+"pt>"+javascriptCode+"</scri"+"pt>";
	let iframe=document.getElementById('viewer').contentWindow.document;
	iframe.open();
	iframe.write(text);
	iframe.close();
	}

	else if(i==1){
		
		let htmlCode=document.getElementById("htmlCode").value;
		let html=htmlCode.slice(0,htmlCode.length);
		document.getElementById("htmlCode").value=html;
		j=1;

	}
	
}
const closeChars = new Map([
	['{', '}'],
	['[', ']'],
	['(', ')'],
	['<','>'],
	['"','"'],
	["'","'"]
	
  ]);
	  
  htmlCode=document.getElementById('htmlCode');
  
  htmlCode.addEventListener('input', function (e) {
  if(j!=1){
	  const pos = e.target.selectionStart;
	  const val = [...e.target.value];
	  
	  const char = val.slice(pos-1, pos)[0];
	  const closeChar = closeChars.get(char);
	  
	  if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
	  }
	}
	j=0;
  });

  cssCode=document.getElementById('cssCode');
  
  cssCode.addEventListener('input', function (e) {
	if(j!=1){
	  const pos = e.target.selectionStart;
	  const val = [...e.target.value];
	  
	  const char = val.slice(pos-1, pos)[0];
	  const closeChar = closeChars.get(char);
	  
	  if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
	  }
	}
	j=0;
  });

  javascriptCode=document.getElementById('javascriptCode');
  
  javascriptCode.addEventListener('input', function (e) {
	if(j!=1){
	  const pos = e.target.selectionStart;
	  const val = [...e.target.value];
	  
	  const char = val.slice(pos-1, pos)[0];
	  const closeChar = closeChars.get(char);
	  
	  if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
	  }
	}
	j=0;
	  
  });

 


// function BuiltInElements(id){
// 	let htmlCode=document.getElementById("htmlCode").value;
// 	if(id=="h"){
// 	if(htmlCode.length==0){
// 		htmlCode+="<h1></h1>";
// 	}
// 	else{
// 	htmlCode+="\n"+"<h1></h1>";
// 	}
// 	}
// 	if(id=="image"){
// 		if(htmlCode.length==0){
// 			htmlCode+="<img src='' alt='add image'>";
// 		}else{
// 			htmlCode+="\n"+"<img src='' alt='add image'>";
// 		}
// 	}
// 	if(id=='form'){

// 		if(htmlCode.length==0){
// 			htmlCode+="<form>"+"\n"+"<input type='text'>"+"\n"+"<input type='submit'>"+"\n"+"</form>";
// 		}
// 		else{
// 			htmlCode+="\n"+"<form>"+"\n"+"<input type='text'>"+"\n"+"<input type='submit'>"+"\n"+"</form>";
// 		}
// 	}
// 	document.getElementById("htmlCode").value=htmlCode;
// 	update(0);
	
// }

Split([".container", ".iframe-container"]);
//Split(["#htmlCode", "#cssCode", "#javascriptCode"]);
