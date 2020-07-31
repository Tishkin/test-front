import React, {useEffect} from 'react';
import './root.scss'
import './app.scss'
import Tools from "../tools";
import {useDispatch} from "react-redux";
import {Service} from "../../services/servies";
import {setInstanceService} from "../../redux/all-actions/services/actions/actions-services";
import {getCards} from "../../redux/all-actions/cards/actions/actions-cards";
import Cards from "../cards";

const App: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const instance = new Service();
        dispatch(setInstanceService(instance));
        dispatch(getCards(instance))
    }, []);

    return (
        <div className={`app`}>
            <Cards/>
            <Tools/>
        </div>
    )
};

export default App;
