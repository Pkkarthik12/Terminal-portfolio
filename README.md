# >_ terminal-portfolio

A terminal-themed personal portfolio website — pure HTML, CSS, and JavaScript. No frameworks, no build steps, no dependencies.



## ✨ Features

- Fully interactive terminal emulator in the browser
- CRT scanline & flicker effects
- Command history (↑ / ↓ arrow keys)
- Tab-completion for commands
- Boot sequence animation
- Ctrl+L to clear
- Responsive for mobile

## 🚀 Getting Started

### Option 1 — Open directly
Just double-click `index.html`. It works without a server.

### Option 2 — Local dev server
```bash
npx serve .
# or
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## 🛠 Customization

**1. Update your info**

Open `js/commands.js` and edit the command handlers:
- `about` — your bio
- `skills` — your tech stack
- `projects` — your work
- `experience` — your history
- `contact` — your links

**2. Add your resume**

Drop a PDF named `resume.pdf` into the `assets/` folder.

**3. Change the color theme**

Edit the CSS variables at the top of `css/style.css`:
```css
:root {
  --green:     #39ff82;   /* primary accent */
  --bg:        #0a0e0b;   /* background */
  --surface:   #0d1410;   /* terminal window */
  /* ... */
}
```

## 📁 Project Structure

```
terminal-portfolio/
├── index.html          # Entry point
├── css/
│   └── style.css       # All styles + CRT effects
├── js/
│   ├── commands.js     # Command definitions (edit me!)
│   └── terminal.js     # Terminal engine
├── assets/
│   ├── favicon.svg     # Browser icon
│   └── resume.pdf      # Add your resume here
└── README.md
```

## 📦 Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Visit `https://yourusername.github.io/terminal-portfolio`

## 🎮 Commands

| Command      | Description              |
|-------------|--------------------------|
| `help`       | List all commands        |
| `about`      | Bio & intro              |
| `skills`     | Tech stack               |
| `projects`   | Portfolio projects       |
| `experience` | Work & education history |
| `contact`    | Links & email            |
| `resume`     | Download resume PDF      |
| `whoami`     | Quick one-liner          |
| `banner`     | ASCII art header         |
| `clear`      | Clear the screen         |
| `easter`     | 🤫                        |

## License

MIT — do whatever you want with it.
