
function logic(entry,nextFive) {
  this.nextFive = nextFive
  this.entry = entry
  this.reqTwo = false
  this.reqThree = false
  this.reqFive = false
  this.totalReqs = 0
  this.shiftLength = function() {
    this.analyze()
    if (this.reqFive){
      return 5
    } else if (this.reqThree){
      return 3
    } else if (this.reqTwo){
      return 2
    }

  }
  this.addedJumps = function() {
    if (this.reqFive) this.totalReqs++
    if (this.reqThree) this.totalReqs++
    if (this.reqTwo) this.totalReqs++
    if (this.totalReqs === 2){return 1}
    if (this.totalReqs === 3){return 2}
    return 0
  }
  this.analyze= function(){
    this.setTwo()
    this.setThree()
    this.setFive()
  }

    this.setTwo= function(){
      if (entry.indexOf(nextFive.substring(0,2)) > -1){
      this.reqTwo = true
    }
    this.setThree= function(){
      temp_entry= this.entry
      counter = 0
      for (i = 0; i <= 2; i++){
        a = temp_entry.indexOf(nextFive.charAt(i))
        if (a>-1){
          counter ++
          temp_entry = temp_entry.slice(a+1)
        }
        if (counter == 3) this.reqThree = true

      }


    }
    this.setFive= function(){
      counter = 0
      entryArray = this.entry.split("");
      nextFiveArray = this.nextFive.split("");
      for (i = 0; i <= 4; i++){
        a = entryArray.indexOf(nextFiveArray[i])
        if (a>-1){
          entryArray.splice(a,1)
          counter++
        }
      }
      if (counter === 5) this.reqFive = true
      }
  }
}

