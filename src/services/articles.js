import { apiRedis } from './redis'
import { apiCallers} from './global'

export async function getHome(selectedLanguage){
    let result = await apiRedis.listAllArticles(selectedLanguage);
    if(result === undefined || result.length === 0){
        result = (await apiCallers.get(`api/article/${selectedLanguage}`)).data;
    }
    console.log(result);
    return result;
}

export const articlesSevice = {
    getHome
}