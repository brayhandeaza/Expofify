const initialState = {
    isPlayer: false
}


export default (state = initialState, actions) => {
        switch (actions.type) {
            case "isPlayer":
                return Object.assign({}, state, {
                    isPlayer: true
                })
            case "isNotPlayer":
                return Object.assign({}, state, {
                    isPlayer: false
                })
            default:
                return state
        }
}