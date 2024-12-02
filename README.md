# web-dev-final-project
Final project for Aaron, Andrew, Tati and Jericho

# Music Connect - Final Project

## Overview

**Music Connect** is a social music-sharing application that allows users to connect over their favorite tunes, share posts, and explore the musical tastes of others. Built on the foundations of Spotify's API, our application bridges users by letting them search for profiles, view posts, and interact with a musical community.

---

## Features

### **Core Functionality**
1. **User Profiles**:
   - Each user has a profile with personal information and posts.
   - Profiles can be searched by username.
   - Logged-in users can view their friends' profiles.

2. **Posts**:
   - Users can create posts to share their favorite music.
   - Posts are stored in our database and include user content such as song recommendations and comments.

3. **Likes & Comments**:
   - Users can like others' posts, and likes are stored in the database.
   - Comments can be added to posts, fostering interaction within the community.

4. **Explore & Follow**:
   - **Explore Tab**: Displays the most recent posts from all users.
   - **Following Tab**: Displays posts from users that the logged-in user follows.

5. **Spotify Integration**:
   - Song search and recommendations are powered by Spotify's API.
   - The app does not store song data, relying on Spotify for music-related queries.

---

## Technical Approach

### **Frontend**
- Prototype pages will be developed first to establish the structure and UI flow.
- Pages to focus on:
  - **Home Page**: Displays recent posts, with distinct views for anonymous and logged-in users.
  - **Profile Page**: Contains user-specific information and posts.
  - **Explore Page**: Showcases recent posts by all users.

### **Backend**
- **Database Design**:
  - **Entities**:
    - `User`: Stores username, profile data, and follow relationships.
    - `Post`: Contains post content, likes, and associated comments.
    - `Like`: Tracks which user likes which post.
    - `Comment`: Stores comments associated with posts.
  - Additional potential entities:
    - `Leaderboard`: For tracking popular users or posts.

- **Server-Side Development**:
  - Create routes for user and post handling.
  - Implement functionality for likes and comments.
  - Handle follow/unfollow actions for user relationships.

---

## Development Plan

### **Phase 1: Prototyping**
- Create prototypes for the home page, profile page, and explore page.
- Ensure functionality aligns with the project requirements.

### **Phase 2: Database Setup**
- Design a UML diagram for the database schema.
- Create the necessary entities: User, Post, Like, and Comment.

### **Phase 3: API Integration**
- Explore and integrate Spotify's API for music-related queries.
- Push experimental Spotify API integration to a separate branch.

### **Phase 4: Feature Implementation**
- Add core features like liking posts, commenting, and following users.
- Implement explore and following tabs on the home page.

---

## Contributing Guidelines

### **Getting Started**
1. Clone the repository.
2. Use small, incremental commits to ensure smooth collaboration.
3. Push changes to specific branches for isolated features.

### **Tasks**
- **Profiles**: Start building profile pages and handle reducers in the client.
- **Spotify API**: Experiment with API calls and push progress to a separate branch.
- **Server-Side**: Begin developing user and post handling routes.

---

## Notes

- Anonymous users will have limited functionality (e.g., no posting ability).
- Logged-in users can interact more deeply (liking, commenting, following).
- Collaborative feedback is encouraged during development.

**Let’s build an amazing music-sharing app! 🎵**