/*global $*/


$(document).ready(function() {
    init();
});

function init() {
    ajaxRequest("#trait-button", "#name-button");
}

function randomGenerator(data, idString, dataArray) {
    let randNumber = Math.floor(Math.random() * data[dataArray]["list"].length);
    $(idString).empty();
    $(idString).append(
        "<p>" + data[dataArray]["list"][randNumber] + "</p>");
}

function ajaxRequest(traitButtonId, nameButtonId) {
    $.ajax({
        url: "/generating",
        type: "GET",
        dataType: "json",
        
        success: function(response) {
            console.log("The server sent back this text: " + response.traits[0].list[0]);
            $(traitButtonId).on("click", function() {
                randomGenerator(response.traits, "#positive-trait", 0);
                randomGenerator(response.traits, "#negative-trait", 2);
                randomGenerator(response.traits, "#character-type", 1);
            });
            $(nameButtonId).on("click", function() {
                randomGenerator(response.names, "#first-name", 0);
                randomGenerator(response.names, "#last-name", 0);
            });
            
            
        },
        error: function(error) {
            console.log(error);
        },
        complete: function(xhr, status) {
            console.log("The request is complete");
        }
        
    });
}

