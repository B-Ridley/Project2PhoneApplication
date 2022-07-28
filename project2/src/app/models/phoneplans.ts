export class Phoneplans {
    plan_id: number;
    plan_name: string;
    plan_image: string; 
    plan_price: number;
    plan_type: string;
    device_limit: number;
    price_month: string;

    constructor(plan_id: number, plan_name = '', plan_image = '', plan_price = 0, plan_type = '', device_limit: number, price_month = '') {
        this.plan_id = plan_id
        this.plan_name = plan_name
        this.plan_image = plan_image
        this.plan_price = plan_price 
        this.plan_type = plan_type
        this.device_limit = device_limit
        this.price_month = price_month


    }
}
