'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate section title
    gsap.fromTo('.services-title', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    );

    // Animate service cards
    gsap.fromTo('.service-card', 
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        }
      }
    );

  }, []);

  const services = [
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies to protect your business.',
      icon: '⚡',
      features: ['Risk Assessment', 'Mitigation Planning', 'Crisis Management', 'Business Continuity'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Employee Benefits',
      description: 'Design and manage benefit programs that attract and retain top talent.',
      icon: '💼',
      features: ['Health & Wellness', 'Retirement Plans', 'Life Insurance', 'Disability Coverage'],
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Cyber Security',
      description: 'Protect your digital assets with cutting-edge cybersecurity solutions.',
      icon: '🔐',
      features: ['Threat Detection', 'Security Training', 'Incident Response', 'Compliance'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better business decisions.',
      icon: '📈',
      features: ['Predictive Analytics', 'Risk Modeling', 'Performance Metrics', 'Custom Reports'],
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'Consulting',
      description: 'Expert guidance to navigate complex business challenges and opportunities.',
      icon: '🎯',
      features: ['Strategic Planning', 'Process Optimization', 'Change Management', 'Best Practices'],
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'Global Solutions',
      description: 'Worldwide coverage with local expertise for multinational organizations.',
      icon: '🌐',
      features: ['International Coverage', 'Local Compliance', 'Cultural Adaptation', 'Global Standards'],
      color: 'from-teal-500 to-teal-700'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="services-title text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="services-title text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions across risk management, human capital, 
            and business consulting to help organizations thrive in an uncertain world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 group-hover:shadow-lg">
                  Learn More
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore All Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;