export function createStack(){
    let arr=[]
    return{
        push(value){
            arr.push(value)
            return value
        },
        pop(){
            let item=arr[arr.length-1]
            arr.pop()
            return item
        },
        peek(){
            let item=arr[arr.length-1]
            return item
        }
    }
}

// export function createStack(){
//     let head=null;
//     let tail=null;
//     return{
//         push(value){
//             const node={value,next:null}
//             if(head===null){
//                 head=node

//             }
//             if(tail==null){
//                 tail=node
//             }
//             if(node!=tail){
//                 tail.next=node
//                 tail=node
//             }
//             return node
//         },
//         pop(){
//             if(head===null&&tail==null){
//                 return "Empty Stack"
//             }
//             else if(head===tail){
//                 let item=tail
//                 head=null
//                 tail=null
//                 return item
//             }
//             else{
//                 let previous=this.nodeAtIndex(this.getLength()-2)
//                 let item=this.nodeAtIndex(this.getLength()-1)
//                 previous.next=null
//                 tail=previous
//                 return item
//             }

//         },
//         getLength(){
//             let len=0
//             let current=head
//             while(current!==null){
//                 len++
//                 current=current.next
//             }
//             return len
//         },
//         peek(){
//             let node=head
//             while(node.next!=null){
//                 node=node.next
//             }
//             return node
//         },
//         nodeAtIndex(position){
//             let Index = 0
//         let current = this.head
//         if (position >= 0 && position < this.getLength()) {
//           while (current !== null) {
//             if (Index === position) {
//               return current
//             }
//             current = current.next
//             Index++
//           }
//         }
//         return null
//         }
//     }
// }