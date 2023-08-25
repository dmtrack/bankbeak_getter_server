export interface IBankCards {
    declaration: {
        version: number;
        encoding: string;
    };
    ED807: {
        _attributes: Attributes;
        BICDirectoryEntry: BankInfo[];
    };
}

export interface IBankResponse {
    beak: string;
    bankname: string | undefined;
    corrAccount: {
        Account: string;
        RegulationAccountType: string;
        CK: string;
        AccountCBRBIC: string;
        DateIn: string;
        AccountStatus: string;
    };
}

interface Attributes {
    xmlns: string;
    EDNo: string;
    EDDate: Date;
    EDAuthor: string;
    CreationReason: string;
    CreationDateTime: Date;
    InfoTypeCode: string;
    BusinessDay: Date;
    DirectoryVersion: string;
}

interface BankInfo {
    _attributes: WelcomeAttributes;
    ParticipantInfo: ParticipantInfo;
    Accounts: Accounts;
}

interface Accounts {
    _attributes: AccountsAttributes;
}

interface AccountsAttributes {
    Account: string;
    RegulationAccountType: string;
    CK: string;
    AccountCBRBIC: string;
    DateIn: Date;
    AccountStatus: string;
}

interface ParticipantInfo {
    _attributes: ParticipantInfoAttributes;
}

interface ParticipantInfoAttributes {
    NameP: string;
    RegN: string;
    CntrCd: string;
    Rgn: string;
    Ind: string;
    Tnp: string;
    Nnp: string;
    EnglName: string;
    Adr: string;
    DateIn: Date;
    PtType: string;
    Srvcs: string;
    XchType: string;
    UID: string;
    ParticipantStatus: string;
}

interface WelcomeAttributes {
    BIC: string;
}
