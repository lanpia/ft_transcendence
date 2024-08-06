#!/bin/bash

# 데이터베이스가 준비될 때까지 대기
while ! nc -z usrmgmt_db 5432; do
  echo "Waiting for the Postgres database to be available..."
  sleep 1
done

# 데이터베이스 마이그레이션 적용
python manage.py makemigrations userapp
python manage.py migrate

# Django 애플리케이션 실행
exec "$@"
