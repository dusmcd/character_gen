/*global $*/


$(document).ready(function() {
    init();
});

function init() {
    ajaxRequest("#trait-button", "#name-button");
}


function updateView(data, idString) {
    let randNumber = Math.floor(Math.random() * data.length);
        $(idString).empty();
        $(idString).append(
            "<p>" + data[randNumber] + "</p>");  
}

function ajaxRequest(traitButtonId, nameButtonId) {
    $.ajax({
        url: "/generating",
        type: "GET",
        dataType: "json",
        
        success: function(response) {
            // console.log("The server sent back this text: " + response.traits[0].list[0]);
            $(traitButtonId).on("click", function() {
                randomGenerator(response.traits, 'traits');
            });
            $(nameButtonId).on("click", function() {
                randomGenerator(response.names, 'names');
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

function randomGenerator(data, dataModel) {
    if (dataModel === 'traits') {
        data.forEach(function(trait) {
            switch(trait.description) {
                case 'positive':
                    updateView(trait.list, '#positive-trait');
                    break;
                case 'negative':
                    updateView(trait.list, '#negative-trait');
                    break;
                default:
                    updateView(trait.list, '#character-type');
                    break;
            }
        });
    }
    else {
        updateView(data[0].list, '#first-name');
        updateView(data[0].list, '#last-name');
    }
}

