// 我们先来了解一下冒泡排序算法，它是最慢的排序算法之一，但也是一种最容易实现的排序算法
// 之所以叫冒泡排序是因为使用这种排序算法排序时，数据值会像气泡一样从数组的一端漂 浮到另一端。
// 假设正在将一组数字按照升序排列，较大的值会浮动到数组的右侧，而较小 的值则会浮动到数组的左侧。
// 之所以会产生这种现象是因为算法会多次在数组中移动，比 较相邻的数据，当左侧值大于右侧值时将它们进行互换。

// 原理：
// 数组中有 n 个数，比较每相邻两个数，如果前者大于后者，就把两个数交换位置；这样一来，第一轮就可以选出一个最大的数放在最后面；
// 那么经过 n-1（数组的 length - 1） 轮，就完成了所有数的排序。（最大的数依次向右边冒泡）
// https://www.cnblogs.com/echolun/p/12638903.html
// https://segmentfault.com/a/1190000014175918

const arr1 = [5, 2, 1, 3, 6, 4];
// 交换一个数组中的两个元素
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// 冒泡排序
function bubbleSort(arr) {
  // 《数据结构与算法》的解法 有点难理解
  // for(let outer = arr.length; outer >= 2 ; -- outer) {
  //     for(let inner = 0;inner <= outer-1; ++inner) {
  //         if(arr[inner]>arr[inner+1]){
  //             swap(arr,inner,inner+1)
  //         }
  //     }
  // }
  // 路人解法
  // 内层循环是遍历数组，两两对调，遍历结束后当前最大的移动到数组的末尾
  // 外层循环是遍历次数（每遍历一次相当去将当前最大的移动到数组的末尾）
  for (let j = 0; j < arr.length - 1; j++) {
    // 注意这里 -j;  https://segmentfault.com/a/1190000014175918
    // 内层循环不用每次都遍历到数组最后，只有第一次需要，j代表当前的遍历次数，每遍历一次，内存循环的遍历就少一个长度
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
}
bubbleSort(arr1);
