import React, { useState } from 'react';
import { Check, Zap, Crown, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      icon: Zap,
      price: '$0',
      period: 'forever',
      description: 'Perfect for individuals getting started',
      features: [
        '10 documents per month',
        'Basic AI extraction',
        'Google Calendar sync',
        'Email support',
        'Standard processing speed'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Pro',
      icon: Crown,
      price: isAnnual ? '$16' : '$19',
      period: 'per month',
      originalPrice: isAnnual ? '$19' : null,
      description: 'Ideal for professionals and small teams',
      features: [
        '500 documents per month',
        'Advanced AI extraction',
        'All calendar integrations',
        'Priority support',
        'Fast processing speed',
        'Custom event templates',
        'Bulk operations',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'border-blue-500 ring-2 ring-blue-500'
    },
    {
      name: 'Enterprise',
      icon: Building,
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited documents',
        'Premium AI models',
        'All integrations + custom',
        'Dedicated support',
        'Instant processing',
        'Advanced security',
        'SSO integration',
        'Custom workflows',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-purple-200'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include our core AI extraction features.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full mx-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 ${
                plan.popular ? 'transform scale-105 shadow-xl' : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-500 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  plan.name === 'Free' ? 'bg-gray-100 text-gray-600' :
                  plan.name === 'Pro' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  <plan.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                  )}
                  {plan.period && (
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;