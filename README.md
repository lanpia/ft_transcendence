ft_transcendence
===
### 프로젝트 디렉토리 구조
```
ft_transcendence/
├── backend/
│   ├── manage.py
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   ├── asgi.py
│   │   └── ...
│   ├── apps/
│   │   ├── users/
│   │   │   ├── migrations/
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   ├── games/
│   │   │   ├── migrations/
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   ├── ...
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── docker-compose.yml
├── Dockerfile
├── .env
└── README.md
```

### 초기 설계

#### 1. 데이터베이스 스키마
- **Users**: 사용자 정보를 저장하는 테이블.
  - `id`: 고유 식별자
  - `username`: 사용자 이름
  - `email`: 이메일 주소
  - `password`: 해시된 비밀번호
  - `avatar`: 프로필 이미지
  - `friends`: 친구 관계를 나타내는 외래 키

- **Games**: 게임 정보를 저장하는 테이블.
  - `id`: 고유 식별자
  - `player1_id`: 첫 번째 플레이어의 외래 키
  - `player2_id`: 두 번째 플레이어의 외래 키
  - `score1`: 첫 번째 플레이어의 점수
  - `score2`: 두 번째 플레이어의 점수
  - `status`: 게임 상태 (예: 진행 중, 완료)

- **Tournaments**: 토너먼트 정보를 저장하는 테이블.
  - `id`: 고유 식별자
  - `name`: 토너먼트 이름
  - `participants`: 참가자 리스트
  - `winner_id`: 승리한 사용자의 외래 키

#### 2. API 설계
- **사용자 관리**
  - `POST /api/register/`: 사용자 등록
  - `POST /api/login/`: 로그인
  - `GET /api/user/{id}/`: 사용자 정보 조회
  - `PUT /api/user/{id}/`: 사용자 정보 수정

- **게임 관리**
  - `POST /api/game/`: 새로운 게임 생성
  - `GET /api/game/{id}/`: 게임 정보 조회
  - `PUT /api/game/{id}/`: 게임 정보 업데이트

- **토너먼트 관리**
  - `POST /api/tournament/`: 새로운 토너먼트 생성
  - `GET /api/tournament/{id}/`: 토너먼트 정보 조회
  - `PUT /api/tournament/{id}/`: 토너먼트 정보 업데이트

#### 3. UI/UX 디자인
- **로그인/회원가입 페이지**: 사용자 인증을 위한 페이지.
- **대시보드**: 사용자 정보를 보여주는 메인 페이지.
- **게임 화면**: 실제 게임이 진행되는 화면.
- **통계 대시보드**: 사용자 및 게임 통계를 보여주는 대시보드.

#### 4. 초기 작업
- **백엔드 설정**
  - Django 프로젝트 생성 및 설정
  - PostgreSQL 데이터베이스 연결
  - 사용자 및 게임 모델 정의
  - 기본 API 엔드포인트 구현

- **프론트엔드 설정**
  - React 프로젝트 생성 및 설정
  - 기본 페이지(로그인, 회원가입, 대시보드) 구현
  - API와 통신하는 서비스 레이어 구축

- **도커 설정**
  - `Dockerfile` 및 `docker-compose.yml` 설정
  - 개발 환경 및 배포 환경 설정

