import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://ext-api.airthings.com/v1/";


@Injectable({
  providedIn: 'root'
})
export class AirthingsService 
{


  token =
    "eyJraWQiOiJYd280RUJXQmhmNlQ5R09xU1B1VG5GVTI3amhQdDZqbmZfRHZWVnEtZ2JFIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1MGNmNTNhNC05OWY5LTQxOWQtYTFiMy1jNjBhZTAxNDdlZmUiLCJhdWQiOiJiMDZhY2UxMy1mMDVmLTQyYTctYjVmYy00NmE1YTAwYTU0NjIiLCJuYmYiOjE2MzQxMTI3MjMsImF6cCI6ImIwNmFjZTEzLWYwNWYtNDJhNy1iNWZjLTQ2YTVhMDBhNTQ2MiIsInNjb3BlIjoicmVhZDpkZXZpY2UiLCJpc3MiOiJodHRwczpcL1wvYWNjb3VudHMtYXBpLmFpcnRoaW5ncy5jb21cL3YxIiwiaGJzIjoidHJ1ZSIsInR5cCI6IkJFQVJFUiIsImV4cCI6MTYzNDEyMzUyMywiaWF0IjoxNjM0MTEyNzIzLCJqdGkiOiIzMzllODViNS0wZGU4LTQyNzYtODU1Ni02ZjVlMDA2NDQwZGQifQ.H1SVfOvntTR1IOInMFkVXUxzOhaY5u0TTaNq_CljJsil71A5groY756uU5RfqPrwneYGhc_u_rKVrZDgvi1KDX2N_jlXcqw7jRAuL4K2oGHXr9Hui_39DgDEbisvChOC9o1g3gqrK1soDc028I5hj3BBkK5C1gFDnPe6xOMCpCMxSQ8wa8G7tEYBS0FRlIyWZblxBcwmHpFn28zw-a20VXYV7-SiX3lZAwG_CoC1O20TLxkylO0cEO78QR7e_hgiUm1PoGjpcxHUSKw1sQ9oE7nRRippRlzPpoP73-qHmbtoV-c6bv_CPiJqRXBmqsDONpDV0Hwp_dwN0V2GtHD1GxJEkRZdnml2i-Z-6ZpsuXf-v17EhG5UdLCOnUMVcqswCxnR8VfzEWSXUWEyE49ue_6cbcenAbg4Z9CwVFMDNNKf8pZ3secOrUw6cD_2XkIsiahnZWzsIMFDqFjh98v9_Trl1GjHK-ZW6JpTlkmoSdOdgF3Y4qwC-WcLY-yf_NhAhhZjIecRJXAEYaoLesAMlY4kwkIoqsT8PxXJJh5GJTPj0BgU4DVF0iEFH_OsXGk6MKvAnau4R80F3ydzBxGVKLvi0k6hJYZaI1nKhUz3MLPhNyKuLWPV6PepI9cByaN4AJeC2zlpagSMrAQ-AJ7QtEuUxxsmGTSTAZhnGBcBBlg";



  constructor(private http: HttpClient) { }



  /**
   * Generates a new Token to use, since every token will expire
   * after certain time
   * 
   * @returns token
   */
  getNewToken(): string
  {
    const credentials =
    {
      "grant_type": "client_credentials",
      "client_id": "03ace889-2204-40c0-97d5-95826b486e9f",
      "client_secret": "b833d898-52fd-4fdc-a850-a7ce3cbeefd8",
      "scope": ["read:device:current_values"]
    }

    const tokenURL = `${BASE_URL}token`

    var token = this.http.get(tokenURL,
      {

      })
    console.log(token)
    return "Here's the new token"
  }


  /**
   * Makes API Call to AirThings
   * @returns devices : Device[]
   */
  getDeviceList(token: string)
  {

    var model = "devices";

    var devices = this.http.get(`${BASE_URL}${model}`,
      {
        headers: {
          "Authorization": token
        }
      })


    return devices;
  }

  /**
   * Make API Call, return details of a specific device
   * 
   * @param token 
   * @param deviceID 
   */
  getSensorData(token: string, deviceID: string)
  {

    const model = `${BASE_URL}devices/${deviceID}/latest-samples`


    var sensorData = this.http.get(model,
      {
        headers:
        {
          "Authorization": token
        }
      })


    return sensorData;
  }
}
