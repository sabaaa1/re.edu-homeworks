function countWords(comments) {
  let res = 0;

  comments.forEach((item) => {
    const trimmed = item.comment.trim();
    if (trimmed !== "") {
      res += trimmed.split(/\s+/).length;
    }
  });

  return res;
}

const comments = [
  { id: 1, comment: "Hello world" },
  { id: 2, comment: "This is great!" },
  { id: 3, comment: "" },
  { id: 4, comment: "    a m g   " },
  { id: 5, comment: " " },
];

console.log(countWords(comments));
