"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceManagerModule = void 0;
const common_1 = require("@nestjs/common");
const common_service_1 = require("../common/core/common.service");
const oauth_api_provider_1 = require("../common/infrastructure/providers/oauth-api.provider");
const service_manager_controller_1 = require("./controller/service-manager.controller");
const service_manager_service_1 = require("./core/service-manager.service");
const core_api_provider_1 = require("./infrastructure/providers/core-api.provider");
const service_manager_config_1 = require("./service-manager.config");
let ServiceManagerModule = class ServiceManagerModule {
};
ServiceManagerModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule],
        controllers: [service_manager_controller_1.ServiceManagerController],
        providers: [
            service_manager_service_1.ServiceManagerService,
            common_service_1.CommonService,
            { provide: 'IOauthApi', useClass: oauth_api_provider_1.OauthApiProvider },
            { provide: 'ICoreApi', useClass: core_api_provider_1.CoreApiProvider },
            service_manager_config_1.MU_PHALCON_CLIENT_FACTORY,
            service_manager_config_1.ServiceManagerConfig,
        ],
    })
], ServiceManagerModule);
exports.ServiceManagerModule = ServiceManagerModule;
//# sourceMappingURL=service-manager.module.js.map