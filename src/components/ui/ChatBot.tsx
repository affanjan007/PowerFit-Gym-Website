import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const FAQ_RESPONSES = {
  'hours': 'Our gym is open with extended hours to fit your schedule:\n\nWeekdays (Mon-Fri): 5:00 AM - 12:00 AM\nSaturday: 5:00 AM - 10:00 PM\nSunday: 5:00 AM - 8:00 PM\n\nHoliday hours may vary. We recommend checking our website or calling ahead on holidays.',
  'membership': 'We offer three flexible membership plans to suit your needs:\n\n🏋️ Basic Plan ($20/month):\n- Full gym access\n- Locker room access\n- Basic fitness assessment\n- 2 Guest passes/month\n\n💪 Premium Plan ($50/month):\n- Everything in Basic\n- Unlimited classes\n- Personal trainer session\n- Nutrition consultation\n- Towel service\n\n⭐ Elite Plan ($80/month):\n- Everything in Premium\n- Weekly PT sessions\n- Monthly massage\n- Spa access\n- Priority booking\n\nAll plans include no-contract options and a 7-day money-back guarantee.',
  'classes': 'We offer a diverse range of fitness classes led by expert instructors:\n\n💪 Strength Training:\n- Mon, Wed, Fri: 6:00 AM - 7:00 AM\n- Tue, Thu: 5:00 PM - 6:00 PM\n\n🏃‍♂️ HIIT:\n- Mon, Wed, Fri: 7:00 AM - 8:00 AM\n- Tue, Thu: 6:00 PM - 7:00 PM\n\n🚴‍♂️ Spin Class:\n- Tue, Thu: 8:00 AM - 9:00 AM\n- Mon, Wed: 6:00 PM - 7:00 PM\n\nAll classes are included in Premium and Elite memberships.',
  'trainers': 'Our certified trainers are here to help you achieve your fitness goals:\n\n👨‍🏫 Marcus Thompson:\n- M.S. in Exercise Science\n- Specializes in Strength Training & Olympic Weightlifting\n\n👩‍🏫 Lisa Rodriguez:\n- B.S. in Kinesiology\n- Expert in Weight Loss & Nutrition Planning\n\n👨‍🏫 Alexander Chen:\n- Sports Science Background\n- Specializes in Functional Training & HIIT\n\nAll trainers are certified and have extensive experience in personal training.',
  'facilities': 'Our state-of-the-art facility includes:\n\n🏋️ Training Areas:\n- Modern cardio equipment\n- Free weights section\n- Functional training zone\n- Dedicated stretching area\n\n🚿 Amenities:\n- Luxury locker rooms\n- Steam room & sauna\n- Shower facilities\n- Complimentary towel service (Premium/Elite)\n\n📱 Technology:\n- Free WiFi\n- Digital fitness tracking\n- Mobile app integration',
  'location': 'We are conveniently located at:\n\n📍 123 Fitness Street\nNew York, NY 10001\n\nNearby landmarks:\n- 2 blocks from Central Station\n- Adjacent to City Park\n- Free parking available\n\nPublic Transport:\n- Subway: Lines A, B, C (2-minute walk)\n- Bus: Routes 15, 22 stop directly outside',
  'contact': 'Get in touch with us:\n\n📞 Phone: (555) 123-4567\n📧 Email: info@powerfit.com\n\nCustomer Service Hours:\nMon-Fri: 8:00 AM - 8:00 PM\nSat-Sun: 9:00 AM - 5:00 PM\n\nEmergency Contact: (555) 999-8888\nMembership Inquiries: members@powerfit.com',
  'trial': '🎉 Yes! We offer a 3-day free trial to experience our facilities and classes. During your trial, you can:\n\n- Access all gym equipment\n- Try our group classes\n- Use locker rooms and amenities\n- Get a free fitness consultation\n\nTo start your trial, visit our front desk with a valid ID!',
  'tour': '🏟️ Absolutely! We offer guided tours of our facility:\n\n- Available 7 days a week\n- No appointment needed during staffed hours\n- Meet our trainers and staff\n- See all equipment and amenities\n\nJust stop by the front desk, and we\'ll be happy to show you around!',
  'parking': '🚗 Yes, we offer convenient parking options:\n\n- Free parking for members\n- Large, well-lit parking lot\n- 24/7 security monitoring\n- Covered parking available\n- Bike racks available\n\nParking is included with all membership plans.',
  'pool': '🏊‍♂️ Yes, we have a full aquatics center featuring:\n\n- 25-meter lap pool\n- Heated therapy pool\n- Aqua fitness classes\n- Certified lifeguards\n- Clean, maintained daily\n\nPool access is included in all membership plans!',
  'kids': '👶 Yes, we offer childcare services:\n\n- Kids Club (ages 3-12)\n- Certified childcare staff\n- Educational activities\n- Mini fitness programs\n- Available during peak hours\n\nChildcare is complimentary with Family memberships!',
  'massage': '💆‍♂️ We offer various wellness services:\n\n- Sports massage\n- Deep tissue massage\n- Physical therapy\n- Recovery sessions\n- Injury rehabilitation\n\nElite members get monthly massage sessions included!',
  'safety': '🏥 Your safety is our top priority:\n\n- Daily sanitization\n- HEPA air filtration\n- Regular equipment maintenance\n- First-aid certified staff\n- AED devices on-site\n- Emergency response protocols\n\nWe follow all health and safety guidelines.',
  'equipment': '🏋️‍♂️ Our facility features premium equipment:\n\n- Latest cardio machines\n- Full free weights area\n- Functional training zone\n- Stretching area\n- Recovery equipment\n\nAll equipment is professionally maintained weekly.',
  'membership-options': '💳 We offer flexible membership options:\n\n- Monthly/Annual plans\n- Family packages\n- Student discounts\n- Senior rates\n- Corporate partnerships\n\nAll memberships include a 7-day money-back guarantee!',
};

