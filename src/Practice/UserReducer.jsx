import React, { useReducer, useState } from 'react'

const list={display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',gap:'1px'};

const initialState=[];

function reducer(state,action){
    switch(action.type){
        case 'ADD_TASK':
            if(action.payload.name !=='')
            {
                return([...state,{id:state.length, name:action.payload.name}]);
                
            }
            break;
        case 'DEL_TASK':
            console.log(action.payload);
            console.log(state)
            return(state.filter((item)=> item.id !== action.payload));
        default:
            return("");
    }
}

const TodoList = () => {
    //State
    const[currentTask,setCurrentTask]=useState('');
    const[state,dispatch]=useReducer(reducer,initialState);
    const[CompletedTask,setCompletedTask]=useState([]);


    //handle function
    function Handleinput(e){
        setCurrentTask(e.target.value);
    }

    function handleAddtask(){
        dispatch({type:'ADD_TASK',payload:{name:currentTask}});
        setCurrentTask('');
    }
    
    function handeleDeletetask(name,id){
        console.log(name,id)
        if(id !== ''){
            setCompletedTask([...CompletedTask,{id:id, name:name}]);
            dispatch({type:'DEL_TASK',payload:id});
        }        
    }


  return (
    <div>
        <h1 style={{textAlign:'center'}}>To do List:</h1>
        <div style={{display:'flex',flexDirection:'row'}}>
            <input type="text"  onChange={Handleinput} value={currentTask} />
            <button onClick={handleAddtask}> Add Task</button>
        </div>
        <hr />
        {state.length?
            <> 
                <div style={{textAlign:'center'}}>
                    Task to be done
                    <br />
                    -------------------------------------------------
                </div>        
                    {state.map((item) => {
                        return ( 
                            <div key={item.id} style={list}>
                                <li>{item.name}</li>
                                <button onClick={()=>handeleDeletetask(item.name,item.id)}>Completed</button>  
                            </div>
                    )})}
            </> :""         
        }
            {/* // Complete Task */}
            
            {
            CompletedTask.length?
                <div style={{textAlign:'center'}}>
                    -------------------------------------------------
                    <br />
                    Completed Task
                    <br />
                    -------------------------------------------------
                    {CompletedTask.map((item)=>{
                        return(
                            <div key={item.id} style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',gap:'1px'}}>


                            <s><li>{item.name}</li></s>

                            </div>
                        )})
                        }
                </div>:""
            }           
       
    </div>
  )
}
export default TodoList