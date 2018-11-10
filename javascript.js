   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyB5aZZCnNDXoH3XiioLOSPPkn6NoCeKCSg",
    authDomain: "employee-tracker-fa0b7.firebaseapp.com",
    databaseURL: "https://employee-tracker-fa0b7.firebaseio.com",
    projectId: "employee-tracker-fa0b7",
    storageBucket: "",
    messagingSenderId: "207265387128"
  };
  firebase.initializeApp(config);
  
  
  // Assign the reference to the database to a variable named 'database'
  var database = firebase.database();
  
  
    $("#submit-form").on("click", function (event) {
          event.preventDefault();
  
          employeeName = $("#employee-name").val().trim();
          role = $("#role").val().trim();
          startDate = $("#start-date").val().trim();
          monthlyRate = $("#monthly-rate").val().trim();
  
          let newRow = $("<tr>");
          let newEmployee = $("<td>" + employeeName+"</td>");
          let newRole = $("<td>" + role+"</td>");
          let monthsWorked = $("<td>" + "Monthly Rate"+"</td>");
          let newStartDate = $("<td>" + startDate+"</td>");
          
          let newRate = $("<td>" + monthlyRate+"</td>");

          $("#employee-name").val("");
          $("#role").val("");
          $("#start-date").val("");
          $("#monthly-rate").val("");
  
  
          // newEmployee.append(employeeName);
          newRow.append(newEmployee).append(newRole).append(newStartDate).append(monthsWorked).append(newRate);
          $("#tableBody").append(newRow);
  
  
<<<<<<< HEAD
          database.ref().push({
          name: newEmployee,
          role: newRole,
          startDate: newStartDate,
          monthsWorked: monthsWorked,
          rate: newRate
         });
  
=======
      database.ref().push({
        name: employeeName,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        rate: monthlyRate,
        totalBilled: "total"
      })

>>>>>>> 2a667edb69a2212c46b5314e7edccd05f0f4bcc2
      });
  