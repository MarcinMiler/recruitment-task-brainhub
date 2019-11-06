import * as E from 'fp-ts/lib/Either'
import { from, Observable, of } from 'rxjs'
import { map, catchError, pluck } from 'rxjs/operators'
import { AxiosStatic } from 'axios'

export class HttpService {
    constructor(
        private readonly apiBase: string,
        private readonly fetch: AxiosStatic
    ) {}

    POST<R>(url: string, data?: object): Observable<E.Either<string, R>> {
        return from(
            this.fetch.post<R>(url, { ...data }, { baseURL: this.apiBase })
        ).pipe(
            pluck('data'),
            map(E.right),
            catchError(err => of(E.left(err.message)))
        )
    }
}
