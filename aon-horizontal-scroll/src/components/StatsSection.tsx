'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { number: 50000, suffix: '+', label: 'Colleagues Worldwide', icon: '👥' },
    { number: 120, suffix: '+', label: 'Countries & Territories', icon: '🌍' },
    { number: 95, suffix: '%', label: 'Client Retention Rate', icon: '🤝' },
    { number: 4.8, suffix: 'T', label: 'Assets Under Advisement', prefix: '$', icon: '💰' }
  ];

  const animateCounter = (element: HTMLElement, target: number, suffix: string = '', prefix: string = '') => {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        let displayValue = obj.value;
        if (target >= 1000) {
          displayValue = Math.round(displayValue);
        } else {
          displayValue = Math.round(displayValue * 10) / 10;
        }
        element.textContent = `${prefix}${displayValue.toLocaleString()}${suffix}`;
      }
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate section on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate background
            gsap.fromTo('.stats-bg', 
              { scale: 1.2, opacity: 0 },
              { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
            );

            // Animate title
            gsap.fromTo('.stats-title', 
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
            );

            // Animate stat cards
            gsap.fromTo('.stat-card', 
              { opacity: 0, y: 100, scale: 0.8 },
              { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 0.8, 
                ease: 'power3.out', 
                stagger: 0.2,
                delay: 0.6
              }
            );

            // Animate counters
            setTimeout(() => {
              const counters = document.querySelectorAll('.counter');
              counters.forEach((counter, index) => {
                const stat = stats[index];
                animateCounter(counter as HTMLElement, stat.number, stat.suffix, stat.prefix);
              });
            }, 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="stats-bg absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="stats-title text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Global Impact
          </h2>
          <p className="stats-title text-xl text-blue-100 max-w-3xl mx-auto">
            Trusted by organizations worldwide, we deliver results that matter across every industry and geography.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="counter text-4xl lg:text-5xl font-bold text-white block">
                    {stat.prefix}0{stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-blue-100 text-lg font-medium leading-tight">
                  {stat.label}
                </p>

                {/* Decorative element */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-blue-100 text-lg mb-6">
            Join thousands of organizations that trust Aon for their most critical decisions
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Partner With Us
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-cyan-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-ping delay-500"></div>
    </section>
  );
};

export default StatsSection;