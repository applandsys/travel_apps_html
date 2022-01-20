const myNavigator = document.querySelector('#myNavigator');


document.addEventListener('init', function(event) {
  var page = event.target ;
  if (event.target.matches('#home')) {
    page.querySelector('#visa_section_button').onclick = function(){
        myNavigator.pushPage('visa_section.html', {data: {title: 'Visa Section'}});
    }
  }

    
  if (event.target.matches('#profile')) {
      getprofile(page);    
      page.querySelector('#update_profile').onclick = function(){
        updateProfile(dataObj);
      }
  }


  if (event.target.matches('#pay_now_visa')) {
      getprofile(page);    
  }

}, false);	