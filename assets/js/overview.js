document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle
    document.querySelector("#byLevel")
    .addEventListener("click", () => loadView("byLevel"));
    document.querySelector("#byTerm")
    .addEventListener("click", () => loadView("byTerm"));
    document.querySelector("#nicoNoun")
    .addEventListener("click", () => loadView("nicoNoun"));
    document.querySelector("#nicoVerb")
    .addEventListener("click", () => loadView("nicoVerb"));
    document.querySelector("#nicoPronoun")
    .addEventListener("click", () => loadView("nicoPronoun"));
    document.querySelector("#nicoAdv")
    .addEventListener("click", () => loadView("nicoAdv"));
    document.querySelector("#nicoDet")
    .addEventListener("click", () => loadView("nicoDet"));
    document.querySelector("#nicoAdj")
    .addEventListener("click", () => loadView("nicoAdj"));
    document.querySelector("#nicoAdp")
    .addEventListener("click", () => loadView("nicoAdp"));
    document.querySelector("#nicoConj")
    .addEventListener("click", () => loadView("nicoConj"));
    document.querySelector("#nicoInt")
    .addEventListener("click", () => loadView("nicoInt"));

    // By default open byLevel

    loadView("byLevel");    
});

function loadView(viewName) {
    debugger;
    if (viewName === "byLevel") {
        document.getElementById("tableTitle").innerText = "Number of dialogue lines by level";
        document.getElementById("tableHeader1").innerText = "Level";
        document.getElementById("tableHeader2").innerText = "Dialogue Lines";
        let termArr = ["A1", "A2", "B1", "B2", "C1", "C2"];
        let freqArr = [1009,252,229,217,69,93];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "byTerm") {
        document.getElementById("tableTitle").innerText = "Terms";
        document.getElementById("tableHeader1").innerText = "Function";
        document.getElementById("tableHeader2").innerText = "Number of Lemmas";
        let termArr = ["Noun", "Verb", "Pronoun", "Adverb", "Determiner", "Adjective", "Adposition", "Conjunction", "Interjection"];
        let freqArr = [1015,615,553,486,371,203,185,168,52];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "nicoNoun") {
        document.getElementById("tableTitle").innerText = "Nouns";
        document.getElementById("tableHeader1").innerText = "Lemma";
        document.getElementById("tableHeader2").innerText = "Frequency";
        let termArr = [
            "nico", "tasche", "hallo", "emma", "okay", "lisa", "tante", "yara", "pizza", "zimmer", "super", "problem", "adresse", "deutschland", "spanien", "nawin", "tag", "süden", "weg", "salami", "entschuldigung", "tschüss", "nina", "stift", "hi", "moment", "sevilla", "pass", "geburtstag", "fahrrad_lade", "euro", "berlin", "team", "morgen", "frau", "hotel", "könig_hof", "wiedersehen", "taxi", "name", "brunner", "fünf", "jahr", "party", "schinken", "frankreich", "tafel", "herr", "hey", "zentrum", "mama", "max", "vater", "ost", "foto", "zwölf", "lotte", "sebastian", "wow", "hawaii", "köln", "selma", "brille", "buch", "unterricht", "haus", "jugend_herberge", "gemüse", "stopp", "hilfe", "hausnummer", "flughafen", "s", "papa", "ciao", "lampe", "stadt", "bier", "milch", "freund", "speisekarte", "thunfisch", "syrien", "damaskus", "sprache", "deutsch", "wohnung", "zettel", "nawins", "auto", "küche", "bad", "los", "quadratmeter", "mittagessen", "müller", "schneider", "geht's", "reise", "ey", "ahnung", "telefon", "familie", "polizei", "idee", "fahrrad_geschäft", "einladung", "geschenk", "spass", "alt.", "fund_büro", "mann", "finder", "hmm", "schreiner_strasse", "gonzález", "wagnergasse", "passnummer", "handy", "yaras", "trinken", "cola", "limonade", "nehm", "kaffee", "zucker", "von", "book", "hunger", "salat", "radio", "leute", "tomate", "bitte", "ananas", "abscheiden_party", "sehenswürdigkeit", "hamburg", "heidelberg", "brandenburger", "tor", "spiel", "west", "norden", "schwede", "flüchtling", "deutsch_kurs", "englisch", "sprachschule", "lehrerin", "august_strauss_berg_gas", "nomen", "artikel", "stuhl", "bewerber", "mieter", "tür", "wg", "wohnzimmer", "wolf", "ecke", "teppich", "uni", "zahn", "abendessen", "kamp", "lena", "opa", "sarah", "tom", "adalbert-stifter-straße", "mist", "unterlage", "meeting", "restaurant", "martina", "herbert", "tillmanns", "scholl", "help", "do", "you", "need", "gone", "the", "strasse", "andel", "adel_schiff_strasse", "yippie", "amerika", "n", "sag", "spain", "barcelona", "madrid", "nummer", "polizist", "police", "polizeirevier", "sorge", "papier", "ausweis", "passport", "has", "a", "bicycle", "shop", "geschäft", "helps", "erfolg", "zahl", "charlotte", "happy", "birthday", "glückwunsch", "schlaf_sack", "isomatte", "traum_frau", "fall", "amor", "leben", "ruf", "telefonnummer", "werbung", "handy_nummer", "gott", "aufnäher", "fahrrad", "polizei_stelle", "scheinerstrasse", "r", "s-c-h-r-e-i-n-e-r", "glück", "jürgen", "geburtsdatum", "my", "know", "here", "waiting", "for", "dankeschön", "mutter", "flugzeug", "getränk", "apfel_saft", "wasser", "wein", "tee", "angebot", "durst", "posten", "frage", "hungry", "sushi", "liebling_italiener", "mozzarella", "vegetarierin", "mal", "nachricht", "bestellung", "karte", "rechnung", "trinkgeld", "bye-bye-party", "appetit", "dank", "kölner", "dom", "österreich", "schweiz", "düsseldorf", "woche", "münchen", "wart", "kommentar", "europa", "tada", "spezialität", "land", "fähnchen", "köttbullar", "nee", "norwegen", "käse", "japan", "italien", "gazpacho", "job", "marc", "sascha", "russland", "refugee", "aufenthaltserlaubni", "spanisch", "thailand", "thai", "antwort", "hol", "schlüssel", "rana", "jenny", "wörterbuch", "anzeige", "internet", "terrasse", "aufzug", "garage", "graupner", "heizung", "urlaub", "hostel", "hostels", "bekannte", "marvin", "fenster", "miete", "nebenkosten", "monat", "interessent", "mädel", "wolfgang", "nice", "tisch", "schrank", "sofa", "wand", "schlagzeug", "drums", "kissen", "chillen", "ulla", "nachbar", "katastrophe", "kollegin", "kurs", "volleyball_training", "training", "termin", "arzt", "schule", "lösung", "babysitting", "frühstück", "müsli", "apfel", "brokkoli", "uhr", "hausaufgabe", "chaos"
        ];
        let freqArr = [
            51, 42, 33, 32, 20, 19, 18, 16, 16, 16, 14, 13, 13, 13, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "nicoVerb") {
        document.getElementById("tableTitle").innerText = "Verbs";
        document.getElementById("tableHeader1").innerText = "Lemma";
        document.getElementById("tableHeader2").innerText = "Frequency";
        let termArr = [
            "sein", "haben", "kommen", "gehen", "suchen", "machen", "geben", "können", "wohnen", "sehen", "essen", "sprechen", "danken", "helfen", "heissen", "nehmen", "kennen", "wollen", "mögen", "verlieren", "gewinnen", "arbeiten", "müssen", "zahlen", "wissen", "rufen", "möchten", "fahren", "putzen", "brauchen", "warten", "hab", "werden", "finden", "sagen", "trinken", "kosen", "stimmen", "glauben", "hm", "spinnen", "anrufen", "abgeben", "freuen", "telefonieren", "sitzen", "spielen", "fangen", "bleiben", "tun", "flöten", "ankommen", "hinterlegen", "fliegen", "tanken", "kennenlernen", "verändern", "bedanken", "hören", "passieren", "sollen", "setzen", "meinen", "aunt", "informieren", "rausfinden", "klappen", "funktionieren", "leben", "lieben", "bestellen", "ähm", "bekommen", "tanzen", "zuordnen", "mag", "dürfen", "lernen", "unterrichten", "buchstabieren", "wiederholen", "gehören", "schreiben", "entschuldigen", "bitten", "umziehen", "verstehen", "übernachten", "fragen", "anschauen", "mich.", "stellen", "melden", "duschen", "beginnen", "passen", "stehen", "üben", "kontrollieren", "räumen", "kochen"
        ];
    
        let freqArr = [
            212, 50, 38, 18, 16, 13, 13, 12, 12, 12, 11, 10, 9, 8, 8, 8, 7, 6, 6, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "nicoPronoun") {
        document.getElementById("tableTitle").innerText = "Pronouns";
        document.getElementById("tableHeader1").innerText = "Lemma";
        document.getElementById("tableHeader2").innerText = "Frequency";
        let termArr = [
            "ich", "du", "der", "wir", "sie", "was", "es", "wie", "er", "wo", "dir", "wer", "ihr", "ihnen", "man", "mir", "woher", "wie_viel", "mich", "wann", "aller", "dich", "uns", "warum", "alles", "wohin", "etwas", "jemand", "euch", "sich", "beide"
            ];
        let freqArr = [
            106, 81, 81, 42, 34, 33, 28, 24, 20, 14, 10, 10, 9, 7, 6, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 1, 1, 1
            ];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "nicoAdv") {
        document.getElementById("tableTitle").innerText = "Adverbs";
        document.getElementById("tableHeader1").innerText = "Lemma";
        document.getElementById("tableHeader2").innerText = "Frequency";
        let termArr = [
            "ja", "nicht", "hier", "so", "danke", "auch", "nein", "dann", "also", "noch", "sehr", "mal", "da", "denn", "schon", "jetzt", "bitte", "morgen", "doch", "an", "hi", "vielleicht", "immer", "eh", "gerne", "zusammen", "s", "bald", "weg", "zu", "auf", "nie", "nur", "oft", "los", "bis", "you", "hab", "gar", "ganz", "ab", "heute", "bei", "wieder", "her", "erst", "marvin", "manja", "danach", "manchmal", "normalerweise", "gerade", "genau", "to", "ehh", "nicolás", "is", "abend", "raus", "aber", "deshalb", "tonno", "sogar", "gern", "sushi", "t-a-f-e-l", "post-its", "vorbei", "dran", "dort", "frei", "draussen", "mit", "viel", "jammen", "drauf", "manjas", "fast", "fern"
            ];
        let freqArr = [
            54, 41, 33, 23, 20, 20, 19, 19, 15, 14, 13, 13, 12, 12, 10, 9, 9, 9, 8, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "nicoDet") {
        document.getElementById("tableTitle").innerText = "Determiners";
        document.getElementById("tableHeader1").innerText = "Lemma";
        document.getElementById("tableHeader2").innerText = "Frequency";
        let termArr = [
            "der", "ein", "mein", "kein", "dein", "sein", "ihr", "viel", "welcher", "aller", "unser", "dieser", "wenig", "jeder", "euer"
            ];
        let freqArr = [
            165, 86, 40, 19, 18, 10, 9, 8, 5, 3, 3, 2, 1, 1, 1
            ];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "nicoAdj") {
        document.getElementById("tableTitle").innerText = "Adjectives";
        document.getElementById("tableHeader1").innerText = "Lemma";
        document.getElementById("tableHeader2").innerText = "Frequency";
        let termArr = [
            "gut", "schön", "deutsch", "gross", "cool", "tschüss", "nicos", "richtig", "klar", "genau", "bisschen", "schlecht", "heiss", "alt", "klein", "teuer", "kurz", "ehm", "she", "spät", "herzlich", "willkommen", "kaputt", "bar", "nächst", "hm", "schnell", "englisch", "italienisch", "echt", "ander", "rot", "ähm", "leid", "laut", "help", "aunt", "there", "süss", "edel", "greif", "schwarz", "does", "you", "are", "alt.", "hübsch", "ne", "getrennt", "eingeladen", "letzt", "verschieden", "einfach", "perfekt", "international", "spanisch", "chinesisch", "französisch", "gelb", "falsch", "wirklich", "jung", "neu", "hell", "frei", "ruhig", "gemütlich", "sauber", "dreckig", "nett", "krank", "ganz", "wichtig", "halb", "total"
            ];
        let freqArr = [
            48, 11, 7, 7, 6, 6, 6, 6, 5, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "nicoAdp") {
        document.getElementById("tableTitle").innerText = "Adpositions";
        document.getElementById("tableHeader1").innerText = "Lemma";
        document.getElementById("tableHeader2").innerText = "Frequency";
        let termArr = [
            "in", "aus", "mit", "zu", "von", "für", "nach", "auf", "bis", "an", "bei", "ohne", "plus", "um", "gegen"
            ];
        let freqArr = [
            67, 22, 21, 15, 13, 8, 8, 7, 7, 5, 5, 4, 1, 1, 1
            ];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "nicoConj") {
        document.getElementById("tableTitle").innerText = "Conjunctions";
        document.getElementById("tableHeader1").innerText = "Lemma";
        document.getElementById("tableHeader2").innerText = "Frequency";
        let termArr = [
            "und", "oder", "aber", "bis", "wie", "doch", "wenn", "dass"
            ];
        let freqArr = [
            114, 21, 21, 3, 3, 2, 2, 2
            ];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    } else if (viewName === "nicoInt") {
        document.getElementById("tableTitle").innerText = "Interjections";
        document.getElementById("tableHeader1").innerText = "Lemma";
        document.getElementById("tableHeader2").innerText = "Frequency";
        let termArr = [
            "ah", "oh", "äh", "na", "ja", "prost", "naja", "he", "ach", "aha", "mhm"
            ];
        let freqArr = [
            12, 11, 8, 5, 5, 5, 2, 1, 1, 1, 1
            ];
        let tableBodyEl = document.getElementById("tableBody");
        tableBodyEl.innerHTML = '';
        popTable(termArr, freqArr);
    }
}

function popTable(terms, freq) {

    for (let i = 0; i < terms.length; i++) {
        const tabBody = document.querySelector('#tableBody');
        const tabRow = document.createElement('tr');
        tabBody.appendChild(tabRow);

        //Create a table data
        const tabData1 = document.createElement('td');
        tabData1.classList.add('text-center');
        tabRow.appendChild(tabData1);
        const termText = document.createTextNode(terms[i]);
        tabData1.appendChild(termText);

        //Create a table data
        const tabData2 = document.createElement('td');
        tabData2.classList.add('text-center');
        tabRow.appendChild(tabData2);
        const termFreq = document.createTextNode (freq[i]);
        tabData2.appendChild(termFreq);
    }
}