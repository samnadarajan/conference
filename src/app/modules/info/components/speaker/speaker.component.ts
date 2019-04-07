import {Component, Input, OnInit} from '@angular/core';
import {Speaker} from '../../../../models/speaker.model';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {
  @Input() speaker: Speaker;

  constructor() { }

  ngOnInit() {
  }

}
