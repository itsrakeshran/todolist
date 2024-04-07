export default (state, action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payLoad)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payLoad,...state.transactions]
            }
        
        default:
            return state;
    }
}



// case 'ADD_TRANSACTION':
//   return {
//     ...state,
//     transactions: [action.payload, ...state.transactions]
//   }


 // {id:state.length, text:action.payLoad.text, amount:action.payLoad.amount}