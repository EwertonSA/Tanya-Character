# Tropper-Walk

A lightweight Three.js project that renders a 3D scene with a stylized walking character, environment props, lighting, and interactive keyboard-driven animations. The app is built with Vite and uses GLTF models, Draco compressed assets, and custom movement logic.

## Overview

This project creates a small interactive 3D arena where a character can:

- walk around the scene
- jump and perform acrobatic movement
- transition into idle, attack, and combat poses
- shoot and perform attack actions
- orbit around the scene with a follow camera

The current implementation is focused on animation and interaction rather than a full game engine, making it a good base for experimenting with character control, animation states, and Three.js scene composition.

## Features

- Three.js scene setup with lighting and environment reflections
- GLTF model loading with Draco support
- Keyboard-based character control
- Animated movement states (walk, jump, idle, fight, shoot)
- Procedural ground and wall environment
- Camera that follows the character in real time

## Tech Stack

- Vite
- Three.js
- JavaScript (ES Modules)
- GLTFLoader
- DRACOLoader

## Project Structure

```text
.
├── index.html
├── package.json
├── public/
│   └── assets/
│       ├── draco/
│       ├── tanya.glb
│       ├── coco.glb
│       ├── aerial_beach_01_diff_1k.jpg
│       └── marble_rock_03_diff_1k.jpg
├── src/
│   ├── main.js
│   └── Movements/
│       ├── Fight/
│       ├── Jump/
│       ├── Idle.js
│       ├── Walk.js
│       └── ...
└── README.md
```

## Requirements

- Node.js 18+
- npm

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/EwertonSA/Tropper-Walk.git
cd Tropper-Walk
```

2. Install dependencies:

```bash
npm install
```

3. Add the required assets to `public/assets/`.

This project references the following files in code:

- `public/assets/tanya.glb`
- `public/assets/coco.glb`
- `public/assets/aerial_beach_01_diff_1k.jpg`
- `public/assets/marble_rock_03_diff_1k.jpg`
- `public/assets/draco/`

The repository does not include copyrighted or generated 3D asset files by default, so you need to provide your own models/textures or replace them with your own assets before running the app.

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Controls

Use the keyboard to interact with the character:

- `W` / `A` / `S` / `D` — move around
- `Space` — jump
- `R` — somersault / acrobatic move
- `F` — fight animation
- `G` — punch animation
- `I` — idle pose
- `T` — shoot action

## Notes

- The scene uses the `GLTFLoader` and `DRACOLoader` to import 3D assets.
- The camera follows the character automatically.
- The app is meant to be a demo/prototype, and the animation behavior is controlled directly in `src/main.js` and the movement files inside `src/Movements`.

## License

This project is currently distributed without a specific license file. If you plan to publish or share it publicly, consider adding an appropriate license (for example, MIT) to clarify usage rights.

## Future Improvements

- add a proper character selection menu
- polish animations and transitions
- add sound effects and environment details
- separate logic into cleaner modules and state management
- add a main menu / intro screen
