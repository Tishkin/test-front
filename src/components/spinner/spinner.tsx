import React from "react";
import './spinner.scss'

const Spinner:React.FC = () => {
    return (
        <div className={'spinner'}>
            <div>...Loading</div>
        </div>
    )
};

export default Spinner;
