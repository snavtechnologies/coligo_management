import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MaskInputService {
    mask(regex: RegExp, event: KeyboardEvent) {
        if (!regex.test(event.key))
            event.preventDefault();
    }
}