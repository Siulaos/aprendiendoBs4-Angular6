import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
      CommonModule,
      HomeRoutingModule,
      PageHeaderModule,
      NgbCarouselModule.forRoot(),
      NgbAlertModule.forRoot()
    ],
    declarations: [HomeComponent]
})
export class HomeModule {}