const FITNESS_RECOMMENDATIONS = {
  'weight loss': '🎯 For weight loss, I recommend:\n\n1. Workout Plan:\n- 3-4 days of cardio (30-45 mins)\n- 2-3 days of strength training\n- Focus on compound exercises\n\n2. Classes to Consider:\n- HIIT classes (burns more calories)\n- Spin classes\n- Strength training classes\n\n3. Nutrition Tips:\n- Create a moderate caloric deficit\n- Increase protein intake\n- Stay hydrated\n\nConsider our Premium membership for nutrition consultation and personal training sessions!',
  'muscle gain': '💪 For muscle gain, here\'s what I suggest:\n\n1. Workout Plan:\n- 4-5 days of strength training\n- Focus on progressive overload\n- Split routine (different muscle groups)\n\n2. Recommended Program:\n- Push/Pull/Legs split\n- Compound exercises first\n- 8-12 reps per set\n\n3. Nutrition Tips:\n- Caloric surplus of 300-500 calories\n- 1.6-2.2g protein per kg bodyweight\n- Adequate carbs for energy\n\nOur Elite membership includes weekly PT sessions perfect for this goal!',
  'beginner': '🌟 For beginners, I recommend:\n\n1. Starting Plan:\n- 3 full-body workouts per week\n- Focus on form and technique\n- Gradual progression\n\n2. Recommended Classes:\n- Intro to Strength Training\n- Beginner HIIT\n- Basic Yoga for flexibility\n\n3. Tips:\n- Start with bodyweight exercises\n- Learn proper form first\n- Don\'t rush progress\n\nOur Basic membership includes a fitness assessment to get you started right!',
  'toning': '✨ For toning and definition:\n\n1. Workout Mix:\n- 3 days strength training\n- 2-3 days moderate cardio\n- Focus on high reps, moderate weight\n\n2. Recommended Classes:\n- Body Sculpt\n- HIIT\n- Pilates\n\n3. Approach:\n- Circuit training\n- Supersets\n- Minimal rest between sets\n\nCheck out our Premium membership for unlimited classes!',
  'endurance': '🏃‍♂️ For improving endurance:\n\n1. Cardio Plan:\n- Progressive running program\n- Interval training\n- Cross-training activities\n\n2. Classes to Join:\n- Spin Class\n- HIIT\n- Cardio Kickboxing\n\n3. Training Tips:\n- Gradually increase duration\n- Mix intensity levels\n- Proper recovery\n\nOur Premium membership gives you access to all cardio classes!',
};

