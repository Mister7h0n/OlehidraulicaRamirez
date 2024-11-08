import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AbaoutComponent } from './abaout/abaout.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
import { ScrollComponent } from './scroll/scroll.component';
import { BackToComponent } from './back-to/back-to.component';
import { JLibraryComponent } from './jlibrary/jlibrary.component';
import { JfileComponent } from './jfile/jfile.component';
import { TemplatComponent } from './templat/templat.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AbaoutComponent,
    ServiceComponent,
    GalleryComponent,
    TeamComponent,
    FaqComponent,
    TestimonialComponent,
    ContactComponent,
    ModalComponent,
    ScrollComponent,
    BackToComponent,
    JLibraryComponent,
    JfileComponent,
    TemplatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
