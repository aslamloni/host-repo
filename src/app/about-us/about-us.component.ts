import { Component } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  profiles:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get<any>('assets/dbFiles/profiles.json').subscribe(data => {
      console.log(data); // Handle your data here
      this.profiles = data;
    });
  }
}
