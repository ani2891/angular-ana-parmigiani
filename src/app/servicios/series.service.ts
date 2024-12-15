import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse {
  Response: string;
  totalSeasons: string;
  Episodes: { Title: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiKey = '2ff6c6e4'; //clave API de OMDB
  private baseUrl = 'https://www.omdbapi.com/'; // URL base de OMDB API

  constructor(private http: HttpClient) {}

  getEpisodes(seriesTitle: string, season: number): Observable<ApiResponse> {
    const url = `${this.baseUrl}?apikey=${this.apiKey}&t=${seriesTitle}&Season=${season}`;
    return this.http.get<ApiResponse>(url);
  }
}