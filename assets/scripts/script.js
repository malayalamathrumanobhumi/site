// To display time on header

function updateDateTime() {
  var now = new Date();

  var days = ['ഞായർ', 'തിങ്കൾ', 'ചൊവ്വ', 'ബുധൻ', 'വ്യാഴം', 'വെള്ളി', 'ശനി'];
  var months = ['ജനുവരി', 'ഫെബ്രുവരി', 'മാർച്ച്', 'ഏപ്രിൽ', 'മെയ്', 'ജൂൺ', 'ജൂലൈ', 'ആഗസ്റ്റ്', 'സെപ്റ്റംബർ', 'ഒക്‌ടോബർ', 'നവംബർ', 'ഡിസംബർ'];

  var weekday = days[now.getDay()];
  var month = months[now.getMonth()];
  var date = now.getDate();
  var year = now.getFullYear();

  var datetimeString = weekday + ', ' + month + ' ' + date + ', ' + year;

  document.getElementById('datetime').textContent = datetimeString; // Use plain JavaScript to set the content of the element with id 'datetime'
}

// Update the date and time every second
setInterval(updateDateTime, 1000);




