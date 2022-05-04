function betterThanAverage(classPoints, yourPoints) {
    const sum = classPoints.reduce((a,b) => a + b, 0)
    const avg = (sum / classPoints.length) || 0;
    if (avg < yourPoints){
      return true
    }else{
      return false
    }
  }
  