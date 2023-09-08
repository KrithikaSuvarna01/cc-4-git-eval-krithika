/**
 * function takes an array containing expression 
 * @param {*} arr computes the array and returns it
 * @returns a computed or evaluated expression
 */
function compute(arr){
    let operandSt=[]
    let operatorSt=[]
    let result=[]
    for(let a of arr){
        if(a=='0'||a=='1'||a=='2'||a=='3'||a=='4'||a=='5'||a=='6'||a=='7'||a=='8'||a=='9'){
            operandSt.push(a)
        }
        else{
            operatorSt.push(a)
        }
        
        
    }
        let resultArr=[]
        while(operatorSt.length>0){
        let op1=operandSt.shift()
        let op2=operandSt.shift()
         if (op1 !== undefined && op2 !== undefined) {
             let o1=parseFloat(op1)
             let o2=parseFloat(op2)
        // console.log('operator1 = '+o1+' Operator 2= '+o2)
        let operator=operatorSt.shift()
        if(operator==='+'){
            operandSt.unshift(o1+o2)
        }
        else if(operator==='-'){
            operandSt.unshift(o1-o2)
        }
        }
        
        }
        return operandSt
}
/**
 * Function takes a string
 * @param {*} str is a string
 * @returns a string whose expressions will be evaluated
 */
export function expression(str){
    let arrString=str.split(" ")
    let expr=[]
    // console.log(arrString)
    for(let i=0;i<arrString.length;i++){
        let flag=false
        for(let a of arrString[i]){
            if(a=='1'||a=='2'||a=='3'||a=='4'||a=='5'||a=='6'||a=='7'||a=='8'||a=='9'||a=='+'||a=='-')
            {
              flag=true 
            }
        }
        if(flag==true){
            expr.push(arrString[i])
        }
    }
    let evaluatedExpr=[]
    // console.log(expr)
    for(let ele of expr){
         evaluatedExpr.push(compute(ele))
    }
    // console.log("Evaluated Expression ="+evaluatedExpr)
    let final=[]
    for(let i of evaluatedExpr){
        final.push(([...i]).toString())
    }
    // console.log(final)
     
    let returningArr=str.split(' ')
    // console.log(returningArr)
    let last=returningArr[returningArr.length-1]
    for(let i=0;i<=expr.length;i++){
        for(let ele of returningArr){
            if(arrString.indexOf(ele)!==-1){
            let index=returningArr.indexOf(expr[i])
            returningArr.splice(index,1,final[i])
        }
        }
    }
    // console.log("Last= "+last)
    returningArr[returningArr.length-1]=last
    // console.log(returningArr)
    let finalString = returningArr.join(" ")
    // console.log(finalString)
    return finalString
}
 

