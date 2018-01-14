
var QueueMod=require('./queue.js')

var queueExample=new QueueMod.Queue();


console.log('Adding two elements to the Queue : '+"50 , 40 , 30");
console.log('First enqueue is 50');
queueExample.enqueue(50);
console.log('Count after enqueue: '+queueExample.getCount());
console.log('Second enqueue is 40');
queueExample.enqueue(40);
console.log('Count after enqueue: '+queueExample.getCount());
console.log('Third enqueue is 30');
queueExample.enqueue(30);
console.log('Count after enqueue: '+queueExample.getCount());
console.log('Displaying all the elements of the Queue....')
console.log(queueExample.displayAll())
console.log('PEEK operation on the current Queue : ')
console.log(queueExample.peekAt(1));
console.log('Count after PEEK: '+queueExample.getCount());
console.log('Dequeue operation on the current Queue : ')
console.log(queueExample.dequeue());
console.log('Count after Dequeue: '+queueExample.getCount());
