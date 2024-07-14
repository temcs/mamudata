// Define sets of animal names for each time frame and day
const gameset = {
// Sunday
sunday: {
  "9am-3pm": ["74% - PG স্লটের Secrets of Cleopatra", "83% - JILI স্লটের Wild Ace", "76% - JILI স্লটের Money Coming", "70% - REVO স্লটের Alchemy Book", "83% - JILI স্লটের Wild Ace","84% - FACHAI-FISH ফিশিং Bao Chuan Fishing"
],
  "3pm-9pm": ["71% - BNG স্লটের Book of Wizard", "77% - JILI স্লটের Samba", "68% - JILI স্লটের Mines", "78% - PG স্লটের Candy Burst", "77% - JILI স্লটের Samba"],
  "9pm-3am": ["69% - PG স্লটের Wild Bounty Showdown", "75% - BNG স্লটের Aztec SUN", "81% - BNG স্লটের Aztec SUN", "76% - JILI স্লটের Fortune Gems", "69% - PG স্লটের Wild Bounty Showdown"],
  "3am-9am": ["70% - PP স্লটের Gates of Olympus™", "80% - JILI স্লটের Super Ace", "72% - HAK ক্রাশ খেলা Mines", "67% - JILI স্লটের Dragon Treasure", "80% - JILI স্লটের Super Ace"],
},
// Monday
monday: {
  "9am-3pm": ["77% - PG স্লটের Secrets of Cleopatra", "69% - JILI স্লটের Dragon & Tiger", "70% - BNG স্লটের Sun of Egypt 2", "83% - BNG স্লটের BLACK WOLF 2", "70% - BNG স্লটের Sun of Egypt 2"],
  "3pm-9pm": ["75% - JILI স্লটের Money Coming", "75% - JILI স্লটের Fortune Gems", "69% - PG স্লটের Gates of Olympus™", "78% - JILI স্লটের Samba", "69% - JILI স্লটের Money Coming","85% - FACHAI-FISH ফিশিং Bao Chuan Fishing"],
  "9pm-3am": ["70% - REVO স্লটের Alchemy Book", "75% - PP স্লটের Barn Festival", "67% - JILI স্লটের Dragon Treasure", "75% - PP স্লটের Barn Festival", "69% - PG স্লটের Prosperity Fortune Tree"],
  "3am-9am": ["69% - PP স্লটের Aztec Gems Deluxe", "74% - JILI স্লটের Candy Baby", "80% - JILI স্লটের Candy Baby", "77% - BNG স্লটের Buddha Fortune", "69% - PP স্লটের Aztec Gems Deluxe"],
},
// Tuesday
tuesday: {
  "9am-3pm": ["78% - JILI স্লটের Super Ace", "75% - JILI স্লটের Mines", "70% - PP স্লটের Barn Festival", "81% - JILI ফিসিং Royal Fishing", "81% - JILI স্লটের Mines","81% - FACHAI-FISH ফিশিং Bao Chuan Fishing"],
  "3pm-9pm": ["69% - JILI স্লটের Money Coming", "70% - PG স্লটের Wild Bounty Showdown", "77% - PG স্লটের Candy Burst", "74% - BNG স্লটের Book of Wizard", "77% - PG স্লটের Candy Burst"],
  "9pm-3am": ["73% - JILI স্লটের Fortune Gems", "78% - JILI স্লটের Mines","81% - FACHAI-FISH ফিশিং Bao Chuan Fishing", "77% - PG স্লটের Secrets of Cleopatra", "78% - JILI স্লটের Candy Baby", "81% - JILI স্লটের Candy Baby"],
  "3am-9am": ["70% - BNG স্লটের Sun of Egypt 2", "69% - PP স্লটের Aztec Gems Deluxe", "75% - BNG স্লটের Aztec SUN", "71% - PG স্লটের Prosperity Fortune Tree", "78% - BNG স্লটের Aztec SUN"],
},
// Wednesday
wednesday: {
  "9am-3pm": ["69% - PP স্লটের Aztec Gems Deluxe", "75% - BNG স্লটের Book of Wizard", "83% - BNG স্লটের BLACK WOLF 2", "74% - BNG স্লটের Black Wolf", "74% - BNG স্লটের Black Wolf"],
  "3pm-9pm": ["78% - JILI স্লটের Samba", "72% - HAK ক্রাশ খেলা Mines", "69% - JILI স্লটের Dragon Treasure", "68% - JILI স্লটের Mines", "72% - HAK ক্রাশ খেলা Mines"],
  "9pm-3am": ["75% - PP স্লটের Barn Festival", "74% - JILI স্লটের Fortune Gems", "77% - BNG স্লটের Candy Burst","82% - FACHAI-FISH ফিশিং Bao Chuan Fishing", "77% - PG স্লটের Candy Burst", "75% - PP স্লটের Barn Festival"],
  "3am-9am": ["70% - PG স্লটের Reel Love", "78% - JILI স্লটের Super Ace", "74% - JILI স্লটের Charge Buffalo", "76% - PG স্লটের Symbols of Egypt", "70% - PG স্লটের Symbols of Egypt"],
},
// Thursday
thursday: {
  "9am-3pm": ["77% - BNG স্লটের Aztec SUN", "70% - PP স্লটের Aztec Gems Deluxe", "75% - BNG স্লটের Book of Wizard", "69% - JILI স্লটের Money Coming", "69% - JILI স্লটের Money Coming","80% - FACHAI-FISH ফিশিং Bao Chuan Fishing"],
  "3pm-9pm": ["77% - PG স্লটের Secrets of Cleopatra", "70% - PG স্লটের Wild Bounty Showdown", "74% - JILI স্লটের Charge Buffalo", "78% - JILI স্লটের Super Ace", "77% - BNG স্লটের Aztec SUN"],
  "9pm-3am": ["75% - BNG স্লটের Buddha Fortune", "76% - BNG স্লটের Book of Wizard", "76% - BNG স্লটের Black Wolf", "81% - BNG স্লটের Aztec SUN", "81% - BNG স্লটের Aztec SUN","81% - FACHAI-FISH ফিশিং Bao Chuan Fishing"],
  "3am-9am": ["77% - PG স্লটের Candy Burst", "75% - JILI স্লটের Super Ace", "78% - JILI স্লটের Candy Baby", "71% - PG স্লটের Wild Bounty Showdown", "75% - JILI স্লটের Super Ace"],
},
// Friday
friday: {
  "9am-3pm": ["69% - PP স্লটের Aztec Gems Deluxe", "74% - JILI স্লটের Fortune Gems", "77% - JILI স্লটের Super Ace", "70% - PG স্লটের Wild Bounty Showdown", "68% - JILI স্লটের Dragon & Tiger"],
  "3pm-9pm": ["77% - PG স্লটের Reel Love", "70% - BNG স্লটের Sun of Egypt 2", "72% - JILI স্লটের Charge Buffalo", "68% - JILI স্লটের Dragon & Tiger", "77% - PG স্লটের Reel Love"],
  "9pm-3am": ["76% - BNG স্লটের Black Wolf", "81% - JILI স্লটের Mines", "75% - JILI স্লটের Fortune Gems", "78% - JILI স্লটের Candy Baby", "75% - JILI স্লটের Charge Buffalo","83% - FACHAI-FISH ফিশিং Bao Chuan Fishing"],
  "3am-9am": ["71% - PG স্লটের Symbols of Egypt", "75% - BNG স্লটের Black Wolf", "70% - JILI স্লটের Money Coming", "68% - JILI স্লটের Dragon Treasure", "71% - PG স্লটের Symbols of Egypt"],
},
// Saturday
saturday: {
  "9am-3pm": ["70% - BNG স্লটের Sun of Egypt 2", "76% - JILI স্লটের Samba", "81% - JILI স্লটের Candy Baby", "69% - JILI স্লটের Dragon Treasure", "72% - REVO স্লটের Alchemy Book"],
  "3pm-9pm": ["82% - BNG স্লটের BLACK WOLF 2", "75% - JILI স্লটের Mines", "68% - JILI স্লটের Mines","85% - FACHAI-FISH ফিশিং Bao Chuan Fishing", "71% - JILI স্লটের Money Coming", "81% - JILI ফিসিং Royal Fishing"],
  "9pm-3am": ["75% - BNG স্লটের Black Wolf", "81% - BNG স্লটের Mines", "81% - BNG স্লটের Aztec SUN", "70% - PG স্লটের Prosperity Fortune Tree", "70% - PG স্লটের Prosperity Fortune Tree"],
  "3am-9am": ["69% - JILI স্লটের Dragon & Tiger", "71% - PG স্লটের Wild Bounty Showdown", "75% - JILI স্লটের Charge Buffalo", "70% - PP স্লটের Gates of Olympus™", "71% - PG স্লটের Wild Bounty Showdown"],
},




  
};


