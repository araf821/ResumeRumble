
# ResumeRumble

Level up your resume game! Made by job seekers, for job seekers, ResumeRumble provides a free and fun way to improve your resume with detailed, competitive insights, powered by OpenAI.


## Inspiration
As students, we know the struggles of applying to countless jobs and being left wondering where you went wrong. Although there are plenty of resources to improve resume quality, most are general information and cannot provide specific feedback for your target role. Hence why we created ResumeRumble, for a fun way for everyone to improve their resume writing skills.

## What it does
ResumeRumble uses OpenAI to generate quality, detailed feedback on your resume. Submit your resume and receive feedback and a score out of 100. Optionally you can include the description of your target job for specific feedback and scoring based on how well your resume relates to that role. 
ResumeRumble incentivizes users to keep improving by featuring friendly competition and peer-learning. Use your resumes to compete against friends, or other players. Create or join a lobby, with an optional job description, and select your resume of choice. Everyone will receive their score and feedback, as well as view other players' resume's; but only one will win!

## How we built it
- Resume Rumble is a modern full stack Application using NextJS. 
- Webpages made with React, Typescript, Tailwind and shadcn/ui.
- User auth is handled with Clerk.
- Resumes are uploaded and stored on PlanetScale with Prisma
- Uses the OpenAI API

## Challenges we ran into
The whole thing.
But more specifically:
- Converting Pdfs to text to pass into the OpenAI API
- Styling webpages with Tailwind animations 
- Setting up Prisma schemas to communicate with the database
- Hosting project on Vercel and configuring our .tech domain 
- User resume uploading and management
- Connecting Users together for the lobby system

## Accomplishments that we're proud of
The whole thing.
But more specifically:
- Very ambitious project that we were able to get functional within 36 hours.
- Fully mobile responsive Front-end with animations built with react components 
- Robust Back-end functionality including database CRUD operations, API calling, and Middleware management.
- Our Domain name
- Araf carrying us in the final stretch (goat)

## What we learned
- Only one of our group members had experience with the tech stack we used. The other 3 learned the entire stack (Next.js, Planetscale, Tailwind, Typescript) during the project, from knowing nothing to deploying a Full-stack application with those tools.
- We also became familiar with shadcn/ui, a very helpful component library for making the website look consistent.


## What's next for ResumeRumble
We'd love to make ResumeRumble into a site for all things about making a good resume. With additional features like:
- expand our competitive system by increasing lobby sizes, adding an elo system for matchmaking, and adding a leaderboard. 
- Additionally we'd like to add more practice tools, like sample job postings and lessons on resume building. 
- We could also add a peer to peer resume reviewing service, where members are able to give feedback on each others resumes.