const NUTRITION_RECOMMENDATIONS = {
  'protein': '🥩 Daily protein recommendations:\n\n1. General guidelines:\n- Sedentary: 0.8g per kg bodyweight\n- Active: 1.2-1.6g per kg bodyweight\n- Building muscle: 1.6-2.2g per kg bodyweight\n\n2. Good protein sources:\n- Lean meats\n- Fish\n- Eggs\n- Legumes\n- Greek yogurt\n\nBook a nutrition consultation for personalized advice!',
  'vegan': '🥗 Yes! You can build muscle on a vegan diet:\n\n1. Protein sources:\n- Legumes\n- Tofu/Tempeh\n- Seitan\n- Quinoa\n- Plant protein powders\n\n2. Key considerations:\n- Track B12 intake\n- Consider supplements\n- Focus on whole foods\n\nOur nutritionists can help create a vegan meal plan!',
  'post-workout': '🥤 Optimal post-workout nutrition:\n\n1. Within 30 minutes:\n- Protein (20-30g)\n- Fast-digesting carbs\n- Hydration\n\n2. Good options:\n- Protein shake + banana\n- Greek yogurt + berries\n- Turkey sandwich\n\nConsult our trainers for personalized recommendations!',
  'snacks': '🍎 Healthy snack options:\n\n1. For weight loss:\n- Apple + almonds\n- Greek yogurt\n- Veggie sticks + hummus\n\n2. For muscle gain:\n- Protein smoothie\n- Peanut butter sandwich\n- Trail mix\n\nOur nutritionists can provide more personalized options!',
  'tracking': '📱 Ways to track calories:\n\n1. Apps:\n- MyFitnessPal\n- LoseIt\n- Cronometer\n\n2. Tips:\n- Use a food scale\n- Read nutrition labels\n- Track consistently\n\nOur trainers can help you set up tracking!',
};

const WORKOUT_TIPS = {
  'best-time': '⏰ The best workout time depends on you:\n\n1. Morning benefits:\n- Fewer crowds\n- Increased energy all day\n- Better sleep at night\n\n2. Evening benefits:\n- Higher body temperature\n- Greater strength\n- More flexible\n\nChoose a time you can stick to consistently!',
  'consistency': '📅 Tips for workout consistency:\n\n1. Planning:\n- Schedule workouts like meetings\n- Prepare gym bag night before\n- Set realistic goals\n\n2. Motivation:\n- Track progress\n- Find workout buddy\n- Reward yourself\n\nOur trainers can help create a sustainable routine!',
  'recovery': '🔄 Essential recovery tips:\n\n1. Post-workout:\n- Proper cool-down\n- Stretching\n- Protein intake\n\n2. General recovery:\n- Adequate sleep\n- Proper nutrition\n- Rest days\n\nConsider our massage services for enhanced recovery!',
  'progress': '📊 Track your progress with:\n\n1. Measurements:\n- Body measurements\n- Progress photos\n- Strength gains\n\n2. Our services:\n- Regular assessments\n- InBody scans\n- Trainer feedback\n\nLet us help you track your fitness journey!',
  'injury': '🤕 Working out with injury:\n\n1. General guidelines:\n- Consult healthcare provider\n- Modified exercises\n- Focus on recovery\n\n2. Our support:\n- Certified trainers\n- Physical therapy\n- Modified programs\n\nSpeak with our trainers for safe exercise options!',
};

const SPELLING_CORRECTIONS: { [key: string]: string[] } = {
  'membership': ['membershp', 'membrship', 'membeship', 'mebership'],
  'exercise': ['exercize', 'excercise', 'excersise', 'exercse'],
  'weight': ['wieght', 'wight', 'weighht', 'waight'],
  'muscle': ['muscl', 'musle', 'muscele', 'mussle'],
  'protein': ['protien', 'proteine', 'protain', 'protin'],
  'nutrition': ['nutriton', 'nutrision', 'nutritian', 'nutricion'],
  'trainer': ['trainor', 'traner', 'traineer', 'trayner'],
  'schedule': ['schedual', 'scheduel', 'shedule', 'scedule'],
  'equipment': ['equipmet', 'equiptment', 'equipement', 'equpment'],
  'cardio': ['kardio', 'cadio', 'cardyo', 'cardeo'],
  'strength': ['strenth', 'stregth', 'strenght', 'stregnth'],
  'fitness': ['fitnes', 'fittness', 'fittniss', 'finess'],
  'workout': ['workut', 'workoute', 'wurkout', 'workoot'],
  'beginner': ['beginer', 'begginer', 'begineer', 'beginr'],
  'training': ['trainning', 'traning', 'trainin', 'trainig'],
  'massage': ['masage', 'massge', 'masssage', 'massaje'],
  'swimming': ['swiming', 'swmming', 'swimimg', 'swimmig'],
  'facility': ['facilty', 'facillity', 'facilitie', 'faciliti'],
  'membership': ['membershp', 'membrship', 'membeship', 'mebership'],
  'location': ['locaton', 'locasion', 'lokation', 'locashun'],
};

