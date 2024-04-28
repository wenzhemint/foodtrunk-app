import axios from 'axios'
import http from './http'

const getAllFacilities = async (page?: number) => {
    let currentPage = 1
    if(typeof(page)!=='undefined') {
        currentPage = page
    }
    const res = await http.get(`/facilities?page=${currentPage}`)
    console.log("== res: ", res);
    return res
};

export {
    getAllFacilities
}