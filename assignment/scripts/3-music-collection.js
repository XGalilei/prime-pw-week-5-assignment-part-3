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

function showCollection() {
  
}

console.log(addToCollection('The Gereg', 'The Hu', 2019));
console.log(addToCollection('Revolution Radio', 'Green Day', 2016));
console.log(collection);
