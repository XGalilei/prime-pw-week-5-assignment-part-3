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

console.log(addToCollection('The Gereg', 'The Hu', 2019)); //first album
console.log(addToCollection('Revolution Radio', 'Green Day', 2016)); //second album
console.log(addToCollection('Save Rock and Roll', 'Fall Out Boy', 2013)); //third album
console.log(addToCollection('American Idiot', 'Green Day', 2004)); //fourth album
console.log(addToCollection('N.A.T.I.O.N', 'Bad Wolves', 2019)); //fifth album
console.log(addToCollection('Folie a Deux', 'Fall Out Boy', 2008)); //sixth album
console.log(collection);
