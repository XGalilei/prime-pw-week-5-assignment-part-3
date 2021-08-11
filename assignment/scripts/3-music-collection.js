console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}

/*
* Takes a collection and console.logs the number of items, as well as each album
* in the collection in a single string notation
*/
function showCollection(album) {
  console.log(album.length);
  for(let record of album) {
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}`);
  }
}

function findByArtist(artist) {
  let matches = [];
  for(let album of collection) {
    if(album.artist === artist)
    {
      matches.push(album);
    }
  }
  return matches;
}

//===TESTS===\\
console.log(addToCollection('The Gereg', 'The Hu', 2019)); //first album
console.log(addToCollection('Revolution Radio', 'Green Day', 2016)); //second album
console.log(addToCollection('Save Rock and Roll', 'Fall Out Boy', 2013)); //third album
console.log(addToCollection('American Idiot', 'Green Day', 2004)); //fourth album
console.log(addToCollection('N.A.T.I.O.N', 'Bad Wolves', 2019)); //fifth album
console.log(addToCollection('Folie a Deux', 'Fall Out Boy', 2008)); //sixth album
console.log(collection);

showCollection(collection);
console.log(findByArtist('Green Day')); //should return two albums
console.log(findByArtist('Johnny Cash')); //should return an empty array
