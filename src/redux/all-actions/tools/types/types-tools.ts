export const SET_NAME_CHECKED_CHECKBOX = 'SET_NAME_CHECKED_CHECKBOX';
export const SET_NAME_CHECKED_INITIAL = 'SET_NAME_CHECKED_INITIAL';
export const SET_IS_CLEAR_FILTERS = 'SET_IS_CLEAR_FILTERS';

interface ILabelCheckbox {
    id: number,
    label: string
}

interface ICheckboxes {
    id: number,
    data:ILabelCheckbox[]
}


export interface ToolsState {
    checkboxNames: ICheckboxes[],
    checkedNames: string[],
    isClearFilters: boolean

}

export interface IIsCheckedName {
    name: string,
    isChecked: 1 | -1
}

interface IGetNameCheckedCheckbox {
    type: typeof SET_NAME_CHECKED_CHECKBOX,
    payload: IIsCheckedName
}

interface ISetNameCheckedInitial {
    type: typeof SET_NAME_CHECKED_INITIAL
}

interface ISetIsClearFilters {
    type: typeof SET_IS_CLEAR_FILTERS,
    payload: boolean
}

export type TypesTools = IGetNameCheckedCheckbox | ISetNameCheckedInitial | ISetIsClearFilters
