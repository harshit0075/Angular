import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageTitle: string = "Angular Data Binding Practice";
  a: number = 5;
  b: number = 10;

  imageUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlk0hP5YS6ORmkBo60PeWTKPoiMfhuMn1SIRZRDqqgqQ&s";
  disable: boolean = false;

  toggleChange() {
    this.disable = !this.disable;
  }

  handleButtonClick() {
    console.log("Button clicked!");
  }

  username: string = "Angular";

  isError: boolean = true;

}
