const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...")
    } else if (hour > 12 && hour < 17) {
        speak("Good Afternoon Master...")
    } else {
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', () => {
    speak("Initializing FRIDAY..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', () => {
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google sir...")
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube sir...")
    } else if (message.includes("marwadi student login")) {
        window.open("https://login.marwadiuniversity.ac.in:553/", "_blank");
        speak("Opening marwadi university student login sir...")
    } else if (message.includes("spotify")) {
        window.open("https://open.spotify.com/", "_blank");
        speak("Opening spotify sir...")
    } else if (message.includes("prime music")) {
        window.open("https://music.amazon.in/", "_blank");
        speak("Opening amazon prime music  sir...")
    } else if (message.includes("youtube music ")) {
        window.open("https://music.youtube.com/", "_blank");
        speak("Opening youtube music sir...")
    } else if (message.includes("prime")) {
        window.open("https://www.primevideo.com/region/eu/offers/nonprimehomepage/ref=dv_web_force_root", "_blank");
        speak("Opening amazon prime sir...")
    } else if (message.includes("hotstar ")) {
        window.open("https://www.hotstar.com/in", "_blank");
        speak("Opening hotstar  sir...")
    } else if (message.includes("zee 5")) {
        window.open("https://www.zee5.com/?utm_source=GoogleSearch&utm_medium=Mark_CPA&utm_campaign=Search_SVOD_ZEE5-Brand-ZEE5-Only-Ex-Performance&utm_term=zee5&utm_content=Brand-ZEE5-Only-Ex&gad_source=1&gclid=EAIaIQobChMIka7Vt-XqiAMVgy2DAx1jegQEEAAYASAAEgLjFvD_BwE&gclsrc=aw.ds", "_blank");
        speak("Opening zee 5  sir...")
    } else if (message.includes("sonyliv ")) {
        window.open("https://www.sonyliv.com/", "_blank");
        speak("Opening sonyiv  sir...")
    } else if (message.includes("jio cinema ")) {
        window.open("https://www.jiocinema.com/", "_blank");
        speak("Opening jiocinema  sir...")
    } else if (message.includes("flipkart ")) {
        window.open("https://www.flipkart.com/", "_blank");
        speak("Opening flipkart sir...")
    } else if (message.includes("amazon ")) {
        window.open("https://www.amazon.in/", "_blank");
        speak("Opening amazon sir...")
    } else if (message.includes("myntra ")) {
        window.open("https://www.myntra.com/?utm_source=dms_google&utm_medium=searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK_New&gad_source=1&gclid=EAIaIQobChMIlMrl1ObqiAMVhaVmAh3JWRBSEAAYASAAEgJmHfD_BwE", "_blank");
        speak("Opening myntra sir...")
    } else if (message.includes("nykaa ")) {
        window.open("https://www.nykaa.com/sp/main-sale-page/mega-sale?utm_content=ads&utm_source=GooglePaid&utm_medium=search&utm_campaign=Search_Nykaa_NCA&hlp=hlpa&gad_source=1&gclid=EAIaIQobChMI5NHf7ObqiAMVTw6DAx3YnAsZEAAYASAAEgLAVfD_BwE", "_blank");
        speak("Opening nykaa sir...")
    } else if (message.includes("ajio")) {
        window.open("https://www.ajio.com/", "_blank");
        speak("Opening ajio sir...")
    } else if (message.includes("snapdeal ")) {
        window.open("https://www.snapdeal.com/", "_blank");
        speak("Opening snapdealsir...")
    } else if (message.includes("meesho ")) {
        window.open("https://www.meesho.com/?srsltid=AfmBOor8N2ArOKEphapetxsLTM907J_kLh7g1QS6gtkN0uAcbquqROqU", "_blank");
        speak("Opening meesho sir...")
    } else if (message.includes("olx ")) {
        window.open("https://www.olx.in/en-in", "_blank");
        speak("Opening olx sir...")
    } else if (message.includes("bigbasket")) {
        window.open("https://www.bigbasket.com/", "_blank");
        speak("Opening bigbasket sir...")
    } else if (message.includes("flight tickets ")) {
        window.open("https://www.ixigo.com/flights", "_blank");
        speak("flight tickets sir...")
    } else if (message.includes("train tickets ")) {
        window.open("Opening i x i g o train tickets portel, sir", "https://www.ixigo.com/trains", "_blank");
        speak("Opening i x i g o train tickets sir...")
    } else if (message.includes("train tracking ")) {
        window.open("https://www.ixigo.com/trains/train-running-status", "_blank");
        speak("tracking train location ...")
    } else if (message.includes("irctc ")) {
        window.open("https://www.irctc.co.in/nget/train-search", "_blank");
        speak("Opening irctc governament for train tickets sir...")
    } else if (message.includes("bookmyshow ")) {
        window.open("https://in.bookmyshow.com/", "_blank");
        speak("Opening book my show sir...")
    } else if (message.includes("ticket new  ")) {
        window.open("Opening ticket new to  buy movie tickets , sir", "https://ticketnew.com/movies", "_blank");
        speak("Opening ticketnew sir...")
    } else if (message.includes("facebook ")) {
        window.open("https://www.facebook.com/", "_blank");
        speak("Opening facebook sir...")
    } else if (message.includes("instagram ")) {
        window.open("https://www.instagram.com/accounts/login/?hl=en", "_blank");
        speak("Opening instagram sir...")
    } else if (message.includes("linkedin ")) {
        window.open("https://in.linkedin.com/", "_blank");
        speak("Opening linkedin sir...")
    } else if (message.includes("whatsapp")) {
        window.open("https://web.whatsapp.com/", "_blank");
        speak("Opening whatsapp sir...")
    } else if (message.includes("snapchat ")) {
        window.open("https://web.snapchat.com/", "_blank");
        speak("Opening snapchat sir...")
    } else if (message.includes("telegram ")) {
        window.open("https://web.telegram.org/", "_blank");
        speak("Opening telegram sir...")
    } else if (message.includes("x ")) {
        window.open("https://x.com/?lang=en", "_blank");
        speak("Opening x sir...")
    } else if (message.includes("threads ")) {
        window.open("https://www.threads.net/?hl=en", "_blank");
        speak("Opening threads sir...")
    } else if (message.includes("digilocker ")) {
        window.open("https://www.digilocker.gov.in/", "_blank");
        speak("Opening digilocker sir...")
    } else if (message.includes("canva ")) {
        window.open("https://www.canva.com/en_in/", "_blank");
        speak("Opening canva sir...")
    } else if (message.includes("cricket score ")) {
        window.open("https://crex.live", "_blank");
        speak("Opening cricket score live  sir...")
    } else if (message.includes("photos ")) {
        window.open("https://www.google.com/photos/about/", "_blank");
        speak("Opening google photos sir...")
    } else if (message.includes("maps ")) {
        window.open("https://www.google.com/maps", "_blank");
        speak("Opening google maps sir...")
    } else if (message.includes("decathlon")) {
        window.open("https://www.decathlon.in/", "_blank");
        speak("Opening decathlon sir...")
    } else if (message.includes("apple ")) {
        window.open("https://www.apple.com/in/store?afid=p238%7Csfo291LJq-dc_mtid_187079nc38483_pcrid_714003042929_pgrid_109516736059_pntwk_g_pchan__pexid__ptid_kwd-12522920_&cid=aos-IN-kwgo-brand--slid---product-", "_blank");
        speak("Opening apple sir...")
    } else if (message.includes("postman ")) {
        window.open("https://www.postman.com/", "_blank");
        speak("Opening postman sir...")
    } else if (message.includes("chatgpt ")) {
        window.open("https://chatgpt.com/", "_blank");
        speak("Opening chatgpt bot sir...")
    } else if (message.includes("github ")) {
        window.open("https://github.com/", "_blank");
        speak("Opening github sir...")
    } else if (message.includes("zoom meet ")) {
        window.open("https://www.zoom.com/", "_blank");
        speak("Opening zoom meet sir...")
    } else if (message.includes("meet ")) {
        window.open("https://workspace.google.com/products/meet/", "_blank");
        speak("Opening google meet sir...")
    } else if (message.includes("gmail ")) {
        window.open("https://www.google.com/intl/en-US/gmail/about/", "_blank");
        speak("Opening gmail sir...")
    } else if (message.includes("rapido ")) {
        window.open("https://www.rapido.bike/", "_blank");
        speak("Opening rapido sir...")
    } else if (message.includes("uber ")) {
        window.open("www.uber.com/in/en/", "_blank");
        speak("Opening uber sir...")
    } else if (message.includes("ola ")) {
        window.open("https://www.olacabs.com/", "_blank");
        speak("Opening ola sir...")
    } else if (message.includes("truecaller ")) {
        window.open("https://www.truecaller.com/", "_blank");
        speak("Opening truecaller sir...")
    } else if (message.includes("ajio ")) {
        window.open("https://www.jio.com/", "_blank");
        speak("Opening ajio sir...")
    } else if (message.includes("airtel ")) {
        window.open("https://www.airtel.in/", "_blank");
        speak("Opening airtel sir...")
    } else if (message.includes("vadefone idea ")) {
        window.open("https://www.myvi.in/", "_blank");
        speak("Opening vadefone idea sir...")
    } else if (message.includes("bsnl ")) {
        window.open("https://www.bsnl.co.in/", "_blank");
        speak("Opening bsnl sir...")
    } else if (message.includes("phonepe ")) {
        window.open("https://www.phonepe.com/", "_blank");
        speak("Opening phonepe sir...")
    } else if (message.includes("paytm ")) {
        window.open("https://paytm.com/", "_blank");
        speak("Opening paytm sir...")
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        const finalText = date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('https://www.calculator.net/')
        const finalText = "Opening Calculator sir";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}