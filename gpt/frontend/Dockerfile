# frontend/Dockerfile

# Node.js 이미지 사용
FROM node:14

# 작업 디렉토리 설정
WORKDIR /app

# 종속성 파일 복사 및 설치
COPY ./package-lock.json ./
RUN yarn install

# 애플리케이션 코드 복사
COPY . .

# 개발 서버 실행
CMD ["yarn", "start"]