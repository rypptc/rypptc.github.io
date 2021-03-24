document.addEventListener('DOMContentLoaded', function() {

    // Button actions

    document.querySelector('#answerBtn').onclick = () => answer_button();
    document.querySelector('#repeatBtn').onclick = () => repeat_button();
    document.querySelector('#saveBtn').onclick = () => save_button();

    // Display front card and hide back card

    document.querySelector('#backSide').style.display = 'none';

    randomNum = Math.floor(Math.random() * (myFlashcards.length))

    // Display video
    document.querySelector('#vidFrame').setAttribute('src', `${myFlashcards[randomNum].video}`);

    // Create Front Card text
    for (i=0; i < myFlashcards[randomNum].deDialog.length; i++) {
        const elem = document.createElement('p');
        elem.classList.add('pb-3');
        const lineBreak = document.createElement('br');
        elem.classList.add('d-inline');
        const div1 = document.querySelector('#dial1');
        const elemText = document.createTextNode(myFlashcards[randomNum].deDialog[i]); 
        elem.appendChild(elemText);
        if (i < (myFlashcards[randomNum].deDialog.length - 1)) {
            elem.appendChild(lineBreak);
        }
        div1.appendChild(elem);
    }
    // Create Back Card text

    for (i=0; i < myFlashcards[randomNum].enDialog.length; i++) {
        const elem = document.createElement('p');
        elem.classList.add('pb-3');
        const lineBreak = document.createElement('br');
        elem.classList.add('d-inline');
        const div1 = document.querySelector('#dial2');
        const elemText = document.createTextNode(myFlashcards[randomNum].enDialog[i]); 
        elem.appendChild(elemText);
        if (i < (myFlashcards[randomNum].deDialog.length - 1)) {
            elem.appendChild(lineBreak);
        }
        div1.appendChild(elem);
    }

})

function answer_button() {
    document.querySelector('#backSide').style.display = 'block';
}

function repeat_button() {
    location.reload()
}

function save_button() {
    location.reload()
}


const myFlashcards = [
    {
        fcId: 1,
        video: "static\\nico01.mp4",
        deDialog: [
            "Hi.", 
            "Hi.", 
            "Hi, Lisa! Wer ist denn das?", 
            "Das ist Nico.", 
            "Hallo, Nico. Ich bin Sebastian."
        ],
        enDialog: [
            "Hi.",
            "Hi, Lisa! Who is this?",
            "This is Nico.",
            "Hi, I'm Nico.",
            "Hi, Nico. I'm Sebastian. What are you doing here?"
        ]
    },
    {
        fcId: 2,
        video: "static\\nico02.mp4",
        deDialog: [
            "Was machst du hier?",
            "Ich habe ein Problem:",
            "Meine Tasche ist weg und mein Handy und mein Pass sind auch weg.",
            "Und Yaras Adresse ist auch weg."
        ],
        enDialog: [
            "Hi, Nico. I'm Sebastian. What are you doing here?",
            "I have a problem:",
            "My bag is gone and my cellphone and passport are gone, too.",
            "And Yara's address is gone, too."            
        ]
    },
    {
        fcId: 3,
        video: "static\\nico03.mp4",
        deDialog: [
            "Okay, das ist nicht so gut. Und woher kommst du?",
            "Ich komme aus Spanien. Ich wohne in Sevilla."
        ],
        enDialog: [
            "Okay, that's not very good. And where are you from?",
            "I'm from Spain. I live in Seville."
        ]
    },
    {
        fcId: 4,
        video: "static\\nico04.mp4",
        deDialog: [
            "Schön. Und wer ist Yara?",
            "Yara ist Nicos Tante. Er hat gesagt, sie hat hier",
            "einen Fahrradladen. Aber er hat die Adresse nicht."
        ],
        enDialog: [
            "Nice. And who is Yara?",
            "Yara is Nico's aunt. He said that she has a bike shop here.",
            "But he doesn't have the address."
        ]
    },
    {
        fcId: 5,
        video: "static\\nico05.mp4",
        deDialog: [
            "Auch nicht so gut. Und wie alt bist du?",
            "Ich bin 22 Jahre alt. Und du? Kommst du aus Deutschland?",
            "Ich bin 25 Jahre. Und ja, ich komme aus Deutschland.",
            "Und ich heiße Nina. Ich komme auch aus Deutschland",
            "und bin 23 Jahre alt. Hi!"
        ],
        enDialog: [
            "Oh that's not very good, either. And how old are you?",
            "I'm 22 years old. And you? Are you from Germany?",
            "I'm 25. And yes, I'm from Germany.",
            "And I'm Nina. I'm from Germany, too,",
            "and I'm 23 years old. Hi!"
        ]
    },
    {
        fcId: 6,
        video: "static\\nico06.mp4",
        deDialog: [
            "Kann Nico zwei Tage hier wohnen?",
            "Klar. Kein Problem!",
            "Willkommen in der Wagnergasse!",
            "Dankeschön! Herzlich willkommen!"
        ],
        enDialog: [
            "Can Nico stay here for two days?",
            "Of course. No problem!",
            "Welcome to Wagnergasse!",
            "Thanks so much! Welcome!"
        ]
    },
    {
        fcId: 7,
        video: "static\\nico07.mp4",
        deDialog: [
            "Und es gibt eine Party?",
            "Ja, aber wir haben ein kleines Problem.",
            "Die Lampe ist kaputt.",
            "Kann ich?"     
        ],
        enDialog: [
            "And there's a party?",
            "Yes, but we have a little problem.",
            "The light is broken.",
            "May I?"
        ]
    },
    {
        fcId: 8,
        video: "static\\nico08.mp4",
        deDialog: [
            "Klar. Hat am Flughafen alles geklappt? Geht es Emma gut?",
            "Ja. Emmas Mutter sitzt im Flugzeug und Emma geht es gut, die ist bei Lotte."
        ],
        enDialog: [
            "Of course. Did everything work out at the airport? Is Emma doing well?",
            "Yes. Emma's mother's on an airplane and Emma's doing well. She's at Lotte's."
        ]
    },
    {
        fcId: 9,
        video: "static\\nico09.mp4",
        deDialog: [
            "Ey, wow! Die Lampe funktioniert wieder.",
            "Super, Nico! Danke! Möchtest du etwas trinken?",
            "Trinken?",
            "Ja, trinken, ein Getränk!",
            "Oder zwei.",
            "Oder drei."
        ],
        enDialog: [
            "Hey ... Wow, the light's working again.",
            "Super, Nico! Thanks! Would you like something to drink?",
            "To drink?",
            "Yes, to drink. A drink!",
            "Or two.",
            "Or three."
        ]
    }
];