'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;

    if (!container || !scrollContainer) return;

    // Calculate total scroll width
    const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

    // Create horizontal scroll animation
    gsap.to(scrollContainer, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // Animate individual panels
    const panels = scrollContainer.querySelectorAll('.panel');
    panels.forEach((panel, index) => {
      gsap.fromTo(panel.querySelector('.panel-content'), 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'left center',
            end: 'right center',
            containerAnimation: gsap.getById('horizontal-scroll'),
            scrub: 1,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const panels = [
    {
      id: 'risk-capital',
      title: 'Risk Capital',
      subtitle: 'Comprehensive Risk Management',
      description: 'We help clients identify, quantify, and manage risk exposures through innovative analytics and globally integrated expertise.',
      features: ['Commercial Risk Solutions', 'Reinsurance Solutions', 'Risk Analytics', 'Claims Management'],
      bgColor: 'from-red-600 to-red-800',
      icon: '🛡️'
    },
    {
      id: 'human-capital',
      title: 'Human Capital',
      subtitle: 'People-Centric Solutions',
      description: 'Our Human Capital solutions help organizations make better people decisions through advanced analytics and consulting.',
      features: ['Health & Benefits', 'Talent & Rewards', 'Retirement Solutions', 'Workplace Wellbeing'],
      bgColor: 'from-green-600 to-green-800',
      icon: '👥'
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security',
      subtitle: 'Digital Risk Protection',
      description: 'Protect your organization from evolving cyber threats with our comprehensive security solutions and risk assessment.',
      features: ['Threat Assessment', 'Incident Response', 'Security Training', 'Risk Mitigation'],
      bgColor: 'from-purple-600 to-purple-800',
      icon: '🔒'
    },
    {
      id: 'analytics',
      title: 'Analytics & Insights',
      subtitle: 'Data-Driven Decisions',
      description: 'Transform your data into actionable insights with our advanced analytics platform and expert consultation.',
      features: ['Predictive Modeling', 'Risk Assessment', 'Performance Analytics', 'Custom Dashboards'],
      bgColor: 'from-orange-600 to-orange-800',
      icon: '📊'
    },
    {
      id: 'global-reach',
      title: 'Global Reach',
      subtitle: 'Worldwide Presence',
      description: 'With colleagues in 120+ countries, we provide locally relevant solutions backed by global expertise.',
      features: ['120+ Countries', '50,000+ Colleagues', 'Local Expertise', 'Global Standards'],
      bgColor: 'from-teal-600 to-teal-800',
      icon: '🌍'
    }
  ];

  return (
    <div ref={containerRef} className="horizontal-scroll-container h-screen overflow-hidden">
      <div 
        ref={scrollRef} 
        className="horizontal-scroll-content flex h-full"
        style={{ width: `${panels.length * 100}vw` }}
      >
        {panels.map((panel, index) => (
          <div
            key={panel.id}
            className={`panel w-screen h-full flex items-center justify-center relative bg-gradient-to-br ${panel.bgColor}`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full"></div>
            </div>

            <div className="panel-content max-w-6xl mx-auto px-8 lg:px-16 text-white relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div className="text-6xl mb-4">{panel.icon}</div>
                  <div>
                    <h2 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                      {panel.title}
                    </h2>
                    <h3 className="text-2xl lg:text-3xl text-white/80 mb-6">
                      {panel.subtitle}
                    </h3>
                  </div>
                  <p className="text-xl lg:text-2xl leading-relaxed text-white/90">
                    {panel.description}
                  </p>
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    Learn More
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold mb-6">Key Features</h4>
                  <div className="grid gap-4">
                    {panel.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <span className="text-lg font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Number */}
            <div className="absolute top-8 right-8 text-white/50 text-2xl font-bold">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {panels.map((_, index) => (
            <div 
              key={index}
              className="w-3 h-3 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/50"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;