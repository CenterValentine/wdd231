const currentYear = new Date().getFullYear();
const lastUpdated = new Date().toTimeString();

document.getElementById('currentyear').innerHTML = `<p>&copy; ${currentYear} David Valentine &#x1F31E St. George, UT &#x1F975</p> <p>Last Updated: ${lastUpdated}</p>`
