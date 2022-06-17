// 快速排序是处理大数据集最快的排序算法之一。它是一种分而治之的算法，
// 通过递归的方 式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直到所有数据都是有序的。
// https://static.kancloud.cn/fortheday/js-data-structure-and-algorithm/1698057
// 它的基本思想是：通过一趟排序将数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，
// 然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列

// 思路：

//从数组中随便取出一个数，把这个数当成一个“基数”
//循环数组中所有元素和这个“基数”对比，比它小的放在它左边，比它大的放在它右边
//再基数左右两边的元素看成两个子数组，再分别对两个子数组执行快速排序。。

const arr1 = [5, 1, 3, 7, 9, 4, 2];
function qSort(list) {
  if (list.length == 0) {
    return [];
  }
  // 用来存储比基准值小的
  var lesser = [];
  // 用来存储比基准值大的
  var greater = [];
  // 选定基准值为数组第一位
  var pivot = list[0];
  // 从基准值后开始遍历
  for (var i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      lesser.push(list[i]);
    } else {
      greater.push(list[i]);
    }
  }
  // 当list的长度为1 时，上面的循环不会执行，lesser = [],greater = [],
  // qSort的返回值也就是 list 和一样的数组(引用地址不一样)
  // 一个长度的数组必然有序
  //        小                中          大
  return qSort(lesser).concat(pivot, qSort(greater));
}
