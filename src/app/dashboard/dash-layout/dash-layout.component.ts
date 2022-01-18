import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare let $: any;

@Component({
  selector: 'app-dash-layout',
  templateUrl: './dash-layout.component.html',
  styleUrls: ['./dash-layout.component.scss']
})
export class DashLayoutComponent implements OnInit, AfterViewInit {
  sidebarMenu = [
    {
      icon: '',
      title: 'Employee',
      slug: 'employee',
      subMenu: [
        { title: 'Employee' }
      ]
    },
    {
      icon: '',
      title: 'Payroll',
      slug: 'payroll',
      subMenu: [
        { title: 'Payroll' }
      ]
    },
    {
      icon: '',
      title: 'Attendance',
      slug: 'attendance',
      subMenu: [
        { title: 'Attendance' }
      ]
    },
    {
      icon: '',
      title: 'Leave',
      slug: 'leave',
      subMenu: [
        { title: 'Leave' }
      ]
    },
    {
      icon: '',
      title: 'Time Tracker',
      slug: 'time-tracker',
      subMenu: [
        { title: 'Time Tracker' }
      ]
    },
    {
      icon: '',
      title: 'Recruitment',
      slug: 'recruitment',
      subMenu: [
        { title: 'Job Opportunities' },
        { title: 'Application Form' },
        { title: 'Talent Qualifier' },
        { title: 'Onboarding' },
        { title: 'Settings' },
      ]
    },
    {
      icon: '',
      title: 'Requisition',
      slug: 'requisition',
      subMenu: [
        { title: 'Requisition' },
      ]
    },
    {
      icon: '',
      title: 'Health',
      slug: 'health',
      subMenu: [
        { title: 'Health' },
      ]
    },
    {
      icon: '',
      title: 'Performance',
      slug: 'performance',
      subMenu: [
        { title: 'Performance' },
      ]
    },
    {
      icon: '',
      title: 'Reports',
      slug: 'reports',
      subMenu: [
        { title: 'Reports' },
      ]
    },
    {
      icon: '',
      title: 'Settings',
      slug: 'settings',
      subMenu: [
        { title: 'Settings' },
      ]
    },
  ]
  constructor(
    private elementRef: ElementRef,
    public domsaniter: DomSanitizer) {
    // this.domsaniter.bypassSecurityTrustResourceUrl()
  }
  ngAfterViewInit() {
    this.appendScript('/assets/template-files/js/off-canvas.js')
    this.appendScript('/assets/template-files/js/template.js')
 }

  ngOnInit(): void {
    // this.toggler()
  }
  appendScript(link: string) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = link || "src/assets/template-files/js/dashboard.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  toggler() {
    var body = $('body');
    $('[data-toggle="minimize"]').on("click", function() {
      console.log('onclick');
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });
  }

}
