## Sequelize CLI

npm install -g sequelize-cli

## Creating a model

sequelize model:create --name User --attributes name:string,email:string,password:string,picture:string

## Migrating

sequelize db:migrate