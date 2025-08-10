# Hướng dẫn Deploy Nesa Web App

## Deploy lên Netlify (Khuyến nghị)

### Bước 1: Chuẩn bị
1. Đảm bảo bạn đã cài đặt Node.js (version 16 trở lên)
2. Đảm bảo bạn đã cài đặt Angular CLI: `npm install -g @angular/cli`

### Bước 2: Build project locally (kiểm tra)
```bash
# Cài đặt dependencies
npm install

# Build production version
npm run build:prod

# Kiểm tra thư mục dist/nesa-web-app đã được tạo
```

### Bước 3: Deploy lên Netlify

#### Cách 1: Deploy qua Netlify CLI
```bash
# Cài đặt Netlify CLI
npm install -g netlify-cli

# Login vào Netlify
netlify login

# Deploy
netlify deploy --prod
```

#### Cách 2: Deploy qua Netlify Dashboard
1. Truy cập [netlify.com](https://netlify.com)
2. Đăng ký/đăng nhập tài khoản
3. Click "New site from Git"
4. Chọn repository GitHub/GitLab/Bitbucket
5. Cấu hình build:
   - Build command: `npm run build:prod`
   - Publish directory: `dist/nesa-web-app`
6. Click "Deploy site"

### Bước 4: Cấu hình domain (tùy chọn)
- Trong Netlify Dashboard, vào Site settings > Domain management
- Thêm custom domain nếu cần

## Deploy lên các platform khác

### Vercel
1. Cài đặt Vercel CLI: `npm i -g vercel`
2. Chạy: `vercel --prod`

### GitHub Pages
1. Cài đặt: `npm install -g angular-cli-ghpages`
2. Build: `ng build --prod --base-href=/<repo-name>/`
3. Deploy: `ng deploy --base-href=/<repo-name>/`

### Firebase Hosting
1. Cài đặt Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Init: `firebase init hosting`
4. Deploy: `firebase deploy`

## Troubleshooting

### Lỗi build trên Netlify
- **Lỗi "Build script returned non-zero exit code: 2"**:
  - Kiểm tra Node.js version trong netlify.toml (phải tương thích với Angular version)
  - Angular 14: Node.js 16.x hoặc 18.x
  - Angular 15+: Node.js 18.x hoặc 20.x
  - Sử dụng script `build:netlify` thay vì `build:prod`

### Lỗi build
- Kiểm tra Node.js version (cần 16+)
- Xóa node_modules và package-lock.json, chạy lại `npm install`
- Kiểm tra Angular CLI version: `ng version`

### Lỗi routing
- Đảm bảo file `_redirects` được include trong assets
- Kiểm tra cấu hình redirects trong netlify.toml

### Lỗi environment
- Kiểm tra file `src/environments/environment.prod.ts`
- Đảm bảo các API endpoints production được cấu hình đúng

## Cấu trúc file quan trọng
- `netlify.toml`: Cấu hình build và deploy
- `angular.json`: Cấu hình Angular build
- `src/_redirects`: Cấu hình redirects cho SPA
- `src/environments/`: Cấu hình environment variables 
