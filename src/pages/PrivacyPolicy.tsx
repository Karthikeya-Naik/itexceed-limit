import { Shield, Lock, Eye, FileText, Mail, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const lastUpdated = "November 22, 2024";

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you contact us or use our services, we may collect personal information such as your name, email address, phone number, company name, and job title. This information is provided voluntarily by you when filling out forms, requesting quotes, or communicating with our team."
        },
        {
          subtitle: "Technical Information",
          text: "We automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits. This helps us improve our website performance and user experience."
        },
        {
          subtitle: "Service Usage Data",
          text: "For clients using our managed IT services, we may collect information about your IT infrastructure, system performance, security events, and service tickets to effectively deliver and improve our services."
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our IT services, respond to your inquiries, process transactions, and deliver the solutions you've requested from us."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you service updates, technical notifications, security alerts, and promotional materials about our services. You can opt out of marketing communications at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage data to understand how our services are used, identify areas for improvement, develop new features, and enhance overall service quality and security."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use and disclose your information as required by applicable laws, regulations, legal processes, or governmental requests."
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encryption, secure servers, firewalls, and access controls."
        },
        {
          subtitle: "Employee Access",
          text: "Access to personal information is restricted to employees, contractors, and agents who need to know that information to operate, develop, or improve our services. All personnel are bound by confidentiality obligations."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements."
        }
      ]
    },
    {
      icon: Shield,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our business, such as cloud hosting providers, payment processors, and analytics services. These providers are contractually obligated to protect your information."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity. We will notify you of any such change and the choices you may have regarding your information."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, such as to comply with a subpoena, court order, or other legal process, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. Contact us at privacy@itexceed.com to request access to or correction of your information."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal information, subject to certain legal exceptions. We will respond to your request within a reasonable timeframe and in accordance with applicable laws."
        },
        {
          subtitle: "Marketing Opt-Out",
          text: "You can opt out of receiving marketing communications by clicking the unsubscribe link in our emails or by contacting us directly. Note that you may still receive service-related communications."
        },
        {
          subtitle: "Cookie Preferences",
          text: "Most web browsers allow you to control cookies through their settings. However, limiting cookies may impact your experience on our website."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-professional-darkBlue rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-2 sm:px-0">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-professional-darkBlue p-4 sm:p-6 rounded-r-lg mb-8 sm:mb-12">
              <p className="text-foreground leading-relaxed text-sm sm:text-base">
                ITExceed ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="scroll-mt-20" id={section.title.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-professional-darkBlue rounded-lg flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-0 sm:pt-2">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6 sm:ml-16">
                    {section.content.map((item, idx) => (
                      <div key={idx} className="bg-background p-4 sm:p-6 rounded-lg border border-border">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                          {item.subtitle}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {/* Cookies */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Cookies and Tracking Technologies</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border space-y-3 sm:space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted) to provide you with a more personal and interactive experience on our website.
                </p>
              </div>
            </div>

            {/* Third Party Links */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Third-Party Links</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Our website may contain links to third-party websites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Children's Privacy</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
                </p>
              </div>
            </div>

            {/* International Users */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">International Data Transfers</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to such transfers.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Changes to This Privacy Policy</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-professional-darkBlue">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2 sm:px-0">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="space-y-2 text-white text-sm sm:text-base">
              <p>Email: <a href="mailto:support@itexceed.com" className="hover:text-blue-200">support@itexceed.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-blue-200">+1 (234) 567-890</a></p>
            </div>
            <div className="mt-6 sm:mt-8">
              <Link
                to="/contact"
                className="inline-block bg-white text-professional-darkBlue px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;