export interface IUploadRequest {
    beak: number;
    name: string;
    corrAccount: number;
}

export interface IFileRecord {
    id: number;
    beak: number;
    name: string;
    corrAccount: number;
    createdAt?: number;
}

export interface ICreateRecord extends Omit<IFileRecord, 'id' | 'createdAt'> {}
