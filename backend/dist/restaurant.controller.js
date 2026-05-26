"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantController = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("./supabase.service");
let RestaurantController = class RestaurantController {
    supabaseService;
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
    }
    async getRestaurants(vegOnly, search) {
        const supabase = this.supabaseService.getClient();
        let query = supabase.from('restaurants').select('*');
        if (vegOnly === 'true') {
            query = query.eq('is_veg', true);
        }
        if (search) {
            query = query.ilike('name', `%${search}%`);
        }
        const { data, error } = await query;
        if (error) {
            throw new Error(`Failed to fetch restaurants: ${error.message}`);
        }
        return data;
    }
    async getRestaurantById(id) {
        const supabase = this.supabaseService.getClient();
        const { data, error } = await supabase
            .from('restaurants')
            .select('*')
            .eq('id', parseInt(id))
            .single();
        if (error) {
            throw new Error(`Failed to fetch restaurant: ${error.message}`);
        }
        return data;
    }
    async getRestaurantMenu(id) {
        const supabase = this.supabaseService.getClient();
        const { data, error } = await supabase
            .from('menu_items')
            .select('*')
            .eq('restaurant_id', parseInt(id));
        if (error) {
            throw new Error(`Failed to fetch menu items: ${error.message}`);
        }
        return data;
    }
};
exports.RestaurantController = RestaurantController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('vegOnly')),
    __param(1, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getRestaurants", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getRestaurantById", null);
__decorate([
    (0, common_1.Get)(':id/menu'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getRestaurantMenu", null);
exports.RestaurantController = RestaurantController = __decorate([
    (0, common_1.Controller)('restaurants'),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], RestaurantController);
//# sourceMappingURL=restaurant.controller.js.map