import { LG, MOD } from '../constants/actionTypes'
import lang from '../lang'

// eslint-disable-next-line
export default (state = { lg: localStorage.getItem('lg') || "lg", dark: localStorage.getItem('dark') === "true" ? true : localStorage.getItem('dark') === "false" ? false : null }, action) => {
    switch (action.type) {
        case LG:
            localStorage.setItem('lg', action.lg)
            document.body.dir = action.lg === "ar" ? "rtl" : "ltr"
            return {...state, lg: action.lg }
        case MOD:
            if (action.dark === "reverse") {
                localStorage.setItem('dark', !state.dark)
                return {...state, dark: !state.dark }
            }
            return state
        /* case "lg&mod":
            localStorage.setItem('dark', action.dark)
            localStorage.setItem('lg', action.lg)
            document.body.dir = action.lg === "ar" ? "rtl" : "ltr"
            return { lg: action.lg, dark: action.dark } */
        default:
            if (state.dark === null) state.dark = window.matchMedia('(prefers-color-scheme: dark)').matches
            if (state.lg === "lg") {
                const lgs = navigator.languages;
                var nlg
                for (const lg of lgs) {
                    nlg = lang.lg_supported.find(value => value[0] === lg[0] && value[1] === lg[1])
                    if (nlg) break;
                }
                state.lg = nlg ?? "en"
            }
            return state
    }
}