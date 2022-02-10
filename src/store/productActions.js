import {baseUrl} from "../Constants";
import {setInitialState} from "./productsSlice";

export const fetchData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(baseUrl);
            console.log(response)
            if (!response.ok) {
                throw new Error('ERROR');
            }
            return await response.json();
        };
        try {
            const products = await fetchData();
            console.log(products)
            dispatch(setInitialState(products))
        } catch (e) {
            throw new Error(e)
        }
    }
}