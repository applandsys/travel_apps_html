
function gotoVisaSection(){
    myNavigator.pushPage('visa_section.html', {data: {title: 'Visa Section'}});
}

function gototourSection(){
    myNavigator.pushPage('tour_section.html', {data: {title: 'Visa Section'}});
}

function gotoVisaProcess(){
    myNavigator.pushPage('visa_process.html', {data: {title: 'Visa Process'}});
}

function gotoTourProcess(){
    myNavigator.pushPage('tour_process.html', {data: {title: 'Tour Process'}});
}

function gotoPayNow(){
    myNavigator.pushPage('pay_now_visa.html', {data: {title: 'Pay Now'}});
}

function gotoPayNow(){
    myNavigator.pushPage('pay_now_visa.html', {data: {title: 'Pay Now'}});
}

function gotoProfile(){
    myNavigator.pushPage('profile.html', {data: {title: 'profile Now'}});
}

function gotoPrivacy(){
    myNavigator.pushPage('privacy.html', {data: {title: 'Privacy'}});
}

function gotoTerms(){
    myNavigator.pushPage('terms.html', {data: {title: 'Terms'}});
}

function gotoFaq(){
    myNavigator.pushPage('faq.html', {data: {title: 'FAQ'}});
}

function gotoAbout(){
    myNavigator.pushPage('about.html', {data: {title: 'About'}});
}




function notify() {
    ons.notification.alert({
        title:`<div class="notice_title" align="center">Notice</div>`,
        message: `In this covid19 we are working
        for you. please be with us and help
        us to support you.`
    });
};


async function getprofile(page) {
    let payload = { token: 'akinaikcufruoyllamsssa' };
    let res = await axios.get('http://127.0.0.1:8000/api/profile', payload);
    let data = res.data;
    
    page.querySelector('#your_name').value = data.profile[0].name;  
    page.querySelector('#fathers_name').value = data.profile[0].fathers_name;  
    page.querySelector('#mothers_name').value = data.profile[0].mothers_name;  
    page.querySelector('#email').value = data.profile[0].email;  
    page.querySelector('#mobile_number').value = data.profile[0].mobile_number;  
    page.querySelector('#nid_number').value = data.profile[0].nid_number;  
    page.querySelector('#passport_number').value = data.profile[0].passport_number;  
    page.querySelector('#present_address').value = data.profile[0].present_address;  
    page.querySelector('#permanent_address').value = data.profile[0].permanent_address;  
    page.querySelector('#blood_group').value = data.profile[0].blood_group;  
    page.querySelector('#education').value = data.profile[0].education;  
    page.querySelector('#occupation').value = data.profile[0].occupation;  
    page.querySelector('#emergency_contact').value = data.profile[0].emergency_contact;  
}

async function updateProfile(dataObj) {
    let payload = dataObj;
    let res = await axios.get('http://127.0.0.1:8000/api/updateprofile', payload);
    let data = res.data; 
}


