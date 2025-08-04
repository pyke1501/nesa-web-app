import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-okr-management',
  templateUrl: './okr-management.component.html',
  styleUrls: ['./okr-management.component.css']
})
export class OkrManagementComponent implements OnInit, AfterViewInit {

  // Biến quản lý tab
  activeTab = 'overview';

  leaderboard = [
    { rank: 'N', name: 'Nguyễn Văn An', title: 'Senior Sales Manager • Kinh doanh', progress: 95, coins: 1250, achievements: 8, trend: 'up' },
    { rank: 'T', name: 'Trần Thị Bình', title: 'Tech Lead • Kỹ thuật', progress: 92, coins: 1180, achievements: 7, trend: 'up' },
    { rank: 'L', name: 'Lê Minh Cường', title: 'Marketing Manager • Marketing', progress: 88, coins: 1050, achievements: 6, trend: 'up' },
    { rank: 4, name: 'Phạm Thị Dung', title: 'HR Business Partner • Nhân sự', progress: 85, coins: 950, achievements: 5, trend: 'down' },
    { rank: 5, name: 'Hoàng Văn Em', title: 'Financial Analyst • Tài chính', progress: 82, coins: 850, achievements: 4, trend: 'up' },
  ];

  // Dữ liệu mẫu
  companyOkrs = [
    {
      name: 'Tăng doanh thu 25% so với Q3',
      description: 'Mục tiêu tăng trưởng doanh thu cho quý 4',
      progress: 75,
      keyResults: [
        { name: 'Đạt 500 triệu VND doanh thu', progress: 75, current: '375,000,000', target: '500,000,000 VND' },
        { name: 'Có 50 khách hàng mới', progress: 76, current: '38', target: '50 khách hàng' },
        { name: 'Tỷ lệ giữ chân khách hàng 90%', progress: 94, current: '85', target: '90%' },
      ]
    }
  ];

  personalOkrs = [
    {
      name: '1111',
      progress: 0,
      startDate: '1/10/2024',
      endDate: '31/12/2024',
      remainingDays: -216,
      stats: {
        completed: 0,
        onTrack: 0,
        atRisk: 0
      }
    }
  ];

  // THÊM DỮ LIỆU MẪU CHO THÀNH TỰU
  achievements = [
    {
      name: 'Người khởi đầu',
      icon: '🎯',
      points: 25,
      rarity: 'Thường',
      type: 'Cột mốc',
      description: 'Tạo OKR đầu tiên'
    },
    {
      name: 'Chiến binh',
      icon: '⚔️',
      points: 100,
      rarity: 'Hiếm',
      type: 'Thành tựu',
      description: 'Hoàn thành 5 OKR'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  // Hàm thay đổi tab
  selectTab(tabName: string): void {
    this.activeTab = tabName;
    setTimeout(() => feather.replace(), 0);
  }

}
