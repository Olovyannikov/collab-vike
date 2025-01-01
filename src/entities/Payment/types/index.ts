export interface PurchasedReportRequest {
    email: string;
    promo_code?: string;
    mbti_type?: string;
    survey_result?: string;
}

export type OrderStatus = 'pending' | 'paid' | 'canceled_by_user' | 'cancelled';

export interface Order {
    id: string;
    payment: null;
    status: OrderStatus;
    user_report: string;
}

export interface SurveysInfoResponse {
    user_orders: Order[];
}
