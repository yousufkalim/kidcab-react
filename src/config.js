let baseUrl = 'http://localhost:5000/api/';
let captchaKey = '6LdQNMAgAAAAAEM7_lQp7AffR2NiAPq_ZUVtVA6x';

if (window.location.host === 'kidcab-dev.falconweb.app') {
  baseUrl = 'https://kidcab-api-dev.falconweb.app/api/';
} else if (window.location.host === 'kidcab-qa.falconweb.app') {
  baseUrl = 'https://kidcab-api-qa.falconweb.app/api/';
} else if (window.location.host === 'kidcab-staging.falconweb.app') {
  baseUrl = 'https://kidcab-api-staging.falconweb.app/api/';
} else if (window.location.host === 'formulaire.kidcab.fr') {
  baseUrl = 'https://api.kidcab.fr/api/';
}

module.exports = { baseUrl, captchaKey };
