import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

 public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
      // tslint:disable-next-line:indent
      case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
      // tslint:disable-next-line:indent
      case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
      // tslint:disable-next-line:indent
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      // tslint:disable-next-line:indent
      case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      // tslint:disable-next-line:indent
      default: throw new Error(`Invalid safe type specified: ${type}`);
      // tslint:disable-next-line:indent
		}
  }
}
