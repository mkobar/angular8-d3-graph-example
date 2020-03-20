import { async, ComponentFixture, TestBed } from '@angular/core/testing' // eslint-disable-line no-unused-vars

import { MapComponent } from './map.component'

describe('MapComponent', () => { // eslint-disable-line no-undef
  let component: MapComponent
  let fixture: ComponentFixture<MapComponent>

  beforeEach(async(() => { // eslint-disable-line no-undef
    TestBed.configureTestingModule({
      declarations: [MapComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => { // eslint-disable-line no-undef
    fixture = TestBed.createComponent(MapComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => { // eslint-disable-line no-undef
    expect(component).toBeTruthy() // eslint-disable-line no-undef
  })
})
