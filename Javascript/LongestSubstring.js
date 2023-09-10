//Input: String="araaci", K=2
//Output: 4

function longestSubstring(K, str){
    let start = 0,maxLength=0, charFrequency = {}
    for(let i=0; i<str.length; i++){
        const rightChar = str[i]
        if(!(rightChar in charFrequency)){
            charFrequency[rightChar]=0
        }
        charFrequency[rightChar] += 1;

        while(Object.keys(charFrequency).length > K){
            const leftChar = str[start]
            charFrequency[leftChar] -= 1
            if (charFrequency[leftChar] === 0){
                delete charFrequency[leftChar]
            }
            start += 1
        }
        maxLength = Math.max(maxLength, i- start + 1)
    }
    return maxLength
}
console.log(longestSubstring(1, "araaci"))
console.log(longestSubstring(2, "araaci"))
console.log(longestSubstring(3, "araaci"))