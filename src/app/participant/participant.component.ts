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
  present;

  constructor(service: ParticipantService) {
    this.present = this.participants = service.getParticipants();
  }

  all(){
    this.present = this.participants
  }

  sort(gender: string){
    this.present = this.participants.filter(participant => participant.gender === gender)
  }

}
