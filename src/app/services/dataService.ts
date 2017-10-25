import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { IVertragsauskunft } from '../model/vertragsauskunft';
import { vertragsauskunft } from '../data/data';

@Injectable()
export class DataService {

    public getData(): Rx.Observable<IVertragsauskunft> {
        return Rx.Observable.of(vertragsauskunft);
    }

}
