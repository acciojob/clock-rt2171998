//your JS code here. If required.
function updateDateTime() {
      var currentDate = new Date();
      var year = currentDate.getFullYear();
      var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      var day = currentDate.getDate().toString().padStart(2, "0");
      var hours = currentDate.getHours().toString().padStart(2, "0");
      var minutes = currentDate.getMinutes().toString().padStart(2, "0");
      var seconds = currentDate.getSeconds().toString().padStart(2, "0");

      var formattedDate = day + "/" + month + "/" + year;
      var formattedTime = hours + ":" + minutes + ":" + seconds;

      document.getElementById("timer").textContent = formattedDate+" "+formattedTime;
    }
setInterval(updateDateTime, 1000);