import { Component, OnInit } from '@angular/core';
import { ParticipantService } from './participant.service';

@Component({
  selector: 'participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent{
  title = 'List of Participants';
  participants;
  display;

  constructor(service: ParticipantService) {
    this.display = this.participants = service.getParticipants();
  }

  showAll(){
    this.display = this.participants
  }

  filterGender(gender: string){
    this.display = this.participants.filter(participant => participant.gender === gender)
  }

}
