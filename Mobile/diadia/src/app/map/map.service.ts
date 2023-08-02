import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import tt from "@tomtom-international/web-sdk-maps";
import {Geolocation, Position} from "@capacitor/geolocation";
import {Mapa} from "./Map";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map !: any;
  public input: any;
  public latitude: any;
  public longitude: any;
  public reverseGeoCoded: any;
  public resultados !: any;
  public searchResultMarker: any;
  private apiKey = "Lb4TsGDFHoP5ldvIcvjZEkKHPXx88xZk";
  public Map: Mapa[]=[]
  constructor(private http: HttpClient) {
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
  async setMapaDados(address: any, name: any, phone: any, url: any){
      const dados: Mapa = {
        country:address.country,
        countryCode: address.countryCode,
        countrySubdivision: address.countrySubdivision,
        extendedPostalCode: address.extendedPostalCode,
        freeformAddress: address.freeformAddress,
        localName: address.localName,
        municipality: address.municipality,
        municipalitySubdivision: address.municipalitySubdivision,
        postalCode: address.postalCode,
        streetName: address.streetName,
        streetNumber: address.streetNumber,
        name: name.name,
        phone: phone.phone,
        url: url.url
      }
      this.Map.push(dados)
      console.log(dados, 'map service')
  }
  setQuery(querry: any){
    this.input = querry;
  }
}

