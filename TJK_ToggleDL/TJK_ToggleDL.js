// Copyright 2006 | Thierry Koblentz - www.TJKDesign.com All Rights reserved
// TJK_ToggleDL() Version 1.5.4 report bugs or errors to thierry@tjkdesign.com

if (document.getElementById && document.getElementsByTagName){			
document.write("<link href=\"TJK_ToggleDL/TJK_ToggleDL.css\" type=\"text/css\" rel=\"stylesheet\" />")
document.write("<link href=\"TJK_ToggleDL/TJK_ToggleDL_ie5mac.css\" type=\"text/css\" rel=\"stylesheet\" />")
}
function TJK_doToggleDL(x){
	var zDD=document.getElementById('TJK_DL').getElementsByTagName('dd');
	var zDT=document.getElementById('TJK_DL').getElementsByTagName('dt');	
		zDD[x].className=(zDD[x].className=='hideDD')?'showDD':'hideDD';
		zDT[x].className=(zDT[x].className=='DTplus')?'DTminus':'DTplus';	
}
function TJK_doToggleDL2(x){
	var zDD=document.getElementById('TJK_DL2').getElementsByTagName('dd');
	var zDT=document.getElementById('TJK_DL2').getElementsByTagName('dt');	
		zDD[x].className=(zDD[x].className=='hideDD')?'showDD':'hideDD';
		zDT[x].className=(zDT[x].className=='DTplus')?'DTminus':'DTplus';	
}

function TJK_ToggleDL(){
if (document.getElementById && document.getElementsByTagName){			
	var zDT=document.getElementById('TJK_DL').getElementsByTagName('dt');
	var zDD=document.getElementById('TJK_DL').getElementsByTagName('dd');
	var zDT2=document.getElementById('TJK_DL2').getElementsByTagName('dt');
	var zDD2=document.getElementById('TJK_DL2').getElementsByTagName('dd');
	for(var i=0;i<zDT.length;i++){
		var zContent = zDT[i].innerHTML;
		var zHref = "<a href='#' onclick=\"TJK_doToggleDL("+i+");return false\" title='Show/hide the answer'>";
		zDT[i].innerHTML = zHref + zContent + "</a>";
		zDD[i].className='hideDD';
		zDT[i].className='DTplus';
	}
	for(var i=0;i<zDT2.length;i++){
		var zContent = zDT2[i].innerHTML;
		var zHref = "<a href='#' onclick=\"TJK_doToggleDL2("+i+");return false\" title='Show/hide the answer'>";
		zDT2[i].innerHTML = zHref + zContent + "</a>";
		zDD2[i].className='hideDD';
		zDT2[i].className='DTplus';
	}
 }
}
