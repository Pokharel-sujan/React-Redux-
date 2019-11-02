const Increment = 'INCREMENT'

const myreducer = (state=0, action)=>{
    switch(action.type){
        case (Increment):
        return (increment +=1 )
        case ( Decrement):
        return (decrement -=1)
        default:
        return state;
        
    }
}

const Incre = ()=>{ return {type: 'Increment' }}
const Decre = ()=>{ return {type: 'Decrement' }}

const store = Redux.createStore(myreducer)


