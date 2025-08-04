import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  // Khởi tạo đối tượng rỗng, dữ liệu sẽ được lấy từ server
  userProfile: any = {};

  // Model cho form đổi mật khẩu
  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  // Các biến cho thông báo
  showSuccessToast = false;
  passwordSuccessMessage = '';
  passwordErrorMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.userService.getProfile().subscribe(data => {
      console.log('Đã nhận dữ liệu từ server:', data);
      this.userProfile = data;
    });
  }

  saveProfile(): void {
    // Gọi service để gửi dữ liệu đã thay đổi lên server
    this.userService.updateProfile(this.userProfile).subscribe(response => {
      console.log('Đã lưu thông tin thành công:', response);
      this.showSuccessToast = true;
      setTimeout(() => { this.showSuccessToast = false; }, 3000);
    });
  }
  // Hàm được gọi khi bấm nút "Đổi mật khẩu"
  changePassword(): void {
    // Reset các thông báo cũ
    this.passwordSuccessMessage = '';
    this.passwordErrorMessage = '';

    // 1. Kiểm tra mật khẩu mới có khớp không
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      this.passwordErrorMessage = 'Mật khẩu mới và mật khẩu xác nhận không khớp.';
      return;
    }

    // 2. Kiểm tra mật khẩu hiện tại có đúng với dữ liệu từ server không
    if (this.passwordData.currentPassword !== this.userProfile.password) {
      this.passwordErrorMessage = 'Mật khẩu hiện tại không đúng.';
      return;
    }

    // 3. Nếu mọi thứ hợp lệ, gọi service để cập nhật mật khẩu mới
    this.userService.updatePassword(this.passwordData.newPassword).subscribe({
      next: (response) => {
        // Xử lý khi thành công
        console.log('Đổi mật khẩu thành công:', response);
        this.passwordSuccessMessage = 'Đổi mật khẩu thành công!';

        // Cập nhật lại mật khẩu trong userProfile trên client
        this.userProfile.password = this.passwordData.newPassword;

        // Xóa các ô input
        this.passwordData = { currentPassword: '', newPassword: '', confirmPassword: '' };

        // Tự động ẩn thông báo thành công sau 3 giây
        setTimeout(() => { this.passwordSuccessMessage = ''; }, 3000);
      },
      error: (err) => {
        // Xử lý khi có lỗi từ server
        console.error('Lỗi khi đổi mật khẩu:', err);
        this.passwordErrorMessage = 'Đã có lỗi xảy ra, vui lòng thử lại.';
      }
    });
  }
}
