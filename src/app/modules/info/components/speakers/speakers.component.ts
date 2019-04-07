import { Component, OnInit } from '@angular/core';
import {AppState} from '../../../../store/app.state';
import {Store} from '@ngrx/store';
import * as SpeakersActions from '../../../../store/actions/speakers.actions';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    {name: 'Sam Nadarajan', talk: 'How to lose a guy in 10 days'},
    {name: 'Sam Nadarajan', talk: 'How to lose a guy in 10 days'},
    {name: 'Sam Nadarajan', talk: 'How to lose a guy in 10 days'},
    {name: 'Sam Nadarajan', talk: 'How to lose a guy in 10 days'},
    {name: 'Sam Nadarajan', talk: 'How to lose a guy in 10 days'},
    {name: 'Sam Nadarajan', talk: 'How to lose a guy in 10 days'},
    {name: 'Sam Nadarajan', talk: 'How to lose a guy in 10 days'},
  ];

  sp = [
    2, 3, 4, 5, 6
  ];
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
  }

  action() {
    this._store.dispatch(new SpeakersActions.LoadSpeakers('test'));
  }

}
