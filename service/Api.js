class Api {
    static _GET = 'GET';
    static _POST = 'POST';
    static _PUT = 'PUT';
    static _DELETE = 'DELETE';

    async get(url) {
        const response = await fetch(url, { method: Api._GET });
        const data = response.json();
        return data;
    }
}

export default Api;
