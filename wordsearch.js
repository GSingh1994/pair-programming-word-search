const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};
module.exports = wordSearch;

// Completed this project with the help of Mke Yun
