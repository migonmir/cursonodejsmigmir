'use strict'

module.exports = (sequelize, DataTypes) =>{
    let Medico = sequelize.define('medico',{
        idmedico: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false 
        },
        apellidomedico: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        nombremedico:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        dnimedico:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        especialidadmedico:{
            type: DataTypes.STRING,
            allowNull: false 
        }, 
        mailmedico:{
            type: DataTypes.STRING
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
    Medico.associate = models => {
        Medico.hasMany(models.paciente)
    }
    return Medico
}