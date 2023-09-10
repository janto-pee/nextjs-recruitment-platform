// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Example 1:

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".


function longest_substring_with_k_distinct(str, K) {
    let windowStart = 0,
      maxLength = 0,
      charFrequency = {};
  
    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      console.log(rightChar)

      if (!(rightChar in charFrequency)) {
        charFrequency[rightChar] = 0;
      }
      charFrequency[rightChar] += 1
      console.log(charFrequency)

        while(Object.keys(charFrequency).length > K){
          const leftChar = str[windowStart]
          charFrequency[leftChar] -= 1
          if (charFrequency[leftChar] === 0){
              delete charFrequency[leftChar]
          }
          windowStart += 1
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
      }
      return maxLength
  }
console.log(longest_substring_with_k_distinct("araaci", 2))
// longest_substring_with_k_distinct("araaci", 1)
// longest_substring_with_k_distinct("araaci", 3)

console.log(Object.keys({ a: 0, r: 0, c: 0, i: 0 }).length)