import * as sequelize from 'sequelize-typescript';

@sequelize.Table({
    timestamps: true,
    tableName: 'records',
})
export class Record extends sequelize.Model {
    @sequelize.Column({
        type: sequelize.DataType.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    })
    id!: number;

    @sequelize.Column({
        type: sequelize.DataType.INTEGER,
        allowNull: false,
    })
    beak!: number;

    @sequelize.Column({
        type: sequelize.DataType.STRING(255),
        allowNull: false,
    })
    name!: string;

    @sequelize.Column({
        type: sequelize.DataType.INTEGER,
        allowNull: false,
    })
    corrAccount!: number;
}
