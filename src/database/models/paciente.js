'use strict'

module.exports = (sequelize, DataTypes) =>{
    let Paciente = sequelize.define('paciente',{
        idpaciente: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false 
        },
        apellidopaciente: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        nombrepaciente:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        dnipaciente:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        obrasocialpaciente:{
            type: DataTypes.STRING,
            allowNull: false 
        }, 
        mailpaciente:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        createAT:{
            type: DataTypes.DATE,
            field: 'create_at',
            defaultValue: DataTypes.NOW,
            allowNull: false 
        },
        updateAT:{
            type: DataTypes.DATE,
            field: 'update_at',
            defaultValue: DataTypes.NOW,
            allowNull: false 
        },
        deleteAT:{
            type: DataTypes.DATE,
            field: 'delete_at'
        }
    },{
            paranoid: true,
            freezeTableName: true
        }
    )
    Paciente.associate = models => {
        Paciente.belongsTo(models.medico)
    }
    return Paciente
}