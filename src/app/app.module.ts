import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoxPaginaComponent } from './box-pagina/box-pagina.component';
import { BoxApresentComponent } from './box-apresent/box-apresent.component';
import { HomeComponent } from '../../routes/home/home.component';
import { EquipeComponent } from '../../routes/equipe/equipe.component';
import { ProjetoComponent } from '../../routes/projeto/projeto.component';
import { ObjetivoComponent } from '../../routes/objetivo/objetivo.component';
import { BoxEquipeComponent } from './box-equipe/box-equipe.component';
import { BoxProjetosComponent } from './box-projetos/box-projetos.component';
import { BoxObjetivoComponent } from './box-objetivo/box-objetivo.component';

@NgModule({
  declarations: [
    AppComponent,
  	NavbarComponent,
   BoxPaginaComponent,
   BoxApresentComponent,
   HomeComponent,
   EquipeComponent,
   ProjetoComponent,
   ObjetivoComponent,
   BoxEquipeComponent,
   BoxProjetosComponent,
   BoxObjetivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private router: Router) {}

  navegarParaEducacao(): void {
		this.router.navigate(['/equipe']);
		this.router.navigate(['/projeto']);
		this.router.navigate(['/realizações']);
		this.router.navigate(['/objetivos']);
  }
}
