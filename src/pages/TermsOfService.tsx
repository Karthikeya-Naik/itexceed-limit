import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, DollarSign, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const lastUpdated = "November 22, 2024";

  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing or using ITExceed's services, website, or any related applications, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website. Your continued use of our services after such modifications constitutes your acceptance of the updated terms."
        },
        {
          subtitle: "Eligibility",
          text: "Our services are intended for businesses and individuals who are at least 18 years old and have the legal capacity to enter into binding contracts. By using our services, you represent that you meet these requirements."
        }
      ]
    },
    {
      icon: FileText,
      title: "Services Description",
      content: [
        {
          subtitle: "Scope of Services",
          text: "ITExceed provides managed IT services, cybersecurity solutions, cloud services, network infrastructure, technical support, and related professional services as described on our website and in service agreements. Specific service details, deliverables, and timelines will be outlined in individual service contracts."
        },
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice. We are not liable for any modification, suspension, or discontinuation of services, except as specified in your service agreement."
        },
        {
          subtitle: "Service Level Agreements",
          text: "For managed service clients, specific uptime guarantees, response times, and support availability will be detailed in your Service Level Agreement (SLA). We strive to meet or exceed these commitments but are not liable for service interruptions beyond our reasonable control."
        }
      ]
    },
    {
      icon: DollarSign,
      title: "Fees and Payment",
      content: [
        {
          subtitle: "Service Fees",
          text: "Fees for our services are specified in your service agreement or quote. All fees are exclusive of applicable taxes unless otherwise stated. You agree to pay all fees in accordance with the payment terms specified in your agreement."
        },
        {
          subtitle: "Payment Terms",
          text: "Payment is due according to the terms specified in your invoice or service agreement. Late payments may be subject to interest charges and/or service suspension. We reserve the right to modify our fees with 30 days' notice."
        },
        {
          subtitle: "Refund Policy",
          text: "Refunds are provided only as specified in your service agreement. Generally, fees paid for services already rendered or for active service periods are non-refundable. Product purchases may have separate refund policies."
        }
      ]
    },
    {
      icon: Scale,
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Accurate Information",
          text: "You agree to provide accurate, current, and complete information when using our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
        },
        {
          subtitle: "Acceptable Use",
          text: "You agree to use our services only for lawful purposes and in accordance with these terms. You must not use our services to transmit harmful content, violate intellectual property rights, or engage in any illegal or unauthorized activities."
        },
        {
          subtitle: "System Access",
          text: "For managed services, you grant us necessary access to your systems and data to perform our services. You are responsible for maintaining backups of your data and for the security of your systems beyond the scope of our services."
        },
        {
          subtitle: "Cooperation",
          text: "You agree to cooperate with our service delivery by providing timely access, information, and approvals as needed. Delays caused by lack of cooperation may affect service delivery timelines and may incur additional charges."
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations and Warranties",
      content: [
        {
          subtitle: "Service Warranties",
          text: "We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards. However, we do not guarantee that our services will be uninterrupted, error-free, or that they will meet all of your specific requirements."
        },
        {
          subtitle: "Third-Party Products",
          text: "For hardware, software, and third-party services we provide, warranties are limited to those provided by the manufacturers or vendors. We make no additional warranties regarding third-party products beyond facilitating warranty claims."
        },
        {
          subtitle: "Disclaimer",
          text: "Except as expressly stated in these terms or your service agreement, our services are provided \"as is\" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose."
        }
      ]
    },
    {
      icon: XCircle,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Damages Limitation",
          text: "To the maximum extent permitted by law, ITExceed shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunities arising from your use of our services."
        },
        {
          subtitle: "Liability Cap",
          text: "Our total liability for any claims arising from or related to our services shall not exceed the total amount paid by you to ITExceed during the twelve (12) months preceding the event giving rise to the liability."
        },
        {
          subtitle: "Force Majeure",
          text: "We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, natural disasters, terrorism, labor disputes, or governmental actions."
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
              <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-2 sm:px-0">
              Please read these terms carefully before using our services. These terms govern your use of ITExceed's services and website.
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
                These Terms of Service ("Terms") constitute a legally binding agreement between you and ITExceed regarding your use of our services, website, and related applications. These terms apply to all users, clients, and visitors. By accessing or using any part of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
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

        {/* Additional Terms */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Intellectual Property Rights</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border space-y-3 sm:space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  All content, materials, software, and services provided by ITExceed, including but not limited to text, graphics, logos, images, and software, are the property of ITExceed or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  You are granted a limited, non-exclusive, non-transferable license to access and use our services for your internal business purposes. You may not copy, modify, distribute, sell, or lease any part of our services or included content without explicit written permission.
                </p>
              </div>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Confidentiality</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border space-y-3 sm:space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our business relationship. This includes technical data, business strategies, customer information, and any information marked as confidential.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Confidential information does not include information that is publicly available, independently developed, or rightfully received from a third party without confidentiality obligations.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Termination</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border space-y-3 sm:space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Either party may terminate services in accordance with the terms specified in your service agreement. We reserve the right to suspend or terminate your access to our services immediately if you breach these Terms or engage in fraudulent or illegal activities.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Upon termination, you must cease all use of our services, and we will make reasonable efforts to return or destroy your confidential information as specified in your service agreement. You remain liable for all fees incurred prior to termination.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Indemnification</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  You agree to indemnify, defend, and hold harmless ITExceed, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from your use of our services, your violation of these Terms, or your violation of any rights of another party.
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Dispute Resolution</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border space-y-3 sm:space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Any disputes arising from these Terms or our services shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  You agree to waive any right to a jury trial and to participate in class action lawsuits regarding disputes with ITExceed.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Governing Law</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ITExceed operates, without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the courts located in that jurisdiction.
                </p>
              </div>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Severability</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.
                </p>
              </div>
            </div>

            {/* Entire Agreement */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Entire Agreement</h2>
              <div className="bg-background p-4 sm:p-6 rounded-lg border border-border">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  These Terms, together with any service agreements and our Privacy Policy, constitute the entire agreement between you and ITExceed regarding the use of our services and supersede all prior agreements and understandings, whether written or oral.
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
              Questions About Our Terms?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2 sm:px-0">
              If you have any questions about these Terms of Service, please don't hesitate to reach out.
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

export default TermsOfService;