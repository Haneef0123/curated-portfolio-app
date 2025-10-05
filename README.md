# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, showcasing professional experience, projects, and skills.

## 🚀 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

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
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── common/            # Reusable UI components
│   ├── svg/               # SVG components
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilities and constants
│   ├── constants/         # Application constants
│   └── utils/             # Helper functions
├── hooks/                 # Custom React hooks
└── types/                 # TypeScript type definitions
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Comfortable viewing in any environment
- **Smooth Animations** - Enhanced user experience
- **SEO Optimized** - Better search engine visibility
- **Type Safe** - Full TypeScript coverage
- **Component-based Architecture** - Maintainable and scalable code

## 📝 Customization

Update personal information, projects, and experience in:
- `src/lib/constants/personal.ts`
- `src/lib/constants/projects.ts`
- `src/lib/constants/experience.ts`
- `src/lib/constants/skills.ts`

## 📄 License

This project is open source and available under the MIT License.
