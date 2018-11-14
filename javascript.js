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
  
//Submit client side data to firebase.
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




// Assign the reference to the database to a variable named 'database'
var database = firebase.database();

database.ref().orderByChild("dateAdded").limitToLast(3).on("child_added", function(childSnapshot){

  trainName = childSnapshot.val().name;
  trainDestination = childSnapshot.val().destination;
  startTime = childSnapshot.val().startTime;
  frequency = childSnapshot.val().frequency;


  console.log(childSnapshot.val());
  
  var timeArrival = startTime.split(":");
  var trainTime = moment().hours(timeArrival[0]).minutes(timeArrival[1]);
  var maxMoment = moment.max(moment(), trainTime);

  var tMinutes;
  var tArrivals;

  if (maxMoment === trainTime) {
    tArrivals=trainTime.format("hh:mm A");
    tMinutes=trainTime.diff(moment(), "minutes");
  } else {
    var diffTime = moment().diff(trainTime, "minutes");
    var tRemainder = diffTime % frequency;
    tMinutes = frequency - tRemainder;
    tArrivals = moment().add(tMinutes, "m").format("hh:mm A");
  }

  console.log(tMinutes);
  console.log(tArrivals);



  let newRow = $("<tr>");
  let newTrain = $("<td>" + trainName +"</td>");
  let newDestination = $("<td>" + trainDestination +"</td>");
  let newFrequency = $("<td>" + frequency +"</td>"); 
  let newArrival = $("<td>" + tArrivals +"</td>");
  let newMinAway = $("<td>" + tMinutes +"</td>");
    


  newRow.append(newTrain).append(newDestination).append(newFrequency).append(newArrival).append(newMinAway);
  $("#tableBody").append(newRow);


});

  