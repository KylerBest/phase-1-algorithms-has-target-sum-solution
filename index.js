// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for(let i = 0; i < array.length-1; i++){
//     for(let j = i+1; j < array.length; j++){
//       if(target - array[i] == array[j]){
//         return true;
//       }
//     }
//   }
//   return false;
// }

//Basically, I'm looping through the array, and for every element
// I'm checking with every other element if they add up to the target 
// value. This way, I'm not wasting time or resources checking combinations
// that have already been checked before.

//NEW AND IMPROVED:
function hasTargetSum(array, target){
  let storedNums = {};
  for(num of array){
    if(storedNums[target-num])return true;
    storedNums[num] = true;
  }
  return false;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
