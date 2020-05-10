export interface RootState {
    version: string;
    [key: string]: any;
}

export interface Params {
    [key: string]: any;
    [key: number]: any;
}

export interface BDInfoState {
    token: string | null;
    error: boolean;
}