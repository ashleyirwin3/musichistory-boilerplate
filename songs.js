function loadMusicLibrary(e) {
  var songLibraryData = JSON.parse(e.target.responseText)
  console.log("songLibraryData", songLibraryData.songLibrary)

  populateDomWithJSONData(songLibraryData.songLibrary)
}


var myRequest = new XMLHttpRequest()
myRequest.open("GET", "musicLibrary1.json")
myRequest.send()

myRequest.addEventListener("load", loadMusicLibrary)



function populateDomWithJSONData(e) {
    var songDataString = '';
    for (var i = 0; i < e.length; i++) {
        songDataString += `<div>`;
            songDataString += `<h3><b>${e[i].Title}</b></h3>`;
            songDataString +=  `<ul>`;
                  songDataString += `<li>${e[i].Artist}</li>`;
                   songDataString += `<li>${e[i].Album}</li>`;
                  songDataString += `<li>${e[i].Genre}</li>`;
              songDataString += `</ul>`;
        songDataString += `</div>`;
     }

     $("#listNewSongs").html(songDataString);
 }
