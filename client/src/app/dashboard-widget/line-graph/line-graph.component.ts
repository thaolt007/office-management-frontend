import { CheckinService } from './../../checkin/checkin.service';
import { DashboardService } from './../../dashboard-crm/dashboard.service';

import { User } from './../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'cdk-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {
    days: number[] = [];
    @Input() reports: User[];
    listTimeDay: number[] = [];
    userId = 1;
    totalTimeWork: number = 0;
    timeHours: string;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    setTimeout(() => {
        this.createLineChart();
    },500)
    this.takeData();
  }

  takeData() {
      console.log("takeData of line-graph");
      for(let i=1; i<=30; i++) {
        this.days.push(i);
      }

    //   this.dashboardService.getMainReport(this.userId).subscribe(
    //       reports => {
    //           this.reports = reports;
              console.log(this.reports);
                for(let report of this.reports) {
                    this.listTimeDay.push(report.totalMinute);
                    this.totalTimeWork += report.totalMinute;
                }
                this.calculateShowTime();
    //       }
    //   ); 
  }
  calculateShowTime() {
    let hour = parseInt((this.totalTimeWork/60).toString());
    this.timeHours = `${hour}h${this.totalTimeWork%60}p in this month`;
  }
  createLineChart() {
      new Chart('line-graph', {
                type: 'line',
                data: {
                    labels: this.days,
                    datasets: [{
                        backgroundColor: 'rgba(92, 107, 192, 0.36)',
                        borderColor: 'rgba(92, 107, 192,.5)',
                        data: this.listTimeDay,
                        label: 'Dataset',
                        fill: 'start'
                    }]
                },
                options: {
                    elements : {
                        line: {
                            tension: 0.000001
                        }
                    },
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: false,
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    title: {
                        display: true,
                        text: this.timeHours
                    }
                }
        })
  }

}
