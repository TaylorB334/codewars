function sumMix(x){
    let convertedArray = x.map(str => {
      return Number(str)
    })
    return convertedArray.reduce((a,b) => a+b )
  
  }