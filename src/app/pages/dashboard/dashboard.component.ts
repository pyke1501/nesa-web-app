import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import * as feather from 'feather-icons';
import { TimekeepingService } from 'src/app/services/timekeeping.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  userName = 'Nguyễn Thắng';
  clock$!: Observable<Date>;

  // === CÁC BIẾN MỚI CHO CHỨC NĂNG CHẤM CÔNG ===
  isCheckedIn = false;
  checkInTime: Date | null = null;
  workTimerInterval: any;
  workDuration = '0:00:00';

  // Biến cho thông báo pop-up
  checkInNotification = {
    show: false,
    message: ''
  };
  // =============================================

  constructor(public timekeepingService: TimekeepingService) { }

  ngOnInit(): void {
    this.clock$ = timer(0, 1000).pipe(map(() => new Date()));

    // (Tùy chọn) Kiểm tra LocalStorage để khôi phục trạng thái nếu tải lại trang
    const savedCheckInStatus = localStorage.getItem('checkInStatus');
    if (savedCheckInStatus) {
      this.isCheckedIn = true;
      this.checkInTime = new Date(JSON.parse(savedCheckInStatus));
      this.startWorkTimer();
    }
  }

  // Gọi feather.replace() sau khi view đã được render xong
  ngAfterViewInit(): void {
    feather.replace();
  }

  checkIn(): void {
    alert('Bạn đã nhấn nút Check in!');
  }

  // Hàm xử lý chính khi bấm nút Check-in/Check-out
  handleCheckInToggle(): void {
    const result = this.timekeepingService.toggleCheckIn();
    this.showNotification(result.message);
  }

  startWorkTimer(): void {
    this.workTimerInterval = setInterval(() => {
      if (this.checkInTime) {
        const now = new Date();
        const diff = now.getTime() - this.checkInTime.getTime();

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        this.workDuration =
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
    }, 1000);
  }

  stopWorkTimer(): void {
    clearInterval(this.workTimerInterval);
  }

  // Hàm hiển thị thông báo trong 3 giây
  showNotification(message: string): void {
    this.checkInNotification.message = message;
    this.checkInNotification.show = true;
    setTimeout(() => {
      this.checkInNotification.show = false;
    }, 3000);
  }

  // Dọn dẹp interval khi component bị hủy
  ngOnDestroy(): void {
    this.stopWorkTimer();
  }

}
