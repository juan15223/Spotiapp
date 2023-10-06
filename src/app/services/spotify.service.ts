import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDWSuK9ISQdN5qHeTjs48b7GyvR0szUvh0DVlKRddUyaZ9D5gyUDPZ5Tw-6IeYFL_iNaS0MHQBF3u1nIq59y_fMLb1fH5DLn4T5B-6QjkYMAjAWuUs'
    });

    return this.http.get(url, { headers });

  }


  getAlbumTheHives(){
    return this.getQuery('albums/6agQKhrctciHD4QH7KufOS')
            .pipe( map( data => data ));
  }

  getAlbumDojaCat(){
    return this.getQuery('albums/6DmPNcfpkXBVRJsEIJY9tl')
            .pipe( map( data => data ));
  }

  getAlbumAlbum5(){
    return this.getQuery('albums/6DmPNcfpkXBVRJsEIJY9tl')
            .pipe( map( data => data ));
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));
  }

  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
                // .pipe( map( data => data['artists'].items));
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));
  }

}
