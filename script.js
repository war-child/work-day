$(document).ready(function () {

  $(".saveBtn").on("click", function () {

    
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(this);
    
    if (text === "") {
      alert("Enter Description")
    }
    else {
      
      localStorage.setItem(time, text);
    }
  })

 
  function hourTracker() {
   
    var current_hour = moment().hour();

    
    $(".time-block").each(function () {
      
      var displayed_hour = parseInt($(this).attr("id").split("hour")[1]);

      
      displayed_hour = displayed_hour * -1

      console.log(displayed_hour, current_hour)

      
      if (displayed_hour < current_hour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (displayed_hour === current_hour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  
  hourTracker();

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

 
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  
  $("#clearDay").on("click", function () {
    localStorage.clear();
    location.reload();
  })
});