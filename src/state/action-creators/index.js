export const depositMoney = (amount) => {
    return (dispatch) => {  //comes from useDispatch hook
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}