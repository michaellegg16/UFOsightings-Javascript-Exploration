var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element to get raw HTML code
    var inputDate = d3.select("#datetime");

    // Get the value property of the date
    var inputValue = inputDate.property("value");

    console.log(inputValue);

    // 
    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue);

    console.log(filteredData);

    d3.select("tbody").selectAll("tr").remove().selectAll("td").remove();

    filteredData.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});