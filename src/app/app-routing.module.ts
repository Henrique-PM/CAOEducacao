import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../routes/home/home.component';
import { EquipeComponent } from '../../routes/equipe/equipe.component';
import { ProjetoComponent } from '../../routes/projeto/projeto.component';
import { ObjetivoComponent } from '../../routes/objetivo/objetivo.component';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
	{ path: 'equipe', component: EquipeComponent },
	{ path: 'projeto', component: ProjetoComponent },
	{ path: 'objetivos', component: ObjetivoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
