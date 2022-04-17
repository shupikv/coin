import getErrorMessage from '../helpers/getErrorMessage';
import { requestData } from './requestData';
import { Coins } from '../models';

const fetchCoins = async (): Promise<Coins> => {
    try {
        const response = await requestData<Coins>(
            '/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false',
        );
        return response;
    } catch (error) {
        throw new Error(`Can't fetch coins: ${getErrorMessage(error)}`);
    }
};

export default fetchCoins;
