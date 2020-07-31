import React from "react";

import './cards.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers/root-reducer";
import CardItem from "../card-item";
import Spinner from "../spinner";

const Cards: React.FC = () => {
    const {cards, isLoading} = useSelector((state: RootState) => state.cards);

    if (isLoading) {
        debugger;
        return <Spinner/>
    }

    return (
        <div className={'cards'}>
            {cards.map((card) => <CardItem key={card.id} card={card}/>)}
        </div>
    )
};

export default Cards
