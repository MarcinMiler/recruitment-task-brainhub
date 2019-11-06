import * as TypeMoq from 'typemoq'
import * as E from 'fp-ts/lib/Either'
import { AxiosStatic } from 'axios'

import { HttpService } from './'

const mockAxiosResponse = (data: any) => ({
    data,
    status: 200,
    statusText: '200',
    headers: {},
    config: {},
    request: {}
})

describe('Http service', () => {
    let mockAxios: TypeMoq.IMock<AxiosStatic>
    let httpService: HttpService

    const mockData = {
        data: 'data'
    }

    beforeEach(() => {
        mockAxios = TypeMoq.Mock.ofType<AxiosStatic>()
        httpService = new HttpService('local', mockAxios.object)
    })

    it('should handle post', async done => {
        mockAxios
            .setup(x =>
                x.post<string>(
                    TypeMoq.It.isValue('/endpoint'),
                    TypeMoq.It.isObjectWith(mockData),
                    TypeMoq.It.isObjectWith({ baseURL: 'local' })
                )
            )
            .returns(() => Promise.resolve(mockAxiosResponse(mockData)))
            .verifiable()

        httpService.POST('/endpoint', mockData).subscribe(res => {
            expect(res).toEqual(E.right(mockData))

            mockAxios.verifyAll()
            done()
        })
    })

    it('should handle error on post', done => {
        mockAxios
            .setup(x =>
                x.post<string>(
                    TypeMoq.It.isValue('/endpoint'),
                    TypeMoq.It.isObjectWith(mockData),
                    TypeMoq.It.isObjectWith({ baseURL: 'local' })
                )
            )
            .returns(() => Promise.reject(new Error('Something went wrong')))
            .verifiable()

        httpService.POST('/endpoint', mockData).subscribe(res => {
            expect(res).toEqual(E.left('Something went wrong'))

            mockAxios.verifyAll()
            done()
        })
    })
})
