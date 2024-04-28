import axios from 'axios'
import http from './http'

const getAllFacilities = async (page?: number, filter?: string) => {
    let query = `?page=${typeof(page)!=='undefined'?page:1}`
    if(typeof(filter)!=='undefined' || filter!=='') {
        query += `&filter=${filter}`
    }
    const res = await http.get(`/facilities${query}`)
    console.log("== res: ", res);
    return res
};

export {
    getAllFacilities
}