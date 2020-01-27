$( document ).ready(function() {
    ViewWaste()
});


function ViewWaste(){
var articleData;
(function() {
var newsAPI = "http://localhost/backend/api.php?module=collector&task=listAll";
$.getJSON( newsAPI)
.done(function( data ) {
if(data.status==200){
$("#newslist").empty();
eventList = data.data;
$.each( eventList, function( i, waste ) {
        var marker = L.marker([waste.latitude, waste.longitude], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#9c89cc'
      })
    })
    .bindPopup(waste.wasteType+" "+waste.wasteQuantity)
    .addTo(map);

        var type = $("<h1 id='".concat(waste.wastename,"/",waste.quantity,"/",waste.location,"'>"))
        type.html(waste.wastename);
        var collect = $("<h2 class='collectorhead' ' id='".concat(waste.wastename,"/",waste.quantity,"/",waste.location,"'>"))
        collect.html("Sell");
        var quantity=$("<p><b>").html(waste.quantity);
            var location = $("<i>").html(waste.location);
            var image = $("<img src='http://localhost/backend/uploads/"+waste.image+"' width='100%' height='100px'/>")
              
                        var listitem = $("<li>")
                            listitem.append(type);
                            listitem.append(collect)
                            listitem.append(quantity);
                            listitem.append(location);
                            listitem.append(image)
                            $("#newslist").append(listitem);
                            
                            });
                            $("#newslist").listview("refresh");
                            }
                            
                            });
                            })();
                            }