import { from } from 'rxjs'

export class HttpService {
    constructor(private readonly apiBase: string) {}

    POST<T>(path: string, body?: object) {
        return from(
            fetch(this.apiBase + path, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then<T>(res => res.json())
        )
    }
}
