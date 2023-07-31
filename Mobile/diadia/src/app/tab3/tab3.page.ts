import {Component, OnInit} from '@angular/core';
import tt  from '@tomtom-international/web-sdk-maps';
import { Geolocation,Position } from '@capacitor/geolocation';
import {error} from "@angular/compiler-cli/src/transformers/util";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public map !: any;
  public input: any;
  public latitude: any;
  public longitude: any;
  public reverseGeoCoded: any;
  public resultados !: any;
  public searchResultMarker: any;
  private apiKey = "Lb4TsGDFHoP5ldvIcvjZEkKHPXx88xZk";
  constructor(private http: HttpClient) {
    this.getMarcador();
    this.buscador(this.input);
    this.getEndereco(this.map);
  }

  ngOnInit() {
    this.map = tt.map({
      key: this.apiKey,
      container: "map",
      center: new tt.LngLat(-35.2604, -5.90606 ),
      zoom: 10
    })
  }
  async getMarcador(){
    const coordinates: Position = await Geolocation.getCurrentPosition();
    let marker = new tt.Marker({color: 'purple'})
      .setLngLat([coordinates.coords.longitude, coordinates.coords.latitude]).addTo(this.map);
    this.getEndereco(coordinates.coords)
  }
  async getEndereco(home: any){
    const res: any = await   this.http.get(`https://api.tomtom.com/search/2/reverseGeocode/${home.latitude}%2C${home.longitude}.json?key=${this.apiKey}`).toPromise();
    this.reverseGeoCoded = res.addresses[0].address.freeformAddress+' '+res.addresses[0].address.countryCodeISO3;
    console.log(this.reverseGeoCoded)
  }
  async buscador(query: any) {
    const coordinates: Position = await Geolocation.getCurrentPosition();
    const latitude = coordinates.coords.latitude;
    const longitude = coordinates.coords.longitude;
    const radiusInMeters = 30000; //
    const category = '7315';

    try {
      const url = `https://api.tomtom.com/search/2/search/${query}.json?lat=${latitude}&lon=${longitude}&radius=${radiusInMeters}&categorySet=${category}&key=${this.apiKey}`;
      const res: any = await this.http.get(url).toPromise();
      this.resultados = res.results;
      console.log(this.resultados)
    } catch (error) {
      console.error('Erro ao buscar clínicas médicas:', error);
    }
  }
}
