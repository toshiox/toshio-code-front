// const _apiLocalUrl = `http://localhost:3040/`;
const _apiLocalUrl = `https://linux.brazilsouth.cloudapp.azure.com/`;

export async function get(route) {
    try {
        const response = await fetch(`${_apiLocalUrl}${route}`);
        if (!response.ok) 
            throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error('Erro na chamada da API:', error.message);
        throw error;
    }
}

export async function put(route, data) {
    try {
        let options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(`${_apiLocalUrl}${route}`, options);
        if (!response.ok) 
            throw new Error('Erro ao fazer requisição PUT: ' + response.statusText);
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const apiCallers = {
    get,
    put
};