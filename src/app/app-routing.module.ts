import { NgModule }					from '@angular/core';
import { RouterModule, Routes }		from '@angular/router';
import { HashLocationStrategy }		from '@angular/common';
import { LandingPageComponent }		from './landing-page/landing-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/philipporter/landing', pathMatch: 'full' },
	{ path: 'philipporter/landing', component: LandingPageComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true } ) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}