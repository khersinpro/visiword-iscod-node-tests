#! /bin/bash
docker rm --force visiword-mysql
docker run --rm --name visiword-mysql -p 3316:3306 --env-file .env-local -d mysql:8.0
while ! docker exec visiword-mysql mysql --user=visiword --password=visiwordpassword -e "SELECT 1" >/dev/null 2>&1; do
    sleep 1
done
npx sequelize-cli db:migrate
