function findLongestTitle(movies) {
  let max = movies[0];
  for (let i = 1; i < movies.length; i++) {
    if (movies[i].title && movies[i].title.length > max.title.length) {
      max = movies[i];
    }
  }
  return max;
}

const movies = [
  { title: "Up", year: 2009 },
  { title: "The Lord of the Rings", year: 2001 },
];

console.log(findLongestTitle(movies));
