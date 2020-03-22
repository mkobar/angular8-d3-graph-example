import { async, ComponentFixture, TestBed } from '@angular/core/testing' // eslint-disable-line no-unused-vars

import { MapperComponent } from './mapper.component'

describe('MapperComponent', () => { // eslint-disable-line no-undef
  let component: MapperComponent
  let fixture: ComponentFixture<MapperComponent>

  beforeEach(async(() => { // eslint-disable-line no-undef
    TestBed.configureTestingModule({
      declarations: [MapperComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => { // eslint-disable-line no-undef
    fixture = TestBed.createComponent(MapperComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => { // eslint-disable-line no-undef
    expect(component).toBeTruthy() // eslint-disable-line no-undef
  })
})
