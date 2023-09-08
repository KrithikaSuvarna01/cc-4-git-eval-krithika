import { expressionTest } from "./expression-test.js"
import { expect,test } from "vitest";

test("Test To check the expression",()=>{
    const exp=expressionTest();
    let recievedResult=exp.checkExpr("There are 5-3+8 mangoes in each of 3+5 boxes in the room. You will need to distribute them to 9+3-2 people.")
    let result="There are 10 mangoes in each of 8 boxes in the room. You will need to distribute them to 10 people."
    expect(recievedResult).toBe(result)
})