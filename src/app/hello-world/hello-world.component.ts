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

  greeting: Greeting = {id: 1, content: 'loremispum'};

  greeting2: Greeting = {id: 1, content: ''};
  ngOnInit() {
    this.showGreeting();
  }

  showGreeting() {
    this.greetingService.getGreeting().subscribe(
      (data: Greeting) => this.greeting = {...data});
  }
  // Not a great way to update the json, must use PUT
  save(): void {
    this.greetingService.getGreetingFromInput(this.greeting2.content).subscribe(
      (data: Greeting) => this.greeting = {...data}
    );

    this.greeting = {id: this.greeting.id, content: `Hello, ${this.greeting2.content}`};
    this.greeting2 = {id: this.greeting2.id, content: ''};
  }

}
