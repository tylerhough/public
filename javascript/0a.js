function passLen(){
var x=psw.value.length;
if(x>=1&&x<=7){document.getElementById('pl').style.display='block';document.getElementById('pl').innerHTML='Password must be at least 8 characters';}
else{pl.style.display='none';}}
function passMatch(){var x=psw.value;var y=pswr.value;
if(x!==y){document.getElementById('pm').style.display='block';document.getElementById('pm').innerHTML='Passwords must match';}
else{document.getElementById('pm').style.display='none';}}
function isNumberKey(evt){var charCode=(evt.which)?evt.which:event.keyCode
if(charCode>31&&(charCode<48||charCode>57))return false;return true;}   
