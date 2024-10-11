const currentYear = new Date().getFullYear();
const lastUpdated = new Date().toTimeString();
const footerSiteInfo = document.getElementById('footer-site-info');

console.log(footerSiteInfo);
let content = footerSiteInfo.innerHTML

footerSiteInfo.innerHTML = `${content}<p>&copy; ${currentYear} David Valentine &#x1F31E</p><p> St. George, UT &#x1F975</p><p>Last Updated: ${lastUpdated}</p>`
