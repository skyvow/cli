export declare const defaults: () => Options;
/**
 * Dora config
 *
 * @export
 * @interface Options
 */
export interface Options {
    entry?: string[];
    outputDir?: string;
    copyPlugin?: {
        entry?: string[];
    };
    cssPlugin?: {
        entry?: string[];
    };
    pxTransform?: PxTransform;
    devServer?: DevServer;
}
/**
 * px transform options
 *
 * @export
 * @interface PxTransform
 */
export interface PxTransform {
    designWidth: number;
    deviceRatio: {
        [key: string]: number;
    };
    unit: string;
    replaceUnit: string;
    unitPrecision: number;
    onePxTransform: boolean;
}
/**
 * miniprogram ci options
 *
 * @export
 * @interface DevServer
 */
export interface DevServer {
    entry?: string;
    host?: string;
    port?: number;
    https?: boolean;
    open?: boolean;
}
