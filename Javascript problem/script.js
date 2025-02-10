const num = [2, 7, 11, 15];
const target = 18;
function checkTargetIndices(nums,targetSum){
    let targetIndices = [];
    let copyNum = JSON.parse(JSON.stringify(nums));
    for(let i=0; i < nums.length; i++){
        // console.log(i)
        for(let j=0; j < copyNum.length; j++){
            if(nums[i] + copyNum[j] == targetSum && targetIndices.length == 0){
                targetIndices.push(i,j);
                
            }
        }
    }
    return targetIndices;
}

console.log(checkTargetIndices(num,target));