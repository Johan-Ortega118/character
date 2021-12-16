import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Response } from 'src/app/modelos/response.interface';
import { Character } from 'src/app/modelos/character.interface';
import { ListCharacters } from 'src/app/modelos/listcharacters.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://34.125.193.39:8098/Halo-api"

  constructor(private http: HttpClient) { }

  getAllCharacters():Observable<ListCharacters[]>{
    let direction: string = this.url + "/character";
    return this.http.get<ListCharacters[]>(direction);
  }

  postCharacters(form:Character):Observable<Response>{
    let direction: string = this.url + "/character"
    return this.http.post<Response>(direction, form);
  }
}
