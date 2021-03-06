// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IServerStatus {
    dhcp_available?: boolean;
    dns_addresses: string[];
    dns_port: number;
    http_port: number;
    language: string;
    protection_enabled: boolean;
    running: boolean;
    version: string;
}

export default class ServerStatus {
    readonly _dhcp_available: boolean | undefined;

    get dhcpAvailable(): boolean | undefined {
        return this._dhcp_available;
    }

    readonly _dns_addresses: string[];

    /**
     * Description: undefined
     * Example: 127.0.0.1
     */
    get dnsAddresses(): string[] {
        return this._dns_addresses;
    }

    static dnsAddressesValidate(dnsAddresses: string[]): boolean {
        return dnsAddresses.reduce<boolean>((result, p) => result && (typeof p === 'string' && !!p.trim()), true);
    }

    readonly _dns_port: number;

    /**
     * Description: undefined
     * Example: 53
     */
    get dnsPort(): number {
        return this._dns_port;
    }

    static get dnsPortMinValue() {
        return 1;
    }

    static get dnsPortMaxValue() {
        return 65535;
    }

    static dnsPortValidate(dnsPort: number): boolean {
        return dnsPort >= 1 && dnsPort <= 65535;
    }

    readonly _http_port: number;

    /**
     * Description: undefined
     * Example: 80
     */
    get httpPort(): number {
        return this._http_port;
    }

    static get httpPortMinValue() {
        return 1;
    }

    static get httpPortMaxValue() {
        return 65535;
    }

    static httpPortValidate(httpPort: number): boolean {
        return httpPort >= 1 && httpPort <= 65535;
    }

    readonly _language: string;

    /**
     * Description: undefined
     * Example: en
     */
    get language(): string {
        return this._language;
    }

    static languageValidate(language: string): boolean {
        return typeof language === 'string' && !!language.trim();
    }

    readonly _protection_enabled: boolean;

    get protectionEnabled(): boolean {
        return this._protection_enabled;
    }

    static protectionEnabledValidate(protectionEnabled: boolean): boolean {
        return typeof protectionEnabled === 'boolean';
    }

    readonly _running: boolean;

    get running(): boolean {
        return this._running;
    }

    static runningValidate(running: boolean): boolean {
        return typeof running === 'boolean';
    }

    readonly _version: string;

    /**
     * Description: undefined
     * Example: 0.1
     */
    get version(): string {
        return this._version;
    }

    static versionValidate(version: string): boolean {
        return typeof version === 'string' && !!version.trim();
    }

    constructor(props: IServerStatus) {
        if (typeof props.dhcp_available === 'boolean') {
            this._dhcp_available = props.dhcp_available;
        }
        this._dns_addresses = props.dns_addresses;
        this._dns_port = props.dns_port;
        this._http_port = props.http_port;
        this._language = props.language.trim();
        this._protection_enabled = props.protection_enabled;
        this._running = props.running;
        this._version = props.version.trim();
    }

    serialize(): IServerStatus {
        const data: IServerStatus = {
            dns_addresses: this._dns_addresses,
            dns_port: this._dns_port,
            http_port: this._http_port,
            language: this._language,
            protection_enabled: this._protection_enabled,
            running: this._running,
            version: this._version,
        };
        if (typeof this._dhcp_available !== 'undefined') {
            data.dhcp_available = this._dhcp_available;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            dns_addresses: this._dns_addresses.reduce((result, p) => result && typeof p === 'string', true),
            dns_port: this._dns_port >= 1 && this._dns_port <= 65535,
            http_port: this._http_port >= 1 && this._http_port <= 65535,
            protection_enabled: typeof this._protection_enabled === 'boolean',
            dhcp_available: !this._dhcp_available ? true : typeof this._dhcp_available === 'boolean',
            running: typeof this._running === 'boolean',
            version: typeof this._version === 'string' && !this._version ? true : this._version,
            language: typeof this._language === 'string' && !this._language ? true : this._language,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IServerStatus>): ServerStatus {
        return new ServerStatus({ ...this.serialize(), ...props });
    }
}
