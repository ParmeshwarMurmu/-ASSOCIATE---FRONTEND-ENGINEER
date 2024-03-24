import { DARK_THEME, LIGHT_THEME } from "./action";


const initialState = {
    theme: 'darkTheme'
}

export const reducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case DARK_THEME:
            return {
                theme: payload
            }

            case LIGHT_THEME: 
            return {
                theme: payload
            }
    
        default:
            return {
                ...initialState
            }
    }
}