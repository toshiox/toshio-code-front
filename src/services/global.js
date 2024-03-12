const _apiLocalUrl = `https://code-ruby-d09fcda02656.herokuapp.com/`;

export async function get(route) {
    try {
        const response = await fetch(`${_apiLocalUrl}${route}`);
        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erro na chamada da API:', error.message);
        throw error;
    }
}

export const apiCallers = {
    get
};