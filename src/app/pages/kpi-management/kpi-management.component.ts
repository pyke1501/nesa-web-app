import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-kpi-management',
  templateUrl: './kpi-management.component.html',
  styleUrls: ['./kpi-management.component.css']
})
export class KpiManagementComponent implements OnInit {

  // Biến quản lý tab chính
  activeTab = 'dashboard';

  // Dữ liệu mẫu cho bảng KPI
  kpiList = [
    {
      name: 'Doanh thu tổng thể',
      description: 'Doanh thu tổng của công ty theo quý',
      category: 'Chưa đặt mục tiêu',
      progress: 'Chưa có dữ liệu',
      status: 'Hoạt động',
      updated: '02/07/2025'
    }
  ];

  // THÊM DỮ LIỆU MẪU CHO KHUNG KPI
  kpiFrameworks = [
    {
      name: 'Khung KPI 2024',
      description: 'Khung đánh giá 2024',
      level: 'Chiến lược',
      department: 'Tất cả phòng ban',
      status: 'Hoạt động',
      tag: 'Công ty'
    },
    {
      name: 'Khung KPI Công ty',
      description: 'Khung KPI tổng thể cho toàn công ty theo chiến lược phát triển',
      level: 'Chiến lược',
      department: 'Tất cả phòng ban',
      status: 'Hoạt động',
      tag: 'Công ty'
    },
    {
      name: 'Khung KPI Công Ty',
      description: 'Khung KPI cấp công ty',
      level: 'Chiến lược',
      department: 'Tất cả phòng ban',
      status: 'Hoạt động',
      tag: 'Công ty'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  // Hàm để thay đổi tab
  selectTab(tabName: string): void {
    this.activeTab = tabName;
    setTimeout(() => feather.replace(), 0);
  }

}
