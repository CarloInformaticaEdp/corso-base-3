import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

interface State {
  isLoading: boolean;
  data?: any;
  username?: string;
  token?: string;
  // ......
  // altri attributi dello stato
}

const initialState = {
  isLoading: false,
  username: '',
  token: '',
};

@Injectable({ providedIn: 'root' })
export class AppStateManagerService {
  public test = (Math.random() + 1).toString(36).substring(7);
  private appState: State = initialState; // Stato dell'applicazione
  private stateSubject: BehaviorSubject<State> = new BehaviorSubject<State>(
    this.appState
  );

  private isLoadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor(private storage: LocalStorageService) {
    this.appState = this.storage.retrieve('state');
    this.stateSubject.next(this.appState);
    console.log('TEST', this.test);
  }

  /**
   * getState - restituisce a tutti i watcher lo stato applicativo completo attuale
   */
  getState(): Observable<State> {
    return this.stateSubject.asObservable();
  }

  retrieveState() {
    return this.appState;
  }

  /**
   * setState - imposta lo stato applicativo passando un pozione di stato specificamente dichiarato
   * @param newState - parametro di stato che verrà impostato a livello applicativo
   */
  setState(newState: Partial<State>): void {
    this.appState = { ...this.appState, ...newState };
    this.storage.store('state', this.appState);
    this.stateSubject.next(this.appState); // Emetti il nuovo stato agli iscritti
    console.log('appstate', this.appState);
  }

  // Metodo per ripristinare lo stato iniziale
  resetState(): void {
    this.appState = {
      isLoading: false,
      username: '',
      token: '',
    };
    this.storage.store('state', this.appState);
    this.stateSubject.next(this.appState); // Emetti il nuovo stato agli iscritti
  }

  // uno dei possibili utilizzi potrebbe essere una logica di loading a livello
  // applicativo e centralizzato
  public showLoader(): void {
    // this.setState({isLoading: true});

    this.isLoadingSubject.next(true);
  }

  public hideLoader(): void {
    this.isLoadingSubject.next(false);
  }
}
