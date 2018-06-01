import { GreetingService } from './../greeting.service';
import { Component, OnInit } from '@angular/core';
import {Greeting} from './hello';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private greetingService: GreetingService) { }

  greeting: Greeting = {id: 1, content: ''};

  ngOnInit() {

  }

  showGreeting() {
    this.greetingService.getGreeting().subscribe(
      (data: Greeting) => this.greeting = {...data});
  }
  // Not a great way to update the json, must use PUT
  save(): void {
    this.greetingService.getGreetingFromInput(this.greeting).subscribe();

  }

}
