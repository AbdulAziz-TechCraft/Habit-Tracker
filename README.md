# 🌱 Habit Tracker Progressive Web App (PWA)

An installable and offline-first Habit Tracker built with **React**, **Tailwind CSS**, **IndexedDB**, and **Workbox**. Track daily habits, monitor streaks, visualize progress, and stay motivated — even without internet access.

---

## 📌 Features

- ✅ Daily habit check-in & streak tracking  
- 📊 Progress analytics via charts  
- 🌙 Dark/Light mode with smooth transitions  
- 🔒 Offline support using IndexedDB  
- 🧠 Mock push notifications/reminder alerts  
- 📦 Fully installable as a PWA  
- 🛠 Built using Workbox service worker  
- 🗃 Emoji/Icon picker for habits  
- 📅 Calendar view for habit check history  
- 🌟 Pin/Favorite habits  
- 🧹 Edit/Delete habits  
- 🔍 Sort, search, and filter habits  
- ✨ Smooth animations and floating action button

---

## 🛠 Tech Stack

- **React** (with functional components and hooks)
- **Tailwind CSS** for styling
- **IndexedDB** via [`idb`](https://www.npmjs.com/package/idb)
- **Chart.js** for progress visualization
- **Workbox** for service worker and caching
- **React Toastify** for notifications

---
📁 Project Structure

/public
  ├─ manifest.json
  ├─ service-worker.js (Workbox)
  └─ icons/
  
/src
  ├─ components/
  ├─ pages/
  ├─ utils/
  ├─ db/indexedDB.js
  ├─ App.js
  ├─ index.js
  └─ styles/tailwind.css

  📱 PWA Support
The app includes manifest.json, icons, and a Workbox-generated service worker.

It is installable on desktop and mobile.

Offline support via IndexedDB and pre-cached assets.

📆 Upcoming Features (Optional)
🎯 Habit goal setting

👥 Multi-user support (via Firebase or Supabase)

⏰ Real push notifications

📤 Cloud sync

📃 License
This project is licensed under the MIT License.

🙌 Author
Made with 💻 by Shaik Abdul Aziz
