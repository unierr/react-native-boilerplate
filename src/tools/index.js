export let toFarsi=(str)=>{
    str = String(str)
    var numbers=[["0","۰"],["1","۱"],["2","۲"],["3","۳"],["4","۴"],["5","۵"],["6","۶"],["7","۷"],["8","۸"],["9","۹"]]
    var deepReplace=(theString,findThis,replaceWith)=>{
        while(theString.indexOf(findThis)>=0){
            theString=theString.replace(findThis,replaceWith);
        }
        return theString;
    }

    numbers.map(n=>{
        str=deepReplace(str,n[0],n[1]);
        return '';
    })
    return str;
}

export let digitSeperator=(intNum)=>{
    return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}