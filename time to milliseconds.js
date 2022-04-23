function past(h, m, s){
    let hour = h * 3600000
    let minute = m * 60000
    let second = s * 1000
    return hour + minute + second
  }