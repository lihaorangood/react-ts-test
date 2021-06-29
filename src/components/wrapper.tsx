import React, {useEffect} from "react";
import {useStores} from "../stores/use-store";
import {observer} from "mobx-react";
import Demo1 from "./Demo1";

const Wrapper = observer(() => {
    const {TodoStore} = useStores()

    useEffect(() => {
        console.log(TodoStore.count, 'TodoStore.count')
        if(TodoStore.count==2){
            TodoStore.setStatus()
        }
    }, [TodoStore.count])
    return <div className='wrapper'>
        <div>{TodoStore.count}</div>
        <Demo1/>
    </div>
})
export default Wrapper
