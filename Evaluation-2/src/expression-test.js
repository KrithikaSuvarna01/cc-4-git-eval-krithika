/**
 * function takes an array containing expression evaluate it and then return the array conatining the result of the evaluated expression.
 * @param {*} arr is a String that contains numbers as well as '+' and '-' symbol.
 * @returns a computed or evaluated expression
 */
function compute(arr){
    let operandSt=[]
    let operatorSt=[]
    let result=[]
    for(let a of arr){
        let i=parseInt(a)
        if(i>0||i<=9){
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
 * Function takes a string extracts the expressions out of it and then replaces the expression with the computed expression.
 * @param {*} str is a string
 * @returns a string whose expressions will be evaluated
 */
export function evaluateExpression(str){
    let arrString=str.split(" ")
    let expr=[]
    // console.log(arrString)
    for(let i=0;i<arrString.length;i++){
        let flag=false
        for(let a of arrString[i]){
            let intA=parseInt(a)
            if(intA>0&&intA<=9||a==='+'||a==='-')
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
 

