function setAlarm(employed, vacation){
    if (employed === false){
      return false
      }else if (employed === true && vacation === true){
        return false
      }else if (employed === true && vacation === false){
        return true
      }
    }
    
    