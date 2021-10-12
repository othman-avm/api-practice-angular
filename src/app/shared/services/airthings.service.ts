import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://ext-api.airthings.com/v1/";


@Injectable({
  providedIn: 'root'
})
export class AirthingsService 
{


  token =
    "eyJraWQiOiJYd280RUJXQmhmNlQ5R09xU1B1VG5GVTI3amhQdDZqbmZfRHZWVnEtZ2JFIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1MGNmNTNhNC05OWY5LTQxOWQtYTFiMy1jNjBhZTAxNDdlZmUiLCJhdWQiOiJiMDZhY2UxMy1mMDVmLTQyYTctYjVmYy00NmE1YTAwYTU0NjIiLCJuYmYiOjE2MzQwMjYxMjcsImF6cCI6ImIwNmFjZTEzLWYwNWYtNDJhNy1iNWZjLTQ2YTVhMDBhNTQ2MiIsInNjb3BlIjoicmVhZDpkZXZpY2UiLCJpc3MiOiJodHRwczpcL1wvYWNjb3VudHMtYXBpLmFpcnRoaW5ncy5jb21cL3YxIiwiaGJzIjoidHJ1ZSIsInR5cCI6IkJFQVJFUiIsImV4cCI6MTYzNDAzNjkyNywiaWF0IjoxNjM0MDI2MTI3LCJqdGkiOiJhN2ZjNjBlYS0yYThkLTRmMTUtOTgyNS01Nzc5YzdhNmEyNGQifQ.ePLmMxkZHRZrdyzgDuT3kUqYNXUu335p0cfoKNBOxH0KI_rKY8X_lHiaeaNvArtRSv2F8IB6OBBUMgXkD1nJUP5fHGR9KN5PMRairK8mtFoUW1n9s-o09-czkgkhN4JlxO7XvE4pyGxdJBl8iA0g9-mwRdcCMSOchVbRJIlmI11sJ-rQROCPwt5ltTajI5aJPl1yEjMQn5PqAxZyL-cvb43Isb8f5tNoLDeUGElrlXr_EfcGBBXhADWtrLTIS_494e4zFQWnRZOwjHPsOGTf7KDihAgqCXkt0ScNxcIG5MIS20EdeXaxr51svmh0sm2hBaBbtx-67oByKZTE0ofRl9Ti1js2htDpWwqdD80p1zAU805GwkFdRyLmzWmlsyU9TOAt44jTQ2clvP1MoVA9oPbEDbUmQIBOsUvCNZ4hmIibz0_q1Ce9Koi8OCbYE-NFFB_q1OaTSaPnw3qjw1B38K6FEH7WUKOfupNMLCR_YCFMN5ZFLHjUPexF9c30YIQUvPXOSgUKUONoRIQvFYg4vb_9aRfu4Qd3xi39BXjo45NI2TeiLVYocit-Ouya47ptcrOhe-BHp8hqzvdAQwIrnNXwDy_BsupHrBxHlKkSOGzssj7738sxUoS8scFFOl_ydAilWHXtO3a54APJciFGp6BxSZQFlXIdHRw_DNbYtz4";



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
}
