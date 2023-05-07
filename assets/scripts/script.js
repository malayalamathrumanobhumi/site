// --------------------------------TIME AND DATE DISPLAY AT HEADER------------------------------------------

function updateDateTime() {
  var now = new Date();
  
  var days = ['ഞായർ', 'തിങ്കൾ', 'ചൊവ്വ', 'ബുധൻ', 'വ്യാഴം', 'വെള്ളി', 'ശനി'];
  var months = ['ജനുവരി', 'ഫെബ്രുവരി', 'മാർച്ച്', 'ഏപ്രിൽ', 'മെയ്', 'ജൂൺ', 'ജൂലൈ', 'ആഗസ്റ്റ്', 'സെപ്റ്റംബർ', 'ഒക്‌ടോബർ', 'നവംബർ', 'ഡിസംബർ'];
  
  var weekday = days[now.getDay()];
  var month = months[now.getMonth()];
  var date = now.getDate();
  var year = now.getFullYear();
  
  // IST (Indian Standard Time) is UTC + 5:30
  var hours = now.getUTCHours() + 5;
  var minutes = now.getUTCMinutes() + 30;
  var seconds = now.getUTCSeconds();
  
  // Formatting to add leading zeros if necessary
  hours = ('0' + hours).slice(-2);
  minutes = ('0' + minutes).slice(-2);
  seconds = ('0' + seconds).slice(-2);
  
  var datetimeString = weekday + ', ' + month + ' ' + date + ', ' + year;
  
  $('#datetime').text(datetimeString); // Use jQuery to set the content of the element with id 'datetime'
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// --------------------------------TIME AND DATE DISPLAY AT HEADER---------

