
/*
给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。
*/

// NOTE: 1.拼接后排序再求值
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergeNums = [...nums1, ...nums2].sort();
  const lens = mergeNums.length;
  const midIndex = Math.floor(lens / 2);
  if (lens % 2 !== 0) {
    return mergeNums[midIndex];
  }
  return (mergeNums[midIndex - 1] + mergeNums[midIndex]) / 2;
};

// NOTE: 2.双指针
// export function findMedianSortedArrays1(nums1: number[], nums2: number[]): number {
//   const lens1 = nums1.length;
//   const lens2 = nums2.length;
//   const lens = lens1 + lens2;
//   const isEven = lens % 2 === 0;
//   const midIndex = Math.floor((isEven ? lens - 1 : lens) / 2);
//   debugger;
//   if (lens1 === 0 || lens2 === 0) {
//     const has0next = lens1 > 0 ? nums1 : nums2;
//     if (!isEven) {
//       return has0next[midIndex];
//     }
//     return (has0next[midIndex] + has0next[midIndex + 1]) / 2;
//   }

//   let index = 0;
//   let leftIndex = 0;
//   let rightIndex = 0;
//   let leftFlag: [number[], number] = [nums1, leftIndex];
//   let rightFlag: [number[], number] = [nums2, rightIndex];
//   while (index < midIndex) {
//     const leftnum = leftFlag[0][leftFlag[1]];
//     const rightnum = rightFlag[0][rightFlag[1]];
//     let mapNums = [];
//     let leftislessthan = false;
//     if (leftnum <= rightnum) {
//       if ()
//       leftislessthan = true;
//       mapNums = 
//     } else {
//       rightIndex++;
//     }
//     index++;
//   }

//   const leftnum = nums1[leftIndex];
//   const rightnum = nums2[rightIndex];
//   if (!isEven) {
//     return Math.min(leftnum, rightnum);
//   }
//   return (leftnum + rightnum) / 2;
// };
