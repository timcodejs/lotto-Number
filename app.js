function lottoNumbers() {
    const nums = [];
    for(let i = 0; i < 45; i++) {
        let randomNum = Math.floor(Math.random() * 45) + 1;
        if(nums.indexOf(randomNum) == -1) {
            nums.push(randomNum);
            if(nums.length == 6) {
                break;
            }
        }
    }
    
    nums.sort(function(a, b){
        return a - b;
    });
    
    let span = document.querySelectorAll('span');
    for(let j = 0; j < nums.length; j++) {
        span[j].append(nums[j]);
    }
}

lottoNumbers();