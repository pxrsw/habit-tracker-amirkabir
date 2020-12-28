# Habit Tracker

### what is Habit Tracker ?

> A habit tracker is a simple way to measure whether you did a habit.The most basic format is to get a calendar and cross off each day you stick with your routine.

---

## Features

- Add Habit
- Add done , not done and none button
- Delete habit one or more at a time

---

## Tool Used

| Particular           | Version |
| -------------------- | ------- |
| express              | 4.17.1  |
| ejs                  | 3.1.3   |
| express-ejs-layouts  | 2.5.0   |
| express-session      | 1.17.1  |
| mongoose             | 5.9.25  |
| node-sass-middleware | 0.11.0  |
| cookie-parser        | 1.4.5   |
| connect-flash        | 0.1.1   |

---

## Tree Structure

```
├─ assets
│  ├─ css
│  │  ├─ habits.css
│  │  ├─ header.css
│  │  ├─ home.css
│  │  ├─ layout.css
│  │  └─ weekView.css
│  ├─ js
│  │  ├─ habit.js
│  │  └─ week.js
│  ├─ scss
│  │  ├─ habits.scss
│  │  ├─ header.scss
│  │  ├─ home.scss
│  │  ├─ layout.scss
│  │  └─ weekView.scss
│  └─ videos
│     └─ tracker.gif
├─ config
│  ├─ middleware.js
│  └─ mongoose.js
├─ controllers
│  ├─ habits_controller.js
│  ├─ home_controllers.js
│  ├─ user_controllers.js
│  └─ week_view_controllers.js
├─ models
│  ├─ habit.js
│  └─ week.js
├─ routes
│  ├─ index.js
│  └─ users.js
├─ views
│  ├─ _header.ejs
│  ├─ home.ejs
│  ├─ layout.ejs
│  ├─ user_trackHabit.ejs
│  └─ week_views.ejs
├─ .gitignore
├─ README.md
├─ index.js
├─ package-lock.json
└─ package.json
```

## How to start App

> Install dependencies to start the project.

```
npm install
```

> Run MongoDb Server Locally by using connection string

```
mongodb://localhost/health
```

> Start project by using command below

```
npm start
```

> To run in the browser

```
localhost
```

---

**Deployment Link** :-https://health-trakcer-app.herokuapp.com/

## Video To Introduce

![video](/assets/videos/tracker.gif)
