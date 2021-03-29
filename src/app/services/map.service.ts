import { Injectable } from '@angular/core';
import { IdsToPropertiesMap } from 'app/common_interfaces/ids-to-properties-map.model';

@Injectable({ providedIn: 'root' })
export class MapService {
    private idsToPropertiesMap: IdsToPropertiesMap = {};

    getIdsToProperiesMap(list: object[]): IdsToPropertiesMap {
        list.forEach(item => {
            const cloneItem = {...item};
            const id: number = cloneItem['id'];
            delete cloneItem['id'];
            this.idsToPropertiesMap[id] = { ...cloneItem};
        });
        return this.idsToPropertiesMap;
    }
}
