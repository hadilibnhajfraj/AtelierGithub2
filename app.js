function findMax(arr) {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function concatenate(arr1, arr2) {
  // Combine lengths for new array size
  const combinedLength = arr1.length + arr2.length;

  // Create a new array using spread operator (...)
  const concatenatedArray = [...arr1, ...arr2];

  // Alternative using concat() method:
  // const concatenatedArray = arr1.concat(arr2);

  // Return the concatenated array
  return concatenatedArray;
}