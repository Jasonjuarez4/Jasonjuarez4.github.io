
// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variables
let add = document.querySelector(".add");
let clear = document.querySelector(".clear");

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");

let imgs = [];
let songNames = [];
let artists = [];
let songLinks = [];


let objsArray = [];


// Function to create new objects.
function addSong(one, two, three, four) {
  this.img = one;
  this.title = two;
  this.artist = three;
  this.url = four;

  console.log(objsArray);
  objsArray.push(this);
}

function addSongInfo() {

  imgInput = image.value;
  nameInput = songName.value;
  artistInput = artist.value;
  songInput = songLink.value;

  new addSong(imgInput, nameInput, artistInput, songInput);
}

function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}

// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};


function displaySongInfo() {
  emptyDisplay();

  for (let obj of objsArray) {
    displayImage.insertAdjacentHTML("beforeend", `<img src=${obj.img} alt='Description'>`);
    displaySong.insertAdjacentHTML("beforeend", `<p>${obj.title}</p>`);
    displayArtist.insertAdjacentHTML("beforeend", `<p>${obj.artist}</p>`);
    displayLink.insertAdjacentHTML("beforeend", `<a href=${obj.url}>${obj.url}</a>`);
  }

  console.log(objsArray.length)
}

clear.onclick = function() {
  imgs = [];
  songNames = [];
  artists = [];
  songLinks = [];
  objsArray = [];
  emptyDisplay();
}
