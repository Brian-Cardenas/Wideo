"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MU_PHALCON_CLIENT_FACTORY = exports.MU_PHALCON_CLIENT = exports.ServiceManagerConfig = void 0;
const common_1 = require("@nestjs/common");
const http_1 = require("../../libs/http");
let ServiceManagerConfig = class ServiceManagerConfig {
    get url() {
        return process.env.MU_PHALCON_URL;
    }
};
ServiceManagerConfig = __decorate([
    common_1.Injectable()
], ServiceManagerConfig);
exports.ServiceManagerConfig = ServiceManagerConfig;
exports.MU_PHALCON_CLIENT = 'MU_PHALCON_CLIENT';
exports.MU_PHALCON_CLIENT_FACTORY = {
    provide: exports.MU_PHALCON_CLIENT,
    useFactory: (config) => {
        return http_1.HttpUtils.createAxiosClient({
            baseURL: config.url,
            timeout: 2000000,
        });
    },
    inject: [ServiceManagerConfig],
};
//# sourceMappingURL=service-manager.config.js.map