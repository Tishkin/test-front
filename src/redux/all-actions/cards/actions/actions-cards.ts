import {
    Cards,
    GET_CARDS_FROM_SERVER,
    IFavoriteCard,
    SET_IS_FAV_TO_CARD,
    SPINNER_HIDE,
    SPINNER_SHOW,
    TypesCards
} from "../types/types-cards";
import {ThunkDispatch} from "redux-thunk";
import {Service} from "../../../../services/servies";


export const getCardsFromServer = (payload: Cards): TypesCards => {
    return {
        type: GET_CARDS_FROM_SERVER,
        payload: payload
    }
};

export const setIsFavToCard = (payload: IFavoriteCard): TypesCards => {
    return {
        type: SET_IS_FAV_TO_CARD,
        payload: payload
    }
};

export const spinnerShow = (): TypesCards => {
    return {
        type: SPINNER_SHOW,
    }
};

export const spinnerHide = (): TypesCards => {
    return {
        type: SPINNER_HIDE,
    }
};

export const getCards = (instance: Service) => {
    return async (dispatch: ThunkDispatch<{}, {}, any>) => {
        try {
            dispatch(spinnerShow());
            instance.getAllProducts()
                .then((data) => {
                    const {data: {products}} = data;
                    debugger;
                    dispatch(getCardsFromServer(products));
                    dispatch(spinnerHide());
                })


        } catch (e) {
            console.log(e);
        }

    }
};

export const getFilterCards = (instance: Service, filters: string[]) => {
    return async (dispatch: ThunkDispatch<{}, {}, any>) => {
        try {
            dispatch(spinnerShow());
            instance.getProductToFiltersSuccess(filters)
                .then((data) => {
                    const {data: {products}} = data;
                    debugger;
                    dispatch(getCardsFromServer(products));
                    dispatch(spinnerHide());
                })


        } catch (e) {
            instance.getProductToFiltersFail(filters)
                .then(({data: {message}}) => {
                    console.log(`${e} ${message}`)
                })
        }

    }
};

export const setCardToFavorites = (instance: Service, id: number | string) => {
    return async (dispatch: ThunkDispatch<{}, {}, any>) => {
        try {
            dispatch(spinnerShow());
            instance.setProductToFavoritesSuccess(id)
                .then(({data: {inFav}}) => {
                    dispatch(setIsFavToCard({id: id, inFav: inFav}));
                    dispatch(spinnerHide());
                });


        } catch (e) {
            instance.setProductToFavoritesFail(id)
                .then(({data: {message}}) => {
                    console.log(`${e} ${message}`)
                })
        }

    }
};

