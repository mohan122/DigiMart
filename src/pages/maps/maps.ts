import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { variable } from '@angular/compiler/src/output/output_ast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GoogleMap,GoogleMaps,LatLng,CameraPosition,GoogleMapsEvent} from '@ionic-native/google-maps';
import { LoginssPage } from '../loginss/loginss';

/*import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';*/

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  location:any;
  public locatio:any;
  disabled:boolean;
  position:any;
  map: GoogleMap;
  private baseURI : string  = "http://localhost/vamsi/corda.php";
  latitude:any;
  longitude:any;
  
  
 // map: GoogleMap;
  

  constructor(public navCtrl: NavController,public http: HttpClient, public googleMaps:GoogleMaps,public navParams: NavParams,private geolocation: Geolocation,public platform:Platform) {
    this.locatio=[{
       title:'V'
    }];
    var disabled = false;
  }
  /*
  ngAfterViewInit(){
    this.platform.ready().then(() => {
    this.loadMap();
    });
  }
  loadMap(){
    //let element = document.getElementById('map');
    this.map = GoogleMaps.create('map_canvas');
    //let map:GoogleMap=this.googleMaps.create(element,{});
    let latlng=new LatLng(40.7128,74.0059);

    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      let position:CameraPosition<LatLng>={
        target:latlng,
        zoom:10,
        tilt:30
      }
      this.map.moveCamera(position);
    })

  }*/
  
 options={
  color: '#ASDF96',
  fontFamily: '',
  fontSize: '14px',
  fontWeight: 'bold',
   text:'S',
 }

  
  /*loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat:  43.0741904,
          lng:   -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat:  43.0741904,
              lng:  -89.3809802
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }*/
  

saveEntr(){
  this.navCtrl.push(LoginssPage);
}


  mapUser(){
  this.platform.ready().then(()=>{
    let options={timeout:3000,enableHighAccuracy:true,maximumAge:0}
this.geolocation.getCurrentPosition(options).then((location) => {
  console.log('Fetched the location successfully',location);
  this.location=location;
  this.latitude=location.coords.latitude;
  this.longitude=location.coords.longitude;
    this.disabled=true;
   
}).catch((error) => {
  console.log('Error getting location', error);
});
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
    //this.loadMap();
  }

}
