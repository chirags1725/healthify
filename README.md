<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->


Visit [Redcliffe.vercel.app](https://redcliffe.vercel.app/)


## Overview

The Lab Report Summarizer is a web application built using Next.js. Its purpose is to automatically generate personalized summaries of lab reports for patients, providing clear explanations, visually appealing information, and actionable insights. This tool aims to address the common pain point of patients struggling with confusing and jargon-filled reports, enabling them to make better-informed healthcare decisions.

## Features

- Automatic generation of personalized summaries for lab reports.
- Clear explanations of lab results.
- Visualizations to aid in understanding.
- Actionable insights based on the report analysis.

## Dependencies

The Lab Report Summarizer relies on the following dependencies:

- Next.js: A React framework for building server-side rendered applications.
- Google's Gemini Model: Google's Gemini model for generating summaries for each test.
- React: A JavaScript library for building user interfaces.
- Mongodb: Database management for the sample data provided.

## Setup Instructions

To set up the project locally, follow these steps:

1. Clone the repository:

```git clone https://github.com/chirags1725/redcliffe.git```

2. Navigate to the project directory:

```cd redcliffe```


3. Install dependencies:

```npm install```


4. Set up environment variables :

Create a `.env.local` file in the root of the project and define the following environment variables:

>MONGO_URI=mongodb+srv://redcliff:redcliff@healthify.iaxx1f2.mongodb.net/?retryWrites=true&w=majority&appName=Healthify

5. Start the development server:

```npm run dev```

6. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

1. Enter your Booking id and Name into the form provided on the main page.

>Sample Booking id:
>Sample Name:

2. Click on the "Submit" button.
3. Personalised cover page will be generated.
4. All the tests will be listed with your result grouped with the test parameters, indicating your result.
5. You can also view Chart view.
6. On clicking a particular test, a summary will be generated for the test, with common reasons for abnormal results. An indicator bar will be shown displaying your result, normal range for the test.
