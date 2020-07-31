import {SET_FRONT_API_SERVICES, TypesServices} from "../types/types-services";
import {Service} from "../../../../services/servies";


export const setInstanceService = (payload: Service): TypesServices => {
    return {
        type: SET_FRONT_API_SERVICES,
        payload: payload
    }
};

