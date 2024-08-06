# ft_transcendence 프로젝트

## 소개
이 프로젝트는 Django와 React를 기반으로 한 웹 애플리케이션으로, Docker를 사용하여 PostgreSQL 데이터베이스와 통합됩니다.

## 시작하기
1. Docker와 Docker Compose가 설치되어 있는지 확인합니다.
2. 프로젝트 디렉토리로 이동하여 다음 명령어를 실행합니다:
   ```
   docker-compose up --build
   ```
3. 웹 애플리케이션은 `http://localhost:8000`에서 실행됩니다.

## 구조
- `backend/`: Django 백엔드 코드
- `frontend/`: React 프론트엔드 코드
- `docker-compose.yml`: Docker Compose 설정 파일
- `.env`: 환경 변수 파일

