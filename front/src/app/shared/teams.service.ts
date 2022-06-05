import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class teamService {
 // private apiUrl='http://localhost:3000/Teams';

  // API BACKEND
  private apiUrl='http://localhost:3000/api/teams';

  constructor(private http: HttpClient) {}
  /**
   *Get all teams
   * @returns Observable<Team[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }
  
  /**
   * Get a team with the given id
   * @param _id : team id
   * @returns Observable<Team>
   */
  get(_id: string) {
    return this.http.get(this.apiUrl + '/' + _id);
  }
  
  /**
   * Create a new team
   * @param team new team to create
   */
  create(team: any) {
    return this.http.post(this.apiUrl, team);
  }
  
  /**
   * Update a team with the given id
   * @param id team id to update
   * @param team new team data
   */
  update(_id: string, team: any) {
    return this.http.put(this.apiUrl + '/' + _id, team);
  }
  
  /**
   * Delete a team with the given id
   * @param _id team id to delete
   */
  delete(_id: string) {
    return this.http.delete(this.apiUrl + '/' + _id);
  }
}
