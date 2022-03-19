import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Datos Personales', url: '/datos', icon: 'person-circle' }, 
    { title: 'Datos de Origen', url: '/datoso', icon: 'heart' },
    { title: 'Metas Personales', url: '/metas', icon: 'accessibility' },
    
  ];

}
