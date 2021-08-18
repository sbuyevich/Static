import { loadRemoteEntry } from '@angular-architects/module-federation';

//import('./bootstrap');

Promise.all([
   loadRemoteEntry('http://localhost:3333/remoteEntry.js', 'ach')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));



