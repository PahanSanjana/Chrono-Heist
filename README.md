# Chrono Heist ⏳🎮 
A **web-based stealth-puzzle game** where players use time manipulation to pull off heists. Rewind mistakes, outsmart guards, and solve environmental puzzles.

## 🚀 Features

-   **Time Rewind Mechanic**: Undo mistakes with limited chrono-energy.
-   **Dynamic Guard AI**: Patrols, vision cones, and sound detection.
-   **Minimalist UI**: Focus on immersion with clean HUD.
-   **3D/2D Toggle**: Built with Babylon.js (3D) or PixiJS (2D).
-   **Save System**: Django backend for progress tracking.

## 🛠️ Technologies

| Component    | Technology          |
| :----------- | :------------------ |
| **Frontend** | Babylon.js (3D) / PixiJS (2D) |
| **Backend** | Django (Python)     |
| **UI** | HTML/CSS/JavaScript |
| **Physics** | Cannon.js (3D)      |

![Babylon.js](https://img.shields.io/badge/Babylon.js-FF6D00?logo=babylon.js)
![Django](https://img.shields.io/badge/Django-092E20?logo=django)

## 📂 Project Structure

```plaintext
/src
  /js          # Game logic (Babylon.js/PixiJS)
  /css         # Styles
  /assets      # Textures, sounds, models
index.html     # Main entry
/backend       # Django save system
