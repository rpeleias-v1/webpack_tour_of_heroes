import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerComponent } from './banner.component';

let component: BannerComponent;
let fixture: ComponentFixture<BannerComponent>;
let de: DebugElement;
let el: HTMLElement;

describe('BannerComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;    
    });

    it('should display title variable content', () => {
        expect(component.title).toBe('Tour of Heroes');
    });

    it('should display original title', () => {
        //fixture.detectChanges();        
        expect(el.textContent).toContain(component.title);
    })

    it('should change original title', () => {
        component.title = "Hello Rodrigo!";
        fixture.detectChanges();
        expect(el.textContent).toContain("Hello Rodrigo!");
    })
});