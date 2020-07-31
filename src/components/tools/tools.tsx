import React from "react";
import './tools.scss'
import Checkbox from "../checkbox";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers/root-reducer";
import {setIsClearFilters, setNameCheckboxInitial} from "../../redux/all-actions/tools/actions/actions-tools";
import {getFilterCards} from "../../redux/all-actions/cards/actions/actions-cards";

const Tools: React.FC = () => {
    const dispatch = useDispatch();
    const {isClearFilters, checkedNames, checkboxNames} = useSelector((state: RootState) => state.tools);
    const instance = useSelector((state: RootState) => state.services.instanceService);
    const handleClickClearFilters = () => {
        dispatch(setIsClearFilters(false));
        dispatch(setNameCheckboxInitial())
    };

    const handleClickShowResult = () => {
        debugger;
        if (instance) {
            dispatch(getFilterCards(instance, checkedNames))
        }
    };

    return (
        <div className={'tools col'}>
            <div className={'tools__btn__container'}>
                <button onClick={handleClickShowResult} className={'tools__btn btn__result'}>Показать результат</button>
                <button onClick={handleClickClearFilters} className={'tools__btn btn__sweep'}>Очистить фильтр</button>
            </div>
            <div className={'tools_filter'}>
                <span>Производитель</span>
                <div className={'tools_filter__checkboxes'}>
                    {checkboxNames.map(({id,data}) => (
                            <div key={id} className={'tools_filter__group_checkbox'}>
                                {data.map((item) => <Checkbox key={item.id} checkboxName={item.label}
                                                              isClearFilters={isClearFilters}/>)}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
};

export default Tools
