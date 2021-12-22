export declare class ServiceManagerConfig {
    get url(): string;
}
export declare const MU_PHALCON_CLIENT = "MU_PHALCON_CLIENT";
export declare const MU_PHALCON_CLIENT_FACTORY: {
    provide: string;
    useFactory: (config: ServiceManagerConfig) => any;
    inject: (typeof ServiceManagerConfig)[];
};
