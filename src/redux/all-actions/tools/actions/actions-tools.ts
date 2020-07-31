import {
    IIsCheckedName,
    SET_IS_CLEAR_FILTERS,
    SET_NAME_CHECKED_CHECKBOX,
    SET_NAME_CHECKED_INITIAL,
    TypesTools
} from "../types/types-tools";
import {Service} from "../../../../services/servies";
import {ThunkDispatch} from "redux-thunk";
import {getCardsFromServer} from "../../cards/actions/actions-cards";

export const setNameCheckbox = (payload: IIsCheckedName): TypesTools => {
    return {
        type: SET_NAME_CHECKED_CHECKBOX,
        payload: payload
    }
};

export const setNameCheckboxInitial = (): TypesTools => {
    return {
        type: SET_NAME_CHECKED_INITIAL,
    }
};

export const setIsClearFilters = (payload: boolean): TypesTools => {
    return {
        type: SET_IS_CLEAR_FILTERS,
        payload: payload
    }
};

