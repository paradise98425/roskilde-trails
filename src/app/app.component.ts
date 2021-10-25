import { Component } from '@angular/core';
import { CapacitorGoogleMaps } from "@capacitor-community/capacitor-googlemaps-native";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    CapacitorGoogleMaps.initialize({
      key:"AIzaSyDvZyV2RYUonVjsaM1-L8sJXD7nccLQDfA"
    });
  }
}
