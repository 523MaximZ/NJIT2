// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
	if(mCurrentIndex >= mImages.length){
	mCurrentIndex = 0;
}

	if(mCurrentIndex < 0){
		mCurrentIndex = mImages.length-1;
	}


document.getElementById('photo').src = mImages[mCurrentIndex].img
    var loc = document.getElementsByClassName('location')
    loc[0].innerHTML = 'Location: ' + mImages[mCurrentIndex].location
	var des = document.getElementsByClassName('description')
    des[0].innerHTML = 'Description: ' + mImages[mCurrentIndex].description
    var dt = document.getElementsByClassName('date')
    dt[0].innerHTML = 'Date: ' + mImages[mCurrentIndex].date

	mLastFrameTime = 0
	mCurrentIndex += 1


	

}

// Counter for the mImages array
var mCurrentIndex = 0;

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();

// Array holding GalleryImage objects (see below).
var mImages = [];

// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'https://api.npoint.io/2e8dc462c70cd5f10ca2';

function fetchJSON() {
	mRequest.onreadystatechange = function() {
		console.log("on ready state change");
		if(this.readyState == 4 && this.status == 200){
			mJson = JSON.parse(mRequest.responseText);
			iterateJSON(mJson);
		}
	}
	mRequest.open("GET", mUrl, true);
	mRequest.send();


}

function iterateJSON(mJson) {
	for (x = 0; x < mJson.images.length; x++) {
		mImages[x] = new GalleryImage();
		mImages[x].location = mJson.images[x].imgLocation
		mImages[x].description = mJson.images[x].description
		mImages[x].date = mJson.images[x].date
		mImages[x].img = mJson.images[x].imgPath
		
	}
}
 


//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).

function makeGalleryImageOnloadCallback(galleryImage) {
    return function(e) {
        galleryImage.img = e.target;
        mImages.push(galleryImage);
    }
}

$(document).ready( function() {
    fetchJSON();
$( ".moreIndicator" ).click(function() {


    if ($(this).hasClass("rot90")) {
        $(this).removeClass("rot90");
        $(this).addClass("rot270");
        $( ".details" ).slideToggle( "slow" );

      } else {
        $(this).removeClass("rot270");
        $(this).addClass("rot90");
        $( ".details" ).slideToggle( "slow" );

      }
    });
  });

window.addEventListener('load', function() {
    
console.log('window loaded');
$("#imageID").show();
}, false);

function GalleryImage() {
var location;
var description;
var data;
var img;
}

$(document).ready(function() {
    $("#nextPhoto").click(function() {
        swapPhoto();
    });
  });

  $(document).ready(function() {
    $("#prevPhoto").click(function() {

if(mCurrentIndex  >= mImages.length) {

mCurrentIndex = 0;
}

if(mCurrentIndex  < 0) {
mCurrentIndex = mImages.length-1;
}

mLastFrameTime =0;
mCurrentIndex -=1;
    });
  });

function GalleryImage() {
    var location = '';
    var description = '';
    var date = '';
    var source = '';
}

