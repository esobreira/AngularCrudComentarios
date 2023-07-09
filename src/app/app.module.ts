import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarComponent } from './components/agregar-editar/agregar-editar.component';
import { ListarComponent } from './components/listar/listar.component';
import { VerComponent } from './components/ver/ver.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AgregarEditarComponent,
        ListarComponent,
        VerComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeComponent,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class AppModule { }
