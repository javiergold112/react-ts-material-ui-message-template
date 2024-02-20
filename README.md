# Marketing Automation: Flow Builder - Message Templates

This project is a take-home assignment focused on building a marketing campaign message template builder using React, Typescript, Material UI, and Jotai. The goal is to create a user-friendly interface for businesses to customize their initial messaging for marketing campaigns.

## Project Overview

The project allows users to create and visualize WhatsApp message templates through a template builder sidebar and message preview node. Users can customize the message content, upload images, enable text editing, and toggle optional components in the sidebar.

## Features

- Left navigation bar for easy content navigation
- Header section with Title and X Button
- Side Bar with Header, Body, Footer, and Buttons components
- Image upload functionality for the Header section
- Text editing enabled for Body message and Buttons
- Toggle switches to enable/disable optional components

## Installation

1. Clone the repository: `git clone https://github.com/deliteser112/react-ts-material-ui-message-template.git`
2. Install dependencies: `npm install` or `npm install --force`
3. Start the development server: `npm start`

## Technologies Used

- React
- Typescript
- Material UI
- Jotai

## Folder Structure

```
├── public
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── common
│   │   └── layouts
│   │       ├── CanvasArea.tsx
│   │       ├── Header.tsx
│   │       ├── LeftNavigationBar.tsx
│   │       └── Sidebar.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── layouts
│   │   └── Layouts.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── sections
│   │   ├── main
│   │   │   ├── CampaignStarts.tsx
│   │   │   ├── DotArrow.tsx
│   │   │   └── MessagePreview.tsx
│   │   └── sidebar
│   │       ├── ActionSection.tsx
│   │       ├── BodySection.tsx
│   │       ├── ButtonsSection.tsx
│   │       ├── FooterSection.tsx
│   │       ├── HeaderSection.tsx
│   │       └── SidebarContent.tsx
│   ├── services
├── README.md
```

## Future Improvements

- Implement backend API integration for saving message templates
- Enhance text editing functionality with emojis and variables
- Make the canvas interactive for handling drag events

Feel free to reach out for any questions or feedback. Thank you for reviewing the project!
