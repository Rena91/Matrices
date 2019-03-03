function mTran(matA) {
    
    let mA = matA
    let mT = mA[0].map((a,b) => mA.map(row => row[b]))

    return mT
}

let mat=[[1,2],[5,6],[7,8],[9,0]]

console.table(mTran(mat))