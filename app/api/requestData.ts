import Api from '../constants/Api';

type RequestData = <DataType>(
    apiPath: string,
    init?: RequestInit,
    apiBase?: string,
) => Promise<DataType>;

export const requestData: RequestData = async (apiPath, init, apiBase = Api.API_BASE_URL) => {
    const response = await fetch(`${apiBase}${apiPath}`, init);
    const responseBody = await response.json();

    if (response.status === 200) {
        return responseBody;
    }

    throw responseBody;
};

export default requestData;
