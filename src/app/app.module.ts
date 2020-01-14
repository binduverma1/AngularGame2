import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageServiceService } from './image-service.service';
import { MyCustomPipePipe } from './pipes/my-custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageDetailComponent,
    MyCustomPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
