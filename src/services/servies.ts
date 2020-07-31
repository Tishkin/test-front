import axios from 'axios';


export class Service {

    _apiBase = 'https://my-json-server.typicode.com/aero-frontend/test-task';
    _allProducts = '/PRODUCTS_SUCCESS';
    _favoriteSuccess ='/FAVORITE_SUCCESS';
    _favoriteFail ='/FAVORITE_FAIL';
    _filterSuccess ='/FILTER_SUCCESS';
    _filterFail ='/FILTER_FAIL';
    _appJSON = 'application/json';
    _formData = 'multipart/form-data';

    getResourcePost = async (apiBase: string, url: string, body: any, contentType: string, loaded?: any) => {
        const res = await axios.post(`${apiBase}${url}`, body,
            {
                onUploadProgress: loaded,
                headers: {
                    'content-type': contentType
                }
            });
        return res.data;
    };

    getResourceGet = async (apiBase: string, url: string) => {
        const res = await axios.get(`${apiBase}${url}`);
        return res.data;
    };

    getAllProducts = async () => await this.getResourceGet(this._apiBase, this._allProducts);

    setProductToFavoritesSuccess = async (id:number|string) => await this.getResourceGet(this._apiBase, this._favoriteSuccess+`?productID=${id}`);

    setProductToFavoritesFail = async (id:number|string) => await this.getResourceGet(this._apiBase, this._favoriteFail+`?productID=${id}`);

    getProductToFiltersSuccess = async (filters:string[]) => await this.getResourceGet(this._apiBase, this._filterSuccess+`?filters=${filters}`);

    getProductToFiltersFail = async (filters:string[]) => await this.getResourceGet(this._apiBase, this._filterFail+`?filters=${filters}`);




}
