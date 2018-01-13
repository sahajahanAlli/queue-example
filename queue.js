
/*
* Queue is perticular datastructure in which data is arranged in perticular format. That Format is called FIFO(First In First Out).
* FIFO means Whoever comes First into the storage system will leave first from the system. example is stack of Queue in ticket counter.
* The person who comes first in the ticket queue will get ticket first.
* In industry like coco cola , the machine fill the bottle which comes first for filling then next bottle. Like this queue concepts implemented every where
* 
*
*
*/




function Queue(){


// this is where all the class level varibales are declared..........................
var head =null;	//This is the pointer for head section of the Queue
var tail =null;   // This is the pointer for tail section of the Queue
var count=0;   // keeps the count of number of elements in the Queue

//Below are the methods related to this class.................

//returns the no of items in the Queue
this.getCount=function(){
	return count;
}

//Enqueue method.. To inserting element into the queue 

this.enqueue=function(item){

	var node ={
		data : item,
		next: head
	}
	// if it is first element in the queue so tail should be pointed to first arrival 
	if(head==null){
		tail=node;
	}
	// pointing head to the top  of the queue
	head=node;

	//increase the counter of the queue
	count++;
}


//Dequeue.. remove the element from the queue from tail end...

this.dequeue=function(){

	if(tail==null){
		return null;
	}else{
		var currItem=head;
		var prevItem=null;

		/*
		* We need to iterate through the queue items and store the previous items in prevItem for assigning 
		*to tail when we read the last item. tail Item of the queue stores 'null' in the referrance setion. using this identifier 
		* we will identify the last element
		*/

		while(currItem.next){
			prevItem=currItem;
			currItem=currItem.next;
		}

		//if the queue contains more the one element we need to dereferrance the last element means we need to assign 'null' to tail element after removal of element
		if(count>1){
			// assign null of dereferrancing the item before tail element
			prevItem.next=null;
			// tail pointing to the previous node
			tail=prevItem
		}{
			// if it contains a single element. Queue is empty after removal
			head=null;
			tail=null;
		}
		// decreasing the element count
		count--;
		//if you want to see the remove element put return statement like below . otherwise return is not required
		return currItem;
	}
}

// Search or view any element in the Queue
this.peekAt=function(itemIndex){
// check the length of the queue and index asked for 

if(itemIndex<count && itemIndex>-1){
	var currItem=head;

	for (var i = 0; i < itemIndex; i++) {
		currItem=currItem.next;
	}

	return currItem.data;
}else{
	// if condition fails. return 'null' for invalid request
	return null;
}	
}


this.displayAll=function(){
	var ar=[];
	var currItem=head;

	if(count===0){
		return null;
	}else{
		for (var i = 0; i < count; i++) {

			ar.push(currItem.data);
			currItem=currItem.next;
	}
}

return ar;

}
}


module.exports.Queue=Queue;