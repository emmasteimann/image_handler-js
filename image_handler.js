

// The scenario:
//----------------------------
//----------------------------

/*

Someone has written a really bad image format to store our avatars (they haven't really, but bear with us).
The format is a JavaScript object containing a 1d array of CSS-style hex strings and some additional metadata.

Use this format to complete the challenges below!

*/

// Here are the challenges:
//----------------------------
//----------------------------

/*

# Challenge 1: Write a function to print out the separate RGB values for each pixel in image1.
(extra credit: use a module or library to output some standard image format representation [png/bmp/jpg] of the image)

# Challenge 2: Write a function which takes image1 and returns a copy rotated 90 degrees clockwise.
(extra credit: allow arbitrary rotation)

# Challenge 3: Write a function with the signature: (image1, image2, merge_amount), which returns an object
in the format above with each pixel of image1 and image2 merged according to merge amount, such that
merge_amount=0 is all image1, merge_amount=1 is all image2 and merge_amount=0.5 is a 50% mix of the two images.
(extra credit: implement more than one blending mode)

*/

// The data for your challenges:
//----------------------------
//----------------------------

var image1    = {};
image1.width  = 12;
image1.height   = 12;
image1.data   = [ 'ffffff', 'ffff8a', '898943', '4343cb', 'cacaf3', 'f3f3fb', 'fafbfb', 'fbfbf3', 'f3f3e8', 'e9e9f0', 'f1f1ff', 'ffffff', 'fffffe', 'fefe6e', '6e6e01', '000005', '030286', '8686e9', 'eaebd7', 'd6d7e0', 'dfdfec', 'ededf4', 'f5f5ff', 'ffffff', 'ffffff', 'ffffc0', 'bfbf31', '343573', '7b7da3', 'a7a8f0', 'f2f3e0', 'e9ebe1', 'ecede5', 'e6e7fc', 'fcfcff', 'ffffff', 'ffffff', 'ffff91', '8b8b97', 'a6a960', '959d9e', 'bec098', '9596bf', 'e1e5a3', 'c7cce6', 'e9eafb', 'fbfbff', 'ffffff', 'fffffa', 'fafaa7', 'a4a55d', '61639f', 'bdbd66', '767311', '1a1675', '84839d', 'b3b1e3', 'e5e5fb', 'fbfcfc', 'fcfcf9', 'fafad6', 'd8d8e1', 'e5e4d4', 'cdd1bc', '435b5d', '10253b', '182048', '0010a3', '233ff5', 'f0f4ee', 'f2f1e9', 'eaeafe', 'fefef3', 'f3f4ef', 'f0f0f3', 'f5f7d7', 'b5b8ca', '537297', '003499', '2545c4', '9fa4fb', 'fffff8', 'f9f9f7', 'f7f7ff', 'ffffff', 'fffff8', 'f8f8fb', 'fbfbd1', 'd8d743', '565116', '211ccc', 'dfd9ff', 'ffffaa', 'a9a9d7', 'd7d7ff', 'ffffff', 'ffffff', 'fffffe', 'fefec6', 'c7c712', '101000', '00001a', '1818cb', 'cbcbe4', 'e4e51c', '1b1bb2', 'b2b2ff', 'ffffff', 'ffffff', 'ffffff', 'ffff85', '85851a', '181873', '71716b', '6a6a79', '77773b', '393905', '0304b5', 'b5b5ff', 'fffffe', 'fefefd', 'fdfde8', 'e9ead4', 'd4d5ae', 'adaeff', 'ffffff', 'fffff9', 'f9f922', '202000', '00009f', '9f9fff', 'fffff6', 'f6f7e7', 'e9e9d9', 'dadbd9', 'dadbda', 'dcddc9', 'cbcdca', 'cbcdd4', 'd5d6a3', 'a3a391', '9091dc', 'dcdcf9' ];

var image2    = {};
image2.width  = 12;
image2.height   = 12;
image2.data   = [ 'ffffff', 'ffff8d', '8c8c44', '4444ca', 'c9caf3', 'f3f5fb', 'fbf6fb', 'fbf6fc', 'f8b4fc', 'f56afb', 'f7b4fe', 'ffffff', 'fffffe', 'fefe6f', '6d6d00', '000005', '040e8f', '8c3ffc', 'f75df0', 'e649f7', 'ef4dfd', 'f77ffc', 'fac2fe', 'ffffff', 'ffffff', 'ffffbe', 'bebe38', '343079', '7576b2', 'ab4cff', 'fa49fa', 'ef91fc', 'f28dfc', 'f359fd', 'fdf0ff', 'ffffff', 'ffffff', 'ffff8e', '8d93a5', '9d9491', '826dc2', 'bba69b', '9671dd', 'd5d3c7', 'bbbbf7', 'ef9ffd', 'fde1ff', 'ffffff', 'fffffd', 'fce6a9', 'a89069', '644bb2', 'b49b70', '726717', '1a1a7e', '8075ad', 'af8ceb', 'e89bfe', 'fde3fe', 'fdeefd', 'fbe9f3', 'e83efa', 'f241e0', 'd842a2', '56554d', '183231', '1a2a36', '002783', '2d55fc', 'f5adfe', 'fb8ffd', 'f66efe', 'fef9fb', 'f8bfff', 'f98dff', 'fe7cd3', 'b876ad', '596573', '0e5082', '2d58bc', '9f7dff', 'ff9aff', 'ffb0fc', 'fbcdff', 'ffffff', 'fffffd', 'fbd8ff', 'ffa4d4', 'd7884b', '54281b', '2015d8', 'e159ff', 'ff7bb0', 'ae4ad8', 'd8d0ff', 'ffffff', 'ffffff', 'ffffff', 'fed9ca', 'c98313', '121000', '00061c', '1911d8', 'd23beb', 'ea4821', '1f0cb2', 'b2b9ff', 'ffffff', 'fffffe', 'ffffff', 'ffbc8b', '89461b', '1a2776', '74736c', '6b6e80', '7e6d3e', '3c2806', '030ab5', 'b5b4ff', 'fffffe', 'fefefc', 'fcfefa', 'f471e7', 'df25b1', 'af76ff', 'ffffff', 'fffff6', 'f6fc24', '222700', '0000a1', 'a0a0ff', 'fffff7', 'f7f7e8', 'e9ede0', 'dec1e6', 'e294df', 'e0c1cb', 'cdd4cc', 'cecfd5', 'd6d7a3', 'a2a390', '8f90db', 'dbdcf9' ];


