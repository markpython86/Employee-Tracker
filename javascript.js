  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqGwtpv1GP9PucOlppoVRmdMopq-cxn-I",
    authDomain: "invertible-hook-221019.firebaseapp.com",
    databaseURL: "https://invertible-hook-221019.firebaseio.com",
    projectId: "invertible-hook-221019",
    storageBucket: "invertible-hook-221019.appspot.com",
    messagingSenderId: "899783432869"
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
  
  
          // newEmployee.append(employeeName);
          newRow.append(newEmployee).append(newRole).append(newStartDate).append(monthsWorked).append(newRate);
          $("#tableBody").append(newRow);
  
  
          database.ref().push({
          name: newEmployee,
          role: newRole,
          startDate: newStartDate,
          monthsWorked: monthsWorked,
          rate: newRate
  })
  
      });
  