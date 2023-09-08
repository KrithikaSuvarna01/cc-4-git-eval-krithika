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
        // console.log("Stack = ",stack.peek())
        console.log(exp1," ",exp2," ",exp3)
        let str1=0
        str1=Number(exp1[0])
        stack.pop()
        for(let i=1;i<exp1.length;i++){
            
            if(exp1[i]==='+'||exp1[i]==='-'){
                if(exp1[i]=='+'){
                    stack.pop()
                    str1=str1+Number(exp1[i+1])
                    stack.pop()
                }
                else{
                    if(stack.peek()=='-'){
                        stack.pop()
                        str1=str1-Number(exp1[i+1])
                        stack.pop()
                    }
                }
            }
            else if(!(exp1[i]=='+'||exp1[i]=='-')){
                continue
            }
            
            }
            if(exp1.length>3){
                str1=str1-exp1[2]
            }
            for(let i=exp1.length-1;i>0;i--){
                stack.push(exp2[i])
                }
            let str2=Number(exp2[0])
            str2=Number(exp2[0])
            stack.pop()
            for(let i=1;i<exp2.length;i++){
                
                if(exp2[i]=='+'||exp2[i]=='-'){
                    if(exp2[i]=='+'){
                        stack.pop()
                        str2=str2+Number(exp2[i+1])
                        stack.pop()
                    }
                    else{
                        if(exp2[i]=='-'){
                            stack.pop()
                            str2=str2-Number(exp2[i+1])
                            stack.pop()
                        }
                    }
                }
                else if(!(exp2[i]=='+'||exp2[i]=='-')){
                    continue
                }
                
                }
                if(exp2.length>3){
                    str2=str2-exp2[2]
                }
                for(let i=exp1.length-1;i>0;i--){
                    stack.push(exp3[i])
                    }
                let str3=0
                str3=Number(exp3[0])
                    stack.pop()
                for(let i=1;i<exp3.length;i++){
                    
                    if(exp3=='+'||exp3=='-'){
                        if(exp3=='+'){
                            stack.pop()
                            str3=str3+Number(exp3[i+1])
                            stack.pop()
                        }
                        else{
                            if(exp3=='-'){
                                stack.pop()
                                str3=str3-Number(exp3[i+1])
                                stack.pop()
                            }
                        }
                    }
                    else if(!(exp3[i]=='+'||exp3[i]=='-')){
                        continue
                    }
                    
                    }
                    // if(exp3.length>3){
                    //     str3=str3-exp3[2]
                    // }
                    console.log("Number1 = "+str1+" Number 2= "+str2+" Number 3= "+str3)
        return `There are ${str1} mangoes in each of ${str2} boxes in the room. You will need to distribute them to ${str3} people`
    }

    }
}


expressionTest("There are 5-3+8 mangoes in each of 3+5 boxes in the room. You will need to distribute them to 9+3-2 people.")