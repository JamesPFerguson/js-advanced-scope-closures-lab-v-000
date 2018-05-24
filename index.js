function produceDrivingRange(range) {

  return function(block1, block2) {

    let distance = block2 - block1
    return (distance > range ? `${distance - range} blocks out of range` :`within range by ${range - distance}`)
  }

}
