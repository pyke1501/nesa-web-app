import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    // Đây là địa chỉ của JSON Server
    apiUrl = 'https://my-json-server.typicode.com/pyke1501/nesa-web-app/profile';

    constructor(private http: HttpClient) { }

    // Hàm để lấy thông tin profile từ server
    getProfile(): Observable<any> {
      return this.http.get(this.apiUrl);
    }

    // Hàm để cập nhật (lưu) thông tin profile lên server
    updateProfile(profileData: any): Observable<any> {
      return this.http.put(this.apiUrl, profileData);
    }

    updatePassword(newPassword: string): Observable<any> {
      // Dùng PATCH để chỉ cập nhật một phần của đối tượng (chỉ trường password)
      return this.http.patch(this.apiUrl, { password: newPassword });
    }
}
