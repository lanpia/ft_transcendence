#!/bin/bash

# 마이그레이션 적용
python manage.py migrate

# 관리자 계정 생성 (이미 있는 경우 생략)
if [ "$DJANGO_SUPERUSER_USERNAME" ]; then
    python manage.py createsuperuser --no-input
fi

# 개발 서버 실행
exec "$@"
