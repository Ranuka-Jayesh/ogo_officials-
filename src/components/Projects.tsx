import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { X } from 'lucide-react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Add custom styles for hiding scrollbar
const hideScrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  fullDescription?: string;
  features?: string[];
  techDetails?: {
    name: string;
    description: string;
  }[];
  timeline?: string;
  outcome?: string | {
    accuracy: string;
    scansAnalyzed: string;
    availability: string;
  };
  modelArchitecture?: {
    type: string;
    layers: string[];
    parameters: {
      imageSize: string;
      batchSize: number;
      learningRate: number;
      epochs: number;
    };
  };
  additionalFeatures?: {
    virtualTryOn?: string;
    chatbot?: string;
    userExperience?: string;
    sellerDashboard?: string;
  };
}

const projects: Project[] = [
  {
    "id": 1,
    "title": "Project Auto - Modern Business Automation Platform",
    "description": "A comprehensive business automation platform built with React and TypeScript, featuring real-time analytics, user management, and interactive data visualization.",
    "image": "/projects/autohub.png",
    "technologies": [
      "React",
      "TypeScript",
      "Supabase",
      "TailwindCSS",
      "Chart.js",
      "Framer Motion"
    ],
    "fullDescription": "Project Auto is a sophisticated business automation platform that combines modern web technologies to deliver a seamless user experience. The application features real-time data synchronization, interactive charts and graphs for data visualization, and a responsive design that works across all devices. Built with security and scalability in mind, it leverages Supabase for backend services and authentication.",
    "features": [
      "Real-time data synchronization",
      "Interactive dashboard with data visualization",
      "Secure user authentication and authorization",
      "PDF report generation",
      "Responsive and animated UI components",
      "Advanced charting and analytics",
      "Route protection and user role management"
    ],
    "techDetails": [
      {
        "name": "React & TypeScript",
        "description": "Built with React 18 and TypeScript for type-safe, maintainable code and robust component architecture"
      },
      {
        "name": "Supabase",
        "description": "Provides backend infrastructure, real-time data sync, and user authentication"
      },
      {
        "name": "TailwindCSS",
        "description": "Used for responsive and customizable UI design with utility-first approach"
      },
      {
        "name": "Chart.js & Recharts",
        "description": "Implements interactive and responsive data visualization components"
      },
      {
        "name": "Framer Motion",
        "description": "Powers smooth animations and transitions throughout the application"
      },
      {
        "name": "React Router DOM",
        "description": "Handles client-side routing and navigation with protected routes"
      }
    ],
    "timeline": "Ongoing development",
    "outcome": "Modern, scalable business automation platform with emphasis on user experience and performance"
  },

  {
  "id": 2,
  "title": "Smart Wedding Planning System",
  "description": "Developed a comprehensive wedding planning platform that streamlines the entire wedding planning process from venue selection to guest management.",
  "image": "/projects/luxeandcore.png",
  "technologies": ["PHP", "MySQL", "JavaScript", "Bootstrap", "PayPal Integration"],
  "fullDescription": "A sophisticated wedding planning system that helps couples manage every aspect of their wedding preparations. The platform features both user and admin interfaces, secure payment processing through PayPal, and comprehensive event management tools. It simplifies the complex process of wedding planning by providing structured workflows and automated task management.",
  "features": [
    "User authentication and role-based access control",
    "Interactive wedding planning checklist",
    "Service vendor booking and management",
    "Secure payment processing via PayPal",
    "Guest list management and RSVP tracking",
    "Dynamic blog system for wedding tips and inspiration",
    "Testimonials and review system",
    "Admin dashboard for vendor and booking management"
  ],
  "techDetails": [
    {
      "name": "PHP",
      "description": "Powers the backend logic and server-side processing for dynamic content generation"
    },
    {
      "name": "MySQL",
      "description": "Manages relational database for user data, bookings, and wedding planning details"
    },
    {
      "name": "JavaScript",
      "description": "Implements interactive features and form validations for enhanced user experience"
    },
    {
      "name": "Bootstrap",
      "description": "Ensures responsive and mobile-friendly design across all devices"
    },
    {
      "name": "PayPal Integration",
      "description": "Provides secure payment processing for vendor bookings and services"
    }
  ],
  "timeline": "6 months",
  "outcome": "Streamlined wedding planning process with 80% reduction in manual coordination and 95% positive user feedback"
},
{
  "id": 3,
  "title": "FitOn - AI-Powered Fashion Virtual Try-On Platform",
  "description": "An innovative fashion platform that combines AI virtual try-on technology with a smart chatbot to revolutionize online shopping experience and reduce returns.",
  "image": "/projects/fiton.jpg",
  "technologies": ["Flutter", "Python", "TensorFlow", "Node.js", "PostgreSQL", "Firebase"],
  "fullDescription": "FitOn is a cutting-edge fashion platform that leverages artificial intelligence to provide users with a virtual try-on experience. The app helps shoppers visualize how clothes will fit them before making a purchase, significantly reducing return rates. It features an intelligent fashion chatbot named Fashee that provides personalized styling advice and recommendations.",
  "features": [
    "AI-powered virtual try-on technology",
    "Smart fashion chatbot (Fashee) for personalized assistance",
    "Real-time clothes matching recommendations",
    "Seller tracking and analytics tools",
    "User profile customization",
    "Secure authentication system",
    "Interactive shopping interface",
    "Color and style preference matching"
  ],
  "techDetails": [
    {
      "name": "Flutter",
      "description": "Used for developing a cross-platform mobile application with a beautiful and responsive UI"
    },
    {
      "name": "Python",
      "description": "Powers the AI/ML backend for virtual try-on and image processing capabilities"
    },
    {
      "name": "TensorFlow",
      "description": "Implements deep learning models for virtual try-on and clothing recognition"
    },
    {
      "name": "Node.js",
      "description": "Handles server-side operations and API integrations"
    },
    {
      "name": "PostgreSQL",
      "description": "Manages structured data storage for user profiles, products, and transactions"
    },
    {
      "name": "Supabase",
      "description": "Provides real-time database functionality, authentication, and cloud storage"
    }
  ],
  "timeline": "Developed using Agile methodology for continuous improvement",
  "outcome": "Aims to reduce clothing returns through accurate virtual try-on and improve shopping experience with AI assistance",
  "additionalFeatures": {
    "virtualTryOn": "Advanced AI algorithms for accurate clothing visualization",
    "chatbot": "Fashee - An AI-powered fashion assistant for personalized recommendations",
    "userExperience": "Clean, modern interface with intuitive navigation and social features",
    "sellerDashboard": "Comprehensive analytics and tracking tools for fashion retailers"
  }
},
{
  "id": 4,
  "title": "X-Pay - Advanced Payment Management System",
  "description": "A robust Windows-based payment management system built with C# and .NET Framework, featuring role-based access control, employee management, and secure transaction processing.",
  "image": "/projects/xpay.jpg",
  "technologies": [".NET Framework", "C#", "SQL Server", "Windows Forms", "Entity Framework"],
  "fullDescription": "X-Pay is a comprehensive payment management platform designed to streamline financial transactions and employee management. The system features a secure multi-user authentication system, separate interfaces for administrators and employees, and real-time transaction processing capabilities. Built with modern Windows Forms technology, it provides an intuitive user interface while maintaining robust backend security.",
  "features": [
      "Role-based authentication system (Admin/Employee)",
      "Secure user login and session management",
      "Interactive admin dashboard",
      "Employee management interface",
      "Real-time payment processing",
      "Transaction history tracking",
      "Database integration with SQL Server",
      "User-friendly Windows Forms interface"
  ],
  "techDetails": [
      {
          "name": ".NET Framework",
          "description": "Core framework providing the runtime environment and essential libraries for the application"
      },
      {
          "name": "C#",
          "description": "Primary programming language used for implementing business logic and user interface components"
      },
      {
          "name": "SQL Server",
          "description": "Database management system for secure storage and retrieval of user and transaction data"
      },
      {
          "name": "Windows Forms",
          "description": "UI framework used to create a responsive and intuitive desktop application interface"
      },
      {
          "name": "Entity Framework",
          "description": "ORM framework for simplified database operations and data management"
      }
  ],
  "timeline": "6 months",
  "outcome": "Successfully implemented a secure payment management system with separate admin and employee portals, enabling efficient transaction processing and user management"
},
{
  "id": 5,
  "title": "AI-Powered Breast Cancer Detection Platform",
  "description": "A comprehensive web-based platform that leverages deep learning for early breast cancer detection through mammogram analysis, providing real-time predictions with 95% accuracy.",
  "image": "/projects/bcpredictror.jpg",
  "technologies": [
      "Python",
      "PyTorch",
      "PHP",
      "FastAPI",
      "HTML/CSS",
      "JavaScript"
  ],
  "fullDescription": "An advanced healthcare platform that combines deep learning with medical expertise to provide accurate breast cancer detection from mammogram images. The system processes mammograms in real-time, offering instant analysis with a 95% accuracy rate, risk assessment, and direct connection to medical professionals for consultation.",
  "features": [
      "Real-time mammogram analysis using deep learning",
      "Three-class classification: Benign, Malignant, Normal",
      "95% prediction accuracy rate",
      "Detailed risk assessment and confidence scoring",
      "Secure HIPAA-compliant data handling",
      "Automated PDF report generation",
      "24/7 expert support system",
      "Doctor consultation scheduling",
      "Interactive user dashboard"
  ],
  "techDetails": [
      {
          "name": "PyTorch",
          "description": "Powers the deep learning CNN model with 4 convolutional layers for image analysis"
      },
      {
          "name": "FastAPI",
          "description": "Provides high-performance API endpoints for real-time image processing"
      },
      {
          "name": "PHP",
          "description": "Handles backend logic, user authentication, and doctor consultation system"
      },
      {
          "name": "HTML/CSS/JavaScript",
          "description": "Creates a responsive and interactive frontend with real-time updates and animations"
      }
  ],
  "modelArchitecture": {
      "type": "Convolutional Neural Network (CNN)",
      "layers": [
          "4 convolutional layers with ReLU activation",
          "Max pooling layers",
          "2 fully connected layers with dropout",
          "3-class output layer"
      ],
      "parameters": {
          "imageSize": "224x224",
          "batchSize": 32,
          "learningRate": 0.001,
          "epochs": 50
      }
  },
  "timeline": "one month",
  "outcome": {
      "accuracy": "95% detection accuracy",
      "scansAnalyzed": "500,000+",
      "availability": "24/7 system uptime"
  }
}
];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
            {project.title}
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="text-gray-600">{project.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features?.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.techDetails?.map((tech, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-1">{tech.name}</h4>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Timeline</h3>
              <p className="text-gray-600">{project.timeline}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Outcome</h3>
              <p className="text-gray-600">
                {typeof project.outcome === 'string' ? project.outcome : (
                  <div className="space-y-2">
                    <p>Accuracy: {project.outcome?.accuracy}</p>
                    <p>Scans Analyzed: {project.outcome?.scansAnalyzed}</p>
                    <p>Availability: {project.outcome?.availability}</p>
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <style>{hideScrollbarStyles}</style>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative solutions that have transformed businesses and industries
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden h-[420px] flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex overflow-x-auto pb-2 mb-4 hide-scrollbar">
                    <div className="flex gap-2 flex-nowrap">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 