// You can put your code below!
//----------------------------
//----------------------------

var ImageHandler;

ImageHandler = (function() {
  // Constructor
  function ImageHandler(){

  }
  // Private Methods
  function convertToMatrix(future_matrix, max_row_length){
    var new_matrix = [];
    var column, row;

    for (column = 0, row = -1; column < future_matrix.length; column++) {
      // If we've reached maximum row length reached or just starting append a new array to row
      if (column % max_row_length === 0) {
          row++;
          new_matrix[row] = [];
      }
      // Push value to current row array
      new_matrix[row].push(future_matrix[column]);
    }

    return new_matrix;
  }
  function rotate90degrees(matrix, width, height, amount_to_rotate, total_rotation){
    var new_matrix = [];
    if (total_rotation == null){
      total_rotation = 1;
    }
    for (var row = 0; row < width; row++) {
        for (var column = 0; column < height; column++) {
            if (new_matrix[column] == null){
              new_matrix[column] = [];
            }
            new_matrix[column][width-1-row] = matrix[row][column];
        }
    }
    matrix = new_matrix;
    if (amount_to_rotate == total_rotation){
      return matrix;
    } else {
      total_rotation = total_rotation + 1;
      return rotate90degrees(matrix, width, height, amount_to_rotate, total_rotation);
    }
  }
  function printMatrix(matrix){
    for (var i =0; i < matrix.length; i++){
       print(matrix[i])
    }
  }

  function convertHexToRGBArray(hex_string){
    var individual_array = [];
      // Convert hex value every two letters to int
    individual_array.push(parseInt(hex_string.substring(0,2),16));
    individual_array.push(parseInt(hex_string.substring(2,4),16));
    individual_array.push(parseInt(hex_string.substring(4,6),16));

    return individual_array;
  }
  function takePercentageOfRGBArray(array, percentage){
    var new_array = [];
    for(value in array){
      new_array[value] = array[value] * percentage;
    }
    return new_array;
  }
  function mergeRGBArraysToSingleHexString(array_one, array_two){
    var hex_string = '';
    for(value in array_one){
      hex_string += convertValueToHex(ceil(array_one[value] + array_two[value]));
    }
    return hex_string;
  }
  function ceil(n) {
    // Cuz bitwise is faster than Math.ceil...
     return n % 1 ? (n > 0 ? n + 1 >>> 0 : n >> 0) : n;
  }
  function convertValueToHex(value) {
    var hex_value = value.toString(16);
    return hex_value.length == 1 ? "0" + hex_value : hex_value;
  }

  // Public methods
  ImageHandler.prototype.rotateImageIn90DegIntervals = function(array, width, height, degrees){
    if (degrees % 90 != 0){
      print("ERROR - Degree value: " + degrees + " invalid.")
      print("For ease of my sanity this method only works in intervals of 90 degrees.")
      return;
    }
    var matrix = convertToMatrix(array, width);
    var amount_to_rotate = (degrees / 90) % 4;
    if (amount_to_rotate == 0) {
      printMatrix(matrix);
      return;
    } else {
      printMatrix(rotate90degrees(matrix, width, height, amount_to_rotate));
    }
  }

  ImageHandler.prototype.rgbPrintOut = function(image){
    var rgb_array = [];
    for (var i = 0; i < image.length; i++) {
      rgb_array[i] = convertHexToRGBArray(image[i])
    }
    print(rgb_array);
  }

  ImageHandler.prototype.blendImage = function(image1, image2, merge_amount){
    // This method assumes additive RGB, take percentage of each color in each pixel, and add together

    if(image1.data.length != image2.data.length){
      print("ERROR - The images aren't the same size!");
      return;
    }

    var merge_array = []
    // cycle if over 100%
    if (merge_amount> 100){
      merge_amount = merge_amount % 100;
    }


    image1_merge_percent = merge_amount / 100;
    image2_merge_percent = 1 - image1_merge_percent;

    for (var i = 0; i < image1.data.length; i++){
      var rgb_one = takePercentageOfRGBArray(convertHexToRGBArray(image1.data[i]), image1_merge_percent);
      var rgb_two = takePercentageOfRGBArray(convertHexToRGBArray(image2.data[i]), image2_merge_percent);

      merge_array.push(mergeRGBArraysToSingleHexString(rgb_one,rgb_two));

    }
    print(merge_array);
    return merge_array;
  }

  return ImageHandler;

})();

image_handler = new ImageHandler()
print("~~~~~~~~ RGB PRINTOUT ~~~~~~~~");
image_handler.rgbPrintOut(image1.data)
print("~~~~~~~~ Rotated PRINTOUT ~~~~~~~~");
image_handler.rotateImageIn90DegIntervals(image1.data, image1.width, image1.height, 90);
print("~~~~~~~~ Blend PRINTOUT ~~~~~~~~");
image_handler.blendImage(image1,image2,50);