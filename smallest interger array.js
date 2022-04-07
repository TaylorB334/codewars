class SmallestIntegerFinder {
    findSmallestInt(args) {
      let newArray = args.sort((a,b)=>a-b)
      return newArray[0]
    }
  }