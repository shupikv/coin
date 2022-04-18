interface Prices {
    [key: string]: number;
}

export interface CoinDetails {
    id: string;
    symbol: string;
    name: string;
    asset_platform_id: string | null;
    platforms: {
        [key: string]: string;
    };
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories: string[];
    public_notice: string | null;
    additional_notices: string[];
    localization?: {
        [key: string]: string;
    };
    description: {
        [key: string]: string;
    };
    links: {
        homepage: string[];
        blockchain_site: string[];
        official_forum_url: string[];
        chat_url: string[];
        announcement_url: string[];
        twitter_screen_name: string;
        facebook_username: string;
        bitcointalk_thread_identifier: number | null;
        telegram_channel_identifier: string;
        subreddit_url: string;
        repos_url: {
            github: string[];
            bitbucket: string[];
        };
    };
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    country_origin: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    market_cap_rank: number;
    coingecko_rank: number;
    coingecko_score: number;
    developer_score: number;
    community_score: number;
    liquidity_score: number;
    public_interest_score: number;
    market_data?: {
        current_price: {
            [key: string]: number;
        };
        total_value_locked: number | null;
        mcap_to_tvl_ratio: number | null;
        fdv_to_tvl_ratio: number | null;
        roi: {
            times: number;
            currency: string;
            percentage: number;
        } | null;
        ath: {
            [key: string]: number;
        };
        ath_change_percentage: Prices;
        ath_date: {
            [key: string]: string;
        };
        atl: Prices;
        atl_change_percentage: Prices;
        atl_date: {
            [key: string]: string;
        };
        market_cap: Prices;
        market_cap_rank: number;
        fully_diluted_valuation: Prices;
        total_volume: Prices;
        high_24h: Prices;
        low_24h: Prices;
        price_change_24h: number;
        price_change_percentage_24h: number;
        price_change_percentage_7d: number;
        price_change_percentage_14d: number;
        price_change_percentage_30d: number;
        price_change_percentage_60d: number;
        price_change_percentage_200d: number;
        price_change_percentage_1y: number;
        market_cap_change_24h: number;
        market_cap_change_percentage_24h: number;
        price_change_24h_in_currency: Prices;
        price_change_percentage_1h_in_currency: Prices;
        price_change_percentage_24h_in_currency: Prices;
        price_change_percentage_7d_in_currency: Prices;
        price_change_percentage_14d_in_currency: Prices;
        price_change_percentage_30d_in_currency: Prices;
        price_change_percentage_60d_in_currency: Prices;
        price_change_percentage_200d_in_currency: Prices;
        price_change_percentage_1y_in_currency: Prices;
        market_cap_change_24h_in_currency: Prices;
        market_cap_change_percentage_24h_in_currency: Prices;
        total_supply: number | null;
        max_supply: number | null;
        circulating_supply: number;
        sparkline_7d?: {
            price: number[];
        };
        last_updated: string;
    };
    ico_data?: {
        [key: string]: any;
    };
    public_interest_stats: {
        alexa_rank: number;
        bing_matches: null;
    };
    status_updates: [];
    last_updated: string;
}
