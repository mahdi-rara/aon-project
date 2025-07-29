# AON Horizontal Scroll Website

A modern, professional website inspired by Aon's business model featuring smooth horizontal scrolling animations built with Next.js, Tailwind CSS, and GSAP.

## 🚀 Features

- **Horizontal Scrolling**: Smooth horizontal scroll experience using GSAP ScrollTrigger
- **Professional Design**: Clean, corporate design inspired by Aon's brand and services
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Advanced animations and transitions using GSAP
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Optimized for speed and smooth performance
- **Accessibility**: Built with accessibility best practices

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **ScrollTrigger** - GSAP plugin for scroll-based animations

## 📱 Sections

1. **Header** - Fixed navigation with smooth scroll links
2. **Hero Section** - Compelling introduction with animated elements
3. **Horizontal Scroll** - Main feature with 5 service panels:
   - Risk Capital
   - Human Capital
   - Cyber Security
   - Analytics & Insights
   - Global Reach
4. **Services Section** - Grid layout showcasing core services
5. **Stats Section** - Animated counters showing global impact
6. **Contact Section** - Contact form and company information

## 🎨 Design Features

- **Gradient Backgrounds** - Beautiful gradient overlays
- **Glass Morphism** - Modern glass effects
- **Hover Animations** - Interactive hover states
- **Smooth Transitions** - Seamless animations throughout
- **Professional Typography** - Clean, readable fonts
- **Color Scheme** - Blue-based professional color palette

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aon-horizontal-scroll
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section
│   ├── HorizontalScroll.tsx # Main horizontal scroll component
│   ├── ServicesSection.tsx  # Services grid
│   ├── StatsSection.tsx     # Statistics with counters
│   └── ContactSection.tsx   # Contact form and info
```

## 🎯 Key Components

### HorizontalScroll Component
The main feature of the website, implementing:
- GSAP ScrollTrigger for horizontal scrolling
- Multiple service panels with unique content
- Smooth animations between sections
- Progress indicators

### Animation Features
- Fade in animations on scroll
- Staggered animations for multiple elements
- Parallax effects
- Counter animations
- Hover effects and transitions

## 🎨 Customization

### Colors
The website uses a blue-based color scheme. You can customize colors in:
- `tailwind.config.js` for Tailwind colors
- `globals.css` for custom CSS variables
- Individual components for specific styling

### Content
Update content in each component file:
- Service information in `HorizontalScroll.tsx`
- Company stats in `StatsSection.tsx`
- Contact information in `ContactSection.tsx`

### Animations
GSAP animations can be customized in each component's `useEffect` hooks.

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Responsive typography
- Adaptive layouts for different screen sizes
- Touch-friendly interactions on mobile

## ⚡ Performance Optimizations

- **Code Splitting** - Automatic code splitting with Next.js
- **Image Optimization** - Next.js Image component
- **CSS Optimization** - Tailwind CSS purging
- **Animation Performance** - GSAP hardware acceleration
- **Bundle Optimization** - Webpack optimizations

## 🔧 Build and Deploy

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy

The project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Aon's professional services and global presence
- GSAP for powerful animation capabilities
- Tailwind CSS for rapid styling
- Next.js team for the excellent framework

## 📞 Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using Next.js, Tailwind CSS, and GSAP**
