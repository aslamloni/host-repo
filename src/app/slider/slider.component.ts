import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NgxImgModule } from 'ngx-img';
import { NgxGalleryComponent } from 'ngx-gallery/ngx-gallery.component';
import { GalleryComponent, GalleryItem } from '@daelmaak/ngx-gallery';
import { GalleriaModule } from 'primeng/galleria';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-slider',
    standalone: true,
    imports: [GalleryComponent, GalleriaModule, FontAwesomeModule,HttpClientModule],
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

    slides: any = [];
    currentSlide: number = 0;
    faArrowRight = faArrowRight;
    faArrowLeft = faArrowLeft;

    constructor(private http: HttpClient) { 
        this.getData();
        this.next();
    setInterval(() => {
      this.next();
    }, 9000); // Update time every second
    }

    ngOnInit(): void {
        this.currentSlide = 0;
        /*
        this.slides = [
            {
                url: 'assets/images/pexels-katie-burandt-1212693.jpg',
                title: 'First Slide',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                url: 'assets/images/pexels-steve-johnson-1266808.jpg',
                title: 'Second Slide',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                url: 'assets/images/pexels-pixabay-60597.jpg',
                title: 'Third Slide',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ]; */
        this.getData();
        
    }

    updateTime() {
        this.currentSlide = 0;
        console.log('logged after every 1 seconds');
      }

    getData() {
        this.http.get<any>('assets/dbFiles/home.json').subscribe(data => {
          console.log(data); // Handle your data here
          this.slides = data;
        });
      }
    next() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }
    previous(){
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    }
    jumpToslide(index: number){
        this.currentSlide = index;
    }
}
