import {
    IIsCheckedName,
    SET_IS_CLEAR_FILTERS,
    SET_NAME_CHECKED_CHECKBOX,
    SET_NAME_CHECKED_INITIAL,
    ToolsState,
    TypesTools
} from "../all-actions/tools/types/types-tools";


const initialState: ToolsState = {
    checkboxNames: [
        {
            id: 1,
            data: [
                {id: 1, label: 'Canon'},
                {id: 2, label: 'Fujifilm'},
                {id: 3, label: 'Nikon'},
                {id: 4, label: 'Panasonic'},
                {id: 5, label: 'Leica'}]
        },
        {
            id: 2,
            data: [
                {id: 1, label: 'Olympus'},
                {id: 2, label: 'Pentax'},
                {id: 3, label: 'Sigma'},
                {id: 4,label: 'Geleral Electrics'},
                {id: 5, label: 'Zenit'}]
        }
    ],
    checkedNames: [],
    isClearFilters: true

};

const checkedNamesUpdate = (checkedNames: string[], {name, isChecked}: IIsCheckedName): string[] => {

    const id: any = checkedNames.findIndex((item) => item === name);
    if (isChecked === -1) {
        return [
            ...checkedNames.slice(0, id),
            ...checkedNames.slice(id + 1)
        ]
    }

    return [
        ...checkedNames,
        name
    ]

};


export const toolsReducer = (state = initialState, action: TypesTools): ToolsState => {

    switch (action.type) {
        case SET_NAME_CHECKED_INITIAL: {
            return {
                ...state,
                checkedNames: initialState.checkedNames,
            }
        }
        case SET_NAME_CHECKED_CHECKBOX: {
            return {
                ...state,
                checkedNames: checkedNamesUpdate(state.checkedNames, action.payload),
            }
        }
        case SET_IS_CLEAR_FILTERS: {
            return {
                ...state,
                isClearFilters: action.payload
            }
        }
        default:
            return state;
    }
};
