import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { DonationComponent } from './donation/donation.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'header', component: HeaderComponent },
    {path: 'slider', component: SliderComponent },
    {path: 'imgUpload', component: ImageUploadComponent },
    {path: 'about', component: AboutUsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'donate', component: DonationComponent}
];
