function produceDrivingRange(range) {
  return function(distance) {
      return (distance > range ? false : true)
  }
}
