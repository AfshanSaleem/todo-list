# To-Do List

A simple to-do list web app with full CRUD functionality, built using plain HTML, CSS, and JavaScript.

## Features

- **Create** — add new tasks via an input field and "Add Task" button
- **Read** — tasks render dynamically from a JavaScript array onto the page
- **Update** — mark tasks complete via checkbox (with strikethrough styling), or double-click a task's text to edit it
- **Delete** — remove individual tasks, or use "Clear All" to remove everything at once
- **Task counter** — displays the current number of tasks
- **Persistence** — tasks are saved so they're not lost on page refresh

## Tech Stack

- HTML5
- CSS3 (Flexbox layout, custom theming)
- Vanilla JavaScript (DOM manipulation, event listeners, no frameworks)

## How to Run

1. Clone this repository
2. Open `index.html` in any web browser
3. Start adding tasks

## Project Structure

```
todo-list/
├── index.html    # Page structure
├── style.css     # Styling and layout
└── script.js     # CRUD logic and DOM manipulation
```

## Possible Future Improvements

- Filter tasks by status (all / active / completed)
- Drag-and-drop task reordering
- Backend integration (e.g. Firebase or Supabase) for persistence across devices
