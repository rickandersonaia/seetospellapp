import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListComponent } from './students-list.component';
import {audioURL, avatarURL, baseURL, imageURL} from '../../core/shared/baseurl';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {StudentService} from '../../core/services/student.service';
import {MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {CurrentUserService} from '../../core/services/current-user.service';

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;
  let mockStudentService: any;
  let mockRouter: any;
  let mockCurrentUserService: any;
  let mockActivatedRoute: any;

  beforeEach(async(() => {

    mockCurrentUserService = {
      currentUser: {
        _id: 'testId',
        username: 'testusername',
        displayName: 'Display Name',
        isAdmin: false,
        setsPurchased: [1, 2],
        isTutor: true,
      }
    };

    mockActivatedRoute = {
      snapshot: {
        url: {path: '/tutor'}
      }
    };

    mockStudentService = {
      getStudentByParentId: jasmine.createSpy('getStudentByParentId').and.returnValue(Observable.of({}))
    };

    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    TestBed.configureTestingModule({
      imports: [RouterModule, MatListModule, MatProgressSpinnerModule],
      declarations: [ StudentsListComponent ],
      providers: [
        {provide: StudentService, useValue: mockStudentService},
        {provide: Router, useValue: mockRouter},
        {provide: CurrentUserService, useValue: mockCurrentUserService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: 'BaseURL', useValue: baseURL},
        {provide: 'ImageURL', useValue: imageURL},
        // {provide: 'AudioURL', useValue: audioURL},
        {provide: 'AvatarURL', useValue: avatarURL}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
