
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


//add songs to beginning and end of array
songs.unshift("Midnight Show - by The Killers on the album Hot Fuss")
songs.push("I Hate Everyone - by Get Set Go on the album Ordinary World")

//loop over the array and remove characters that don't belong
newArray = [];
for (var i = songs.length -1; i >= 0 ; i--){
  newArray[i] = songs[i].replace(/[*]/, "")
                        .replace(/[@]/, "")
                        .replace(/[(]/, "")
                        .replace(/[!]/, "")
}
console.log(newArray)


//replace > with -


//add each string to the DOM in index.html in main content area
