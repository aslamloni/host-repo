import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css'
})
export class ImageUploadComponent {

  imageUrl: string | undefined;

  constructor(private http: HttpClient){}

  onFileSelected(event:any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        //this.uploadImage(file);
      };
      reader.readAsDataURL(file);
    }
  }


  uploadImage(): void {
    // Implement your image upload logic here
    console.log('Image uploaded:', this.imageUrl);
  }

  /*
  uploadImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);
    console.log(formData);
    return this.http.post<any>('http://your-server/upload', formData);
  } */

}
