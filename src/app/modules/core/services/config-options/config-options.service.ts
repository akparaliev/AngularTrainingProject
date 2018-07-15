import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
  private id: string;
  private login: string;
  private email: string;

  constructor() { }

  setId(id: string) {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }

  setLogin(login: string) {
    this.login = login;
  }

  getLogin(): string {
    return this.login;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
}
