import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-process-management',
  templateUrl: './process-management.component.html',
  styleUrls: ['./process-management.component.css']
})
export class ProcessManagementComponent implements OnInit, AfterViewInit {

  activeSubTab = 'list';

  // Dữ liệu mẫu
  processes = [
    {
      name: 'Quy trình xử lý nghỉ phép',
      category: 'Hành chính',
      status: 'Đang áp dụng',
      priority: 'Cao',
      audience: 'Phòng ban',
      createdDate: '30/06/2025',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    feather.replace();
  }

  selectSubTab(tabName: string): void {
    this.activeSubTab = tabName;
    setTimeout(() => feather.replace(), 0);
  }
}
