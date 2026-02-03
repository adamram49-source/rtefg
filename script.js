import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMp5-wqinWTl4z0ms6bmnXgm9EvqPcbug",
  authDomain: "mytwoplayergame.firebaseapp.com",

  // 🔥🔥 זה החלק שאצלך כמעט בטוח חסר או שגוי
  databaseURL: "https://mytwoplayergame-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "mytwoplayergame",
  storageBucket: "mytwoplayergame.firebasestorage.app",
  messagingSenderId: "1003705475156",
  appId: "1:1003705475156:web:0d56aeef31623413238dc1"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const btn = document.getElementById("btn");
const out = document.getElementById("out");

// כתיבה
btn.onclick = async () => {
  await set(ref(db, "syncTest/value"), {
    time: Date.now()
  });
};

// קריאה בזמן אמת (זה הסנכרון!)
onValue(ref(db, "syncTest/value"), (snap) => {
  out.innerText = "עודכן: " + JSON.stringify(snap.val());
});
