import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit, AfterViewInit {

  // Biến để quản lý tab đang chọn
  activeTab = 'employee';
  trainingSubTab = 'requests';
  // Dữ liệu mẫu
  employees = [
    {
      id: 'EMP001',
      name: 'Nguyễn Thắng',
      phone: '0352565538',
      department: 'N/A',
      title: 'Trưởng phòng Nhân sự',
      level: 'Cấp 2',
      status: 'Hoạt động'
    }
  ];

  jobTitles = [
    {
      name: 'Account Manager',
      level: 'Cấp 2 (Quản lý)',
      status: 'Hoạt động',
      description: 'Quản lý khách hàng doanh nghiệp',
      createdDate: '30/6/2025'
    },
    {
      name: 'CEO',
      level: 'Cấp 1 (Lãnh đạo)',
      status: 'Hoạt động',
      description: 'Giám đốc điều hành công ty',
      createdDate: '4/7/2025'
    },
    {
      name: 'Chuyên viên Tuyển dụng',
      level: 'Cấp 3 (Nhân viên)',
      status: 'Hoạt động',
      description: 'Thực hiện nghiệp vụ tuyển dụng nhân sự',
      createdDate: '30/6/2025'
    },
    {
      name: 'Giám đốc',
      level: 'Cấp 1 (Lãnh đạo)',
      status: 'Hoạt động',
      description: 'Giám đốc điều hành công ty',
      createdDate: '30/6/2025'
    }
  ];

  competencyFrameworks = [
    {
      name: 'Tuyển dụng',
      position: 'Trưởng phòng Nhân sự',
      description: 'demo',
      status: 'Hoạt động',
      createdDate: '6/7/2025'
    }
  ];

  trainingRequests = [
    {
      program: '1111\n2222', // Dùng \n để xuống dòng
      audience: 'Tất cả',
      status: 'Hoạt động'
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
    // Gọi lại feather để vẽ icon nếu tab mới có icon
    setTimeout(() => feather.replace(), 0);
  }

  // Hàm chọn sub-tab
  selectTrainingSubTab(tabName: string): void {
    this.trainingSubTab = tabName;
  }
}
