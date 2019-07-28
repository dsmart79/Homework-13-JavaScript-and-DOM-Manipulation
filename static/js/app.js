// from data.js
var tableData = data;

var tbody = d3.select("tbody");

data.forEach(function(ufoSighting) {
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // var inputElement = d3.select("#datetime");
    // var inputValue = inputElement.property("value");
    // console.log(inputValue);
    // var inputElement2 = d3.select("#city");
    // var inputValue2 = inputElement2.property("value");
    // console.log(inputValue2);
    // var inputElement3 = d3.select("#state");
    // var inputValue3 = inputElement3.property("value");
    // console.log(inputValue3);
    // var inputElement4 = d3.select("#country");
    // var inputValue4 = inputElement4.property("value");
    // console.log(inputValue4);
    // var inputElement5 = d3.select("#shape");
    // var inputValue5 = inputElement5.property("value");
    // console.log(inputValue5);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

    // var filteredDate = tableData.filter(tableData => tableData.datetime === inputValue);
    // console.log(filteredDate);
    // var filteredCity = tableData.filter(tableData => tableData.city === inputValue2);
    // console.log(filteredCity);
    // var filteredState = tableData.filter(tableData => tableData.state === inputValue3);
    // console.log(filteredState);
    // var filteredCountry = tableData.filter(tableData => tableData.country === inputValue4);
    // console.log(filteredCountry);
    // var filteredShape = tableData.filter(tableData => tableData.shape === inputValue5);
    // console.log(filteredShape);

    tbody.text('');

    filteredData.forEach(dateData => {
        var row = tbody.append("tr");

        Object.entries(dateData).forEach(([key, value]) => {
            row.append("td").text(value);
        });
    });
});
