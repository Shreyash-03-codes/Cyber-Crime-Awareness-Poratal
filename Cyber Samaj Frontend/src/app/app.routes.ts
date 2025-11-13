import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { NewsComponent } from './pages/news/news.component';
import { ReportComponent } from './pages/report/report.component';
import { AllReportComponent } from './pages/all-report/all-report.component';
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { LawsComponent } from './pages/laws/laws.component';
export const routes: Routes = [
    {
        path:'',
        component:WelcomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"about-us",
        component:AboutUsComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"contact-us",
        component:ContactUsComponent
    },
      {
        path:"articles",
        component:ArticlesComponent
    },
      {
        path:"admin/admin-login",
        component:AdminLoginComponent
    },
    
      {
        path:"news",
        component:NewsComponent
    },
      {
        path:"laws",
        component:LawsComponent
    },
    
      {
        path:"report",
        component:ReportComponent
    },
      {
        path:"admin/admin-dashboard",
        component:AdminDashboardComponent
    },
      {
        path:"all-reports",
        component:AllReportComponent
    },
    {
        path:"**",
        component:ErrorComponent
    }
];
