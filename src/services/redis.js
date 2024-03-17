import { apiCallers } from './global';

export async function listAllArticles(selectedLanguage){
    return await apiCallers.get(`api/redis/articles/${selectedLanguage}`);
}

export async function getById(id){
    return await apiCallers.get(`api/redis/${id}`);
}

export async function dispose(){
    await apiCallers.get(`api/redis/cleanMemory`);
}

export const apiRedis = {
    listAllArticles,
    getById,
    dispose
};