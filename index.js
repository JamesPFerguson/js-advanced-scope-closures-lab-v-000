function produceDrivingRange(range) {

  return function(block1, block2) {

    let distance = block2 - block1
    debugger
    return (distance > range ? false : true)
  }

}
