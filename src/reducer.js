export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing...
    // token:'BQAsVnnoAPepPPrDN4Ew8HhjO6Qpn--sRgyCWtwO0Sgx07_5oz…pYsDxy3-6bMbgO0-JFaEaXl_mWYMTD5ubbbwxgEaDI8DDnOFw'
}

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          };
        case "SET_TOKEN":
            return {
                ...state,   
                user: action.user,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };


        default:
            return state;
    }
    
}


export default reducer;