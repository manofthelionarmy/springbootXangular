
import { Observable, Subject } from 'rxjs';
import { InterestsService } from './../interests.service';
import { Component, OnInit, Input } from '@angular/core';
import { Interests } from './interest';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {


  interests$: Observable<Interests[]>;

  @Input() interest: Interests;

  constructor(private interestService: InterestsService) { }

  ngOnInit() {
    this.getInterests();
  }

  // GET
  getInterests(): void {

    this.interests$ = this.interestService.getInterests();

  }
  // PUT
  updateInterets(): void {
    this.interestService.updateInterests(this.interest).subscribe();
  }
  // POST
  /*add(interest: string): void {

    interest = interest.trim();
    if (!interest) {return; }

    this.interestService.saveInterest( { interest } as Interests).subscribe( i => { this.interests.push(i); } );

  }
  // DELETE
  delete(interest: Interests): void {
    this.interests = this.interests.filter(i => i !== interest);
    this.interestService.deleteInterest(interest).subscribe();
  }*/

}
