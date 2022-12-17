import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Endpoints } from 'src/app/constants';
import { IUserInfo, IUser } from 'src/app/entities';

interface ILoginRequest {
  login: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

interface IUserService {
  login(user: IUser): Observable<void>;
}

interface IUserResponse {
  id: number;
  firstName: string;
  lastName: string;
}

interface IHttpRequestOptions {
  headers?: HttpHeaders;
}

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {
  private token: string = "";

  constructor(
    private httpService: HttpClient
  ) { }

  public login(user: IUser): Observable<void> {
    return this.httpService.post<ILoginResponse>(Endpoints.login, this.toServerUser(user))
      .pipe(
        map((result: ILoginResponse) => {
          this.token = result.token;
        })
      );
  }

  public getUserById(id: number): Observable<IUserInfo> {
    const headers: HttpHeaders = new HttpHeaders()
      .set("Authorization", `Bearer ${this.token}`);

    const options: IHttpRequestOptions = {
      headers: headers
    }
    return this.httpService.get<IUserResponse>(`${Endpoints.userById}${id}`, options)
      .pipe(
        map((result: IUserResponse) => {
          return this.toLocalUserInfo(result);
        })
      )
  }

  private toServerUser(user: IUser): ILoginRequest {
    return {
      login: user.username,
      password: user.password
    };
  }

  private toLocalUserInfo (input: IUserResponse): IUserInfo {
    return {
      id: input.id,
      name: `${input.firstName} ${input.lastName}`
    };
  }
}
