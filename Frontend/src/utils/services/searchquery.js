import axios from "axios";
import { BASE_URL } from "../config";
import { API_ENDPOINTS } from "../constant";

export const getSearchedRooms = async ([searchPaylaod]) => {
    let config = {
        method: "get",
        // url: API_ENDPOINTS?.BASE_URL_SEARCH_ROOMS
        url: `${BASE_URL}/api/room`,
        params: {...searchPaylaod}
    };
    try {
        const response = await axios( config );
        return response;
    } catch ( error ) {
        console.error( error );
        throw error.response.data;
    }
};