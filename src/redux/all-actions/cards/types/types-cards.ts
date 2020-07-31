export const GET_CARDS_FROM_SERVER = 'GET_CARDS_FROM_SERVER';
export const SET_IS_FAV_TO_CARD = 'SET_IS_FAV_TO_CARD';
export const SPINNER_SHOW = 'SPINNER_SHOW';
export const SPINNER_HIDE = 'SPINNER_HIDE';

export interface CardsState {
    cards: Cards,
    isLoading: boolean
}

export interface ICard {
    id: number | string,
    link: string,
    code: number | string,
    imgUrl: string,
    availability: boolean,
    title: string,
    params: ParamsCard[],
    inFav: boolean,
    inComparsion: boolean
}

export type Cards = ICard[];

export interface ParamsCard {
    name: string,
    value: string
}

export interface IFavoriteCard {
    id: number | string,
    inFav: boolean
}

interface ISetCardsFromServer {
    type: typeof GET_CARDS_FROM_SERVER,
    payload: Cards
}

interface ISetIsFavFromCard {
    type: typeof SET_IS_FAV_TO_CARD,
    payload: IFavoriteCard
}

interface ISetIsSpinner {
    type: typeof SPINNER_SHOW | typeof SPINNER_HIDE
}


export type  TypesCards = ISetCardsFromServer | ISetIsFavFromCard | ISetIsSpinner;
