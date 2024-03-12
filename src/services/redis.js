import { apiCallers } from './global';

export async function listAllArticles(selectedLanguage){
    return await apiCallers.get(`api/redis/articles/${selectedLanguage}`);
}

export async function getById(id){
    return await apiCallers.get(`api/redis/${id}`);
}

export const apiRedis = {
    listAllArticles,
    getById
};