/**
 * En un reducer, la acción va a modificar el state y react va a renderiza/actualizar lo que tenga que actualizar
 */

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }

}