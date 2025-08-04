import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimekeepingService {

  public isCheckedIn$ = new BehaviorSubject<boolean>(false);
  public checkInTime$ = new BehaviorSubject<Date | null>(null);
  public checkOutTime$ = new BehaviorSubject<Date | null>(null); // <-- THÊM BIẾN MỚI
  public workDuration$ = new BehaviorSubject<string>('00:00:00');

  private workTimerInterval: any;

  constructor() {
    this.checkLoginStatus();
  }

  private checkLoginStatus(): void {
    const savedCheckInStatus = localStorage.getItem('checkInStatus');
    if (savedCheckInStatus) {
      const checkInTime = new Date(JSON.parse(savedCheckInStatus));
      this.isCheckedIn$.next(true);
      this.checkInTime$.next(checkInTime);
      this.startWorkTimer();
    }
  }

  toggleCheckIn(): { success: boolean, message: string } {
    const currentState = this.isCheckedIn$.value;

    if (!currentState) {
      // --- XỬ LÝ CHECK-IN ---
      const now = new Date();
      // Reset lại trạng thái của ca làm việc trước
      this.checkOutTime$.next(null);
      this.workDuration$.next('00:00:00');

      // Bắt đầu ca làm việc mới
      this.isCheckedIn$.next(true);
      this.checkInTime$.next(now);
      this.startWorkTimer();
      localStorage.setItem('checkInStatus', JSON.stringify(now));

      const timeString = now.toLocaleTimeString('vi-VN');
      return { success: true, message: `Check-in thành công! Bạn đã check-in lúc ${timeString}` };
    } else {
      // --- XỬ LÝ CHECK-OUT ---
      const now = new Date();
      this.isCheckedIn$.next(false);
      this.checkOutTime$.next(now); // <-- LƯU LẠI GIỜ CHECK-OUT
      this.stopWorkTimer(); // <-- DỪNG ĐỒNG HỒ (GIỮ LẠI THỜI GIAN LÀM VIỆC)
      localStorage.removeItem('checkInStatus');

      const timeString = now.toLocaleTimeString('vi-VN');
      return { success: true, message: `Check-out thành công! Bạn đã check-out lúc ${timeString}` };
    }
  }

  private startWorkTimer(): void {
    this.workTimerInterval = setInterval(() => {
      const checkInTime = this.checkInTime$.value;
      if (checkInTime) {
        const diff = new Date().getTime() - checkInTime.getTime();
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        this.workDuration$.next(
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        );
      }
    }, 1000);
  }

  private stopWorkTimer(): void {
    clearInterval(this.workTimerInterval);
  }
}
