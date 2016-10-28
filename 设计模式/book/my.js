function $(id){return document.getElementById(id)}

(function (){
	var menu = $("contents-list").innerHTML;
	console.log(menu)
	var header = document.getElementsByTagName("header")[0];
	var ele = document.createElement("div");
	ele.innerHTML = menu;
	ele.className = "float-contents-list";
	header.appendChild(ele);
})
