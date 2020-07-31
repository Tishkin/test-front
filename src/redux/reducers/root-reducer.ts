import {combineReducers} from "redux";
import {cardsReducer} from "./cards-reducer";
import {servicesReducer} from "./services-reducer";
import {toolsReducer} from "./tools-reducer";


export const rootReducer = combineReducers({
    cards: cardsReducer,
    services: servicesReducer,
    tools:toolsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
