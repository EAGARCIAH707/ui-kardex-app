import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {ToastaModule} from 'ngx-toasta';
import {BidiModule} from '@angular/cdk/bidi';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {AppRoutes} from './app-routing';
import {MenuItems} from './Core/menu/menu-items/menu-items';
import {AppComponent} from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoginComponent} from './Pages/login/login.component';
import {NotFoundComponent} from './Pages/not-found/not-found.component';
import {HomeComponent} from './Pages/home/home.component';
import {KardexComponent} from './Pages/kardex/kardex.component';
import {LoginService} from './Services/session/login.service';
import {MainService} from './Services/main/mainService';
import {ProductComponent} from './Pages/product/product.component';
import {NotificationComponent} from './Global/notification/notification.component';
import {InComponent} from './Pages/in/in.component';
import {OutComponent} from './Pages/out/out.component';
import {InterceptorService} from './Services/interceptor/interceptor.service';
import {MaterialModule} from './material.module';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    KardexComponent,
    ProductComponent,
    NotificationComponent,
    InComponent,
    OutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'}),
    ToastaModule.forRoot(),
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarRouterModule,
    BidiModule,
    SlickCarouselModule,
    NgxPaginationModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  providers: [
    MenuItems,
    LoginService,
    MainService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
