module.exports = function towelSort (matrix) {
  
  if ( matrix === undefined || matrix.length < 1 ) {
    return []
  }
  for ( let i = 1; i < matrix.length; i = i + 2 ) {
    matrix [ i ] = matrix [ i ].reverse();
  }

  return matrix.flat();
}