import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "https://ext-api.airthings.com/v1/";


@Injectable({
  providedIn: 'root'
})
export class AirthingsService 
{


  token =
    "eyJraWQiOiJYd280RUJXQmhmNlQ5R09xU1B1VG5GVTI3amhQdDZqbmZfRHZWVnEtZ2JFIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1MGNmNTNhNC05OWY5LTQxOWQtYTFiMy1jNjBhZTAxNDdlZmUiLCJhdWQiOiJiMDZhY2UxMy1mMDVmLTQyYTctYjVmYy00NmE1YTAwYTU0NjIiLCJuYmYiOjE2MzM5NTIyNTgsImF6cCI6ImIwNmFjZTEzLWYwNWYtNDJhNy1iNWZjLTQ2YTVhMDBhNTQ2MiIsInNjb3BlIjoicmVhZDpkZXZpY2UiLCJpc3MiOiJodHRwczpcL1wvYWNjb3VudHMtYXBpLmFpcnRoaW5ncy5jb21cL3YxIiwiaGJzIjoidHJ1ZSIsInR5cCI6IkJFQVJFUiIsImV4cCI6MTYzMzk2MzA1OCwiaWF0IjoxNjMzOTUyMjU4LCJqdGkiOiI5MzBkOTg2Yy01NGFmLTQ2NGMtOTI1ZS0xNmM3MmM3ZmIzNmQifQ.CF0ggkX6K5edLaoAaA3uwYag_wPMceXf9fVOCZn8sGwNQM9GQIjztRcJQ0S2iSlwoaC1Zh7zWGb-P-D8g-IBIAMEn80_XqQ0DL5-BINSJTUC7vKjfnuAXEozhmzMEoKO70uGlati8QtgGWz17QM95UHcT5IXVlysAoKPwORCI02VRZJ7cQf5b1TILNDB3u_YlERz-0DnKIT1BWyvUOACMCNPw6pkIkKA2OS_lmBEJmnZAENhzanq_yOaXXKErHm7Sa8IUfFSsej1_uNMEu4wDWRym4P_lQ1haoqA05a8kXZEEwXTPnSOw_wmSJQDJrYTSpN0w8RLM-g4DO8Yk54lpkt0wIAXa-T57r4JIRqjH_TpzX2RiY6TFtG7jm56q9A2_oQQ4Q_wPGkGrPGPE3wdxcTXEOBpj7Cs_pw1OD6fn5C_7KhhqIvggbSX-51891in0QyJbTAfGgwfzdwvzVyV4nbuSeW1icCY74yEPMKABxpPRSEs1y-fez4lKh-fU6ZJiG2HpCrIHbVEgJDqtpyntAICsIEo7ZHyJnomtyuCAZVgdhWucn5jP9PyrmvmyRyScEYZUpg43iXrv_piD-hrOnvPvKN7gHonPvmvA7ZmKsI9hfkd_aVuzkCfFp6xQ0XqipXxZl1_aKRA9JgOZ7gJdiaWfY0bRpjee-VIQkBr77k";
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
