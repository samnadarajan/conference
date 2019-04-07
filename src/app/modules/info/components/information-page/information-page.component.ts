import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {EventDetails} from '../../../../models/event-details.model';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationPageComponent {
  @Input() eventDetails: EventDetails;
  constructor() {}
}
