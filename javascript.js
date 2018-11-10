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
  
  database.ref().orderByChild("dateAdded").limitToLast(3).on("child_added", function(childSnapshot){

    employeeName = childSnapshot.val().name;
    EmpRole = childSnapshot.val().role;
    startDate = childSnapshot.val().startDate;
    monthlyRate = childSnapshot.val().rate;

    let dateFormat = moment(childSnapshot.val().startDate, 'YYYY/MM/DD');
    let dateConverted = moment().diff(dateFormat, "month");
    let finalTotalBilled = (dateConverted * monthlyRate);

    console.log(dateConverted);

    let newRow = $("<tr>");
    let newEmployee = $("<td>" + employeeName+"</td>");
    let newRole = $("<td>" + EmpRole+"</td>");
    let monthsWorked = $("<td>" + dateConverted+"</td>");
    let newStartDate = $("<td>" + startDate+"</td>");          
    let newRate = $("<td>" + "$" + monthlyRate+"</td>");
    let newBill = $("<td>" + "$" + finalTotalBilled+"</td>");
    newRow.append(newEmployee).append(newRole).append(newStartDate).append(monthsWorked).append(newRate).append(newBill);
    $("#tableBody").append(newRow);


    console.log(childSnapshot.val());
    console.log(childSnapshot.val().startDate)

  });
  
    $("#submit-form").on("click", function (event) {
          event.preventDefault();
  
          employeeName = $("#employee-name").val().trim();
          EmpRole = $("#role").val().trim();
          startDate = $("#start-date").val().trim();
          monthlyRate = $("#monthly-rate").val().trim();
  
          let monthsWorked = $("<td>" + "Monthly Rate"+"</td>");
          let finalTotalBilled = (dateConverted * monthlyRate);
          
         
          let timestamp = Date.now();


          $("#employee-name").val("");
          $("#role").val("");
          $("#start-date").val("");
          $("#monthly-rate").val("");


  
      database.ref().push({
        name: employeeName,
        role: EmpRole,
        startDate: startDate,
        monthsWorked: monthsWorked,
        dateAdded: timestamp,
        rate: monthlyRate,
        totalBilled: finalTotalBilled

      })

      });
  