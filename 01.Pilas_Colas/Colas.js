// vamos a simular una cola de ejecución de javascript 
// clase y objetos 

class Queue {
    constructor() {
        this.items = [];
    }

    // métodos de la cola de ejecución 
    
    //añadir elementos a la cola
    enqueue(element){
        this.items.push(element);
    }

    // eliminer el primer elemento de la cola
    dequeue() {
        if(this.isEmpty()){
            return "vacía";
        }else{
            return this.items.shift();
        }
    }

    // ver el primer elemento de la cola
    front() {
        if(this.isEmpty()){
            return "no hay elementos en la cola";
        }else{
            return this.items[0];
        }
    }

    //verificar si la cola está vacía
    isEmpty(){
        return this.items.length === 0;
       }

      // mostrar todos los elementos de la cola, sin sacarlos
      printQueue(){
        return this.items.toString();
     }
}

// instancias de la class Queue
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.printQueue()); // 10,20,30
console.log(queue.dequeue()); //10
queue.enqueue(40);
console.log(queue.printQueue());
console.log(queue.dequeue());//20
console.log(queue.front()); //30
console.log(queue.printQueue());
queue.enqueue("marcos");
console.log(queue.printQueue());


