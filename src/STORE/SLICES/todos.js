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
            state[action.payload.objectKey][action.payload.todos].splice(0,0,action.payload) 
           state[action.payload.objectKey][action.payload.counter] = state[action.payload.objectKey][action.payload.counter] +1
        },
        
    }
})


export const ToDoActions =  todosSlice.actions;
export default todosSlice.reducer;