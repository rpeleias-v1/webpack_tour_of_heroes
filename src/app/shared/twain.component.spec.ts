import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwainComponent } from './twain.component';
import { TwainService } from './twain.service';

describe('TwainComponent', () => {

    let comp: TwainComponent;
    let fixture: ComponentFixture<TwainComponent>;
    let spy: jasmine.Spy;
    let de: DebugElement;
    let el: HTMLElement;
    let twainService: TwainService;

    const testQuote = "Test Quote";

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TwainComponent],
            providers: [TwainService]
        });

        fixture = TestBed.createComponent(TwainComponent);
        comp = fixture.componentInstance;

        twainService = fixture.debugElement.injector.get(TwainService);

        // Setup spy on `getQuote` method
        spy = spyOn(twainService, 'getQuote').and.returnValue(Promise.resolve(testQuote));

        de = fixture.debugElement.query(By.css('.twain'));
        el = de.nativeElement;
    });

    it('should not show quote before OnInit', () => {
        expect(el.textContent).toBe('', 'nothing displayed');
        expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
    });

    it('should still not show quote after component initialized', () => {
        fixture.detectChanges();
        expect(el.textContent).toBe('...', 'no quote yet');
        expect(spy.calls.any()).toBe(true, 'getQuote called');
    });

    it('should show quote after getQuote promise (async)', async(() => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(el.textContent).toBe(testQuote); 
        });                
    }));

    it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
        fixture.detectChanges();
        tick();        
        fixture.detectChanges();
        expect(el.textContent).toBe(testQuote);                        
    }));

    it('should show quote after getQuote promise(done)', done => {
        fixture.detectChanges();

        spy.calls.mostRecent().returnValue.then(() => {
            fixture.detectChanges();
            expect(el.textContent).toBe(testQuote);
            done();
        });
    });
})