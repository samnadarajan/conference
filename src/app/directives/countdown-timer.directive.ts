import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

interface CountdownUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Directive({
  selector: '[countdowntimer]'
})
export class CountdownTimerDirective implements OnInit, OnChanges {
  @Input() dateTo: number;
  @Input() unitLabels = {days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds'};

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dateTo) {
      let differenceInSeconds = this.getDifferenceInSeconds(this.getDateNow(), this.dateTo);
      let units = this.getCountdownUnits(differenceInSeconds);
      this.buildTemplate(units);

      if (differenceInSeconds > 0) {
        setInterval(() => {
          units = this.getCountdownUnits(differenceInSeconds--);
          this.buildTemplate(units);
        }, 1000);
      }
    }
  }

  /**
   * Get current date in seconds
   */
  getDateNow(): number {
    return Math.floor(Date.now() / 1000);
  }

  /**
   * Get difference in dates in seconds for further calculation
   */
  getDifferenceInSeconds(currentDateInSeconds: number, endDateInSeconds: number) {
    return endDateInSeconds - currentDateInSeconds > 0 ? endDateInSeconds - currentDateInSeconds : 0;
  }

  getCountdownUnits(differenceInSeconds: number) {
    const Days = (differenceInSeconds / 60 / 60 / 24 ) | 0;
    const leftoverDays = ( differenceInSeconds / 60 / 60 / 24 ) - Days;
    const Hours = (leftoverDays * 24) | 0;
    const leftoverHours = (leftoverDays * 24) - Hours;
    const Minutes = (leftoverHours * 60) | 0;
    const leftoverMinutes = (leftoverHours * 60) - Minutes;
    const Seconds = (leftoverMinutes * 60) | 0;

    return {
      days: Days,
      hours: Hours,
      minutes: Minutes,
      seconds: Seconds
    };
  }

  // TODO Tommy Truong style countdown timer here
  buildTemplate(units: CountdownUnits) {
    const html = `
        <div>
           ${units.days} ${this.unitLabels.days}
           ${units.hours} ${this.unitLabels.hours}
           ${units.minutes} ${this.unitLabels.minutes}
           ${units.seconds} ${this.unitLabels.seconds}
        </div>
    `;


    this.elementRef.nativeElement.innerHTML = html;
  }
}
