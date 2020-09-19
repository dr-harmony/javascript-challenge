// from data.js
var tableData = data;
console.log(tableData);

// ####################################################################################
// Append a table and add new rows for each UFO sighting from the JSON array
// ####################################################################################

// Get reference object for the table body
var tbody = d3.select("tbody");

// Iterate through UFO Sighting values for each column
tableData.forEach((sighting) => {
    console.log(sighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(sighting).forEach(([key, value]) => {
      console.log(key, value);

      // Use d3 to append a cell per UFO Sighting value (datetime, city, state, country, shape, durationMinutes, comments)
      var cell = row.append("td");

      // Use d3 to update each cell's text with
      cell.text(value);
    });
  });

// #####################################################################################
// Listen to events and search through the date/time to find rows that match user input
// #####################################################################################

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", function() {

// Clear existing table content
  d3.select("tbody").html("");

// Prevent the page from refreshing
  d3.event.preventDefault();

// Get the value property of the input element
  var inputDate = d3.select("#datetime").property("value");
  console.log(inputDate);

// Filter for matches to the date entered 
  var filteredData = tableData.filter(match => match.datetime === inputDate);
  console.log(filteredData);

// Display the filtered dataset
  filteredData.forEach((match) => {
    var row = tbody.append('tr');

    Object.entries(match).forEach(([key, value]) => {
      console.log(key, value);
      var cell = row.append('td');
      cell.text(value);
    });
  });
});