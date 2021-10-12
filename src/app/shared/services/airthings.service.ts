import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://ext-api.airthings.com/v1/";


@Injectable({
  providedIn: 'root'
})
export class AirthingsService 
{


  token =
    "eyJraWQiOiJYd280RUJXQmhmNlQ5R09xU1B1VG5GVTI3amhQdDZqbmZfRHZWVnEtZ2JFIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1MGNmNTNhNC05OWY5LTQxOWQtYTFiMy1jNjBhZTAxNDdlZmUiLCJhdWQiOiJiMDZhY2UxMy1mMDVmLTQyYTctYjVmYy00NmE1YTAwYTU0NjIiLCJuYmYiOjE2MzQwMzczMzYsImF6cCI6ImIwNmFjZTEzLWYwNWYtNDJhNy1iNWZjLTQ2YTVhMDBhNTQ2MiIsInNjb3BlIjoicmVhZDpkZXZpY2UiLCJpc3MiOiJodHRwczpcL1wvYWNjb3VudHMtYXBpLmFpcnRoaW5ncy5jb21cL3YxIiwiaGJzIjoidHJ1ZSIsInR5cCI6IkJFQVJFUiIsImV4cCI6MTYzNDA0ODEzNiwiaWF0IjoxNjM0MDM3MzM2LCJqdGkiOiI5Mzk0MGE4Zi1kNDgyLTQ5OWYtYjA2YS01YzM2NTY5YWY5YzgifQ.qYgPQ81dyz7gR_a_hr3S5umrF-0yG_Hr-YPiaZU1Cf0n1jTin0IK2lKFGE41-BQ9WzNSPavs6Kh5a0lOTfg3Y3hSTdqDJUX-a8FBLw6qWtHKGLhd6RSeMkBPcYMiphz_ZyoHT5GXk9rb9s5-Tk7P30aV67NCepTf1DGsOv9cOAFwHo7SHS8UsqRpztlfoDLv6vhkVdkw1uB5EIyQz-rjDvBDSxbQ8D_jBtWEb7kVrg0M4yGMUEBfe6pCVL2oI_uWEqgDEJN1ySjbqzf-2Nvd5jGRrf56BAGwZADJ8tec4acgw6NDGmmJyBcUprHchgq3j94Zq0UGDpPaTw-leMZUHrmMMDwDzLRVBADg4L6o2ZDz_U06x7au2ohuQduqzyo8J8e-_T_ZAwF3bzGhDEUyWcr4y_F_zONkduWmXK2DjdvhagwNN5uXhSg3AR4jj7cNE4n41ePGJB0bb2FWzzxs8l92nYoVBKTKFS1nL1KTN1XKjgd140iivC7HkRDXiAvNa7uE88od5vLqubiYsQgMEQAzTfu59SctFxMtVyvwbsriA6XzfrLxfAMauYAsgf0R2eK8-7h3atnn4Plb1UOE39vZtTPi6YXFIg3dGrQn8F929E7_-kcFZsIo4yS3PAz1RBsZXNwbQyuPNlYBDHDnC6t3lzP51v1i6Dqdwd8bccU";



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
