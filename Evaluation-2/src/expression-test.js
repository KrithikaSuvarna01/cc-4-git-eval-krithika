import { createStack } from "./stack.js"
export function expressionTest(){
let stack=createStack()
return{
    checkExpr(expr){
        let str=expr;
        let expArr=[]
        for(let i=0;i<str.length;i++){
            if(str[i]=='1'||str[i]=='2'||str[i]=='3'||str[i]=='4'||str[i]=='5'||str[i]=='6'||str[i]=='7'||str[i]=='8'||str[i]=='9'||str[i]=='+'||str[i]=='-'){

                expArr.push(str[i])
            }
        }
        console.log(expArr)
        let exp1=[]
        let exp2=[]
        let exp3=[]
        for(let i=0;i<=4;i++){
            exp1.push(expArr[i])
        }
        for(let i=5;i<=7;i++){
            exp2.push(expArr[i])
        }
        for(let i=8;i<expArr.length;i++){
            exp3.push(expArr[i])
        }
        for(let i=exp1.length-1;i>0;i--){
        stack.push(exp1[i])
        }
        console.log(exp1," ",exp2," ",exp3)
        let str1=0
        for(let i=0;i<exp1.length;i++){
            str1=Number(exp1[i])
            stack.pop()
            if(stack.peek()=='+'||stack.peek()=='-'){
                if(stack.peek()=='+'){
                    stack.pop()
                    str1=str1+Number(stack.peek())
                    stack.pop()
                }
                else{
                    if(stack.peek()=='-'){
                        stack.pop()
                        str1=str1-Number(stack.peek())
                        stack.pop()
                    }
                }
            }
            
            }
            let str2=Number(exp2[0])

            for(let i=0;i<exp2.length;i++){
                str2=Number(exp2[i])
                stack.pop()
                if(stack.peek()=='+'||stack.peek()=='-'){
                    if(stack.peek()=='+'){
                        stack.pop()
                        str2=str2+Number(stack.peek())
                        stack.pop()
                    }
                    else{
                        if(stack.peek()=='-'){
                            stack.pop()
                            str2=str2-Number(stack.peek())
                            stack.pop()
                        }
                    }
                }
                
                }
                let str3=Number(exp3[0])
                for(let i=0;i<exp3.length;i++){
                    str3=Number(exp3[i])
                    stack.pop()
                    if(stack.peek()=='+'||stack.peek()=='-'){
                        if(stack.peek()=='+'){
                            stack.pop()
                            str3=str3+Number(stack.peek())
                            stack.pop()
                        }
                        else{
                            if(stack.peek()=='-'){
                                stack.pop()
                                str3=str3-Number(stack.peek())
                                stack.pop()
                            }
                        }
                    }
                    
                    }
                    console.log("Number1 = "+str1+"Number 2="+str2+"Number 3= "+str3)
        return `There are ${str1} mangoes in each of ${str2} boxes in the room. You will need to distribute them to ${str3} people`
    }

    }
}


expressionTest("There are 5-3+8 mangoes in each of 3+5 boxes in the room. You will need to distribute them to 9+3-2 people.")