/** Imports for Angular Modules. Also added the imports array under @NgModule*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdToolbarModule, MdCardModule} from '@angular/material'; 
import {Routes, RouterModule} from '@angular/router';

/** Imports for generated Components and Services. Also added to the declarations array under @NgModule*/
import { AppComponent } from './app.component';
import {ServerService} from './server.service';
import { MainPageComponent } from './main-page/main-page.component';
import { BreadSelectComponent } from './bread-select/bread-select.component';
import { MeatSelectComponent } from './meat-select/meat-select.component';
import { CheeseSelectComponent } from './cheese-select/cheese-select.component';
import { ToppingSelectComponent } from './topping-select/topping-select.component';
import { CondimentSelectComponent } from './condiment-select/condiment-select.component';
import { CancelPageComponent } from './cancel-page/cancel-page.component';
import { AdditionalComponent } from './additional/additional.component';

/** Placeholders to connect Ishmael's components */
/** import { OrderSummaryComponent} from './order-summary/order-summary.component'; */
/** import { OrderSucessfulComponent} from './order-success/order-success.component'; */

/**
 * list of routes (pages) for the application
 */
const appRoutes: Routes =[
{path: '', component: MainPageComponent},
{path: 'bread', component: BreadSelectComponent},
{path: 'meat', component: MeatSelectComponent},
{path: 'cheese', component: CheeseSelectComponent},
{path: 'topping', component: ToppingSelectComponent},
{path: 'condiment', component: CondimentSelectComponent},
{path: 'order_cancelled', component: CancelPageComponent},
{path: 'add', component: AdditionalComponent}

/** Placeholders to connect Ishmael's components */
/** {path: 'summary', component: OrderSummaryComponent}, */
/** {path: 'succuess', component: OrderSuccessfulComponent}, */

];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BreadSelectComponent,
    MeatSelectComponent,
    CheeseSelectComponent,
    ToppingSelectComponent,
    CondimentSelectComponent,
    CancelPageComponent,
    AdditionalComponent

    /** Placeholders to connect Ishmael's components */
    /** OrderSuccessfulComponent */
    /** OrderSummaryComponent */
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdToolbarModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})

/** Exported App Module which is imported into the main.ts file */
export class AppModule { }
