import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
    providedIn: 'root'
})
export class EncryptionService {
    secretKey = "dgjeg4834@)(kdmjvfvfdvfd5488*/-4==";

    constructor () {}

    encrypt(value: string): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(value.trim(), salt);
    }
}