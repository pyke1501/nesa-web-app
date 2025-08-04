import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as feather from 'feather-icons';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, OnInit {
  // Dùng BehaviorSubject để lưu trạng thái đăng nhập
  private loggedIn = new BehaviorSubject<boolean>(false);
  userProfile: any = {};

  menuItems = [
    { name: 'Dashboard', icon: 'grid', path: '/dashboard' },
    { name: 'Quản lý nhân sự', icon: 'users', path: '/employee-management' },
    { name: 'Chấm công', icon: 'clock', path: '/timekeeping' },
    { name: 'Quản lý quy trình', icon: 'git-merge', path: '/process-management' },
    { name: 'Quản lý KPI', icon: 'file-text', path: '/kpi-management' },
    { name: 'Quản lý OKR', icon: 'target', path: '/okr-management' }
  ];

  // Biến để kiểm soát menu dropdown
  public isUserMenuOpen = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe(data => {
      this.userProfile = data;
    });
  }

  ngAfterViewInit() {
    feather.replace();
  }

  // Hàm để bật/tắt menu
  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  logout(): void {
    this.authService.logout();
  }

  get userInitials(): string {
    const fullName = this.userProfile?.fullName;
    if (!fullName) {
      return ''; // Trả về rỗng nếu chưa có tên
    }

    // Tách họ tên thành các từ
    const words = fullName.split(' ').filter((word: any) => word);
    if (words.length === 0) {
      return '';
    }

    // Lấy chữ cái đầu của từ đầu tiên (họ)
    const firstInitial = words[0].charAt(0);

    // Lấy chữ cái đầu của từ cuối cùng (tên)
    const lastInitial = words.length > 1 ? words[words.length - 1].charAt(0) : '';

    return `${firstInitial}${lastInitial}`.toUpperCase();
  }
}
