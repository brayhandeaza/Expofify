const initialState = {
    isHome: true,
    isSearch: false,
    isLibrary: false,
    isPremium: false
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case "isHome":
            return Object.assign({},state, {
                isHome: true,
                isSearch: false,
                isLibrary: false,
                isPremium: false
            })
        case "isSearch":
            return Object.assign({},state, {
                isHome: false,
                isSearch: true,
                isLibrary: false,
                isPremium: false
            })
        case "isLibrary":
            return Object.assign({},state, {
                isHome: false,
                isSearch: false,
                isLibrary: true,
                isPremium: false
            })
        case "isPremium":
            return Object.assign({},state, {
                isHome: false,
                isSearch: false,
                isLibrary: false,
                isPremium: true
            })
        default:
            return state
            
    }
}