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
    return await apiRedis.getById(id);
}

export async function getAllArticles(){
    return await apiCallers.get('api/article/en');
}

export async function putArticle(content) {
    return await apiCallers.put(`api/article`, content);
}

export async function putArticleContent(content) {
    console.log(content)
    const response = await apiCallers.put(`api/articleContent`, content);
    // await apiRedis.dispose();
    return response.data;
}

export const articlesSevice = {
    getHome,
    getById,
    getAllArticles,

    putArticle,
    putArticleContent
}