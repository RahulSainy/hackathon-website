import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private dbPath = '/teams';
  teamsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.teamsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<any> {
    console.log(this.teamsRef)
    return this.teamsRef;
  }


}
