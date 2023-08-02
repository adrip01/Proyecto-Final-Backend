#############################################################

# create the database
sequelize db:create


# create Role model
sequelize model:generate --name Role --attributes "role:string"

# create Type model
sequelize model:generate --name Type --attributes "type:string"

# create User model
sequelize model:generate --name User --attributes "role_id:integer,first_name:string,last_name:string,email:string,password:string,birthday:date"

# create Card model
sequelize model:generate --name Card --attributes "user_id:integer,type_id:integer,title:string"

# create Task model
sequelize model:generate --name Task --attributes "user_id:integer,description:string,limit_date:date,limit_time:time,is_completed:enum:{yes,no}"

# create CardTask model
sequelize model:generate --name CardTask --attributes "card_id:integer,task_id:integer"

#############################################################

# execute migration
sequelize db:migrate

# undo migration
sequelize db:migrate:undo:all

# create seed
sequelize seed:generate --name seed-appointment

# execute seed
sequelize db:seed:all
