const mMult = require('./matrix').mMult
const newMatrix = require('./matrix').newMatrix
const mTran = require('./matrix').mTran
// 3 x 2 matrix as mA
let mA = newMatrix(3,2,1)
// 2 x 3 matrix as mB
let mB = newMatrix(2,3,2)
let mAT = mTran(mA)

let mRes = mMult(mA,mAT)

console.log(mRes)