#! /bin/bash
docker rm --force visiword-mysql
docker run --rm --name visiword-mysql -p 3316:3306 --env-file .env-local -d mysql:8.0