import { BehaviorSubject } from 'rxjs';


export const token$ = new BehaviorSubject(JSON.parse(localStorage.getItem("token")));
export function updateToken(newToken) {
  localStorage.setItem('token', JSON.stringify(newToken));
  token$.next(newToken);
}
