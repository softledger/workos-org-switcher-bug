# WorkOS Organization Switcher Bug

This is a minimal reproduction of a bug with the WorkOS organization switcher functionality.

## Setup

1. Clone the repository

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```
   VITE_WORKOS_CLIENT_ID=XXXXXX
   VITE_WORKOS_DEV_MODE=true/false
   VITE_ORGANIZATION_IDS=XXXXXX,YYYYYY
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:3000

## Bug Description

When attempting to switch organizations using the dropdown menu:

1. Select a different organization
2. The UI updates to show the new organization
3. Opening a new tab with the same URL shows the old organization ID
4. The organization switch is not persisted across tabs

## Environment

- React 17.0.2
- WorkOS AuthKit React 0.7.1
- Vite 5.0.12
- React Router DOM 5.3.4
