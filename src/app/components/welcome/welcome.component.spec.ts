import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserService } from '../../service/user.service';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {

    let comp: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;
    let componentUserService: UserService;
    let userService: UserService;
    let de: DebugElement;
    let el: HTMLElement;

    let userServiceStub: {
        isLoggedIn: boolean,
        user: { name: string }
    };

    beforeEach(() => {
        userServiceStub = {
            isLoggedIn: true,
            user: { name: 'Test User' }
        };

        TestBed.configureTestingModule({
            declarations: [WelcomeComponent],
            providers: [{ provide: UserService, useValue: userServiceStub }]
        });

        fixture = TestBed.createComponent(WelcomeComponent);
        comp = fixture.componentInstance;

        // UserService actually injected into the component
        userService = fixture.debugElement.injector.get(UserService);
        componentUserService = userService;
        userService = TestBed.get(UserService);

        de = fixture.debugElement.query(By.css('.welcome'));
        el = de.nativeElement;
    });

    it('should welcome the user', () => {
        fixture.detectChanges();
        const content = el.textContent;
        expect(content).toContain('Welcome', 'Welcome...');
        expect(content).toContain('Test User', 'expected name');
    });

    it('should welcome "Bubba"', () => {
        userService.user.name = "Bubba";
        fixture.detectChanges();
        const content = el.textContent;
        expect(content).toContain('Bubba');
    });

    it('should request log in if not logged in', () => {
        userService.isLoggedIn = false;
        fixture.detectChanges();
        const content = el.textContent;
        expect(content).not.toContain('Welcome', 'not welcomed');
        expect(content).toMatch(/log in/i, '"log in"');
    });

    it('should inject the component\'s UserService instance',
        inject([UserService], (service: UserService) => {
            expect(service).toBe(componentUserService);
        })
    );

    it('TestBed and Component UserService should be the same', () => {
        expect(userService === componentUserService).toBe(true);
    });

    it('stub object and injected UserService should not be the same', () => {
        expect(userServiceStub === userService).toBe(false);

        // Changing the stub object has no effect on the injected service
        userServiceStub.isLoggedIn = false;
        expect(userService.isLoggedIn).toBe(true);
    });
})