import { Component } from '@angular/core';
import { ExamplePipe } from './example.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [ExamplePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent  {

}
