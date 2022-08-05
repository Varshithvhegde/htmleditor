

function update() {
	let htmlCode=document.getElementById("htmlCode").value;
	let cssCode=document.getElementById("cssCode").value;
	let javascriptCode=document.getElementById("javascriptCode").value;
	let text=htmlCode+"<style>"+cssCode+"</style>"+"<scri"+"pt>"+javascriptCode+"</scri"+"pt>";
	let iframe=document.getElementById('viewer').contentWindow.document;
	iframe.open();
	iframe.write(text);
	iframe.close();
	
}
const closeChars = new Map([
	['{', '}'],
	['[', ']'],
	['(', ')'],
	['<','>'],
	['"','"'],
	["'","'"],
	['<','>']
  ]);
	  
  htmlCode=document.getElementById('htmlCode');
  
  htmlCode.addEventListener('input', function (e) {
  
	  const pos = e.target.selectionStart;
	  const val = [...e.target.value];
	  
	  const char = val.slice(pos-1, pos)[0];
	  const closeChar = closeChars.get(char);
	  
	  if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
	  }
  });

  cssCode=document.getElementById('cssCode');
  
  cssCode.addEventListener('input', function (e) {
  
	  const pos = e.target.selectionStart;
	  const val = [...e.target.value];
	  
	  const char = val.slice(pos-1, pos)[0];
	  const closeChar = closeChars.get(char);
	  
	  if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
	  }
  });

  javascriptCode=document.getElementById('javascriptCode');
  
  javascriptCode.addEventListener('input', function (e) {
  
	  const pos = e.target.selectionStart;
	  const val = [...e.target.value];
	  
	  const char = val.slice(pos-1, pos)[0];
	  const closeChar = closeChars.get(char);
	  
	  if (closeChar) {
		val.splice(pos, 0, closeChar);
		e.target.value = val.join('');
		e.target.selectionEnd = pos;
	  }
  });


Split([".container", ".iframe-container"]);
//Split(["#htmlCode", "#cssCode", "#javascriptCode"]);
