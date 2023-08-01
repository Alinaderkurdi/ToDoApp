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
      //  addToMyDay : (state,action)=>{
           // console.log(action.payload)
         // state[action.payload.objectKey].myDayToDo.splice(0,0,action.payload)
       //   state.myDay.myDayToDo.splice(0,0,action.payload)
       //   state.toDoOnmyDay = state.myDay.toDoOnmyDay +1
       // },
        //addToImportent : (state,action)=>{
        //  console.log(action.payload)
        //  //state.importent.importentToDo.splice(0,0,action.payload)
        //  //state.importent.toDoOnImportent = state.importent.toDoOnImportent +1
        //  state[action.payload.objectKey][action.payload.todos].splice(0,0,action.payload) 
        //  state[action.payload.objectKey][action.payload.counter] = state[action.payload.objectKey][action.payload.counter] +1
        //},
       // addToWork : (state, action)=>{
       //     state.work.workToDo.splice(0,0,action.payload)
       //     state.work.toDoOnWork = state.work.toDoOnWork +1
       // },
       // addToRiminder : (state, action)=>{
       //    state.riminder.riminderToDo.splice(0,0,action.payload)
       //    state.riminder.todoOnRiminder = state.riminder.todoOnRiminder +1
       // },
       // addToTasks: (state, action)=>{
       //     state.tasks.taskToDo.splice(0,0,action.payload)
       //     state.tasks.todoOnTasks = state.tasks.todoOnTasks +1
       // },
       // addToPlanned : (state, action)=>{
       //     state.planned.plannedToDo.splice(0,0,action.payload)
       //     state.planned.todoOnPlanned =state.tasks.todoOnTasks +1
       // },
       // addToAssigned : (state, action)=>{
       //     state.assignedToMe.assignedToMeToDo.splice(0,0,action.payload)
       //     state.assignedToMe.todoOnAssigned = state.assignedToMe.todoOnAssigned = +1
       // },
        addToDo: (state, action)=>{
            state[action.payload.objectKey][action.payload.todos].splice(0,0,action.payload) 
           state[action.payload.objectKey][action.payload.counter] = state[action.payload.objectKey][action.payload.counter] +1
        }
    }
})


export const ToDoActions =  todosSlice.actions;
export default todosSlice.reducer;