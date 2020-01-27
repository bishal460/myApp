function addWaste(){
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
   var username = data.name
        window.location="addwaste.html?name="+ encodeURIComponent(username)

}

function BackUser(){
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
   var username = data.name
        window.location="userboard.html?name="+ encodeURIComponent(username)

}

function viewWaste(){
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
   var username = data.name
        window.location="viewWaste.html?name="+ encodeURIComponent(username)
}

function viewTime(){
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
   var username = data.name
        window.location="viewTime.html?name="+ encodeURIComponent(username)

}

function add(){
$(document).ready(function(){
$('#userForm').submit(function(e){
    if(latitude == ''){
        alert("Please click on map to select location")
        return
    }
console.log(latitude)
console.log(longitude)
// show that something is loading
$('#response').html("<b>Loading response...</b>");

$.post('http://localhost/backend/api.php?module=waste&task=storeAll', $(this).serialize(), function(data){

// show the response
$('#response').html(data);
alert("succesfully added");

}).fail(function() {

// just in case posting your form failed
alert( "Posting failed." );

});

// to prevent refreshing the whole page page
return false;

});
});
}



function myFunction(){
var articleData;
(function() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
   var username = data.name
var newsAPI = "http://localhost/backend/api.php?module=waste&task=listAll&username="+username;
$.getJSON( newsAPI)
.done(function( data ) {
if(data.status==200){
$("#newslist").empty();
eventList = data.data;
$.each( eventList, function( i, waste ) {
    var Deletebutton =$("<a>").attr("href","#delete")
    .attr("data-transition","slidedown").html("Delete")
    .click({param1: i}, setDeleteData);

    // var updatebutton =$("<a>").attr("href","#update")
    //     .attr("data-transition","slidedown").html("Update")
    //     .click({param1: i}, setUpdateData);
        
        var type = $("<h1>").html(waste.wasteType);
        var quantity=$("<p><b>").html(waste.wasteQuantity);
            var location = $("<i>").html(waste.wasteLocation);
              
                        var listitem = $("<li>");
                            listitem.append(type);
                            listitem.append(quantity);
                            listitem.append(location);
                            
                            // listitem.append(updatebutton);
                            listitem.append(Deletebutton);
                            $("#newslist").append(listitem);
                            
                            });
                            $("#newslist").listview("refresh");
                            }
                            
                            });
                            })();
                            }



  function setDeleteData(time){
                            var i = time.data.param1;
                            
                            var timeId = eventList[i].timeId;
                            $("#eventId").val(timeId);
                            }

                            // function setUpdateData(event) {
                            // var i = event.data.param1;
                            // var eventName = eventList[i].eventName;
                            // var eventId = eventList[i].eventId;
                            // var eventLocation = eventList[i].eventLocation;
                            // var eventDes = eventList[i].eventDes;
                            // var eventDate = eventList[i].eventDate;
                            // var eventPrice = eventList[i].eventPrice;
                            // console.log(eventList[i]);
                            // $("#eventId").val(eventId);
                            // $("#eventName").val(eventName);
                            // $("#eventLocation").val(eventLocation);
                            // $("#eventDes").val(eventDes);
                            // $("#eventDate").val(eventDate);
                            // $("#eventPrice").val(eventPrice);
                            // }
  function backEvent(){
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
   var username = data.name
        window.location="userboard.html?name="+ encodeURIComponent(username)
                            }


  function doFunction(){
  	        localStorage.removeItem('collector');
         window.location= "../index.html";
          alert("Successfully Logged out!!");

  }





function viewTimeSchedule(){
var articleData;
(function() {
var newsAPI = "http://localhost/backend/api.php?module=time&task=listAll";
$.getJSON( newsAPI)
.done(function( data ) {
if(data.status==200){
$("#newslist").empty();
eventList = data.data;
$.each( eventList, function( i, time ) {


        
        var date = $("<h1>").html(time.date);
        var location=$("<p><b>").html(time.location);
            var time = $("<i>").html(time.time);
              
                        var listitem = $("<li>");
                            listitem.append(date);
                            listitem.append(location);
                            listitem.append(time);
                            
                            
                            $("#newslist").append(listitem);
                            
                            });
                            $("#newslist").listview("refresh");
                            }
                            
                            });
                            })();
                            }