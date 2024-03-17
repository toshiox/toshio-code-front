import { apiRedis } from './redis'
import { apiCallers } from './global'

export async function getHome(selectedLanguage){
    let result = await apiRedis.listAllArticles(selectedLanguage);
    if(result === undefined || result.length === 0){
        result = (await apiCallers.get(`api/article/${selectedLanguage}`)).data;
    }
    return result;
}

export async function getById(id){
    let result = await apiRedis.getById(id);
    return result;
}

export async function getAllArticles(){
    let result = await apiCallers.get('api/article/en');
    return result;
}

export const articlesSevice = {
    getHome,
    getById,
    getAllArticles
}