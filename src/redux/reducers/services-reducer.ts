import {
    ServicesState,
    SET_FRONT_API_SERVICES,
    TypesServices,
} from "../all-actions/services/types/types-services";


const initialState: ServicesState = {
    instanceService: null,

};

export const servicesReducer = (state = initialState, action: TypesServices): ServicesState => {

    switch (action.type) {
        case SET_FRONT_API_SERVICES:
            return {
                ...state,
                instanceService: action.payload
            };
        default:
            return state;
    }
};
