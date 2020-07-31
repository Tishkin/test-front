import {
    Cards,
    CardsState,
    GET_CARDS_FROM_SERVER,
    ICard,
    IFavoriteCard,
    SET_IS_FAV_TO_CARD,
    SPINNER_HIDE,
    SPINNER_SHOW,
    TypesCards,
} from "../all-actions/cards/types/types-cards";


const initialState: CardsState = {
    cards: [],
    isLoading: false
};

const cardsUpdate = (cards: Cards, {inFav, id}: IFavoriteCard): Cards => {

    const card: any = cards.find((item) => item.id === id);
    const idx: any = cards.findIndex((item) => item.id === id);
    debugger;

    const newCard: ICard = {
        ...card,
        inFav: inFav,
    };

    return [
        ...cards.slice(0, Number(idx)),
        newCard,
        ...cards.slice(Number(idx) + 1)
    ]
};

export const cardsReducer = (state = initialState, action: TypesCards): CardsState => {

    switch (action.type) {
        case GET_CARDS_FROM_SERVER:
            return {
                ...state,
                cards: action.payload
            };
        case SET_IS_FAV_TO_CARD:
            return {
                ...state,
                cards: cardsUpdate(state.cards, action.payload)
            };
        case SPINNER_HIDE:
            return {
                ...state,
                isLoading: false
            };
        case SPINNER_SHOW:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
};
