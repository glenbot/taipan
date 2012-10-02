// Port entity

ig.Entity.extend({
    name: '', // string
    supply_commodities: {}, // object of Commodity: Amount
    demand_commodities: {}, // object of Commodity: Amount
    base_price_modifier: 0.0,
    supply_price_modifier: 0.0,
    supply_production_rate: 0,
    demand_price_modifier: 0.0,
    demand_consumption_rate: 0,
    robbery_modifier: 0.0,
    syndicates: [], // array of Syndicate instances
    can_warehouse: false,
    warehouse: null,
    base_warehouse_theft_modifier: 0.0,
    can_bank: false,
    can_repair: false,
    can_borrow: false,
    can_buy_ship: false,
    can_sell_ship: false
});

