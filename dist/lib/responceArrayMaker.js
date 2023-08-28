export const responceArrayMaker = (sourceObject) => {
    let bankAccountsList = sourceObject.ED807.BICDirectoryEntry.filter((dir) => {
        if (dir.hasOwnProperty('Accounts') &&
            dir.ParticipantInfo._attributes.EnglName) {
            return dir;
        }
    });
    const resultArray = bankAccountsList.map((card) => {
        var _a, _b;
        return {
            beak: card._attributes.BIC,
            bankname: card.ParticipantInfo._attributes.EnglName,
            corrAccount: (_b = (_a = card.Accounts) === null || _a === void 0 ? void 0 : _a._attributes) === null || _b === void 0 ? void 0 : _b.Account,
        };
    });
    return resultArray;
};
