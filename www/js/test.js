$( document ).ready(function() {
    ViewWaste()
});


function ViewWaste(){
var articleData;
(function() {
var newsAPI = "http://localhost/backend/api.php?module=waste&task=listAll";
$.getJSON( newsAPI)
.done(function( data ) {
if(data.status==200){
$("#newslist").empty();
eventList = data.data;
$.each( eventList, function( i, waste ) {
        console.log(waste.latitude,waste.longitude)
        var marker = L.marker([waste.latitude, waste.longitude], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#9c89cc'
      })
    })
    .bindPopup(waste.wasteType+" "+waste.wasteQuantity)
    .addTo(map);
        var type = $("<h1 id='".concat(waste.wasteType,"/",waste.wasteQuantity,"/",waste.latitude,"/",waste.longitude,"/",waste.image,"'>"))
        type.html(waste.wasteType);
        var collect = $("<h2 class='collectorhead' ' id='".concat(waste.wasteType,"/",waste.wasteQuantity,"/",waste.latitude,"/",waste.longitude,"/",waste.image,"'>"))
        collect.html("Collect");
        var quantity=$("<p><b>").html(waste.wasteQuantity);
        var image = $("<img src='http://localhost/backend/uploads/"+waste.image+"' width='100%' height='100px'/>")    
              
                        var listitem = $("<li>")
                            listitem.append(type);
                            listitem.append(collect);
                            listitem.append(quantity);
                            listitem.append(image);
                            
                           
                            $("#newslist").append(listitem);
                            
                            });
                            $("#newslist").listview("refresh");
                            }
                            
                            });
                            })();
                            }