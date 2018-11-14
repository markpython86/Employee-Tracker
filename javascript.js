// Initialize Firebase
var config = {
  apiKey: "AIzaSyArXY8aWa4zFTZ11OTDE7CUwlmHkWHvgnA",
  authDomain: "train-app-b037e.firebaseapp.com",
  databaseURL: "https://train-app-b037e.firebaseio.com",
  projectId: "train-app-b037e",
  storageBucket: "train-app-b037e.appspot.com",
  messagingSenderId: "853509472543"
};
firebase.initializeApp(config);
  
  
  // Assign the reference to the database to a variable named 'database'
  var database = firebase.database();
  
  database.ref().orderByChild("dateAdded").limitToLast(3).on("child_added", function(childSnapshot){

    trainName = childSnapshot.val().name;
    trainDestination = childSnapshot.val().destination;
    startTime = childSnapshot.val().startTime;
    frequency = childSnapshot.val().frequency;

    let timeFormat = moment(childSnapshot.val().startTime, 'YYYY/MM/DD');
    let dateConverted = moment().diff(dateFormat, "month");
    let finalTotalBilled = (dateConverted * monthlyRate);

    console.log(dateConverted);

    let newRow = $("<tr>");
    let newEmployee = $("<td>" + employeeName+"</td>");
    let newRole = $("<td>" + EmpRole+"</td>");
    let monthsWorked = $("<td>" + dateConverted+"</td>");
    let newStartDate = $("<td>" + startDate+"</td>");          
    let newRate = $("<td>" + monthlyRate+"</td>");
    let newBill = $("<td>" + finalTotalBilled+"</td>");
    newRow.append(newEmployee).append(newRole).append(newStartDate).append(monthsWorked).append(newRate).append(newBill);
    $("#tableBody").append(newRow);


    console.log(childSnapshot.val());
    console.log(childSnapshot.val().startDate)

  });
  
    $("#submit-form").on("click", function (event) {
          event.preventDefault();
  
          trainName = $("#train-name").val().trim();
          trainDestination = $("#train-destination").val().trim();
          startTime = $("#start-time").val().trim();
          frequency = $("#frequency").val().trim();
            
          let timestamp = Date.now();


          $("#train-name").val("");
          $("#train-destination").val("");
          $("#start-time").val("");
          $("#frequency").val("");


  
      database.ref().push({
        name: trainName,
        destination: trainDestination,
        startTime: startTime,
        dateAdded: timestamp,
        frequency: frequency,
      })

      });
  