// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('Header Component', () => {
  const html = '<my-header></my-header>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [HeaderComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Header Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
