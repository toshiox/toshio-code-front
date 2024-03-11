import { apiCallers } from './global';
const _apiRedisUrl = 'https://code-ruby-d09fcda02656.herokuapp.com/';

export async function listAllArticles(selectedLanguage){
    return await apiCallers.get(`${_apiRedisUrl}api/redis/articles/${selectedLanguage}`, false);
}

export const apiRedis = {
    listAllArticles
};