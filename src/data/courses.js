// Sample courses data for BeautyJay Luxe

export const courses = [
  {
    id: '1',
    title: 'Beginner Sewing Fundamentals',
    description: 'Learn the basics of sewing from threading a needle to creating your first garment. Perfect for absolute beginners.',
    category: 'Beginner Sewing',
    price: 25000,
    duration: '4 weeks',
    format: 'Online + In-Person',
    curriculum: [
      'Introduction to Sewing Machines',
      'Basic Stitches and Techniques',
      'Reading Patterns',
      'Fabric Selection',
      'Creating Your First Project',
      'Finishing Techniques',
    ],
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800',
    featured: true,
    whatYoullLearn: [
      'How to operate a sewing machine',
      'Essential sewing stitches',
      'Pattern reading and cutting',
      'Basic garment construction',
      'Professional finishing techniques',
    ],
    whoIsThisFor: 'Absolute beginners with no prior sewing experience',
  },
  {
    id: '2',
    title: 'Advanced Pattern Making',
    description: 'Master the art of pattern making and design your own clothing patterns from scratch.',
    category: 'Pattern Making',
    price: 45000,
    duration: '6 weeks',
    format: 'Online + In-Person',
    curriculum: [
      'Pattern Drafting Basics',
      'Body Measurements',
      'Creating Basic Blocks',
      'Pattern Manipulation',
      'Grading Patterns',
      'Advanced Techniques',
    ],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
    featured: true,
    whatYoullLearn: [
      'Professional pattern drafting',
      'Creating custom-fit patterns',
      'Pattern grading techniques',
      'Designing original garments',
    ],
    whoIsThisFor: 'Intermediate sewers ready to create their own patterns',
  },
  {
    id: '3',
    title: 'Fashion Business Basics',
    description: 'Learn how to start and run a successful fashion business. From branding to marketing and operations.',
    category: 'Fashion Business',
    price: 35000,
    duration: '5 weeks',
    format: 'Online',
    curriculum: [
      'Fashion Business Planning',
      'Branding and Identity',
      'Marketing Strategies',
      'Pricing and Profitability',
      'Customer Service',
      'Scaling Your Business',
    ],
    image: 'https://images.unsplash.com/photo-1518492102993-45ef6abf3b47?w=800',
    featured: true,
    whatYoullLearn: [
      'How to start a fashion business',
      'Brand development strategies',
      'Marketing and social media',
      'Financial management',
      'Customer acquisition',
    ],
    whoIsThisFor: 'Aspiring fashion entrepreneurs',
  },
  {
    id: '4',
    title: 'Advanced Tailoring Techniques',
    description: 'Master professional tailoring techniques for creating high-quality, well-fitted garments.',
    category: 'Advanced Tailoring',
    price: 50000,
    duration: '8 weeks',
    format: 'In-Person',
    curriculum: [
      'Advanced Fitting Techniques',
      'Tailoring for Different Body Types',
      'Professional Finishing',
      'Working with Luxury Fabrics',
      'Custom Alterations',
      'Business Tailoring',
    ],
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
    featured: false,
    whatYoullLearn: [
      'Professional tailoring methods',
      'Perfect fit techniques',
      'Working with premium fabrics',
      'Advanced alterations',
    ],
    whoIsThisFor: 'Experienced sewers looking to master tailoring',
  },
];

export const courseCategories = [
  'All Courses',
  'Beginner Sewing',
  'Pattern Making',
  'Fashion Business',
  'Advanced Tailoring',
];

export const getCourseById = (id) => courses.find(c => c.id === id);
export const getCoursesByCategory = (category) => 
  category === 'All Courses' ? courses : courses.filter(c => c.category === category);
export const getFeaturedCourses = () => courses.filter(c => c.featured);
