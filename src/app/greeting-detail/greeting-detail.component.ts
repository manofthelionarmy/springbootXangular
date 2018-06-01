import { GreetingService } from './../greeting.service';
import { Greeting } from './../hello-world/hello';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-detail',
  templateUrl: './greeting-detail.component.html',
  styleUrls: ['./greeting-detail.component.css']
})
export class GreetingDetailComponent implements OnInit {

  greeting: Greeting = {id: 0, content: 'lorem ispum'};

  constructor(private greetingService: GreetingService) { }

  ngOnInit() {
    this.showGreeting();
  }

  showGreeting() {
    this.greetingService.getGreeting().subscribe(
      (data: Greeting) => this.greeting = { ...data });
  }

}
