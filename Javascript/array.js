var K=5, arr=[1, 3, 2, 6, -1, 4, 1, 8, 2]

function loopValues(K,arr){
    result=[]
    for(let i=0; i<arr.length; i++){
        sum =0
        for(let j=i; j<arr.length;j++){
            sum+=arr[j]
        }
        result.push(sum)
    }
    console.log(result)
    return result
}

// loopValues(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])

function slideWindow(K, arr){
    result=[]
    sum=0
    start=0
    for (let i=0; i<arr.length; i++){
        sum += arr[i]
        if(i >= K-1){
            console.log(i)
            result.push(sum/K)
            sum -= arr[start]
            start++
        }
    }
    console.log(result)
    return result
}
// slideWindow(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])

function bubbleSlide(K, arr){
    result=[]
    for(let i=0; i<arr.length-K+1; i++){
        sum =0;
        for(let j=i; j < i+K; j++){
            sum+=arr[j]
            console.log(`i: ${i}, j: ${j},sum: ${sum/K}`)
        }
        result.push(sum/K)
    }
    console.log(result)
    return result
}
// bubbleSlide(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])



// function inBubbleSlide(K, arr){
//     result=[]
//     for(let i in arr){
//         sum =0;
//         for(let j in K){
//             sum+=arr[j]
//             console.log(`i: ${i}, j: ${j},sum: ${sum/K}`)
//         }
//         result.push(sum/K)
//     }
//     console.log(result)
//     return result
// }
// inBubbleSlide(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])

function maximumSum(K, arr){
    result=[0]
    maxSum=0
    sum=0
    start =0
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
        if(i >= K-1){
            maxSum > sum? maxSum: maxSum=sum
            sum -= arr[start]
            start++
        }
    }
    console.log(maxSum)
    return maxSum
}
// maximumSum(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
// maximumSum(3, [2, 1, 5, 1, 3, 2])
// maximumSum(2, [2, 3, 4, 1, 5])




// function smallestLength(K, arr){
//     result=[]
//     sum=0;
//     start=0
//     j=0
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//         j++
//         if(sum >= K){
            
//             if (start === 0){
//                 result.push(j)
//             }
//             sum -= arr[start]
//             start++
//             if(j < result[0]){
//                 result.pop()
//                 result.push(j)
//             }
//             j--
//         }
//     }
//     console.log(result)
//     return result
// }
// smallestLength(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
// smallestLength(7, [2, 1, 5, 2, 3, 2])
// // smallestLength(3, [2, 1, 5, 1, 3, 2])
// // smallestLength(2, [2, 3, 4, 1, 5])
// // Input: [2, 1, 5, 2, 3, 2], S=7 
// // Output: 2


// smallestLength(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])

function smallestLength(K, arr){
    let result= Infinity
    start=0;
    sum = 0
    for (let i=0; i< arr.length; i++){
        sum += arr[i]
        console.log(`outside i: ${i} - result: ${i-start+1}`)
        while(sum >= K){
            console.log(`inside while: i: ${i} - start: ${start} result: ${i-start+1}`)
            result = Math.min(result, i-start+1);
            sum -= arr[start]
            start += 1
        }
    }
    if(result==Infinity){
        return 0
    }
    console.log(result)
    return result
}
smallestLength(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
// smallestLength(7, [2, 1, 5, 2, 3, 2])
// smallestLength(3, [2, 1, 5, 1, 3, 2])
// smallestLength(2, [2, 3, 4, 1, 5])
// smallestLength(8, [3, 4, 1, 1, 6])
// Input: [2, 1, 5, 2, 3, 2], S=7 
// Output: 2


// console.log(Math.min(5, 6))