export interface IOptions { devId: string; authKey: string; languageId?: number; }

export const DefaultOptions: IOptions = {
    devId: '1234',
    authKey: '1234',
    languageId: 1,
};

export const DefaultSessionCache = {
    sessionId: null,
    createdAt: null,
    data: null
};