# 빌드 단계
FROM node:18.12.1 as builder

WORKDIR /app

# package.json과 package-lock.json 파일 복사
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm install

# 앱 소스 복사
COPY . .

# 앱 빌드
RUN npm run build

# 실행 단계
FROM nginx:alpine

# 빌드 결과물을 Nginx 서버의 root 디렉토리로 복사
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]