const WORD_VARIATIONS: { [key: string]: string[] } = {
  'membership': ['subscription', 'plan', 'package', 'enrollment'],
  'trainer': ['coach', 'instructor', 'pt', 'personal trainer'],
  'exercise': ['workout', 'training', 'routine', 'program'],
  'equipment': ['machines', 'weights', 'gear', 'apparatus'],
  'schedule': ['timetable', 'timing', 'hours', 'slots'],
  'facility': ['gym', 'center', 'club', 'premises'],
  'price': ['cost', 'fee', 'rate', 'charge'],
  'location': ['address', 'place', 'spot', 'where'],
};

const correctSpelling = (text: string): string => {
  let correctedText = text.toLowerCase();
  
  Object.entries(SPELLING_CORRECTIONS).forEach(([correct, mistakes]) => {
    mistakes.forEach(mistake => {
      correctedText = correctedText.replace(new RegExp(mistake, 'gi'), correct);
    });
  });

  return correctedText;
};

const findIntent = (text: string): string => {
  const words = text.split(' ');
  let intent = '';

  Object.entries(WORD_VARIATIONS).forEach(([key, variations]) => {
    variations.forEach(variation => {
      if (words.some(word => word.toLowerCase().includes(variation.toLowerCase()))) {
        intent = key;
      }
    });
  });

  return intent;
};

