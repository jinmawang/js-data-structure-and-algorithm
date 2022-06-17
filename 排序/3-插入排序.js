// 再次感受到《数据结构与算法 js描述》这本书描述的不好
// 后面的注释是网上找来的描述和自己的思考
// 插入排序的思路跟整理扑克牌是一样的，即每次拿到一张牌，按大小顺序将其插入到合适的位置。
//（第一次把数组的第一位看成有序的，其余的是无序的）
// 那么插入排序实际上就是：每次将无序数组的一个数插入到有序的数组中去(初始一个数字自然有序)。
const arr1 = [4,3,2,6,1];

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        //当前要被插入的项，从数组的第2个开始
        let temp = arr[i];
        // 前一个数的索引
        let preIndex = i - 1;
        while (preIndex >= 0 && arr[preIndex] > temp) {
            //如果前一位的值大于被插入项,将前一个位的值赋值给后一位 （相当于把比当前项大的后移一位）
            arr[preIndex + 1] = arr[preIndex]
            preIndex--;
        }
        // 退出while循环时,有两种可能，第一种， arr[preIndex]<= temp,因为前面已经是有序的了，所以 temp 放在 [preIndex+1] 位置就行
        // 第二种是 preIndex === -1 了，说明前面有序部分已经被遍历完且都大于 temp ，所以直接第一个位置变为当前 temp就行
        // 所以此时的 preIndex+1 是要处理的数排序后应该在的位置
        // 把当前元素放到不大于它的这个元素的后面 
        arr[preIndex+1] = temp
    }
    return arr;
  }
  // 输入 [4,3,2,6,1];
  // i=1,preIndex=0,[4,4,2,6,1]; preIndex = -1, [3,4,2,6,1]
  // i = 2,preIndex = 1,temp = 2, [3,4,4,6,1];preIndex = 0, [3,3,4,6,1]; preIndex=-1,[2,3,4,6,1]
  
  // i = 3,preIndex = 2,temp = 6; [2,3,4,6,1]; 前一个小于当前项，数组其实没变
  // i =4, preIndex = 3,temp = 1; [2,3,4,6,6];preIndex = 2, [2,3,4,4,6]; 
  //       preIndex = 1, [2,3,3,4,6]; preIndex = 0, [2,2,3,4,6]
  //       preIndex = -1; [1,2,3,4,6]

// 再写一遍
  const arr2 = [3,2,8,1,5];
  function insertSort2(arr) {
      for (let i = 1; i < arr.length; i++) {
          const temp = arr[i];
          let preIndex = i-1;
          while (preIndex>=0&&arr[preIndex]>temp) {
              arr[preIndex+1] = arr[preIndex];
              preIndex--;
          }
          arr[preIndex+1] = temp;
          
      }
      return arr;
  }