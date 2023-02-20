import { State } from  "./state.enum";

export class Context {

    private state = State.stateA;

    request(operation: string) {  
        switch (this.state){
            case State.stateA:
                if(operation === 'request1'){
                    console.log('ConcreteStateA handles request1.'); //request1()
                    console.log('ConcreteStateA wants to change the state of the context.');
                    this.state = State.stateB; // Transition to another state
                    console.log(`Context: Transition to concrete-state-B.`);
                }else {
                    console.log('ConcreteStateA handles request2.'); // request2()
                }
                break
            case State.stateB:
                if(operation === 'request1'){
                    console.log('ConcreteStateB handles request1.'); //request1()
                }else{
                    console.log('ConcreteStateB handles request2.'); //request2()
                    console.log('ConcreteStateB wants to change the state of the context.');
                    this.state = State.stateA; // Transition to another state
                    console.log(`Context: Transition to concrete-state-A.`);
                }
            default: // Do nothing.
                break
        }
    }
}