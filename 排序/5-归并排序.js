// https://juejin.cn/post/6844903444193640461
// https://static.kancloud.cn/fortheday/js-data-structure-and-algorithm/1698056
// 作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：
// 1. 自顶向下的递归（所有递归的方法都可以用迭代重写，所以就有了第2种方法）
// 2. 自底向上的迭代 （在《数据结构与算法JavaScript描述》中，作者给出了自底向上的迭代方法。但是对于递归法，作者却认为：
// However, it is not possible to do so in JavaScript, as the recursion goes too deepfor the language to handle.然而,在 JavaScript 中这种方式不太可行,因为这个算法的递归深度对它来讲太深了。
// 说实话，我不太理解这句话。意思是JavaScript编译器内存太小，递归太深容易造成内存溢出吗？还望有大神能够指教。

const arr1 = [3, 7, 5, 1, 4, 6, 2];

// 1.自顶向下的递归法  递归法更好理解 
function mergeSort(arr) {
    // 当分的只剩一个时直接返回 因为length = 1的数组必然自身有序
    if (arr.length < 2) {
        return arr
    }
    // 拆分原数组，一半一半的拆分成左右两个数组
    // 取中间位置
    let midPos = parseInt(arr.length / 2)
    // 拆分成两个子数组
    let left = arr.slice(0, midPos)
    let right = arr.slice(midPos)
    // 合并两个分支
    return mergeArray(mergeSort(left), mergeSort(right))
}
// 合并两个有序（都是升序）数组（按升序合并）
function mergeArray(left, right) {
    // 定义一个额外的数组，用来实现合并,这个数组的长度就是原数组的长度 n,所有空间复杂度是 O(n)
    let result = []
    while (left.length && right.length) {
        // 如果左边小就弹出左边的第1个元素放到 result 中，否则弹出右边的第1个元素放到 result 中
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    // 如果左边还剩有元素
    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
    return result
}




// 2.自底向上的迭代法 来源 《数据结构与算法JavaScript描述》
function mergeSort2(arr) {
    if (arr.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays2(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays2(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
}
function mergeArrays2(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < rightArr.length - 1; ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i = 0; i < leftArr.length - 1; ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length - 1] = Infinity; // 哨兵值 
    leftArr[leftArr.length - 1] = Infinity; // 哨兵值 
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
}
