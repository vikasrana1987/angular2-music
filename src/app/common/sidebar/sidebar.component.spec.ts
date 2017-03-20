// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('Sidebar Component', () => {
  const html = '<my-sidebar></my-sidebar>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [SidebarComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Sidebar Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
