# Nginx의 공식 이미지를 사용
FROM nginx:alpine

# Nginx 설정 파일을 컨테이너에 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 정적 파일을 Nginx의 기본 경로로 복사
COPY . /usr/share/nginx/html
COPY index.html /usr/share/nginx/html/index.html

# 80번 포트를 개방
EXPOSE 80
