import { evaluateExpression } from "./expression-test.js"
import { expect,test } from "vitest";

test("Test To check the expression",()=>{

    const recievedResult=evaluateExpression("There are 5-3+8 mangoes in each of 3+5 boxes in the room. You will need to distribute them to 9+3-2 people.");
    let result="There are 10 mangoes in each of 8 boxes in the room. You will need to distribute them to 10 people."
    expect(recievedResult).toBe(result)

    const exp1=evaluateExpression("I have 8+4+5 mangoes 4+8+9+7 apples and 7+9-6 grapes")
    let evalExpr='I have 17 mangoes 28 apples and 10 grapes'
    expect(exp1).toBe(evalExpr)

    const exp2=evaluateExpression('There are 5+2+6 monkeys eating 7+8+9 bananas and 1+9+8 apples')
    let evalExpr2='There are 5+2+6 monkeys eating 7+8+9 bananas and 1+9+8 apples'
    expect(exp2).toBe("There are 13 monkeys eating 24 bananas and 18 apples")

})