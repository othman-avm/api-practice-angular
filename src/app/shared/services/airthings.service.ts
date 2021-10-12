import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://ext-api.airthings.com/v1/";


@Injectable({
  providedIn: 'root'
})
export class AirthingsService 
{


  token =
    "eyJraWQiOiJYd280RUJXQmhmNlQ5R09xU1B1VG5GVTI3amhQdDZqbmZfRHZWVnEtZ2JFIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1MGNmNTNhNC05OWY5LTQxOWQtYTFiMy1jNjBhZTAxNDdlZmUiLCJhdWQiOiJiMDZhY2UxMy1mMDVmLTQyYTctYjVmYy00NmE1YTAwYTU0NjIiLCJuYmYiOjE2MzQwNDg1NDEsImF6cCI6ImIwNmFjZTEzLWYwNWYtNDJhNy1iNWZjLTQ2YTVhMDBhNTQ2MiIsInNjb3BlIjoicmVhZDpkZXZpY2UiLCJpc3MiOiJodHRwczpcL1wvYWNjb3VudHMtYXBpLmFpcnRoaW5ncy5jb21cL3YxIiwiaGJzIjoidHJ1ZSIsInR5cCI6IkJFQVJFUiIsImV4cCI6MTYzNDA1OTM0MSwiaWF0IjoxNjM0MDQ4NTQxLCJqdGkiOiIwYzFkMTIzOC1mNTE5LTRlODMtYWQ5MC1jMjNhMmM0YTY0YzIifQ.bTfNSfexMXWJ4v6Nn_xWEYuBYLOcbIkQO8owXCu1PcLyhs0IgWHiJyX53hCoOLiOnYf__ZOX1zKIpmLNRliurTKJZoJ5pZMatfJ_LWdNWGVWbXuBxZn1JUtHDBk7kyS1xpI6U4orXJHN5Usl9zVPwkteMnUZOiul2MvdW6dzUm865PNDbfY7_scaMNuqqBr2HuZA2ZjfjxtMLkbnwRx4RCBR7FpFuv9mkHDIvXL2KsKe8C9dECzyL2ticprkExWvoYgo8S0hInnL0JYLPR--UUUk1pkmE-w0KGixgbWa8O-ZvSMyxqHFvYsNfUp23_TFSQo37Oif6xhSQRq3JwRoCqkG91ocB8Egm9ADigfTbl6y1sH3UJWwDmaRLclyVuHAN6KZKB_eqLXh8ZnfZVwvQxGbtmKyaVNRyBL7v9ZGXEv3zbVLifm4NmRKcoLee16OcABXIGlKpQYKnaV2NiTLYPwSwjKl78zmi_cCQmEmVqXi4GLDnt4Oy105vd2dQxzaeTCbeorfC9bobJ-S4jSwfrmKB4NnXIW3_CT5KrP-dL0LmvTWpBzV3QGRr5e3FjXkn9izM5wfbnakaEdDsyCCfQOJ_1JXlFdvW-L94Ssw7EpujNjxL3dhWrreqcl4JwIFuMBgJtFzY07FiYFsvyzfoP3nKcOkmW7cIPun_nSxpAU";



  constructor(private http: HttpClient) { }



  /**
   * Generates a new Token to use, since every token will expire
   * after certain time
   * 
   * @returns token
   */
  getNewToken(): string
  {
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
