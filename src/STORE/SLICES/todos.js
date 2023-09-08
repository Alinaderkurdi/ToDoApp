import { createSlice } from '@reduxjs/toolkit';



const todosState = {
    myDay : {
        myDayToDo : [],
        toDoOnmyDay : 0
    },
    importent: {
        importentToDo: [],
        toDoOnImportent : 0
    },
    work: {
        workToDo : [],
        toDoOnWork : 0
    },
    riminder: {
        riminderToDo : [],
        todoOnRiminder : 0
    },
    tasks: {
        taskToDo : [],
        todoOnTasks : 0,
    },
    planned : {
        plannedToDo : [],
        todoOnPlanned : 0
    },
    assignedToMe:{
        assignedToMeToDo : [],
        todoOnAssigned : 0
    }
}


const todosSlice = createSlice({
    name : 'todo-s',
    initialState: todosState,
    reducers : {
        addToDo: (state, action)=>{
            //get diffrent key and peroperty name from payload and add to array based on page 
            // ie : state.[keyName resived from action payload][peropertyName resived from action payload]
          // console.log(action.payload.todos)
           state[action.payload.objectKey][action.payload.todos].splice(0,0,action.payload) 
           state[action.payload.objectKey][action.payload.counter] = state[action.payload.objectKey][action.payload.counter] +1
        },
        removeToDo(state,action){
          //state.key  ie: state.myDay //value ie: state.myDay.myDayToDo
          // console.log(object, objectValue , counterPeroperty)
          const object = action.payload.objectKey
          const objectValue = action.payload.todos
          const counterPeroperty = action.payload.counter
          state[object][counterPeroperty] = state[object][counterPeroperty] -1
          state[object][objectValue] = state[object][objectValue].filter((todos)=>{
              return todos.todoValue.key !== action.payload.todoId
          })
        },
        removeAllToDo(state, action){
           // console.log(action.payload.objectKey , action.payload.counter, action.payload.todos)
            const objectKey = action.payload.objectKey
            const counterKey  = action.payload.counter
            const peropertyName = action.payload.todos
            state[objectKey][counterKey] = 0
            state[objectKey][ peropertyName] = state[objectKey][ peropertyName].filter((todos)=>{
                return todos.todoValue.key === ''
            })
        }
    }
})


export const ToDoActions =  todosSlice.actions;
export default todosSlice.reducer;