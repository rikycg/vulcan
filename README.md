## Vulcan Template

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Feel free to utilize this for your personal website. I'm continuously enhancing it, which means you can look forward to exciting updates in the future. This project is my journey through learning ReactJs from the ground up, and it has been an incredible experience.

## Dependencies
In this project, I've integrated several key dependencies to optimize functionality:

- Tailwind CSS for styling.
- Firebase (Firestore) for database management.
- SparkPost for email dispatch.

The flexibility of the system allows for easy modification of data loading methods. For instance, if you need to retrieve information from a different endpoint or through an alternative method, simply adjust the `HomeService` class.

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