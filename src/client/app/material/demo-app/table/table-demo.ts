import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PeopleDatabase, UserData } from './people-database';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'table-demo',
  templateUrl: 'table-demo.html',
  styleUrls: ['table-demo.css'],
  animations: [],
})
export class TableDemoComponent implements OnInit, AfterViewInit {
  matTableDataSource = new MatTableDataSource<any>();

  matTableDataSourceColumns = ['select', 'userId', 'userName', 'progress', 'color'];
  selection = new SelectionModel<UserData>(true, []);

  @ViewChild('filter') filter: ElementRef;
  @ViewChild('paginatorForDataSource') paginatorForDataSource: MatPaginator;
  @ViewChild('sortForDataSource') sortForDataSource: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public _peopleDatabase: PeopleDatabase) {
    this.matTableDataSource.sortingDataAccessor = (data: UserData, property: string) => {
      switch (property) {
        case 'userId': return +data.id;
        case 'userName': return data.name;
        case 'progress': return +data.progress;
        case 'color': return data.color;
        default: return '';
      }
    };
    this.matTableDataSource.filterPredicate =
      (data: UserData, filter: string) => data.name.indexOf(filter) !== -1;
  }

  ngAfterViewInit() {
    // Needs to be set up after the view is initialized since the data source will look at the sort
    // and paginator's initial values to know what data should be rendered.
    this.matTableDataSource.paginator = this.paginatorForDataSource;
    this.matTableDataSource.sort = this.sortForDataSource;
  }

  ngOnInit() {
    this.connect();
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
      debounceTime(150),
      distinctUntilChanged()
      ).subscribe(() => {
        this.paginatorForDataSource.pageIndex = 0;
        this.matTableDataSource.filter = this.filter.nativeElement.value;
      });
  }

  /** Whether all filtered rows are selected. */
  isAllFilteredRowsSelected() {
    return this.matTableDataSource.filteredData.every(data => this.selection.isSelected(data));
  }

  /** Whether the selection it totally matches the filtered rows. */
  isMasterToggleChecked() {
    return this.selection.hasValue() &&
      this.isAllFilteredRowsSelected() &&
      this.selection.selected.length >= this.matTableDataSource.filteredData.length;
  }

  /**
   * Whether there is a selection that doesn't capture all the
   * filtered rows there are no filtered rows displayed.
   */
  isMasterToggleIndeterminate() {
    return this.selection.hasValue() &&
      (!this.isAllFilteredRowsSelected() || !this.matTableDataSource.filteredData.length);
  }

  /** Selects all filtered rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isMasterToggleChecked()) {
      this.selection.clear();
    } else {
      this.matTableDataSource.filteredData.forEach(data => this.selection.select(data));
    }
  }

  connect() {
    this._peopleDatabase.initialize();
    this.matTableDataSource.data = this._peopleDatabase.data.slice();
  }

  disconnect() {
    //
  }

  getOpacity(progress: number) {
    const distanceFromMiddle = Math.abs(50 - progress);
    return distanceFromMiddle / 50 + .3;
  }

}
