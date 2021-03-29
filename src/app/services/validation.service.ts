import { Injectable } from '@angular/core';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  check_username(input: String): object {
    const underscore_pos: number = input.lastIndexOf('_');

    if (input === '')
      return { hasLength: false, endWithUnderscore: false };

    if (underscore_pos === input.length - 1)
      return { hasLength: true, endWithUnderscore: true };
    else
      return { hasLength: true, endWithUnderscore: false };
    
  }

  check_pan_number(input: string) {
    const regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
     return (regpan.test(input))     
  }

  check_indian_voter(input: string) {
        const splitted_ = input.split('/');
        let matches1_, matches2_, matches3_, matches4_;
        if (splitted_.length > 1) {
               matches1_ = /^([A-Z]{2})$/.test(splitted_[0]);
               matches2_ = /^(\d{3})$/.test(splitted_[1]);
               matches3_ = /^(\d{6})$/.test(splitted_[2]);
               matches4_ = true;

        } else {

          //  alert(/^([A-Z]{3}\d{7})$/.test(input));
           matches4_ = /^([A-Z]{3}\d{7})$/.test(input);
           matches1_ = true;
           matches2_ = true;
           matches3_ = true;

        }

        if ((!matches1_ || !matches2_ || !matches3_) || !matches4_ ) {
              return false;
        } else {
          return true;
        }
  }

  check_indian_driving_license(input: string) {
          const splitted = input.split('/');
          let matches1, matches2, matches3;
          if (splitted.length !== 3) {
                return false;
          } else {
           matches1 = /^(\d{1,4})$/.test(splitted[0]);
           matches2 = /^(\d{1,4})$/.test(splitted[1]);
           matches3 = /^(\d{4})$/.test(splitted[2]);

          if (!matches1 || !matches2 || !matches3) {
                 return false;

          } else {
            return true;
          }
        }
  }

  check_aadhar(input: string) {
      const matches = /^(\d{12})$/.test(input);
      if (!matches)	{
        return false
      } else {
        return true;
      }
  }
  check_email(input: string) {
    const matches = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(input);
    if (!matches)	{
      return false
    } else {
      return true;
    }
}

  check_telephone(input: string) {
      const matches = /^(\d{11})$/.test(input);
      if (!matches)	{
        return false
      } else {
        return true;
      }
  }

  check_mobile(input: string) {
    const matches = /^(\d{10})$/.test(input);
    if (!matches)	{
      return false
    } else {
      return true;
    }
}

check_passport(input: string) {
  const matches = /^([A-Z]{1}\d{7})$/.test(input);
  if (!matches)	{
    return false
  } else {
    return true;
  }
}

check_ifsc(input: string) {
  const matches = /^[A-Za-z]{4}\d{7}$/.test(input);
  if (!matches)	{
    return false
  } else {
    return true;
  }
}

// input should be mm/dd/yyyy
check_dob(input: string) {
 // input  = this.swap_m_d_dob(input);
  // tslint:disable-next-line:max-line-length
  const matches = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(input);
  if (!matches)	{
    return false
  } else {
    return true;
  }
}

// input is mm/dd/yyyy and output is dd/mm/yyyy
swap_m_d_dob(input: string) {
  const splitted = input.split('/');
  const d = splitted[1];
  const m = splitted[0];
  const y = splitted[2];
  return d + '/' + m + '/' + y;
}
// input is dd/mm/yyyy and output is yyy/mm/dd

swap_y_m_d(input: string) {
  const splitted = input.split('/');
  const d = splitted[0];
  const m = splitted[1];
  const y = splitted[2];
  return y + '/' + m + '/' + d;
}

// input is dd/mm/yyyy and output is mm/dd/yyyy
swap_d_m_dob(input: string) {
  const splitted = input.split('/');
  const d = splitted[0];
  const m = splitted[1];
  const y = splitted[2];
  return m + '/' + d + '/' + y;
}

}