// Function to get the current day and time
function getCurrentTime() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours();

  return {
    day,
    hour
  };
}

// Function to display game names based on current time
function displayGameNames() {
  const currentTime = getCurrentTime();
  const dayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][currentTime.day];
  const timeOfDay =
    currentTime.hour >= 9 && currentTime.hour < 15 ? "9am-3pm" :
    currentTime.hour >= 15 && currentTime.hour < 21 ? "3pm-9pm" :
    currentTime.hour >= 21 || currentTime.hour < 3 ? "9pm-3am" :
    "3am-9am";

  const gameNames = gameset[dayOfWeek.toLowerCase()][timeOfDay];

  const gameNamesContainer = document.getElementById("gameList");
  // Clear previous content
  gameNamesContainer.innerHTML = "";
  // Append new game names
  gameNames.forEach(game => {
    gameNamesContainer.innerHTML += `<span>🟢 উত্তোলনের পরিমান - ${game}</span><br>`;
  });
}

// Call the function initially and every 10 seconds
displayGameNames();
setInterval(displayGameNames, 10000);






function copyText() {
          // Select the text div
          var textElement = document.getElementById("text");
          // Create a range object
          var range = document.createRange();
          // Select the text content of the text element
          range.selectNode(textElement);
          // Add the range to the current selection
          window.getSelection().addRange(range);
          // Execute the copy command
          document.execCommand("copy");
          // Remove the selection
          window.getSelection().removeAllRanges();
          // Inform the user that the text has been copied
      }



      // copy time popup 

      document.addEventListener('DOMContentLoaded', function() {
  var downloadButton = document.querySelector('.copytext');
  var loadingOverlay = document.getElementById('loading-overlay');

  downloadButton.addEventListener('click', function() {
      // Show loading overlay
      loadingOverlay.textContent = 'Copy Data 0%';
      loadingOverlay.classList.add('active');

      var progress = 0;
      var interval = setInterval(function() {
          progress += 1;
          loadingOverlay.textContent = 'Copy Data ' + progress + '%';
          if (progress >= 100) {
              clearInterval(interval);
              // Change text to "Copied"
              loadingOverlay.textContent = 'Copied';
              // After 2 seconds, hide loading overlay
              setTimeout(function() {
                  loadingOverlay.classList.remove('active');
              }, 2000);
          }
      }, 8); // Adjust the interval here for faster counting
  });
});



// screenshoot 


document.addEventListener("DOMContentLoaded", function() {
var button = document.getElementById('screenshotButton');

button.addEventListener('click', function() {
  html2canvas(document.body, {
    useCORS: true,
    onrendered: function(canvas) {
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL();
        link.click(); // Trigger the download
    }
  });

    
});
});


