# Design Portfolio

Welcome to my design portfolio! This repository not only showcases my design work but also demonstrates the tools and technologies I use. This portfolio is built with React for dynamic interactions, Figma for design, Storybook for UI component development, and hosted on Vercel for seamless deployment.

## Table of Contents

- [About This Portfolio](#about-this-portfolio)
- [Technology Stack](#technology-stack)
- [Design Process](#design-process)
- [Projects](#projects)
- [Design Philosophy](#design-philosophy)
- [Contact](#contact)
- [License](#license)

## About This Portfolio

This repository is a showcase of my design projects, providing insights into my design process and the tools I use. It’s designed to not only present my work but also to demonstrate my proficiency with modern web technologies and design tools.

## Technology Stack

Here’s a breakdown of the technologies used to build and maintain this portfolio:

```
  my-design-portfolio/
  ├── public/
  │ ├── assets/ # Static assets like images and fonts
  │ └── favicon.ico # Favicon for the site
  ├── src/
  │ ├── components/ # Reusable React components
  │ ├── pages/ # Next.js pages
  │ │ ├── _app.js # Custom App component for initializing pages
  │ │ ├── index.js # Home page
  │ │ └── [other-pages].js # Other pages
  │ ├── styles/ # Global and component-specific styles
  │ └── utils/ # Utility functions and hooks
  ├── .storybook/ # Storybook configuration files
  │ ├── addons.js # Storybook addons
  │ ├── main.js # Main Storybook configuration
  │ └── preview.js # Storybook preview configuration
  ├── .gitignore # Git ignore rules
  ├── README.md # This file
  ├── package.json # Project dependencies and scripts
  └── next.config.js # Next.js configuration
```

- **React**: The portfolio is built using React, a JavaScript library for creating interactive UIs. React helps in building a dynamic and responsive user experience.
- **Figma**: All design work showcased in this portfolio was created using Figma, a collaborative design tool that allows for crafting detailed designs and prototypes.
- **Storybook**: Storybook is used for developing and documenting UI components in isolation. It allows for creating and testing individual components outside of the main application, ensuring they work as expected and facilitating better UI development.
- **Vercel**: The portfolio is hosted on Vercel, which provides fast, reliable, and scalable hosting. Vercel enables continuous deployment and serverless functions, ensuring optimal performance and availability.

## Design System

### `Foundations ⚡️`

This table provides an overview of the styles library and design tokens used in the portfolio. Each entry includes a brief description and examples of usage.

## Color Palette

| Token Name           | Hex Value | Description                          | Usage Examples                     |
| -------------------- | --------- | ------------------------------------ | ---------------------------------- |
| **Primary Color**    | #0070f3   | Main color used throughout the site. | Buttons, links, accents.           |
| **Secondary Color**  | #ff4081   | Secondary color for highlights.      | Call-to-action buttons.            |
| **Background Color** | #f0f0f0   | Background color for main sections.  | Page backgrounds, cards.           |
| **Text Color**       | #333333   | Default text color.                  | Body text, headings.               |
| **Error Color**      | #d9534f   | Color used for error messages.       | Error states, validation messages. |

## Typography

| Token Name    | Font Family       | Font Size | Font Weight | Line Height | Description                |
| ------------- | ----------------- | --------- | ----------- | ----------- | -------------------------- |
| **Heading 1** | Arial, sans-serif | 32px      | Bold        | 1.2         | Main headings.             |
| **Heading 2** | Arial, sans-serif | 24px      | Bold        | 1.3         | Sub-headings.              |
| **Body Text** | Arial, sans-serif | 16px      | Regular     | 1.5         | Standard body text.        |
| **Caption**   | Arial, sans-serif | 12px      | Italic      | 1.4         | Smaller text for captions. |

## Spacing

| Token Name         | Value | Description                           | Usage Examples                   |
| ------------------ | ----- | ------------------------------------- | -------------------------------- |
| **Margin Small**   | 8px   | Small margin for minor spacing.       | Between small elements.          |
| **Margin Medium**  | 16px  | Medium margin for regular spacing.    | Between sections.                |
| **Margin Large**   | 32px  | Large margin for significant spacing. | Around major sections.           |
| **Padding Small**  | 8px   | Small padding inside elements.        | Padding inside buttons or cards. |
| **Padding Medium** | 16px  | Medium padding inside elements.       | Padding inside containers.       |
| **Padding Large**  | 32px  | Large padding for spacious design.    | Padding inside large sections.   |

## Borders

| Token Name         | Border Style | Border Width | Border Color | Description                               |
| ------------------ | ------------ | ------------ | ------------ | ----------------------------------------- |
| **Default Border** | Solid        | 1px          | #e0e0e0      | Standard border for cards and inputs.     |
| **Thick Border**   | Solid        | 2px          | #cccccc      | Emphasized border for important sections. |
| **Dashed Border**  | Dashed       | 1px          | #999999      | Border for secondary elements.            |

## Shadows

| Token Name        | Shadow Style | Shadow Color       | Shadow Blur | Shadow Offset | Description                            |
| ----------------- | ------------ | ------------------ | ----------- | ------------- | -------------------------------------- |
| **Light Shadow**  | Soft         | rgba(0, 0, 0, 0.1) | 4px         | 0 2px         | Light shadow for subtle effects.       |
| **Medium Shadow** | Medium       | rgba(0, 0, 0, 0.2) | 8px         | 0 4px         | Medium shadow for emphasized elements. |
| **Heavy Shadow**  | Strong       | rgba(0, 0, 0, 0.3) | 12px        | 0 6px         | Strong shadow for focal points.        |

## Usage

Each token is used consistently across the design to maintain a cohesive look and feel. Refer to the design system documentation for implementation details and examples.

### `Components 🔋`

This table provides an overview of the components used in the portfolio. Each entry includes a brief description, its purpose, and any relevant notes.

| Component     | Description                                      | Purpose                                         | Notes                                     |
| ------------- | ------------------------------------------------ | ----------------------------------------------- | ----------------------------------------- |
| **Header**    | The top navigation bar of the site.              | Navigation across the site.                     | Includes logo and menu items.             |
| **Footer**    | The bottom section of the site.                  | Contains contact information and links.         | Stays consistent across all pages.        |
| **Button**    | A reusable button component.                     | Used for various clickable actions.             | Customizable styles and sizes.            |
| **Card**      | A card component for displaying content.         | Showcases project details and summaries.        | Includes image, title, and description.   |
| **Modal**     | A popup dialog box for user interactions.        | For displaying additional information or forms. | Can be triggered by various actions.      |
| **FormInput** | A form input field component.                    | Used in forms for user input.                   | Includes text, password, and email types. |
| **Carousel**  | A component for displaying a slideshow of items. | For showcasing multiple images or items.        | Supports image and content slides.        |
| **Navbar**    | The navigation bar component.                    | For easy site navigation.                       | Includes links to main sections.          |
| **Avatar**    | A user avatar component.                         | Displays user profile images.                   | Can be used in comments or profiles.      |

## Usage

Each component is documented with its purpose and usage in the project. For detailed implementation and examples, please refer to the Storybook documentation or the component code in the `src/components/` directory.

### `Patterns 🕹`

This table provides an overview of the UI patterns and views used in the portfolio. Each entry includes a brief description and its purpose within the application.

## Views

| Pattern Name     | Description                                     | Purpose                                                            | Usage Examples                    |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------ | --------------------------------- |
| **Home Page**    | The landing page of the site.                   | To provide an overview and access to main sections.                | Introduction, featured content.   |
| **Project Page** | A detailed view of a specific project.          | To showcase project details and outcomes.                          | Project case studies, portfolios. |
| **Contact Page** | A page for users to get in touch.               | To provide contact information and a form for inquiries.           | Contact form, location details.   |
| **About Page**   | A page with information about the site or team. | To introduce the team or organization and its mission.             | Team bios, company history.       |
| **404 Page**     | A page displayed when content is not found.     | To inform users of a missing page and guide them back to the site. | Error handling, site navigation.  |

## Usage

Each pattern and view is designed to ensure a cohesive and user-friendly experience across the application. Refer to the design documentation and Storybook for detailed examples and implementation guidelines.

Feel free to add more patterns and views to this table as your design evolves.

## Design Process

My design process is detailed and iterative, encompassing several stages and frameworks:

## Desicions Mapping 📍

| Research & Discovery | Ideation & Sketching                                                       | Design & Prototyping                               | Component Development                                                    | Integration & Testing                                                                                           | Deployment                                                            |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Description**      | Understanding the problem, researching user needs, and gathering insights. | Creating initial concepts and wireframes in Figma. | Developing high-fidelity designs and interactive prototypes using Figma. | Incorporating components into the main application and testing for functionality and responsiveness with React. | Hosting the portfolio with Vercel to ensure fast and reliable access. |
| **Outcomes**         | User Personas, Jobs to be Done, Problem Statements, Use Cases              | Creating initial concepts and wireframes in Figma. | Developing high-fidelity designs and interactive prototypes using Figma. | Incorporating components into the main application and testing for functionality and responsiveness with React. | Hosting the portfolio with Vercel to ensure fast and reliable access. |

## Design Thinking 🔷🔶

## Design Philosophy

My design philosophy focuses on user-centered and visually engaging designs. Core principles include:

- **User-Centric Design**: Prioritizing user needs and feedback in the design process.
- **Simplicity and Clarity**: Ensuring designs are clean and easy to understand.
- **Modularity and Reusability**: Using tools like Storybook to build modular and reusable components, promoting consistency and efficiency.

## Contact

For inquiries, feedback, or collaboration opportunities, please contact me:

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio Website**: [Your Portfolio Website](https://yourportfolio.com)

## License

This portfolio and its contents are licensed under the [MIT License](LICENSE). Feel free to use or adapt the content, but please provide appropriate attribution.

---

Thank you for exploring my design portfolio! I hope the insights into my process and the showcased work are valuable.

If you have any suggestions or feedback, please feel free to open an issue or submit a pull request.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
