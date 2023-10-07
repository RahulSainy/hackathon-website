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
    const teamItemRef = this.db.object(`${this.dbPath}/${groupNumber}`);
    return teamItemRef.update({ Round1: true })
      .then(() => {
        console.log('Successfully added to Round 1');
      })
      .catch(error => {
        console.error('Error adding to Round 1:', error);
      });
  }
  
  
  removeFromRound1(groupNumber: string): Promise<void> {
    const teamItemRef = this.db.object(`${this.dbPath}/${groupNumber}`);
    return teamItemRef.update({ Round1: false })
      .then(() => {
        console.log('Successfully added to Round 1');
      })
      .catch(error => {
        console.error('Error adding to Round 1:', error);
      });
  }

}
