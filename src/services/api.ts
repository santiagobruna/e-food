import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Product = {
    id: number
    price: number
}

type PurchaseResponse = {
    orderId: string;
    message: string;
};

type PurchasePayload = {
    products: Product[],
    delivery: {
    receiver: string;
    address: {
        description: string;
        city: string;
        zipCode: string;
        number: number;
        complement: string;
    };
    };
    payment: {
        card: {
            name: string;
            number: string;
            code: number;
        expires: {
            month: number;
            year: number;
    };
    };
};
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/',
    }),
    endpoints: (builder) => ({
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
        query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
    }),
    }),
    }),
});

export const { usePurchaseMutation } = api;
