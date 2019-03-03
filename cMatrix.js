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
console.table(newMatrix(5,2,0.5))

