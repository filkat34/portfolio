import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { BtsComponent} from './bts/bts.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cv', component: CvComponent },
    { path: 'projets', component: ProjectsComponent},
    { path: 'bts', component: BtsComponent },
];
