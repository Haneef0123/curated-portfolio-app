# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, showcasing professional experience, projects, and skills.

## 🚀 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Interface icons
- **Simple Icons** (react-icons) - Brand marks

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone https://github.com/Haneef0123/curated-portfolio-app.git

# Navigate to the project directory
cd curated-portfolio-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router (layout, pages, SEO routes)
├── assets/                 # Images
├── components/             # React components
│   └── common/             # Reusable UI components
├── lib/                    # Constants, helpers and site config
│   ├── constants/          # Application constants
│   ├── site.ts             # Canonical site URL
│   └── utils.ts            # Helper functions
└── types/                  # TypeScript type definitions
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Follows the system appearance, no toggle
- **SEO Optimized** - Metadata, sitemap and robots
- **Type Safe** - Full TypeScript coverage
- **Component-based Architecture** - Maintainable and scalable code
- **Reduced-motion aware** - Honours the system preference

## 📝 Customization

Update personal information, projects, and experience in:
- `src/lib/constants/personal.ts`
- `src/lib/constants/projects.ts`
- `src/lib/constants/experience.ts`
- `src/lib/constants/skills.ts`

## 📄 License

This project is open source and available under the MIT License.
