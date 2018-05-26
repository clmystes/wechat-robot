```shell
yarn

# fire up Postgres
# create database records
knex migrate:latest --env development
knex seed:run --env development
node .
```
