import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SwapiService } from '@se-ng/swapi';
import { of, throwError, combineLatest } from 'rxjs';
import {
  catchError,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
  map,
  startWith,
  reduce
} from 'rxjs/operators';
import { SwapiRoot } from 'projects/se-ng/swapi/src/lib/SwapiRoot.interface';
@Component({
  selector: 'app-apisample',
  templateUrl: './apisample.component.html',
  styles: []
})
export class APISampleComponent implements AfterViewInit {
  chosenSet = new FormControl('');
  name = new FormControl('');

  availableSets$ = this.sw.swapiRoot$.pipe(map(root => (Object.keys(root) as unknown) as keyof SwapiRoot));

  result$ = combineLatest(
    this.chosenSet.valueChanges,
    this.name.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      filter(Boolean)
    )
  ).pipe(
    switchMap(([setname, name]) => this.sw.findin(setname, name)),
    concatMap(r => this.sw.enrich(r)),
    tap(r => console.log('full details', r)),
    catchError(e => {
      console.error(e);
      return of({ 'Not Found': `Your search string didn't return any results` });
    })
  );

  constructor(private sw: SwapiService) {}

  ngAfterViewInit() {
    /** put in defaults to get the thing going */
    this.changeTo(['people', 'luke'])
  }

  changeTo(event) {
    const [chosenSet, findValue] = event;
    this.chosenSet.setValue(chosenSet, { emitEvent: true });
    this.name.setValue(findValue, { emitEvent: true });
  }
}
