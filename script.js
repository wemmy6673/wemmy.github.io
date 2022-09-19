var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
    event.preventDefault()
    toggleModal()
  })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
  evt = evt || window.event
  var isEscape = false
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
    isEscape = (evt.keyCode === 27)
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal()
  }
};


function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}



var splide = new Splide( '#main-carousel', {
  pagination: false,
} );

splide.mount();


// Collects LI elements:
var thumbnails = document.getElementsByClassName( 'thumbnail' );

for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

// The function to initialize each thumbnail.
function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    // move the carousel
  } );
}

var splide = new Splide( ... );

...

function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    splide.go( index );
  } );
}

var thumbnails = document.getElementsByClassName( 'thumbnail' );
var current; // Keeps the current thumbnail

...

splide.on( 'move', function () {
  if ( current ) {
    current.classList.remove( 'is-active' );
  }

  // Splide#index returns the latest slide index:
  var thumbnail = thumbnails[ splide.index ];

  if ( thumbnail ) {
    thumbnail.classList.add( 'is-active' );
    current = thumbnail;
  }
} );

splide.on( 'mounted move', function () {
  ...
} );