const processMessage = (message: string): string => {
  const correctedMessage = correctSpelling(message);
  const intent = findIntent(correctedMessage);
  const lowerMessage = correctedMessage.toLowerCase();

  if (lowerMessage.match(/\b(hi|hey|hello|hola|greetings|sup|howdy)\b/)) {
    return "👋 Hello! I'm your PowerFit AI assistant. I can help you with:\n\n- Gym hours and location\n- Membership plans and pricing\n- Class schedules\n- Trainer information\n- Facility details\n- Contact information\n- Personalized fitness recommendations\n\nWhat would you like to know about?";
  }

  if (lowerMessage.includes('what should i do') || lowerMessage.includes('whats best for me') || 
      lowerMessage.includes('recommend') || lowerMessage.includes('suggest')) {
    if (lowerMessage.includes('weight loss') || lowerMessage.includes('lose weight')) {
      return FITNESS_RECOMMENDATIONS['weight loss'];
    }
    if (lowerMessage.includes('muscle') || lowerMessage.includes('strength')) {
      return FITNESS_RECOMMENDATIONS['muscle gain'];
    }
    if (lowerMessage.includes('beginner') || lowerMessage.includes('start')) {
      return FITNESS_RECOMMENDATIONS.beginner;
    }
    if (lowerMessage.includes('tone') || lowerMessage.includes('lean')) {
      return FITNESS_RECOMMENDATIONS.toning;
    }
    
    return "I'd love to help you with personalized recommendations! Could you please tell me:\n\n1. Your main fitness goal (e.g., weight loss, muscle gain, toning)\n2. Your current fitness level\n3. Any preferences or limitations\n\nThis will help me provide the best advice for you!";
  }

  if (lowerMessage.includes('trial') || lowerMessage.includes('free')) {
    return FAQ_RESPONSES.trial;
  }
  if (lowerMessage.includes('tour') || lowerMessage.includes('visit')) {
    return FAQ_RESPONSES.tour;
  }
  if (lowerMessage.includes('parking')) {
    return FAQ_RESPONSES.parking;
  }
  if (lowerMessage.includes('pool') || lowerMessage.includes('swim')) {
    return FAQ_RESPONSES.pool;
  }
  if (lowerMessage.includes('kid') || lowerMessage.includes('child') || lowerMessage.includes('daycare')) {
    return FAQ_RESPONSES.kids;
  }
  if (lowerMessage.includes('massage') || lowerMessage.includes('therapy') || lowerMessage.includes('spa')) {
    return FAQ_RESPONSES.massage;
  }
  if (lowerMessage.includes('clean') || lowerMessage.includes('covid') || lowerMessage.includes('sanit') || 
      lowerMessage.includes('safe') || lowerMessage.includes('emergency') || lowerMessage.includes('aed')) {
    return FAQ_RESPONSES.safety;
  }
  if (lowerMessage.includes('equipment') || lowerMessage.includes('machine') || lowerMessage.includes('weight')) {
    return FAQ_RESPONSES.equipment;
  }
  if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('close')) {
    return FAQ_RESPONSES.hours;
  }
  if (lowerMessage.includes('membership') || lowerMessage.includes('price') || lowerMessage.includes('cost') || 
      lowerMessage.includes('plan') || lowerMessage.includes('cancel') || lowerMessage.includes('transfer')) {
    return FAQ_RESPONSES.membership;
  }
  if (lowerMessage.includes('class') || lowerMessage.includes('schedule') || lowerMessage.includes('training')) {
    return FAQ_RESPONSES.classes;
  }
  if (lowerMessage.includes('trainer') || lowerMessage.includes('instructor') || lowerMessage.includes('coach')) {
    return FAQ_RESPONSES.trainers;
  }
  if (lowerMessage.includes('facility') || lowerMessage.includes('amenity')) {
    return FAQ_RESPONSES.facilities;
  }
  if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('direction')) {
    return FAQ_RESPONSES.location;
  }
  if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
    return FAQ_RESPONSES.contact;
  }
  if (lowerMessage.includes('protein')) {
    return NUTRITION_RECOMMENDATIONS.protein;
  }
  if (lowerMessage.includes('vegan') || lowerMessage.includes('vegetarian')) {
    return NUTRITION_RECOMMENDATIONS.vegan;
  }
  if (lowerMessage.includes('post-workout') || lowerMessage.includes('after workout') || lowerMessage.includes('after training')) {
    return NUTRITION_RECOMMENDATIONS.post_workout;
  }
  if (lowerMessage.includes('snack')) {
    return NUTRITION_RECOMMENDATIONS.snacks;
  }
  if (lowerMessage.includes('track') || lowerMessage.includes('calorie') || lowerMessage.includes('monitor')) {
    return NUTRITION_RECOMMENDATIONS.tracking;
  }
  if (lowerMessage.includes('best time') || lowerMessage.includes('when to work')) {
    return WORKOUT_TIPS['best-time'];
  }
  if (lowerMessage.includes('consistent') || lowerMessage.includes('routine') || lowerMessage.includes('habit')) {
    return WORKOUT_TIPS.consistency;
  }
  if (lowerMessage.includes('recover') || lowerMessage.includes('rest') || lowerMessage.includes('sore')) {
    return WORKOUT_TIPS.recovery;
  }
  if (lowerMessage.includes('track progress') || lowerMessage.includes('measure') || lowerMessage.includes('improve')) {
    return WORKOUT_TIPS.progress;
  }
  if (lowerMessage.includes('injury') || lowerMessage.includes('hurt') || lowerMessage.includes('pain')) {
    return WORKOUT_TIPS.injury;
  }

  return "I want to help you, but I need a bit more information. Could you please:\n\n1. Be more specific about what you're looking for\n2. Use simple terms related to fitness, facilities, or membership\n3. Ask about one topic at a time\n\nI'm here to provide detailed information about our gym, fitness advice, and membership options!";
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: "👋 Hello! I'm your PowerFit AI assistant. I can help you with:\n\n- Gym hours and location\n- Membership plans and pricing\n- Class schedules\n- Trainer information\n- Facility details\n- Contact information\n- Personalized fitness recommendations\n\nWhat would you like to know about?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    
    setIsTyping(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = processMessage(userMessage);
    setMessages(prev => [...prev, { type: 'bot', content: response }]);
    
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <div className="flex flex-col items-end space-y-2">
          <span className="bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium">
            Ask AI
          </span>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 max-w-[calc(100vw-2rem)] flex flex-col transform transition-transform animate-fade-in">
          <div className="bg-red-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">PowerFit AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 max-h-96 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;