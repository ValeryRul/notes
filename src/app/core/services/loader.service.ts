import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private _countLoadings: number;
    private _loading$: BehaviorSubject<boolean>;
    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    constructor() {
        this._loading$ = new BehaviorSubject<boolean>(false);
        this._countLoadings = 0;
    }

    startLoading(): void {
        if (this._countLoadings === 0) {
            this._loading$.next(true);
        }
        this._countLoadings++;
    }

    stopLoading(): void {
        this._countLoadings--;
        if (this._countLoadings === 0) {
            this._loading$.next(false);
        }
    }
}
