function mergeSort(arr) {
  //DECLARE n < --arr.length
  let n = arr.length;
  if (n === 0) {
    throw new Error('Empty input array!');
  };
  // if n > 1
  if (n > 1) {
    //DECLARE mid < --n / 2
    let mid = n / 2;
    //DECLARE left < --arr[0...mid]
    let left = arr(0, mid);
    //DECLARE right < --arr[mid...n]
    let right = arr(mid, n);
    //sort the left side,  Mergesort(left)
    left = mergeSort(left);
    // sort the right side, Mergesort(right)
    right = mergeSort(right);
    //merge the sorted left and right sides together,  Merge(left, right, arr)
    return merge(left, right, arr);
  }

}
// ALGORITHM Merge(left, right, arr)
function merge(left, right, arr) {
  //     DECLARE i < --0
  let i = 0;
  //     DECLARE j < --0
  let j = 0;
  //     DECLARE k < --0
  let k = 0;
  // while i < left.length && j < right.length
  while (i < left.length && j < right.length) {
    //if left[i] <= right[j]
    if (left[i] <= right[j]) {
      // arr[k] < --left[i]
      arr[k] = left[i];
      // i < --i + 1
      i + 1;
      // else
    } else {
      //arr[k] < --right[j]
      arr[k] = right[j];
      // j < --j + 1
      j + 1;
    }
    // k < --k + 1
    k + 1;
  }
  // if i = left.length
  if (i = left.length) {
    //set remaining entries in arr to remaining values in right

  } else {

  }
}


//else
//        set remaining entries in arr to remaining values in left
