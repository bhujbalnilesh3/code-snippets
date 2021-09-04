import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheetHomeComponent } from './components/cheet-home/cheet-home.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{ 
  path: '', 
  component: HomeComponent 
}, { 
    path: 'cheat-home',
    component: CheetHomeComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
