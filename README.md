# Vulcan Template 

This documentation provides an overview of the Vulcan web template, designed specifically for software developers. Built with Next.js and React.js, this template offers a modern, responsive, and easily customizable layout to showcase a developer's professional profile.

## Sections
The template is divided into four main sections:

##### 1. About Me
This section is dedicated to introducing the professional. It provides space for a brief biography, background, or any personal introduction that highlights the developer's journey and professional ethos.

##### 2. Skills
Here, developers can showcase their technical and soft skills. This section is ideal for listing programming languages, frameworks, tools, or any other competencies relevant to their expertise.

##### 3. People (Testimonials)
This unique section is designed to display testimonials from colleagues, clients, or other professionals. It's a great way to present external opinions and endorsements about the developer's work and impact.

##### 4. Contact
The final section features a contact form, allowing visitors to easily get in touch. It's a crucial part of the template, ensuring potential clients or collaborators can communicate with the developer directly from the website.

## Dependencies
In this project, I've integrated several key dependencies to optimize functionality:

- Tailwind CSS for styling.
- Firebase (Firestore) for database management.
- SparkPost for email dispatch.

#### Firebase Integration
The template dynamically fetches data from Firestore in Firebase. To set this up:

Place your Firebase project credentials in the `config.ts file`.
Create the necessary collections in Firestore as defined in the `/modules` folder. Ensure that the data structure in Firestore matches the entities declared in the modules.

The flexibility of the system allows for easy modification of data loading methods. For instance, if you need to retrieve information from a different endpoint or through an alternative method, simply adjust the `HomeService` class.

#### Mail Integration

Similarly, if there's a need to alter the email sending process, modifications can be made within the `MailService`. This design ensures adaptability and ease of customization to meet diverse requirements.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Demo
To see the template in action, visit the live demo at [rikycg.com](https://rikycg.com). This demo provides a real-world example of how the template functions and appears with live data.