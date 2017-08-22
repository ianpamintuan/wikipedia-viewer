$(document).ready(function(){
  
    $(".fa-search").click(function(){
      $(".fa-search").hide("fast");
      $("#searchBox").show("fast");
      $("#searchBox").focus();
    });

    $("#searchBox").blur(function(){
        $("#searchBox").fadeOut("fast");
        $(".fa-search").show("slow");
        $(".results").empty();
        $("#searchBox").val("");
    });
  
    $("#searchBox").keypress(function (e) {
       var key = e.which;
       if(key == 13)  // the enter key code
        {
          var query = $("#searchBox").val();
          var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&format=json&callback=?";
          $.ajax({
              url: url,
              type: "GET",
              contentType: "application/json; charset=utf-8",
              async: false,
              dataType: "json",
              success: function(data, status, jqXHR){
                $(".results").html();
                for(var i=0; i < data[i].length; i++){
                    $(".results").prepend("<div><div class='well'><a href=" + data[3][i] + " target='_blank'><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                }

             }
          })

          .done(function(){
            console.log("success");
          })
          .fail(function(){
            console.log("error");
          })
          .always(function(){
            console.log("complete");
          })

        }
    });
  
});