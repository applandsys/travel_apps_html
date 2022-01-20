document.addEventListener('init', function(event) {
  var page = event.target ;
  if (event.target.matches('#authpage')) {

    page.querySelector('#login_button').onclick = function(){
        window.location.replace("main.html");
    }
	
	
	
	
	function onSignIn(googleUser) {
	  var profile = googleUser.getBasicProfile();
	  console.log('ID: ' + profile.getId()); 
	}
    
	
  }  

}, false);	