import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_live_51MUZF3SCmWimpIsuyismAak1Ij6vNwQ86jxL4xR3uXVRs0XaFqj8KEF2ie8F8uT5q0DmUywyYu9wvfojKQF83Ie100Sn5MWoA1');
    }
    return stripePromise;
};

export default getStripe;