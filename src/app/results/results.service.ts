import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private dbPath = '/teams';
  teamsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.teamsRef = db.list(this.dbPath);
  }

  getAll(): Observable<any[]> {
    return this.teamsRef.valueChanges();
  }
  addToRound1(groupNumber: string): Promise<void> {
    console.log(groupNumber)
    console.log(this.db.object('/teams/0'))
    const teamItemRef = this.db.object(`${this.dbPath}/${groupNumber}`);
    console.log(teamItemRef)
    return teamItemRef.update({ round1: true });
  }
  removeFromRound1(teamId: string): Promise<void> {
    const teamItemRef = this.db.object(`${this.dbPath}/${teamId}`);
    console.log("Remove",teamId)
    return teamItemRef.update({ round1: false });
  }
 

}
