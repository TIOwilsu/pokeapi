const getPaginationQuery = (endpoint, offset, limit) =>
  `${endpoint}/?offset=${offset}&limit=${limit}`;

const orderArray = (array, key) =>
  array.sort((first, last) => {
    if (first[key] < last[key]) return -1;

    if (first[key] > last[key]) return 1;
  });

export { getPaginationQuery, orderArray };
