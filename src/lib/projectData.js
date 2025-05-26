export const projects = [
  {
    slug: "herbalcompass",
    title: "Herbal Compass",
    description: ["A Next.JS-based app for finding natural remedies."],
    introduction: [
      "Herbal Compass is a health-focused web application that helps users **discover natural remedies and herbal products** tailored to specific symptoms or ingredients. I built this project from scratch as part of my web development training at 'Code Labs Academy', where it served as my final project to complete the certification.",
    ],
    purpose: [
      "While the initial motivation for building this app was to complete a final project for my certification, it was grounded in a **real-world use case**:  A friend of mine works in a store that sells **health-related products**. To assist his customers, he had to learn which remedies help with specific ailments, what ingredients they contain, and how they work.",
      "That's when I thought: “I could build a tool to support that kind of knowledge.”  From architecture and design to branding and functionality - I developed everything independently.  Although the website isn't live yet, I'm planning to launch it in the near future so it can serve as a little cheat sheet or support tool.",
    ],
    features: [
      "The **core functionality** of the app is its **search feature**, which helps users find **natural remedies for specific health issues**. Users can search by symptom (e.g. “stomachache”) or by a plant's known use (e.g. “respiratory aid”), and are presented with a **list of relevant plants, herbs, and matching real-world products**.",
      "Search results can be refined using flexible filters. For example:\n• **plant filters**: origin, usage, active ingredient, growth type\n• **product filters**: product type, ingredient, retailer",
      "This allows users to narrow things down, e.g. to find out whether their favorite tea is available at a specific local store.",
      "The app also includes authentication with sign-up (including email verification), a sign-in area with dashboard access, and two user roles:\n• **regular users** can bookmark favorite products\n• **admins** can add or update product entries",
    ],

    techUsed: [
      "For the **frontend**, I used Next.js - it felt like a natural fit for building a modern, **responsive** web app with a fast developer experience. Since Supabase integrates smoothly with Next (especially for authentication and database access), it made sense to explore this stack further.",
      "For the **backend** logic, I opted for a minimal Express.js layer to handle specific API needs. Instead of going with MongoDB again (which I had already worked with during my bootcamp), I wanted to dive deeper into Supabase as a full-service solution. It offers built-in authentication, role-based access, and a Postgres database - all in one place, which was great to explore and test out.",
      "**Styling-wise**, I used Tailwind CSS because of its speed and flexibility. It plays nicely with Next.js and allowed me to iterate quickly without writing custom CSS.\nTo manage **global UI** state like user roles or auth status, I used a lightweight Context-based solution instead of Redux — simple and sufficient for this project's scope.",
    ],
    lessons: [
      "This project taught me a lot - far more than I can summarize here. One key takeaway was understanding the **interaction between frontend search functionality** and a **multi-layered backend** using routes, controllers, and services, all connected via Supabase.",
      "Equally important: I gained a better sense for how to **structure** and **deliver content** in a way that actually serves the **user's intent** — especially when it comes to **search** and **filtering**.\nI also deepened my understanding of React hooks, Git workflows, and working with Next.js and Express.",
      "Lastly, building something **end-to-end** gave me a lot of **confidence** — not just technically, but also in **planning**, **adapting**, and **shipping something** real.",
    ],

    stack: ["Next.js", "Tailwind CSS", "Express.js", "Supabase"],
    github: "https://github.com/Alex-Spiegel/herbal_compass",
    live: null,
    // alle screenshots müssen Breite = 1280px haben!!!
    screenshots: [
      "/images/herbalcompass/01.png",
      "/images/herbalcompass/02.png",
      "/images/herbalcompass/03.png",
      "/images/herbalcompass/04.png",
      "/images/herbalcompass/05.png",
      "/images/herbalcompass/06.png",
    ],
  },
  {
    slug: "weatherapp",
    title: "Weather App",
    description: [
      "A React-based weather forecast tool with live API integration.",
    ],
    introduction: ["...", "..."],
    purpose: ["...", "..."],
    features: ["...", "..."],
    techUsed: ["...", "..."],
    lessons: ["...", "..."],
    stack: ["...", "...", "..."],
    github: "https://github.com/",
    live: "https://example.com",
    screenshots: [
      "/images/projectname/01.png",
      "/images/projectname/02.png",
      "/images/projectname/03.png",
      "/images/projectname/04.png",
      "/images/projectname/05.png",
      "/screenshot_placeholder.png",
    ],
  },
  {
    slug: "randomapp",
    title: "Random App",
    description: ["A React-based app to fill your page with random text."],
    introduction: ["...", "..."],
    purpose: ["...", "..."],
    features: ["...", "..."],
    techUsed: ["...", "..."],
    lessons: ["...", "..."],
    stack: ["...", "...", "..."],
    github: "https://github.com/",
    live: "https://example.com",
    screenshots: [
      "/images/projectname/01.png",
      "/images/projectname/02.png",
      "/images/projectname/03.png",
      "/images/projectname/04.png",
      "/images/projectname/05.png",
      "/screenshot_placeholder.png",
    ],
  },
];

/*
{
    slug: "slugname",
    title: "projectTitle",
    description: ["..."],
    introduction: ["...", "..."],
    purpose: ["...", "..."],
    features: ["...", "..."],
    techUsed: ["...", "..."],
    lessons: ["...", "..."],
    stack: ["...", "...", "..."],
    github: "https://github.com/",
    live: "https://example.com",
    screenshots: [
      "/images/projectname/01.png",
      "/images/projectname/02.png",
      "/images/projectname/03.png",
      "/images/projectname/04.png",
      "/images/projectname/05.png",
      "/images/projectname/06.png",
    ],
  },
*/
