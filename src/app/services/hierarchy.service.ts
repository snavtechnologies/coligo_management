import { Injectable } from '@angular/core';
import { HierarchyData } from 'app/common_interfaces/hierarchy-data.model';

@Injectable({ providedIn: 'root' })

export class HierarchyService {
    private idsToNamesMap: { [id: string]: string } = {}
    private list: object[] = [];
    private namesLinks: string[] = [];
    private itemsWithNamesLink: object[] = [];
    private hierarchyData: HierarchyData;

    private init() {
        this.list = [];
        this.namesLinks = [];
        this.itemsWithNamesLink = [];
        this.idsToNamesMap = {};
    }

    private mapIdsToNames() {
        this.list.forEach(item => {
            const id: number = item['id'];
            const name: string = item['name'];
            this.idsToNamesMap[id.toString()] = name;
        });
    }

    private convertIdsToNamesInLink(link: string): string {
        const ids = link.split('~');
        const names = ids.map(id => this.idsToNamesMap[id]);
        const namesLink = names.join('->');
        return namesLink;
    }

    private generateHierarchy() {
        this.list.forEach(item => {
            const namesLink = this.convertIdsToNamesInLink(item['link']);
            const itemWithNamesLink = { ...item, namesLink: namesLink };
            this.namesLinks.push(namesLink);
            this.itemsWithNamesLink.push(itemWithNamesLink);
        });
    }

    getHierarchy(list: object[]): HierarchyData {
        this.init();
        this.list = list;
        this.mapIdsToNames();
        this.generateHierarchy();
        return { itemsWithNamesLink: this.itemsWithNamesLink, hierarchy: this.namesLinks };
    }
}
