# Git + Multi-Section Page

## Git

Git is a Version Control System used to track, save and manage project changes.

### Workflow

```text
Modify Files
    ↓
git status
    ↓
git add .
    ↓
git commit -m "message"
    ↓
git push
```

### Commands

```bash
git init
```

Initialize repository.

```bash
git status
```

View changed files.

```bash
git add .
```

Stage all changes.

```bash
git commit -m "message"
```

Save a project snapshot.

```bash
git push
```

Upload commits to GitHub.

```bash
git pull
```

Download latest changes.

---

## Branches

A branch is a safe copy of the project used for testing and development.

### Create Testing Branch

```bash
git switch -c testing
```

### Switch Branch

```bash
git switch testing
git switch main
```

### Push Testing Branch

```bash
git push -u origin testing
```

### Merge Testing into Main

```bash
git switch main
git merge testing
git push
```

### Workflow

```text
main
 ↓
testing
 ↓
Experiment
 ↓
Commit
 ↓
Push
 ↓
Merge to main
 ↓
Continue testing
```

### Key Point

```text
Push to testing
≠
Update main

Merge testing
=
Update main
```

---

## Multi-Section Page

### Structure

```text
Header
Navbar
Hero Section
Features Section
Contact Form
Footer
```

### HTML Concepts Used

```html
<header>
<nav>
<section>
<form>
<table>
<footer>
```

### CSS Concepts Used

```css
display:flex;
justify-content;
align-items;
gap;
flex-wrap;
hover;
```

### Responsive Design

```html
<meta name="viewport"
content="width=device-width, initial-scale=1.0">
```

```css
@media(max-width:768px)
```

Mobile Layout:

```text
Navbar → Vertical
Hero → Stack
Cards → Stack
```