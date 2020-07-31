import React, {useEffect, useState} from "react";
import './checkbox.scss'
import {useDispatch} from "react-redux";
import {setIsClearFilters, setNameCheckbox} from "../../redux/all-actions/tools/actions/actions-tools";

interface ICheckbox {
    checkboxName: string,
    isClearFilters?: boolean
}

type Props = ICheckbox

const Checkbox: React.FC<Props> = ({checkboxName, isClearFilters}) => {

    const [isCheck, setIsCheck] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        debugger;
        if (!isClearFilters) {

            setIsCheck(false);
        }
    }, [isClearFilters]);

    const handleClickCheckboxDiv = (event: any) => {
        debugger;
        event.preventDefault()

        if (!isClearFilters) {
            dispatch(setIsClearFilters(true));
        }
        const value = event.currentTarget.innerText;

        if (isCheck) {
            dispatch(setNameCheckbox({name: value, isChecked: -1}))
        } else {
            dispatch(setNameCheckbox({name: value, isChecked: 1}))
        }
        setIsCheck(!isCheck);
        //
    };

    return (
        <div onClick={handleClickCheckboxDiv} className={'checkbox_container'}>
            <input type="checkbox" className="custom-checkbox" id={checkboxName}
                  readOnly checked={isClearFilters ? isCheck : isClearFilters}/>
            <label htmlFor={checkboxName}>{checkboxName}</label>
        </div>
    )
};

export default Checkbox
