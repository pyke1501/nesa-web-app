import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // Dùng BehaviorSubject để lưu trạng thái đăng nhập
    private loggedIn = new BehaviorSubject<boolean>(false);

    // Expose trạng thái đăng nhập ra bên ngoài dưới dạng observable
    isLoggedIn = this.loggedIn.asObservable();

    constructor(private router: Router) {
      const expirationTime = this.getExpiration();
      // Kiểm tra xem có thời gian hết hạn và nó có còn hợp lệ không
      if (expirationTime && expirationTime > new Date().getTime()) {
        this.loggedIn.next(true);
      } else {
        // Nếu hết hạn thì đăng xuất
        this.logout();
      }
     }

    // Hàm đăng nhập
    login(email: string, password: string): boolean {
      if (email === 'nesatuyendung@gmail.com' && password === '123456') {
        // Tính thời gian hết hạn: 5 tiếng kể từ bây giờ
        const expiresIn = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
        const expirationTime = new Date().getTime() + expiresIn;

        // Lưu thời gian hết hạn vào LocalStorage
        localStorage.setItem('expires_at', JSON.stringify(expirationTime));

        this.loggedIn.next(true);
        this.router.navigate(['/dashboard']);
        return true;
      }
      return false;
    }

    logout(): void {
      // Xóa dữ liệu đã lưu
      localStorage.removeItem('expires_at');

      this.loggedIn.next(false);
      this.router.navigate(['/login']);
    }

    // Hàm phụ để lấy thời gian hết hạn từ LocalStorage
    private getExpiration(): number | null {
      const expiration = localStorage.getItem('expires_at');
      if (expiration) {
        return JSON.parse(expiration);
      }
      return null;
    }
}
