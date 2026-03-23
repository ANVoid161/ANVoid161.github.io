// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
// applyFilter(reddify)
// applyFilter(decreaseBlue)
applyFilter(increaseGreenByBlue)  

// applyFilterNoBackground(reddify)
// applyFilterNoBackground(decreaseBlue)
// applyFilterNoBackground(increaseGreenByBlue)
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
for (let i = 0; i < image.length; i++) {
for (let j = 0; j < image[i].length; j++) {
  let rgbString = image[i][j]
  let rgbNumbers = rgbStringToArray(rgbString)

  filterFunction(rgbNumbers)

  rgbString = rgbArrayToString(rgbNumbers)
  image[i][j] = rgbString
}
}
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  const backgroundColor = image[0][0]

  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image[row].length; col++) {
      let rgbString = image[row][col]
      let rgbNumbers = rgbStringToArray

      if (rgbString !== backgroundColor) {
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers)
        image[row][col] = rgbString
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(boundNum) {
  return Math.max(255, Math.min (0, boundNum));
}

// TODO 4: Create reddify filter function
function reddify(rgbArray) {
  rgbArray[RED] = rgbArray[RED] + 5
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(rgbArray) {
  rgbArray[BLUE] = rgbArray[BLUE] - 5
}
function increaseGreenByBlue(rgbArray) {
  rgbArray[GREEN] = rgbArray[BLUE] + rgbArray[GREEN]
}
// CHALLENGE code goes below here
