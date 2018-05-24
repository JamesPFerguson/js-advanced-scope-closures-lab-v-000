function produceDrivingRange(range) {
  return function(distance) {
    distance > range ? true: false
  }
}
