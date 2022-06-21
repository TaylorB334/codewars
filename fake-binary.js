function fakeBin(x){
    let arr = []
    x.split('').forEach(numStr => {
    if(+numStr >= 5) {
      arr.push(1)
    }else {
      arr.push(0)
    }
  })
  return arr.join('')
  }
  