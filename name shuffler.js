function nameShuffler(str){
    let arr = str.split(" ");
      arr.reverse();
      str = arr.join(" ");
      return str;
  }