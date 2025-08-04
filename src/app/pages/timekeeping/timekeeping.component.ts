import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { TimekeepingService } from 'src/app/services/timekeeping.service';

@Component({
  selector: 'app-timekeeping',
  templateUrl: './timekeeping.component.html',
  styleUrls: ['./timekeeping.component.css']
})
export class TimekeepingComponent implements OnInit, AfterViewInit {

  activeTab = 'schedule';

  isAssignShiftModalOpen = false;
  selectedShift: string | null = null;
  assignTargetTab = 'employee';
  isCreateShiftModalOpen = false;
  createShiftActiveTab = 'basic';

  // Dữ liệu mẫu cho form
  newShiftData = {
    name: '',
    type: 'full-time',
    description: '',
    color: 'blue',
    coefficient: 1,
    attendanceSettings: 'default'
  };

  // Dữ liệu mẫu cho modal
  shifts = [
    { id: 1, name: 'Ca bán thời gian (08:00 - 12:00)' },
    { id: 2, name: 'Ca linh hoạt (09:00 - 17:00)' },
    { id: 3, name: 'Ca hành chính (08:00 - 17:00)' },
  ];
  employees = [
    { id: 1, name: 'Nguyễn Thắng', code: 'EMP001', role: 'N/A', selected: false },
    // Thêm các nhân viên khác nếu cần
  ];
  // ===================================
  positions = [
    { id: 1, name: 'Account Manager', selected: false },
    { id: 2, name: 'CEO', selected: false },
    { id: 3, name: 'Chuyên viên Tuyển dụng', selected: false },
    { id: 4, name: 'Giám đốc', selected: false },
    { id: 5, name: 'Junior Developer', selected: false },
    { id: 6, name: 'Nhân viên', selected: false },
    { id: 7, name: 'Nhân viên chính', selected: false },
    { id: 8, name: 'Phó giám đốc', selected: false },
    { id: 9, name: 'Phó trưởng phòng', selected: false },
    { id: 10, name: 'Senior developer', selected: false },
    { id: 11, name: 'Team Lead Backend', selected: false },
    { id: 12, name: 'Thực tập sinh', selected: false },
    { id: 13, name: 'Trưởng phòng', selected: false },
    { id: 14, name: 'Trưởng phòng Kinh doanh', selected: false },
    { id: 15, name: 'Trưởng phòng Kỹ thuật', selected: false },
    { id: 16, name: 'Trưởng phòng Marketing', selected: false },
    { id: 17, name: 'Trưởng phòng Nhân sự', selected: false },
    { id: 18, name: 'Trưởng phòng Tài chính', selected: false }
  ];

  isColorPickerOpen = false;
  predefinedColors = [
    '#3498db', '#2ecc71', '#f1c40f', '#9b59b6',
    '#e74c3c', '#e91e63', '#00bcd4', '#ff9800',
    '#95a5a6', '#34495e', '#16a085', '#d35400'
  ];
  customColor = '#3498db';

  constructor(public timekeepingService: TimekeepingService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Gọi hàm này để vẽ tất cả các icon trong trang
    feather.replace();
  }

  // Hàm để thay đổi tab
  selectTab(tabName: string): void {
    this.activeTab = tabName;
    // Gọi lại feather.replace() để vẽ icon cho tab mới
    setTimeout(() => feather.replace(), 0);
  }

  // === THÊM CÁC HÀM ĐIỀU KHIỂN MODAL ===
  openAssignShiftModal(): void {
    this.isAssignShiftModalOpen = true;
    setTimeout(() => feather.replace(), 0); // Vẽ icon trong modal
  }

  closeAssignShiftModal(): void {
    this.isAssignShiftModalOpen = false;
    this.selectedShift = null; // Reset lại lựa chọn khi đóng modal
  }

  assignShift(): void {
    // Xử lý logic phân công ca ở đây
    console.log('Đã chọn ca:', this.selectedShift);
    console.log('Nhân viên được chọn:', this.employees.filter(e => e.selected));
    this.closeAssignShiftModal(); // Đóng modal sau khi phân công
  }

  // Hàm mới để chuyển tab con
  selectAssignTargetTab(tabName: string): void {
    this.assignTargetTab = tabName;
  }

  openCreateShiftModal(): void {
    this.isCreateShiftModalOpen = true;
    setTimeout(() => feather.replace(), 0);
  }

  closeCreateShiftModal(): void {
    this.isCreateShiftModalOpen = false;
  }

  selectCreateShiftTab(tabName: string): void {
    this.createShiftActiveTab = tabName;
  }

  createShift(): void {
    // Xử lý logic tạo ca mới ở đây
    console.log('Dữ liệu ca làm việc mới:', this.newShiftData);
    this.closeCreateShiftModal();
  }

  toggleColorPicker(): void {
    this.isColorPickerOpen = !this.isColorPickerOpen;
  }

  selectColor(color: string): void {
    this.newShiftData.color = color;
    this.isColorPickerOpen = false; // Tự động đóng sau khi chọn
  }

  applyCustomColor(): void {
    this.selectColor(this.customColor);
  }
}
