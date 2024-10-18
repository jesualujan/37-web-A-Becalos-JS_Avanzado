// vamos a simular una pila de ejecución de javascript 
// clase y objetos 

class Stack {
    constructor() {
        this.items = [];
    }

    // métodos de la pila de ejecución 
    
    // Agregar un elemento a la pila 
    push(element){
     this.items.push(element);
    }
     
    // Eliminar el elemento superior de la pila
     pop(){
     if(this.isEmpty()){
        return "vacía";
     }else{
        return this.items.pop();
     }
    }

    // ver el elemento superior de la pila
    peek(){
    if(this.isEmpty()){
        return "no hay elementos en la pila";
    }else{
        return this.items[this.items.length - 1];
    }
    }

    // verifica si la pila está vacía
    isEmpty(){
     return this.items.length === 0;
    }

    // mostrar todos los elementos de la pila, sin sacarlos
    printStack(){
       return this.items.toString();
    }
}

// instancias de la class Stack
let stack = new Stack () ;
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack()); // 10,20,30
console.log(stack.pop()); // 30
console.log(stack.printStack()); // 10,20
console.log(stack.peek()); // 20
console.log(stack.printStack()); // 10,20