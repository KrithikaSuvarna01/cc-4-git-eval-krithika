import { createStack } from "./stack.js"
import { expect,test } from "vitest";
test("Stack Data Structure using array",()=>{
    const stack=createStack()
    let itemPushed=stack.push(10);
    expect(itemPushed.value).toBe(stack.peek().value)
    let itemPushed2=stack.push(20);
    expect(itemPushed2.value).toBe(stack.peek().value)
    let itemPushed3=stack.push(30);
    expect(itemPushed3.value).toBe(stack.peek().value)
    let topItem=stack.peek();
    console.log(itemPushed3)
    console.log(stack.peek())
    let poppedItem=stack.pop();
    expect(poppedItem.value).toBe(topItem.value)
    
    console.log(poppedItem)
    console.log(topItem)

    
})