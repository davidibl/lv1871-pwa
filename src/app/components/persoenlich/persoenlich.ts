import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { IVertragsauskunft } from '../../model/vertragsauskunft';
import { OfflineService } from '../../services/offlineService';
@Component({
    moduleId: module.id,
    selector: 'lv-persoenlich',
    templateUrl: 'persoenlich.html',
})
export class PersoenlichComponent implements OnInit {

    public vertragsauskunft: IVertragsauskunft;
    public isOnline = false;

    public constructor(private _dataService: DataService, private _offline: OfflineService) { }

    public ngOnInit() {
        this._dataService.getData().subscribe(data => this.vertragsauskunft = data);

        this._offline.isOnline().subscribe(result => this.isOnline = result);
    }

}
