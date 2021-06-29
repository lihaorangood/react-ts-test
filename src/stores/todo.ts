//  ./src/stores/todo.ts
import {action, observable,makeAutoObservable} from 'mobx';


class TodoStore {
    constructor() {
        makeAutoObservable(this)
    }
    @observable status: boolean = false
    @observable count: number = 1


    @action
    public setCount = () =>{
        console.log(111)
        console.log(this)
        this.count = 2
    }
    @action
    public setStatus = () => {
        this.status = true
    }
}
export default  TodoStore
export const STORE_TODO = 'todoStore';
