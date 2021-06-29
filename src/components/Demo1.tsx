import React, {useEffect} from "react";
import {useStores} from "../stores/use-store";
import {observer} from "mobx-react";

const Demo1 = observer(() => {
    const {TodoStore} = useStores()
    useEffect(() => {
        console.log(TodoStore.status, 'status')
    }, [TodoStore.status])
    return <button onClick={() => {
        TodoStore.setCount()
    }
    }>click</button>
})
export default Demo1
