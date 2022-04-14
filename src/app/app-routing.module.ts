import { NavigationComponent } from './navigation/navigation.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AppGuardGuard } from './app-guard.guard';


const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    canActivate: [AppGuardGuard]
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'PagenotfoundComponent'
  },
  {
    path: 'navigation',
    component: NavigationComponent
  },
  {
    path: 'login',
    component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
