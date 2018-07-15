import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  private length: number;

  constructor() { }

  getRandomSequence(): string {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(pos, pos + 1);
    }
    return randomString;
  }

  setLength(length: number) {
    this.length = length;
  }
}
