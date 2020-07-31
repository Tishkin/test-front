import {Service} from "../../../../services/servies";

export const SET_FRONT_API_SERVICES = 'SET_API_SERVICES';

export interface ServicesState {
    instanceService: Service | null,
}

interface ISetInstanceService {
    type: typeof SET_FRONT_API_SERVICES,
    payload: Service,
}



export type  TypesServices = ISetInstanceService;
