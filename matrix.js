//creating m x n Matrix
// this function will return matrix with increment of given input

export function newMatrix(rows,cols, input){
    let r = rows
    let c = cols
    let v = input
    let matrix = Array(r)
    console.log(matrix)
    for(let j =0 ; j<r;++j){
        matrix[j] = Array(c)
        for(let i=0;i<c;++i){
            matrix[j][i] = v
            v++
    }
    }

    return matrix
}
// console.table(newMatrix(5,2,0.5))

export function mMult(mA,mB){
    // mA = m x n
      // mB = n x r 
      // mR = m x r
      // m of mA = length of Array mA
      // n of mA = length of each Element in Array mA
      // n of mB = length of  Array mB
      //r of mB = length of each Element in mB
      
      let rowsmA = mA.length
      let colsmA = mA[0].length
      let rowsmB = mB.length
      let colsmB = mB[0].length
      
       let mR = Array(rowsmA)
       for( let r = 0; r < rowsmA; ++r){
         mR[r] = Array(colsmB)
         for (let c=0;c< colsmA;++c ){
           mR[r][c] = 0
           
           for(let i =0;i<rowsmB;++i){
             
             mR[r][c] += mA[r][i] * mB[i][c] 
             
           }
         }
         
       } 
     
     return mR
    
    }

    let x1 = [[1,2],[3,4],[5,6]]
    let y1 = [[1,1],[1,1]]
    
   // console.table(mMult(x1,y1))

 export  function mTran(matA) {
    
        let mA = matA
        let mT = mA[0].map((a,b) => mA.map(row => row[b]))
    
        return mT
    }
    
    let mat=[[1,2],[5,6],[7,8],[9,0]]
    
   // console.table(mTran(mat))