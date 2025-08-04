import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit, DoCheck {

  title = 'nesa-dashboard';

  // Biến để lưu trạng thái đóng/mở của sidebar
  public isSidebarCollapsed = false;
  private lastSidebarState = this.isSidebarCollapsed;

  @ViewChild('toggleIcon', { static: false }) toggleIcon!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  // Hàm để thay đổi trạng thái
  toggleSidebar(): void {
    console.log('Nút thu gọn đã được bấm!');
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    console.log('Trạng thái isSidebarCollapsed bây giờ là:', this.isSidebarCollapsed);

    // Đảm bảo change detection được trigger
    this.cdr.detectChanges();

    // Cập nhật icon một cách thủ công
    setTimeout(() => {
      if (this.toggleIcon && this.toggleIcon.nativeElement) {
        const iconElement = this.toggleIcon.nativeElement;

        // Xóa SVG cũ nếu có
        const oldSvg = iconElement.querySelector('svg');
        if (oldSvg) {
          oldSvg.remove();
        }

        // Cập nhật data-feather attribute
        iconElement.setAttribute('data-feather', this.isSidebarCollapsed ? 'menu' : 'x');

        // Tạo icon mới
        feather.replace();
      }
    }, 10);
  }

  ngAfterViewInit() {
    feather.replace();
  }

  // ngDoCheck sẽ chạy thường xuyên, nhưng chúng ta sẽ kiểm tra điều kiện bên trong
  ngDoCheck() {
    // Chỉ chạy feather.replace() KHI trạng thái của sidebar thực sự thay đổi
    if (this.isSidebarCollapsed !== this.lastSidebarState) {
      feather.replace();
      this.lastSidebarState = this.isSidebarCollapsed; // Cập nhật lại trạng thái cũ
    }
  }
}
