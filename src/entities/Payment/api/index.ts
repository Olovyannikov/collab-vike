import { createMutation, createQuery } from '@farfetched/core';

import { createInternalRequestFx } from '@/shared/api';
import { API } from '@/shared/api/contants';
import { HTTP_METHODS } from '@/shared/api/methods';

import type { PurchasedReportRequest, SurveysInfoResponse } from '../types';

export const getRegularPriceQuery = createQuery({
    effect: createInternalRequestFx<void, { regular_price: number }>(() => ({
        url: API.GET_REGULAR_PRICE,
    })),
});

export const getPriceWithPromocodeQuery = createQuery({
    effect: createInternalRequestFx<
        string,
        {
            discount: number;
            final_price: number;
            regular_price: number;
        }
    >((promocode) => ({
        url: API.GET_PROMO_PRICE(promocode),
    })),
});

export const purchaseReportMutation = createMutation({
    effect: createInternalRequestFx<
        PurchasedReportRequest,
        {
            has_paid: boolean;
            confirmation_url: string;
        }
    >((body) => ({
        url: API.PURCHASE_REPORT,
        method: HTTP_METHODS.POST,
        body,
    })),
});

export const getSurveysInfoQuery = createQuery({
    effect: createInternalRequestFx<{ id: string }, SurveysInfoResponse>((params) => ({
        url: API.SURVEYS_INFO,
        params,
    })),
});
