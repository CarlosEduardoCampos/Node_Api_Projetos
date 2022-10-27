module.exports = function (app) {

    /* Rota para pagina index ou home */
    app.get('/',(req,res) => {
        res.status(200).json({ok:'conected'})
        //import { initializeApp } from 'firebase/app';
        //import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

        // Follow this pattern to import other Firebase services
        // import { } from 'firebase/<service>';
        let initializeApp = require("./fireBase.js");

        // TODO: Replace the following with your app's Firebase project configuration
        firebaseConfig (app) { 
            const db = getFirestore(app);
            const hellfireClubCollection = collection(db,'hellfire-clube');
            const docRef = await addDoc(hellfireClubCollection, subscribe)
            return docRef.id
        };

        const app = initializeApp(firebaseConfig(app));
        const db = firebase.getFirestore(app);

        // Get a list of cities from your database
        async function getPessoas(db) {
        const citiesCol = collection(db, 'cities');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
        }
    })
}
