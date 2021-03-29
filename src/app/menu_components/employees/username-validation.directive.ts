import {ChangeDetectorRef, Directive, HostListener} from '@angular/core';
import {CredentialsService} from 'app/services/credentials.service';
import {MaskInputService} from 'app/services/mask-input.service';

@Directive ({selector: '[validateUsername]'})

export class UsernameValidationDirective {

    constructor(
        private maskInputService: MaskInputService,
        private credentialsService: CredentialsService,
        private changeDetector: ChangeDetectorRef) {}

    @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
        const username = (event.target as HTMLInputElement).value;
        if (this.isKeyAllowedForUsernameTyping(event.key) || this.isUsernameEndingWithUnderscore(username)) {
            this.credentialsService.validate_username(username);
            this.changeDetector.markForCheck();
        }
    }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        const regex = this.getRegex(event);
        this.maskInputService.mask(regex, event);

        if (this.isKeyAllowedForUsernameTyping(event.key)) {
            this.credentialsService.halt_username_validation();
            this.changeDetector.markForCheck();
        }
    }

    private getRegex(event: KeyboardEvent): RegExp {
        const isFirstCharacter = (event.target as HTMLInputElement).value.length === 0;
        return (isFirstCharacter) ? /[A-Za-z0-9]/ : /[A-Za-z0-9_]/;
    }

    private isKeyAllowedForUsernameTyping(key: string): boolean {
        const charCode = key.charCodeAt(0);
        const isNumber = charCode >= 49 && charCode <= 57;
        const isAlphabet = charCode >= 97 && charCode <= 122;
        const isAlphaNumeric = isAlphabet || isNumber
        const isBackspace = charCode === 66;
        const isUnderScore = charCode === 95;

        return isAlphaNumeric || isBackspace || isUnderScore;
    }

    private isUsernameEndingWithUnderscore(username: string): boolean {
        const underscorePosition = username.lastIndexOf('_');
      return underscorePosition === username.length - 1
    }
}

