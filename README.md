# BeautyJay Luxe - Fashion E-Commerce Website

A premium frontend-only fashion e-commerce and educational platform built with React, Vite, and Tailwind CSS.

## Features

- 🛍️ **E-Commerce Store** - Browse and purchase fashion products
- ✂️ **Custom Sewing Services** - Request custom-made dresses
- 🎓 **Fashion Training** - Enroll in fashion courses and classes
- 👗 **Styling Services** - Virtual styling, wardrobe audit, and occasion styling
- 📦 **Dress Rentals** - Rent dresses for special occasions
- 💳 **Paystack Integration** - Secure payment processing
- 💬 **WhatsApp Integration** - Direct communication with customers
- 📱 **Mobile-First Design** - Fully responsive and optimized for mobile
- ✨ **Beautiful Animations** - Smooth transitions and interactive elements

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **EmailJS** - Form submissions
- **Paystack** - Payment processing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key_here
VITE_WHATSAPP_NUMBER=234XXXXXXXXXX
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
website/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Cart.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── CourseCard.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Checkout.jsx
│   │   ├── Services.jsx
│   │   ├── Training.jsx
│   │   └── ...
│   ├── contexts/       # React contexts
│   │   └── CartContext.jsx
│   ├── data/           # Static data
│   │   ├── products.js
│   │   ├── courses.js
│   │   └── services.js
│   ├── utils/          # Utility functions
│   │   ├── cart.js
│   │   ├── paystack.js
│   │   ├── whatsapp.js
│   │   └── email.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── index.css       # Global styles
│   └── config.js        # Configuration
├── public/             # Static assets
├── index.html
├── package.json
└── vite.config.js
```

## Configuration

### Paystack Setup

1. Sign up for a Paystack account at https://paystack.com
2. Get your public key from the dashboard
3. Add it to your `.env` file

### WhatsApp Setup

1. Get your WhatsApp Business number
2. Format: Country code + number (e.g., 234XXXXXXXXXX for Nigeria)
3. Add it to your `.env` file

### EmailJS Setup

1. Sign up for EmailJS at https://www.emailjs.com
2. Create a service and template
3. Add the credentials to your `.env` file

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to Netlify, Vercel, or any static hosting service.

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Netlify dashboard

### Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will auto-detect Vite settings
4. Add environment variables in Vercel dashboard

## Features Overview

### Shopping Cart
- Add/remove products
- Update quantities
- Persistent cart (localStorage)
- Cart summary

### Payment Processing
- Paystack integration
- Secure checkout flow
- Payment confirmation
- Order tracking

### Services
- Custom dress sewing requests
- Styling consultations
- Alteration services
- Dress rentals
- Course enrollments

### Communication
- WhatsApp click-to-chat
- Contact forms
- Email notifications

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- Primary colors: Used for main brand elements
- Accent colors: Used for highlights
- WhatsApp green: #25D366

### Fonts
The site uses Poppins font from Google Fonts, configured in `src/index.css`.

### Content
Update data files in `src/data/` to modify products, courses, and services.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary and confidential.

## Support

For support, contact:
- Email: info@beautyjayluxe.com
- WhatsApp: [Your WhatsApp Number]

---

Built with ❤️ for BeautyJay Luxe
