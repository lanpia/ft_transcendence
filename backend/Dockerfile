# 베이스 이미지
FROM python:3.9-slim

# 작업 디렉토리 설정
WORKDIR /code

# 종속성 파일 복사 및 설치
COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# 애플리케이션 코드 복사
COPY . /code/

# 환경 변수 설정
ENV PYTHONUNBUFFERED=1

# ENTRYPOINT와 CMD로 스크립트 실행
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
# ENTRYPOINT ["/entrypoint.sh"]
CMD ["tail", "-f", "/dev/null"]
