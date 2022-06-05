// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (date, index) => {
  // Empty array containing unsorted date
  let unsortedDate = [];

  // Loop all element of variable 'dates' to parse date
  for (const element of date) {
      const parsedDate = Date.parse(element);

      // Push parsed date to variable 'unsortedDate'
      unsortedDate.push((parsedDate / 1000).toString());
  }

  // Conditional for index
  let sortedDate = [];
  if (index === undefined) {
      unsortedDate.sort((a, b) => a - b)
      sortedDate = unsortedDate.join('-')
      return sortedDate;
  } else {
      unsortedDate.sort((a, b) => a + b);
      return unsortedDate[index];
  }
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
