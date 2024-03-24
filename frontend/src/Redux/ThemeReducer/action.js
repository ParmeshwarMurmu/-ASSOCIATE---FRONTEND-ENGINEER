

export const DARK_THEME = 'DARK_THEME'
export const LIGHT_THEME = 'LIGHT_THEME'

export const darkThemeAction  = (payload)=>{
    return { type: DARK_THEME, payload}
}

export const lightThemeAction  = (payload)=>{
    return { type: LIGHT_THEME, payload}
}