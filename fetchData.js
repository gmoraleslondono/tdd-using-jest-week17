// const fetchData = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Data fetched successfully!");
//   } else {
//     reject("Error fetching data!");
//   }
// });

// export default fetchData;

const fetchData = (success = true) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data!");
    }
  });
};

export default fetchData;
