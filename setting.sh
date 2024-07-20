#bin/sh

pip install django
django-admin startproject backend

cd backend
python manage.py startapp users
python manage.py startapp games

pip install psycopg2-binary

# PostgreSQL 접속
psql -U postgres
# 데이터베이스 생성
CREATE DATABASE your_database_name;
# 사용자 생성
CREATE USER your_database_user WITH PASSWORD 'your_database_password';
# 권한 부여
GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_database_user;

# 마이그레이션 파일 생성
python manage.py makemigrations
# 데이터베이스에 마이그레이션 적용
python manage.py migrate

python manage.py createsuperuser
python manage.py runserver
