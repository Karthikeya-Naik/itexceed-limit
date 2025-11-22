import React from 'react';
import { Lock, Shield, Fingerprint, Key, CheckCircle, Award, ArrowRight, Smartphone, Eye, UserCheck, AlertTriangle } from "lucide-react";

const AccessControlDetail = () => {
  const features = [
    {
      icon: Shield,
      title: "Multi-Factor Authentication",
      description: "Add extra layers of security with biometric, token, and password-based authentication methods."
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "Track access attempts, monitor user activity, and receive instant alerts for suspicious behavior."
    },
    {
      icon: Key,
      title: "Centralized Management",
      description: "Manage all user identities, permissions, and access policies from a single dashboard."
    },
    {
      icon: UserCheck,
      title: "Role-Based Access",
      description: "Grant permissions based on job roles ensuring users only access what they need."
    }
  ];

  const services = [
    {
      icon: Lock,
      title: "Identity & Access Management (IAM)",
      description: "Complete IAM solutions with user provisioning, single sign-on, and directory integration.",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop"
    },
    {
      icon: Smartphone,
      title: "Multi-Factor Authentication",
      description: "Deploy MFA across all applications with support for SMS, authenticator apps, and biometrics.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    },
    {
      icon: Fingerprint,
      title: "Privileged Access Management",
      description: "Secure and monitor privileged accounts with session recording and just-in-time access.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop"
    },
    {
      icon: Key,
      title: "Single Sign-On (SSO)",
      description: "One-click access to all applications with enterprise SSO and SAML integration.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
    }
  ];

  const stats = [
    { number: "80%", label: "Breaches Use Stolen Credentials" },
    { number: "99%", label: "Phishing Prevention with MFA" },
    { number: "50%", label: "Reduction in IT Tickets" },
    { number: "24/7", label: "Access Monitoring" }
  ];

  const benefits = [
    "Prevent unauthorized access to systems",
    "Reduce risk of data breaches by 80%",
    "Simplify password management",
    "Meet compliance requirements",
    "Improve user productivity with SSO",
    "Automated user provisioning/deprovisioning",
    "Detailed audit trails for compliance",
    "Support for remote and hybrid workforces"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden mt-12 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1600&h=900&fit=crop" 
            alt="Access Control"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-gray-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">Access Control & Identity</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Secure Access,<br />Simplified Management
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Protect your business with advanced identity and access management solutions that keep unauthorized users out.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Start Security Assessment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#consultation"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Learn More
            </a>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Control Who Accesses What, When, and How
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                80% of data breaches involve compromised credentials. Traditional password-only security is no longer enough. Your business needs modern identity and access management that protects without creating friction for legitimate users.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Our access control solutions provide robust security through multi-factor authentication, single sign-on, and intelligent access policies that adapt to user behavior and risk levels.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=500&fit=crop" 
                alt="Access Control"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive Access Management
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Everything you need to secure and manage user access across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-slate-700 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Access Control Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Complete identity and access management solutions for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-900" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Implementation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Review current access controls and identify gaps" },
              { step: "02", title: "Design", desc: "Create custom IAM strategy and policies" },
              { step: "03", title: "Deploy", desc: "Implement solutions with minimal disruption" },
              { step: "04", title: "Monitor", desc: "Ongoing management and optimization" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-slate-700 to-gray-800 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-3 sm:mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-6 sm:top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-700 to-gray-800"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Strengthen Your Security Posture Today
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Don't let weak access controls be your security weak point. Get started with a free assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Get Free Assessment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            {/* <a 
              href="#demo"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              View Solutions
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessControlDetail;