import { UPDATE_CRYPTO } from './crypto.types';

const initialState = {
  name: null,
  description: null,
  images: [],
  homepageUrl: null,
  currentPriceUsd: null,
  marketCapUsd: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CRYPTO:
      return {
        ...state,
        name: action.payload.name,
        description: action.payload.description.de,
        images: [action.payload.image],
        homepageUrl: action.payload.links.homepage,
        currentPriceUsd: action.payload.market_data.current_price.usd,
        marketCapUsd: action.payload.market_data.market_cap.usd
      };
    default:
      return state;
  }
};

export default reducer;
