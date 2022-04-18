import getErrorMessage from '../helpers/getErrorMessage';
import { requestData } from './requestData';
import { CoinDetails } from '../models';

const fetchCoinData = async (id: string): Promise<CoinDetails> => {
    try {
        const response = await requestData<CoinDetails>(
            `/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
        );
        return response;
    } catch (error) {
        throw new Error(`Can't fetch coin data: ${getErrorMessage(error)}`);
    }
};

export default fetchCoinData;
