const results = document.querySelector('#results');
const currentUrl = window.location.href;
const everything = currentUrl.split('?');
// console.log(everything);
let formData = everything[1].split('&');

// console.log(formData);

function show(value) {
    if (value) {
        for (let element of formData) {
            if (element.startsWith(value)) {
                let result = element.split('=')[1].replace("%40", '@');

                // if result is an ISOtimestamp (ie 2024-10-17T15%3A03%3A19.277Z), convert it to a date
                if (result.includes('%3A')) {
                    let date = new Date(result.replace(/%3A/g, ':').replace(/%2F/g, '/').replace(/%40/g, '@'));

                    date = date.toString().replace(/GMT-[0-9]{4}/g, '')

                    // replace between dd\w.*\w ...dd:dd:dd\wGMT-0600\w(Mountain Daylight Time) with space

                    console.log("date: ", date);
                    return date;
                }

                if (result) {
                    console.log("show return: ", result);
                    return (result);
                }
            }
        }
    }
}



formName = document.createElement('p');
title = document.createElement('p');
email = document.createElement('p');
phone = document.createElement('p');
organization = document.createElement('p');
membership = document.createElement('p');
timestamp = document.createElement('p');


fullName = `${show('first-name')} ${show('last-name')}`;




formName.textContent = `Thank you ${show('first-name')} ${show('last-name')}`;
title.textContent = `Title: ${show('title')}`;
email.textContent = `Email: ${show('email')}`;
phone.textContent = `Phone: ${show('phone')}`;
organization.textContent = `Organization: ${show('organization')}`;
membership.textContent = `Membership: ${show('membership')}`;
timestamp.textContent = `Application time: ${show('timestamp')}`;


formItems = [formName, title, email, phone, organization, membership, timestamp];
formItems.forEach(item => {
    if (item.textContent.split(':')[1] !== ' undefined') {
    results.appendChild(item);}
});



