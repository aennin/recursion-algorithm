function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Divide array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge sorted halves
    return merge(left, right)
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // Compare and push smaller one into result
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example
console.log(mergeSort([38, 27, 43, 3, 9]))