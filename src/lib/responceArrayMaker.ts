import { IBankCards } from '../types/bank.interface.js';

export const responceArrayMaker = (sourceObject: IBankCards) => {
    let bankAccountsList = sourceObject.ED807.BICDirectoryEntry.filter(
        (dir) => {
            if (
                dir.hasOwnProperty('Accounts') &&
                dir.ParticipantInfo._attributes.EnglName
            ) {
                return dir;
            }
        }
    );
    const resultArray = bankAccountsList.map((card) => {
        return {
            beak: card._attributes.BIC,
            bankname: card.ParticipantInfo._attributes.EnglName,
            corrAccount: card.Accounts?._attributes?.Account,
        };
    });

    return resultArray;
};
