var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as sequelize from 'sequelize-typescript';
let Record = class Record extends sequelize.Model {
};
__decorate([
    sequelize.Column({
        type: sequelize.DataType.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    })
], Record.prototype, "id", void 0);
__decorate([
    sequelize.Column({
        type: sequelize.DataType.INTEGER,
        allowNull: false,
    })
], Record.prototype, "beak", void 0);
__decorate([
    sequelize.Column({
        type: sequelize.DataType.STRING(255),
        allowNull: false,
    })
], Record.prototype, "name", void 0);
__decorate([
    sequelize.Column({
        type: sequelize.DataType.INTEGER,
        allowNull: false,
    })
], Record.prototype, "corrAccount", void 0);
Record = __decorate([
    sequelize.Table({
        timestamps: true,
        tableName: 'records',
    })
], Record);
export { Record };
