// Store the data from data.js in a variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data
console.log(tableData);

// Loop through the data for each UFOsighting
tableData.forEach((UFOsighting) => {

    // Use d3 to append one table row `tr` for each UFOsighting object
    var row = tbody.append("tr");

    // Use 'object.entries' to append 1 cell per UFOsighting value
    Object.entries(UFOsighting).forEach(([key, value]) => {

        // Append a cell to the row for each value in the UFOsighting object
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the filter-btn element
var button = d3.select("#filter-btn");

// Use D3 `.on` to attach a click handler for the upvote
button.on("click", function() {

    // Select the input element to get raw HTML code
    var inputDate = d3.select("#datetime");

    // Get the value property of the date
    var inputValue = inputDate.property("value");

    console.log(inputValue);

    // Filter the tableData for only the input date and store it in a variable
    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue);

    // Console.log the filteredData
    console.log(filteredData);

    // Clear all the row of the table to make room for the filteredData
    d3.select("tbody").selectAll("tr").remove().selectAll("td").remove();

    // Loop through the filteredData for each UFOsighting
    filteredData.forEach((UFOsighting) => {

        // Use d3 to append one table row `tr` for each UFOsighting object
        var row = tbody.append("tr");

        // Use 'object.entries' to append 1 cell per UFOsighting value
        Object.entries(UFOsighting).forEach(([key, value]) => {

            // Append a cell to the row for each value in the UFOsighting object
            var cell = row.append("td");
            cell.text(value);
        });
    });
});