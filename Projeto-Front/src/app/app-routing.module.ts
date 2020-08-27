import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { SobreNosComponent} from './sobre-nos/sobre-nos.component';
import { LoginComponent} from './login/login.component';
import { CadastroComponent} from './cadastro/cadastro.component';
import { ContatoComponent} from './contato/contato.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "feed", component: FeedComponent },
  { path: "sobre", component: SobreNosComponent},
  { path: "login", component: LoginComponent},
  { path: "cadastro", component: CadastroComponent },
  { path: "contato", component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}