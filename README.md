# 🎵 Music Application with Drag-and-Drop Functionality (Monorepo)

This project is a web-based music application that allows users to explore top music tracks based on genre, with drag-and-drop functionality. The app is built using **Next.js** for the frontend and **Apollo Server** for the GraphQL backend, organized in a **Monorepo** using **Turborepo**. The backend fetches music data from the **TheAudioDB** API, and the frontend lets users interact with the data dynamically.

## 🚀 Features

- Browse top music tracks by genre.
- Drag-and-drop functionality for track arrangement.
- Monorepo structure managed by **Turborepo**.
- Built with **Next.js** (frontend) and **Apollo Server** with **GraphQL** (backend).
- Fetches real-time data from **TheAudioDB** without the need for API credentials.
- Clean and responsive UI.

## 🛠️ Tech Stack

- **Monorepo Tool**: Turborepo
- **Frontend**: Next.js, Apollo Client, React Beautiful DnD
- **Backend**: Apollo Server, GraphQL, Node.js
- **Music API**: [TheAudioDB](https://www.theaudiodb.com/)
- **Languages**: TypeScript, JavaScript

## 📦 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SOUMITR0-SAHA/FOG-technologies
cd FOG-technologies
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start the Backend (GraphQL Server)

Go to the `apps/api` directory and start the GraphQL server:

```bash
cd apps/api
pnpm run dev
```

The server will run at `http://localhost:4000`.

### 4. Start the Frontend (Next.js) Application

Go to the `apps/web` directory and start the Next.js development server:

```bash
cd apps/frontend
npm run dev
```

The frontend will be available at `http://localhost:3000`.

## 📚 Usage

1. Open your browser and go to `http://localhost:3000`.
2. Explore a list of top tracks by genre.
3. Use the drag-and-drop feature to rearrange tracks.
4. Change the genre to explore different types of music.

## 🎨 Drag-and-Drop Functionality

The application uses **react-beautiful-dnd** for drag-and-drop functionality. Users can rearrange tracks within the list to create custom orders.

## 🔧 Monorepo Structure

The project uses **Turborepo** to manage the frontend and backend applications in a single repository.

```bash
music-app-monorepo/
├── apps/
│   ├── api/                # Backend with Apollo Server and GraphQL
│   │   ├── schema.js       # GraphQL type definitions and resolvers
│   │   └── server.js       # Apollo Server setup
│   ├── web/                # Frontend with Next.js
│   │   └── src/
│   │       ├── apollo-client.js # Apollo Client setup
|   |       └──app
│   │           └── page.js
├── package.json            # Root package.json
├── turbo.json              # Turborepo configuration
├── README.md
```

### Turborepo

[Turborepo](https://turbo.build/repo) is used to manage both frontend and backend codebases under a single repository. It helps with faster builds and efficient task running.

## 🛠️ API Details

This project uses **TheAudioDB** as a free music API for fetching top tracks by genre. The API provides access to information about tracks, albums, and artists.

**Base API URL:**

```
https://www.theaudiodb.com/api/v1/json/1/track-top10.php?s=<genre>
```

Replace `<genre>` with the desired genre (e.g., rock, pop, jazz).

## 🚀 Future Improvements

- Add user authentication to create personal playlists.
- Add a search functionality for tracks, albums, or artists.
- Implement a media player to play selected tracks.
- Improve error handling for API requests.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#) or create a pull request.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
