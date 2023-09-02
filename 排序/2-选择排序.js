// 选择排序从数组的开头开始，将第一个元素和其他元 素进行比较。
// 检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从 第二个位置继续。
// 这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便 完成了排序。

// 选择排序会用到嵌套循环。外循环从数组的第一个元素移动到倒数第二个元素;
// 内循环从第 二个数组元素移动到最后一个元素，查找比当前外循环所指向的元素小的元素。
// 每次内循环 迭代后，数组中最小的值都会被赋值到合适的位置。

const arr1 = [3, 6, 4, 2, 1, 5];

// 交换一个数组中的两个元素
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
// 内层循环是遍历找出当前的数组，找出最小值，和当前的项对调
// 外层循环是控制遍历次数
function selectionSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    // 每次遍历被比较的项，第一次先假设数组第一个就是最小的
    let min = arr[j];
    let minIndex = j;
    // 从j+1项开始遍历,寻找本轮循环中最小的值
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    swap(arr, j, minIndex);
  }
}
selectionSort(arr1);
// 备注下，第一天看冒泡排序，第二天看选择排序
// 第一天看的有点吃力，第二天我就独立5分钟写出来啦，哈哈哈
