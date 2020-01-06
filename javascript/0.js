var xx=false;if(window.history.replaceState){window.history.replaceState(null,null,window.location.href);}
async function x(){if(xx===false){m1.style.transform='rotate(0deg)';m2.style.transform='rotate(0deg)';hr1.style.borderBottom='1px solid white';
hr2.style.borderBottom='1px solid white';menu.style.height='200px';sob.style.left='0px';
msg.style.left='0px';stn.style.left='0px';hr1.style.top='37px';hr2.style.top='77px';msg.style.transitionDuration='.3s';
stn.style.transitionDuration='.45s';sob.style.transitionDuration='.6s';xx=true;}else{
m1.style.transform='rotate(45deg)';m2.style.transform='rotate(-45deg)';hr1.style.borderBottom='1px solid black';
hr2.style.borderBottom='1px solid black';menu.style.height='1px';sob.style.left='-160px';msg.style.left='-160px';
stn.style.left='-160px';hr1.style.top='-5px';hr2.style.top='-5px';msg.style.transitionDuration='.6s';
stn.style.transitionDuration='.45s';sob.style.transitionDuration='.3s';xx=false;}}
async function y(){if(xx===true){m1.style.transform='rotate(45deg)';m2.style.transform='rotate(-45deg)';hr1.style.borderBottom='1px solid black';
hr2.style.borderBottom='1px solid black';menu.style.height='1px';sob.style.left='-160px';msg.style.left='-160px';
stn.style.left='-160px';hr1.style.top='-5px';hr2.style.top='-5px';msg.style.transitionDuration='.6s';
stn.style.transitionDuration='.45s';sob.style.transitionDuration='.3s';xx=false;}}
async function messages(){document.getElementById('messages').click();}function home(){document.getElementById('home').click();}function settings(){document.getElementById('settings').click();}function signOut(){document.getElementById('signOut').click();}
