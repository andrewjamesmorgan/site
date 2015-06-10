function toggle(obj) {
// Moz. or IE
var sibling=(obj.nextSibling.nodeType==3)? obj.nextSibling.nextSibling : obj.nextSibling;
// hide or show
if(sibling.style.display=='' || sibling.style.display=='block') {
	sibling.style.display='none';
    obj.firstChild.firstChild.data='+';
    }
else {
	sibling.style.display='block';
    obj.firstChild.firstChild.data='-';
    }
}
//
function initCollapse() {
var oDT=document.getElementById('content').getElementsByTagName('dt');
for (var i=0; i < oDT.length; i++) {
	oDT[i].onclick=function() {toggle(this)};
    var oSpan=document.createElement('span');
    var sign=document.createTextNode('+');
    oSpan.appendChild(sign);
    oDT[i].insertBefore(oSpan, oDT[i].firstChild);
    oSpan.style.fontFamily='monospace';
    oSpan.style.paddingRight='0.5em';
    oDT[i].style.cursor='pointer';
    toggle(oDT[i]);
	}
oDT=null;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function(if(document.getElementById && document.createElement) {
  initCollapse();
});
