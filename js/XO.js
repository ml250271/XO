$(document).ready(function() {
        var cells;
        var movesVal = [];
        function refresh() {
            $("#playground").empty("table");
            var table = $("<table>")
            var tr;
            $.each(cells, function(i) {
                if (!(i % 3) || !tr) {
                    tr = $("<tr>");
                };
                var td = $("<td>");
                td.attr("id", "cell_" + i);
                td.html(cells[i]);
                td.click(function() {
                    $("#result").text("You've clicked on cell number " + $(this).attr("id").split("_")[1] + ".");
                })
                table.append(tr.append(td));
                
                  
                
                var tdid;
                td.click(function() {
                    
                    tdid = $(this).attr("id").split("_")[1];
                    var cell = Number(tdid) + 1;
                    movesVal.push(cell);                 
                    console.log(movesVal);
                 if ( i % 2 == 0 ) {
                        $(this).text("X");
                    } else {
                        $(this).text("O");
                    }
                                      
                })
            });
            $("#playground").append(table);
            
        }

        $("#start").click(function() {
            cells = ["", "", "", "", "", "", "", "", ""];
            refresh();
        })
        
     
    
    })




