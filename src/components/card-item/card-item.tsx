import React from "react";
import './card-item.scss'
import camera from '../../images/image-zone.png'
import check from '../../images/check.svg'
import cart from '../../images/cart.svg'
import shape from '../../images/shape.svg'
import scales from '../../images/scales-26.png'
import {ICard} from "../../redux/all-actions/cards/types/types-cards";
import {useDispatch, useSelector} from "react-redux";
import {setCardToFavorites} from "../../redux/all-actions/cards/actions/actions-cards";
import {RootState} from "../../redux/reducers/root-reducer";

interface ICardItem {
    card: ICard
}

type Props = ICardItem

const CardItem: React.FC<Props> = ({card}) => {

    const dispatch = useDispatch();
    const instance = useSelector((state: RootState) => state.services.instanceService)
    const {availability, code, id, imgUrl, params, title} = card;

    const handleClickFavorites = () => {
        if(instance){
            dispatch(setCardToFavorites(instance,id))
        }

    };

    return (
        <div className={'card'}>
            <div className={'card__article'}>
                <span>Арт. {code}</span>
            </div>
            <div className={'card__photo'}>
                <img src={camera} alt={`${imgUrl}`}/>
            </div>
            <div className={'card__availability'}>
                <img src={check} alt={'Checked'}/>
                <span
                    className={'card__availability__text'}>{availability ? 'В наличии' : 'Отсутствует'}</span>
            </div>
            <div className={'card__title'}>
                <span>{title}</span>
            </div>
            <div className={'card__description'}>
                {params.map(({value, name}, idx) => <div key={idx}>
                    <span>{name}:</span>
                    <span>{value}</span>
                </div>)}
            </div>
            <div className={'card__buttons'}>
                <button className={'card__buttons__btn'}>
                    <img src={cart} alt={'shopping car icon'}/>
                    <span>Купить</span>
                </button>
                <div className={'card__buttons__icon'}>
                    <img onClick={handleClickFavorites} style={{color: 'blue'}} src={shape} alt={'shape'}/>
                    <img src={scales} alt={'scales'}/>
                </div>
            </div>
        </div>
    )
};

export default CardItem;
