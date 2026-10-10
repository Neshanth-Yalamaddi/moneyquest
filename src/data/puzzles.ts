import { PuzzleScenario } from '../types';

export const PUZZLES: Record<string, PuzzleScenario> = {
  'PB_001': {
  "id": "PB_001",
  "cityId": "city_pb_001",
  "pillar": "budget",
  "title": {
    "en": "Your First Scholarship Pocket Money",
    "hi": "Your First Scholarship Pocket Money",
    "te": "Your First Scholarship Pocket Money"
  },
  "subtitle": {
    "en": "Your student hostel room.",
    "hi": "Your student hostel room.",
    "te": "Your student hostel room."
  },
  "situationContext": {
    "en": "You just received \u20b96,000 as your monthly student scholarship pocket money. The month has 30 days ahead of you.",
    "hi": "You just received \u20b96,000 as your monthly student scholarship pocket money. The month has 30 days ahead of you.",
    "te": "You just received \u20b96,000 as your monthly student scholarship pocket money. The month has 30 days ahead of you."
  },
  "stipendContext": "Anand, your friendly senior roommate.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "PB_001_step_1",
      "title": {
        "en": "Splitting the \u20b96,000 Stipend (Sliders)",
        "hi": "Splitting the \u20b96,000 Stipend (Sliders)",
        "te": "Splitting the \u20b96,000 Stipend (Sliders)"
      },
      "situationContext": {
        "en": "Move the sliders to divide your \u20b96,000 between Important Needs, Fun Wants, and Emergency Money.",
        "hi": "Move the sliders to divide your \u20b96,000 between Important Needs, Fun Wants, and Emergency Money.",
        "te": "Move the sliders to divide your \u20b96,000 between Important Needs, Fun Wants, and Emergency Money."
      },
      "choices": [
        {
          "id": "PB_001_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "\u20b93,600 for Needs, \u20b91,200 for Wants, and \u20b91,200 for Emergency Money.",
            "hi": "\u20b93,600 for Needs, \u20b91,200 for Wants, and \u20b91,200 for Emergency Money.",
            "te": "\u20b93,600 for Needs, \u20b91,200 for Wants, and \u20b91,200 for Emergency Money."
          },
          "outcomeDescription": {
            "en": "You eat healthy food, travel on time, and still have money saved for sudden troubles.",
            "hi": "You eat healthy food, travel on time, and still have money saved for sudden troubles.",
            "te": "You eat healthy food, travel on time, and still have money saved for sudden troubles."
          },
          "pedagogicalFeedback": {
            "en": "You eat healthy food, travel on time, and still have money saved for sudden troubles.",
            "hi": "You eat healthy food, travel on time, and still have money saved for sudden troubles.",
            "te": "You eat healthy food, travel on time, and still have money saved for sudden troubles."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_001_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "\u20b94,000 for Needs, \u20b91,500 for Wants, and \u20b9500 for Emergency Money.",
            "hi": "\u20b94,000 for Needs, \u20b91,500 for Wants, and \u20b9500 for Emergency Money.",
            "te": "\u20b94,000 for Needs, \u20b91,500 for Wants, and \u20b9500 for Emergency Money."
          },
          "outcomeDescription": {
            "en": "All bills are paid, but your safety money is quite small.",
            "hi": "All bills are paid, but your safety money is quite small.",
            "te": "All bills are paid, but your safety money is quite small."
          },
          "pedagogicalFeedback": {
            "en": "All bills are paid, but your safety money is quite small.",
            "hi": "All bills are paid, but your safety money is quite small.",
            "te": "All bills are paid, but your safety money is quite small."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_001_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "\u20b93,000 for Needs, \u20b92,800 for Wants, and \u20b9200 for Emergency Money.",
            "hi": "\u20b93,000 for Needs, \u20b92,800 for Wants, and \u20b9200 for Emergency Money.",
            "te": "\u20b93,000 for Needs, \u20b92,800 for Wants, and \u20b9200 for Emergency Money."
          },
          "outcomeDescription": {
            "en": "You have fun in week one, but you run out of money for meals in week four.",
            "hi": "You have fun in week one, but you run out of money for meals in week four.",
            "te": "You have fun in week one, but you run out of money for meals in week four."
          },
          "pedagogicalFeedback": {
            "en": "You have fun in week one, but you run out of money for meals in week four.",
            "hi": "You have fun in week one, but you run out of money for meals in week four.",
            "te": "You have fun in week one, but you run out of money for meals in week four."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_001_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Spending \u20b95,500 on new shoes and video games right away.",
            "hi": "Spending \u20b95,500 on new shoes and video games right away.",
            "te": "Spending \u20b95,500 on new shoes and video games right away."
          },
          "outcomeDescription": {
            "en": "You cannot pay for your hostel food and have no money left.",
            "hi": "You cannot pay for your hostel food and have no money left.",
            "te": "You cannot pay for your hostel food and have no money left."
          },
          "pedagogicalFeedback": {
            "en": "You cannot pay for your hostel food and have no money left.",
            "hi": "You cannot pay for your hostel food and have no money left.",
            "te": "You cannot pay for your hostel food and have no money left."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_001_step_2",
      "title": {
        "en": "The Mid-Month Mess Bill Arrives",
        "hi": "The Mid-Month Mess Bill Arrives",
        "te": "The Mid-Month Mess Bill Arrives"
      },
      "situationContext": {
        "en": "On Day 15, the hostel warden asks for \u20b92,800 mess fees. Choose how to pay.",
        "hi": "On Day 15, the hostel warden asks for \u20b92,800 mess fees. Choose how to pay.",
        "te": "On Day 15, the hostel warden asks for \u20b92,800 mess fees. Choose how to pay."
      },
      "choices": [
        {
          "id": "PB_001_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Pay on time from your pre-allocated Needs envelope.",
            "hi": "Pay on time from your pre-allocated Needs envelope.",
            "te": "Pay on time from your pre-allocated Needs envelope."
          },
          "outcomeDescription": {
            "en": "Your food account is cleared with zero debt or penalties.",
            "hi": "Your food account is cleared with zero debt or penalties.",
            "te": "Your food account is cleared with zero debt or penalties."
          },
          "pedagogicalFeedback": {
            "en": "Your food account is cleared with zero debt or penalties.",
            "hi": "Your food account is cleared with zero debt or penalties.",
            "te": "Your food account is cleared with zero debt or penalties."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_001_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Ask for a 3-day grace period to withdraw cash from your savings account.",
            "hi": "Ask for a 3-day grace period to withdraw cash from your savings account.",
            "te": "Ask for a 3-day grace period to withdraw cash from your savings account."
          },
          "outcomeDescription": {
            "en": "The bill is paid, but you face minor administrative delays.",
            "hi": "The bill is paid, but you face minor administrative delays.",
            "te": "The bill is paid, but you face minor administrative delays."
          },
          "pedagogicalFeedback": {
            "en": "The bill is paid, but you face minor administrative delays.",
            "hi": "The bill is paid, but you face minor administrative delays.",
            "te": "The bill is paid, but you face minor administrative delays."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_001_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Empty your emergency money because you spent your Needs cash on snacks.",
            "hi": "Empty your emergency money because you spent your Needs cash on snacks.",
            "te": "Empty your emergency money because you spent your Needs cash on snacks."
          },
          "outcomeDescription": {
            "en": "Your food is covered, but any sudden surprise will now leave you stranded.",
            "hi": "Your food is covered, but any sudden surprise will now leave you stranded.",
            "te": "Your food is covered, but any sudden surprise will now leave you stranded."
          },
          "pedagogicalFeedback": {
            "en": "Your food is covered, but any sudden surprise will now leave you stranded.",
            "hi": "Your food is covered, but any sudden surprise will now leave you stranded.",
            "te": "Your food is covered, but any sudden surprise will now leave you stranded."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_001_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Borrow \u20b92,800 from a high-interest mobile lending app.",
            "hi": "Borrow \u20b92,800 from a high-interest mobile lending app.",
            "te": "Borrow \u20b92,800 from a high-interest mobile lending app."
          },
          "outcomeDescription": {
            "en": "You face high hidden interest charges and aggressive collection calls.",
            "hi": "You face high hidden interest charges and aggressive collection calls.",
            "te": "You face high hidden interest charges and aggressive collection calls."
          },
          "pedagogicalFeedback": {
            "en": "You face high hidden interest charges and aggressive collection calls.",
            "hi": "You face high hidden interest charges and aggressive collection calls.",
            "te": "You face high hidden interest charges and aggressive collection calls."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_001_step_3",
      "title": {
        "en": "The Canteen Celebration Invite",
        "hi": "The Canteen Celebration Invite",
        "te": "The Canteen Celebration Invite"
      },
      "situationContext": {
        "en": "On Day 25, friends ask you to join an end-of-month celebration costing \u20b9500. You have \u20b9300 left in your Wants pile.",
        "hi": "On Day 25, friends ask you to join an end-of-month celebration costing \u20b9500. You have \u20b9300 left in your Wants pile.",
        "te": "On Day 25, friends ask you to join an end-of-month celebration costing \u20b9500. You have \u20b9300 left in your Wants pile."
      },
      "choices": [
        {
          "id": "PB_001_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Order a \u20b9200 snack and stay within your remaining \u20b9300 Wants limit.",
            "hi": "Order a \u20b9200 snack and stay within your remaining \u20b9300 Wants limit.",
            "te": "Order a \u20b9200 snack and stay within your remaining \u20b9300 Wants limit."
          },
          "outcomeDescription": {
            "en": "You celebrate with friends and finish the month inside your spending limit.",
            "hi": "You celebrate with friends and finish the month inside your spending limit.",
            "te": "You celebrate with friends and finish the month inside your spending limit."
          },
          "pedagogicalFeedback": {
            "en": "You celebrate with friends and finish the month inside your spending limit.",
            "hi": "You celebrate with friends and finish the month inside your spending limit.",
            "te": "You celebrate with friends and finish the month inside your spending limit."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_001_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Skip the expensive food, join the table to chat, and eat your regular hostel meal later.",
            "hi": "Skip the expensive food, join the table to chat, and eat your regular hostel meal later.",
            "te": "Skip the expensive food, join the table to chat, and eat your regular hostel meal later."
          },
          "outcomeDescription": {
            "en": "You socialize and spend zero money, keeping your \u20b9300 intact.",
            "hi": "You socialize and spend zero money, keeping your \u20b9300 intact.",
            "te": "You socialize and spend zero money, keeping your \u20b9300 intact."
          },
          "pedagogicalFeedback": {
            "en": "You socialize and spend zero money, keeping your \u20b9300 intact.",
            "hi": "You socialize and spend zero money, keeping your \u20b9300 intact.",
            "te": "You socialize and spend zero money, keeping your \u20b9300 intact."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_001_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Dip into your emergency safety envelope to buy a full \u20b9500 luxury meal.",
            "hi": "Dip into your emergency safety envelope to buy a full \u20b9500 luxury meal.",
            "te": "Dip into your emergency safety envelope to buy a full \u20b9500 luxury meal."
          },
          "outcomeDescription": {
            "en": "You overspend on discretionary leisure by raiding your safety cushion.",
            "hi": "You overspend on discretionary leisure by raiding your safety cushion.",
            "te": "You overspend on discretionary leisure by raiding your safety cushion."
          },
          "pedagogicalFeedback": {
            "en": "You overspend on discretionary leisure by raiding your safety cushion.",
            "hi": "You overspend on discretionary leisure by raiding your safety cushion.",
            "te": "You overspend on discretionary leisure by raiding your safety cushion."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_001_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Treat everyone on store credit to look generous.",
            "hi": "Treat everyone on store credit to look generous.",
            "te": "Treat everyone on store credit to look generous."
          },
          "outcomeDescription": {
            "en": "You start next month in debt before your new stipend even arrives.",
            "hi": "You start next month in debt before your new stipend even arrives.",
            "te": "You start next month in debt before your new stipend even arrives."
          },
          "pedagogicalFeedback": {
            "en": "You start next month in debt before your new stipend even arrives.",
            "hi": "You start next month in debt before your new stipend even arrives.",
            "te": "You start next month in debt before your new stipend even arrives."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Needs vs Wants",
      "hi": "Needs vs Wants",
      "te": "Needs vs Wants"
    },
    "points": [
      {
        "en": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "hi": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "te": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books)."
      },
      {
        "en": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "hi": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "te": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks)."
      }
    ]
  }
},
  'PB_002': {
  "id": "PB_002",
  "cityId": "city_pb_002",
  "pillar": "budget",
  "title": {
    "en": "Buying Your School Books",
    "hi": "Buying Your School Books",
    "te": "Buying Your School Books"
  },
  "subtitle": {
    "en": "The local bookshop near your school.",
    "hi": "The local bookshop near your school.",
    "te": "The local bookshop near your school."
  },
  "situationContext": {
    "en": "You need 3 science textbooks and study supplies for class.",
    "hi": "You need 3 science textbooks and study supplies for class.",
    "te": "You need 3 science textbooks and study supplies for class."
  },
  "stipendContext": "The bookshop keeper.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "PB_002_step_1",
      "title": {
        "en": "Sourcing 3 Science Textbooks",
        "hi": "Sourcing 3 Science Textbooks",
        "te": "Sourcing 3 Science Textbooks"
      },
      "situationContext": {
        "en": "Choose how to get your books without wasting money.",
        "hi": "Choose how to get your books without wasting money.",
        "te": "Choose how to get your books without wasting money."
      },
      "choices": [
        {
          "id": "PB_002_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Buy neat second-hand books from a senior student for \u20b9800.",
            "hi": "Buy neat second-hand books from a senior student for \u20b9800.",
            "te": "Buy neat second-hand books from a senior student for \u20b9800."
          },
          "outcomeDescription": {
            "en": "You get all the study material you need and keep \u20b91,600 in your pocket.",
            "hi": "You get all the study material you need and keep \u20b91,600 in your pocket.",
            "te": "You get all the study material you need and keep \u20b91,600 in your pocket."
          },
          "pedagogicalFeedback": {
            "en": "You get all the study material you need and keep \u20b91,600 in your pocket.",
            "hi": "You get all the study material you need and keep \u20b91,600 in your pocket.",
            "te": "You get all the study material you need and keep \u20b91,600 in your pocket."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_002_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Borrow them from the school library for free, spending \u20b9200 on photocopying important pages.",
            "hi": "Borrow them from the school library for free, spending \u20b9200 on photocopying important pages.",
            "te": "Borrow them from the school library for free, spending \u20b9200 on photocopying important pages."
          },
          "outcomeDescription": {
            "en": "You save money, but you must share the library copy with others.",
            "hi": "You save money, but you must share the library copy with others.",
            "te": "You save money, but you must share the library copy with others."
          },
          "pedagogicalFeedback": {
            "en": "You save money, but you must share the library copy with others.",
            "hi": "You save money, but you must share the library copy with others.",
            "te": "You save money, but you must share the library copy with others."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_002_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Buy shiny, expensive new copies for \u20b92,400, leaving zero pocket money.",
            "hi": "Buy shiny, expensive new copies for \u20b92,400, leaving zero pocket money.",
            "te": "Buy shiny, expensive new copies for \u20b92,400, leaving zero pocket money."
          },
          "outcomeDescription": {
            "en": "You have new books, but no money left for lunch for two weeks.",
            "hi": "You have new books, but no money left for lunch for two weeks.",
            "te": "You have new books, but no money left for lunch for two weeks."
          },
          "pedagogicalFeedback": {
            "en": "You have new books, but no money left for lunch for two weeks.",
            "hi": "You have new books, but no money left for lunch for two weeks.",
            "te": "You have new books, but no money left for lunch for two weeks."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_002_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Click on an unverified link online offering \"Free Books\" that asks to install an unknown app on your phone.",
            "hi": "Click on an unverified link online offering \"Free Books\" that asks to install an unknown app on your phone.",
            "te": "Click on an unverified link online offering \"Free Books\" that asks to install an unknown app on your phone."
          },
          "outcomeDescription": {
            "en": "A virus gets onto your phone and tries to steal your information.",
            "hi": "A virus gets onto your phone and tries to steal your information.",
            "te": "A virus gets onto your phone and tries to steal your information."
          },
          "pedagogicalFeedback": {
            "en": "A virus gets onto your phone and tries to steal your information.",
            "hi": "A virus gets onto your phone and tries to steal your information.",
            "te": "A virus gets onto your phone and tries to steal your information."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_002_step_2",
      "title": {
        "en": "Selecting Notebooks & Geometry Box",
        "hi": "Selecting Notebooks & Geometry Box",
        "te": "Selecting Notebooks & Geometry Box"
      },
      "situationContext": {
        "en": "Pick the stationery items to buy for your exams.",
        "hi": "Pick the stationery items to buy for your exams.",
        "te": "Pick the stationery items to buy for your exams."
      },
      "choices": [
        {
          "id": "PB_002_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Buy a simple geometry box and two standard notebooks for \u20b9220.",
            "hi": "Buy a simple geometry box and two standard notebooks for \u20b9220.",
            "te": "Buy a simple geometry box and two standard notebooks for \u20b9220."
          },
          "outcomeDescription": {
            "en": "You have everything needed for exams and \u20b9280 remains for daily travel.",
            "hi": "You have everything needed for exams and \u20b9280 remains for daily travel.",
            "te": "You have everything needed for exams and \u20b9280 remains for daily travel."
          },
          "pedagogicalFeedback": {
            "en": "You have everything needed for exams and \u20b9280 remains for daily travel.",
            "hi": "You have everything needed for exams and \u20b9280 remains for daily travel.",
            "te": "You have everything needed for exams and \u20b9280 remains for daily travel."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_002_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Buy standard tools, plus one coloured marker you like for \u20b9310.",
            "hi": "Buy standard tools, plus one coloured marker you like for \u20b9310.",
            "te": "Buy standard tools, plus one coloured marker you like for \u20b9310."
          },
          "outcomeDescription": {
            "en": "You pass your tests and stay within your weekly money limit.",
            "hi": "You pass your tests and stay within your weekly money limit.",
            "te": "You pass your tests and stay within your weekly money limit."
          },
          "pedagogicalFeedback": {
            "en": "You pass your tests and stay within your weekly money limit.",
            "hi": "You pass your tests and stay within your weekly money limit.",
            "te": "You pass your tests and stay within your weekly money limit."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_002_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Buy an expensive cartoon-branded metal box and scented pens for \u20b9490.",
            "hi": "Buy an expensive cartoon-branded metal box and scented pens for \u20b9490.",
            "te": "Buy an expensive cartoon-branded metal box and scented pens for \u20b9490."
          },
          "outcomeDescription": {
            "en": "You have zero money left for emergency bus fare.",
            "hi": "You have zero money left for emergency bus fare.",
            "te": "You have zero money left for emergency bus fare."
          },
          "pedagogicalFeedback": {
            "en": "You have zero money left for emergency bus fare.",
            "hi": "You have zero money left for emergency bus fare.",
            "te": "You have zero money left for emergency bus fare."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_002_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Buy fancy toys from the shop front, leaving no money for notebooks.",
            "hi": "Buy fancy toys from the shop front, leaving no money for notebooks.",
            "te": "Buy fancy toys from the shop front, leaving no money for notebooks."
          },
          "outcomeDescription": {
            "en": "You enter the exam hall without your required stationery.",
            "hi": "You enter the exam hall without your required stationery.",
            "te": "You enter the exam hall without your required stationery."
          },
          "pedagogicalFeedback": {
            "en": "You enter the exam hall without your required stationery.",
            "hi": "You enter the exam hall without your required stationery.",
            "te": "You enter the exam hall without your required stationery."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_002_step_3",
      "title": {
        "en": "Managing the Remaining Change",
        "hi": "Managing the Remaining Change",
        "te": "Managing the Remaining Change"
      },
      "situationContext": {
        "en": "You have cash remaining from your textbook budget. Decide what to do with it.",
        "hi": "You have cash remaining from your textbook budget. Decide what to do with it.",
        "te": "You have cash remaining from your textbook budget. Decide what to do with it."
      },
      "choices": [
        {
          "id": "PB_002_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Deposit the remaining cash into your student bank account to start next month's book fund.",
            "hi": "Deposit the remaining cash into your student bank account to start next month's book fund.",
            "te": "Deposit the remaining cash into your student bank account to start next month's book fund."
          },
          "outcomeDescription": {
            "en": "Your study money stays safe and earns small interest.",
            "hi": "Your study money stays safe and earns small interest.",
            "te": "Your study money stays safe and earns small interest."
          },
          "pedagogicalFeedback": {
            "en": "Your study money stays safe and earns small interest.",
            "hi": "Your study money stays safe and earns small interest.",
            "te": "Your study money stays safe and earns small interest."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_002_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Place the cash in your locked hostel drawer envelope marked for semester supplies.",
            "hi": "Place the cash in your locked hostel drawer envelope marked for semester supplies.",
            "te": "Place the cash in your locked hostel drawer envelope marked for semester supplies."
          },
          "outcomeDescription": {
            "en": "The money is available for campus supplies, with low risk.",
            "hi": "The money is available for campus supplies, with low risk.",
            "te": "The money is available for campus supplies, with low risk."
          },
          "pedagogicalFeedback": {
            "en": "The money is available for campus supplies, with low risk.",
            "hi": "The money is available for campus supplies, with low risk.",
            "te": "The money is available for campus supplies, with low risk."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_002_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Spend the leftover money on comic books and energy drinks.",
            "hi": "Spend the leftover money on comic books and energy drinks.",
            "te": "Spend the leftover money on comic books and energy drinks."
          },
          "outcomeDescription": {
            "en": "The surplus cash trickles away on short-term wants.",
            "hi": "The surplus cash trickles away on short-term wants.",
            "te": "The surplus cash trickles away on short-term wants."
          },
          "pedagogicalFeedback": {
            "en": "The surplus cash trickles away on short-term wants.",
            "hi": "The surplus cash trickles away on short-term wants.",
            "te": "The surplus cash trickles away on short-term wants."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_002_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Lend the entire balance to an acquaintance who never repays debts.",
            "hi": "Lend the entire balance to an acquaintance who never repays debts.",
            "te": "Lend the entire balance to an acquaintance who never repays debts."
          },
          "outcomeDescription": {
            "en": "Your surplus is gone and you lose a friend over unpaid loans.",
            "hi": "Your surplus is gone and you lose a friend over unpaid loans.",
            "te": "Your surplus is gone and you lose a friend over unpaid loans."
          },
          "pedagogicalFeedback": {
            "en": "Your surplus is gone and you lose a friend over unpaid loans.",
            "hi": "Your surplus is gone and you lose a friend over unpaid loans.",
            "te": "Your surplus is gone and you lose a friend over unpaid loans."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Needs vs Wants",
      "hi": "Needs vs Wants",
      "te": "Needs vs Wants"
    },
    "points": [
      {
        "en": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "hi": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "te": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books)."
      },
      {
        "en": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "hi": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "te": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks)."
      }
    ]
  }
},
  'PB_003': {
  "id": "PB_003",
  "cityId": "city_pb_003",
  "pillar": "budget",
  "title": {
    "en": "The Expensive Weekend Party",
    "hi": "The Expensive Weekend Party",
    "te": "The Expensive Weekend Party"
  },
  "subtitle": {
    "en": "The campus canteen.",
    "hi": "The campus canteen.",
    "te": "The campus canteen."
  },
  "situationContext": {
    "en": "Your friends invite you to a fancy cafe where a burger and drink cost \u20b91,200. You only have \u20b9400 set aside for fun this week.",
    "hi": "Your friends invite you to a fancy cafe where a burger and drink cost \u20b91,200. You only have \u20b9400 set aside for fun this week.",
    "te": "Your friends invite you to a fancy cafe where a burger and drink cost \u20b91,200. You only have \u20b9400 set aside for fun this week."
  },
  "stipendContext": "A group of classmates.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "PB_003_step_1",
      "title": {
        "en": "Responding to the Invite",
        "hi": "Responding to the Invite",
        "te": "Responding to the Invite"
      },
      "situationContext": {
        "en": "Decide what to say to your friends.",
        "hi": "Decide what to say to your friends.",
        "te": "Decide what to say to your friends."
      },
      "choices": [
        {
          "id": "PB_003_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Say: \"Let's hang out at the campus ground or eat at the local tea shop instead!\" (Spends \u20b9150).",
            "hi": "Say: \"Let's hang out at the campus ground or eat at the local tea shop instead!\" (Spends \u20b9150).",
            "te": "Say: \"Let's hang out at the campus ground or eat at the local tea shop instead!\" (Spends \u20b9150)."
          },
          "outcomeDescription": {
            "en": "You spend time with friends, have fun, and stay within your budget.",
            "hi": "You spend time with friends, have fun, and stay within your budget.",
            "te": "You spend time with friends, have fun, and stay within your budget."
          },
          "pedagogicalFeedback": {
            "en": "You spend time with friends, have fun, and stay within your budget.",
            "hi": "You spend time with friends, have fun, and stay within your budget.",
            "te": "You spend time with friends, have fun, and stay within your budget."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_003_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Go along, order only a small fruit juice for \u20b9250, and enjoy chatting.",
            "hi": "Go along, order only a small fruit juice for \u20b9250, and enjoy chatting.",
            "te": "Go along, order only a small fruit juice for \u20b9250, and enjoy chatting."
          },
          "outcomeDescription": {
            "en": "You join the group without spending more than your limit.",
            "hi": "You join the group without spending more than your limit.",
            "te": "You join the group without spending more than your limit."
          },
          "pedagogicalFeedback": {
            "en": "You join the group without spending more than your limit.",
            "hi": "You join the group without spending more than your limit.",
            "te": "You join the group without spending more than your limit."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_003_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Order the full \u20b91,200 meal by using money meant for next week's bus pass.",
            "hi": "Order the full \u20b91,200 meal by using money meant for next week's bus pass.",
            "te": "Order the full \u20b91,200 meal by using money meant for next week's bus pass."
          },
          "outcomeDescription": {
            "en": "You will have to walk 5 kilometers to school every day next week.",
            "hi": "You will have to walk 5 kilometers to school every day next week.",
            "te": "You will have to walk 5 kilometers to school every day next week."
          },
          "pedagogicalFeedback": {
            "en": "You will have to walk 5 kilometers to school every day next week.",
            "hi": "You will have to walk 5 kilometers to school every day next week.",
            "te": "You will have to walk 5 kilometers to school every day next week."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_003_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Borrow \u20b91,200 from a high-interest money-lending app on your phone.",
            "hi": "Borrow \u20b91,200 from a high-interest money-lending app on your phone.",
            "te": "Borrow \u20b91,200 from a high-interest money-lending app on your phone."
          },
          "outcomeDescription": {
            "en": "You now owe \u20b92,000 back next week and receive threatening phone calls.",
            "hi": "You now owe \u20b92,000 back next week and receive threatening phone calls.",
            "te": "You now owe \u20b92,000 back next week and receive threatening phone calls."
          },
          "pedagogicalFeedback": {
            "en": "You now owe \u20b92,000 back next week and receive threatening phone calls.",
            "hi": "You now owe \u20b92,000 back next week and receive threatening phone calls.",
            "te": "You now owe \u20b92,000 back next week and receive threatening phone calls."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_003_step_2",
      "title": {
        "en": "The Group Bill Split",
        "hi": "The Group Bill Split",
        "te": "The Group Bill Split"
      },
      "situationContext": {
        "en": "At the table, two friends order luxury desserts and suggest splitting the bill equally among everyone.",
        "hi": "At the table, two friends order luxury desserts and suggest splitting the bill equally among everyone.",
        "te": "At the table, two friends order luxury desserts and suggest splitting the bill equally among everyone."
      },
      "choices": [
        {
          "id": "PB_003_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Politely say: \"I had just a juice, so I'll chip in my \u20b9250 share.\"",
            "hi": "Politely say: \"I had just a juice, so I'll chip in my \u20b9250 share.\"",
            "te": "Politely say: \"I had just a juice, so I'll chip in my \u20b9250 share.\""
          },
          "outcomeDescription": {
            "en": "You set clear boundaries and protect your weekly wallet.",
            "hi": "You set clear boundaries and protect your weekly wallet.",
            "te": "You set clear boundaries and protect your weekly wallet."
          },
          "pedagogicalFeedback": {
            "en": "You set clear boundaries and protect your weekly wallet.",
            "hi": "You set clear boundaries and protect your weekly wallet.",
            "te": "You set clear boundaries and protect your weekly wallet."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_003_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Offer to calculate the exact breakdown on paper for the group.",
            "hi": "Offer to calculate the exact breakdown on paper for the group.",
            "te": "Offer to calculate the exact breakdown on paper for the group."
          },
          "outcomeDescription": {
            "en": "The group agrees on fair billing without awkwardness.",
            "hi": "The group agrees on fair billing without awkwardness.",
            "te": "The group agrees on fair billing without awkwardness."
          },
          "pedagogicalFeedback": {
            "en": "The group agrees on fair billing without awkwardness.",
            "hi": "The group agrees on fair billing without awkwardness.",
            "te": "The group agrees on fair billing without awkwardness."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_003_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Stay quiet and pay \u20b9450, leaving yourself with zero money for the week.",
            "hi": "Stay quiet and pay \u20b9450, leaving yourself with zero money for the week.",
            "te": "Stay quiet and pay \u20b9450, leaving yourself with zero money for the week."
          },
          "outcomeDescription": {
            "en": "You pay for other people's desserts and run out of cash.",
            "hi": "You pay for other people's desserts and run out of cash.",
            "te": "You pay for other people's desserts and run out of cash."
          },
          "pedagogicalFeedback": {
            "en": "You pay for other people's desserts and run out of cash.",
            "hi": "You pay for other people's desserts and run out of cash.",
            "te": "You pay for other people's desserts and run out of cash."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_003_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Sneak away while others are looking to avoid paying your own share.",
            "hi": "Sneak away while others are looking to avoid paying your own share.",
            "te": "Sneak away while others are looking to avoid paying your own share."
          },
          "outcomeDescription": {
            "en": "You lose the respect and trust of your classmates.",
            "hi": "You lose the respect and trust of your classmates.",
            "te": "You lose the respect and trust of your classmates."
          },
          "pedagogicalFeedback": {
            "en": "You lose the respect and trust of your classmates.",
            "hi": "You lose the respect and trust of your classmates.",
            "te": "You lose the respect and trust of your classmates."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_003_step_3",
      "title": {
        "en": "Heading Back to Campus",
        "hi": "Heading Back to Campus",
        "te": "Heading Back to Campus"
      },
      "situationContext": {
        "en": "The party ends at 9 PM. You have \u20b9150 left in your pocket. Pick your ride back.",
        "hi": "The party ends at 9 PM. You have \u20b9150 left in your pocket. Pick your ride back.",
        "te": "The party ends at 9 PM. You have \u20b9150 left in your pocket. Pick your ride back."
      },
      "choices": [
        {
          "id": "PB_003_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Take the scheduled student shuttle bus for \u20b920.",
            "hi": "Take the scheduled student shuttle bus for \u20b920.",
            "te": "Take the scheduled student shuttle bus for \u20b920."
          },
          "outcomeDescription": {
            "en": "You return safely to campus with your budget intact.",
            "hi": "You return safely to campus with your budget intact.",
            "te": "You return safely to campus with your budget intact."
          },
          "pedagogicalFeedback": {
            "en": "You return safely to campus with your budget intact.",
            "hi": "You return safely to campus with your budget intact.",
            "te": "You return safely to campus with your budget intact."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_003_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Share an auto-rickshaw with two classmates for \u20b950 each.",
            "hi": "Share an auto-rickshaw with two classmates for \u20b950 each.",
            "te": "Share an auto-rickshaw with two classmates for \u20b950 each."
          },
          "outcomeDescription": {
            "en": "You travel comfortably and stay well within your limit.",
            "hi": "You travel comfortably and stay well within your limit.",
            "te": "You travel comfortably and stay well within your limit."
          },
          "pedagogicalFeedback": {
            "en": "You travel comfortably and stay well within your limit.",
            "hi": "You travel comfortably and stay well within your limit.",
            "te": "You travel comfortably and stay well within your limit."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_003_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Take an expensive solo cab for \u20b9140, emptying your wallet completely.",
            "hi": "Take an expensive solo cab for \u20b9140, emptying your wallet completely.",
            "te": "Take an expensive solo cab for \u20b9140, emptying your wallet completely."
          },
          "outcomeDescription": {
            "en": "You arrive comfortably, but have no emergency coins left.",
            "hi": "You arrive comfortably, but have no emergency coins left.",
            "te": "You arrive comfortably, but have no emergency coins left."
          },
          "pedagogicalFeedback": {
            "en": "You arrive comfortably, but have no emergency coins left.",
            "hi": "You arrive comfortably, but have no emergency coins left.",
            "te": "You arrive comfortably, but have no emergency coins left."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_003_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Accept a free lift on a motorcycle with an unlicensed, reckless driver.",
            "hi": "Accept a free lift on a motorcycle with an unlicensed, reckless driver.",
            "te": "Accept a free lift on a motorcycle with an unlicensed, reckless driver."
          },
          "outcomeDescription": {
            "en": "You put your physical safety at high risk to save money.",
            "hi": "You put your physical safety at high risk to save money.",
            "te": "You put your physical safety at high risk to save money."
          },
          "pedagogicalFeedback": {
            "en": "You put your physical safety at high risk to save money.",
            "hi": "You put your physical safety at high risk to save money.",
            "te": "You put your physical safety at high risk to save money."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Needs vs Wants",
      "hi": "Needs vs Wants",
      "te": "Needs vs Wants"
    },
    "points": [
      {
        "en": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "hi": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "te": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books)."
      },
      {
        "en": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "hi": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "te": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks)."
      }
    ]
  }
},
  'PB_004': {
  "id": "PB_004",
  "cityId": "city_pb_004",
  "pillar": "budget",
  "title": {
    "en": "The Broken Study Laptop Dilemma",
    "hi": "The Broken Study Laptop Dilemma",
    "te": "The Broken Study Laptop Dilemma"
  },
  "subtitle": {
    "en": "Electronics repair market.",
    "hi": "Electronics repair market.",
    "te": "Electronics repair market."
  },
  "situationContext": {
    "en": "Your laptop screen shuts off right before assignment deadlines. You have \u20b93,000 saved up.",
    "hi": "Your laptop screen shuts off right before assignment deadlines. You have \u20b93,000 saved up.",
    "te": "Your laptop screen shuts off right before assignment deadlines. You have \u20b93,000 saved up."
  },
  "stipendContext": "Repair shop specialist.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "PB_004_step_1",
      "title": {
        "en": "Finding the Technical Problem",
        "hi": "Finding the Technical Problem",
        "te": "Finding the Technical Problem"
      },
      "situationContext": {
        "en": "Decide how to diagnose the issue.",
        "hi": "Decide how to diagnose the issue.",
        "te": "Decide how to diagnose the issue."
      },
      "choices": [
        {
          "id": "PB_004_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Take it to the university IT desk and two certified repair shops for free estimates.",
            "hi": "Take it to the university IT desk and two certified repair shops for free estimates.",
            "te": "Take it to the university IT desk and two certified repair shops for free estimates."
          },
          "outcomeDescription": {
            "en": "You discover it is only a loose video display wire.",
            "hi": "You discover it is only a loose video display wire.",
            "te": "You discover it is only a loose video display wire."
          },
          "pedagogicalFeedback": {
            "en": "You discover it is only a loose video display wire.",
            "hi": "You discover it is only a loose video display wire.",
            "te": "You discover it is only a loose video display wire."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_004_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Check if your campus library provides temporary study computers for the week.",
            "hi": "Check if your campus library provides temporary study computers for the week.",
            "te": "Check if your campus library provides temporary study computers for the week."
          },
          "outcomeDescription": {
            "en": "You submit your work on time without spending cash right away.",
            "hi": "You submit your work on time without spending cash right away.",
            "te": "You submit your work on time without spending cash right away."
          },
          "pedagogicalFeedback": {
            "en": "You submit your work on time without spending cash right away.",
            "hi": "You submit your work on time without spending cash right away.",
            "te": "You submit your work on time without spending cash right away."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_004_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Bang the keyboard repeatedly hoping the screen turns on.",
            "hi": "Bang the keyboard repeatedly hoping the screen turns on.",
            "te": "Bang the keyboard repeatedly hoping the screen turns on."
          },
          "outcomeDescription": {
            "en": "You crack the plastic casing and make the damage worse.",
            "hi": "You crack the plastic casing and make the damage worse.",
            "te": "You crack the plastic casing and make the damage worse."
          },
          "pedagogicalFeedback": {
            "en": "You crack the plastic casing and make the damage worse.",
            "hi": "You crack the plastic casing and make the damage worse.",
            "te": "You crack the plastic casing and make the damage worse."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_004_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Download an unverified \"screen fixer\" software on your phone and plug it in.",
            "hi": "Download an unverified \"screen fixer\" software on your phone and plug it in.",
            "te": "Download an unverified \"screen fixer\" software on your phone and plug it in."
          },
          "outcomeDescription": {
            "en": "Malware locks your phone and laptop files.",
            "hi": "Malware locks your phone and laptop files.",
            "te": "Malware locks your phone and laptop files."
          },
          "pedagogicalFeedback": {
            "en": "Malware locks your phone and laptop files.",
            "hi": "Malware locks your phone and laptop files.",
            "te": "Malware locks your phone and laptop files."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_004_step_2",
      "title": {
        "en": "Selecting the Solution",
        "hi": "Selecting the Solution",
        "te": "Selecting the Solution"
      },
      "situationContext": {
        "en": "The shop offers to fix the cable for \u20b9600, or sell a brand-new screen for \u20b92,800.",
        "hi": "The shop offers to fix the cable for \u20b9600, or sell a brand-new screen for \u20b92,800.",
        "te": "The shop offers to fix the cable for \u20b9600, or sell a brand-new screen for \u20b92,800."
      },
      "choices": [
        {
          "id": "PB_004_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Pay \u20b9600 for the cable repair and test it in front of the technician.",
            "hi": "Pay \u20b9600 for the cable repair and test it in front of the technician.",
            "te": "Pay \u20b9600 for the cable repair and test it in front of the technician."
          },
          "outcomeDescription": {
            "en": "The laptop works like new and you keep \u20b92,400 in savings.",
            "hi": "The laptop works like new and you keep \u20b92,400 in savings.",
            "te": "The laptop works like new and you keep \u20b92,400 in savings."
          },
          "pedagogicalFeedback": {
            "en": "The laptop works like new and you keep \u20b92,400 in savings.",
            "hi": "The laptop works like new and you keep \u20b92,400 in savings.",
            "te": "The laptop works like new and you keep \u20b92,400 in savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_004_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Pay \u20b9600 for the cable repair and buy a \u20b9300 cooling pad for safety.",
            "hi": "Pay \u20b9600 for the cable repair and buy a \u20b9300 cooling pad for safety.",
            "te": "Pay \u20b9600 for the cable repair and buy a \u20b9300 cooling pad for safety."
          },
          "outcomeDescription": {
            "en": "Your computer runs smoothly while staying within budget.",
            "hi": "Your computer runs smoothly while staying within budget.",
            "te": "Your computer runs smoothly while staying within budget."
          },
          "pedagogicalFeedback": {
            "en": "Your computer runs smoothly while staying within budget.",
            "hi": "Your computer runs smoothly while staying within budget.",
            "te": "Your computer runs smoothly while staying within budget."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_004_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Buy the \u20b92,800 new screen, draining all your savings.",
            "hi": "Buy the \u20b92,800 new screen, draining all your savings.",
            "te": "Buy the \u20b92,800 new screen, draining all your savings."
          },
          "outcomeDescription": {
            "en": "The laptop is repaired, but your bank balance drops to zero.",
            "hi": "The laptop is repaired, but your bank balance drops to zero.",
            "te": "The laptop is repaired, but your bank balance drops to zero."
          },
          "pedagogicalFeedback": {
            "en": "The laptop is repaired, but your bank balance drops to zero.",
            "hi": "The laptop is repaired, but your bank balance drops to zero.",
            "te": "The laptop is repaired, but your bank balance drops to zero."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_004_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Sign a 24-month payment contract for a brand-new \u20b960,000 gaming laptop.",
            "hi": "Sign a 24-month payment contract for a brand-new \u20b960,000 gaming laptop.",
            "te": "Sign a 24-month payment contract for a brand-new \u20b960,000 gaming laptop."
          },
          "outcomeDescription": {
            "en": "You take on long-term monthly debts you cannot afford.",
            "hi": "You take on long-term monthly debts you cannot afford.",
            "te": "You take on long-term monthly debts you cannot afford."
          },
          "pedagogicalFeedback": {
            "en": "You take on long-term monthly debts you cannot afford.",
            "hi": "You take on long-term monthly debts you cannot afford.",
            "te": "You take on long-term monthly debts you cannot afford."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_004_step_3",
      "title": {
        "en": "Rebuilding Your Cushion",
        "hi": "Rebuilding Your Cushion",
        "te": "Rebuilding Your Cushion"
      },
      "situationContext": {
        "en": "You spent \u20b9600 on the repair. Choose how to replenish your wallet.",
        "hi": "You spent \u20b9600 on the repair. Choose how to replenish your wallet.",
        "te": "You spent \u20b9600 on the repair. Choose how to replenish your wallet."
      },
      "choices": [
        {
          "id": "PB_004_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Trim \u20b9150 from your weekly snack budget over the next 4 weeks.",
            "hi": "Trim \u20b9150 from your weekly snack budget over the next 4 weeks.",
            "te": "Trim \u20b9150 from your weekly snack budget over the next 4 weeks."
          },
          "outcomeDescription": {
            "en": "Your emergency reserve is fully restored without stress.",
            "hi": "Your emergency reserve is fully restored without stress.",
            "te": "Your emergency reserve is fully restored without stress."
          },
          "pedagogicalFeedback": {
            "en": "Your emergency reserve is fully restored without stress.",
            "hi": "Your emergency reserve is fully restored without stress.",
            "te": "Your emergency reserve is fully restored without stress."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_004_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Deposit spare coins slowly over two months to cover the difference.",
            "hi": "Deposit spare coins slowly over two months to cover the difference.",
            "te": "Deposit spare coins slowly over two months to cover the difference."
          },
          "outcomeDescription": {
            "en": "The fund recovers slowly, with minor risk during the gap.",
            "hi": "The fund recovers slowly, with minor risk during the gap.",
            "te": "The fund recovers slowly, with minor risk during the gap."
          },
          "pedagogicalFeedback": {
            "en": "The fund recovers slowly, with minor risk during the gap.",
            "hi": "The fund recovers slowly, with minor risk during the gap.",
            "te": "The fund recovers slowly, with minor risk during the gap."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_004_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Ignore the missing \u20b9600 and carry on without a backup cushion.",
            "hi": "Ignore the missing \u20b9600 and carry on without a backup cushion.",
            "te": "Ignore the missing \u20b9600 and carry on without a backup cushion."
          },
          "outcomeDescription": {
            "en": "Another surprise bill will put you into immediate debt.",
            "hi": "Another surprise bill will put you into immediate debt.",
            "te": "Another surprise bill will put you into immediate debt."
          },
          "pedagogicalFeedback": {
            "en": "Another surprise bill will put you into immediate debt.",
            "hi": "Another surprise bill will put you into immediate debt.",
            "te": "Another surprise bill will put you into immediate debt."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_004_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Skip hostel meals for four days to recover the money immediately.",
            "hi": "Skip hostel meals for four days to recover the money immediately.",
            "te": "Skip hostel meals for four days to recover the money immediately."
          },
          "outcomeDescription": {
            "en": "You fall sick and face fresh medical expenses.",
            "hi": "You fall sick and face fresh medical expenses.",
            "te": "You fall sick and face fresh medical expenses."
          },
          "pedagogicalFeedback": {
            "en": "You fall sick and face fresh medical expenses.",
            "hi": "You fall sick and face fresh medical expenses.",
            "te": "You fall sick and face fresh medical expenses."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Needs vs Wants",
      "hi": "Needs vs Wants",
      "te": "Needs vs Wants"
    },
    "points": [
      {
        "en": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "hi": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "te": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books)."
      },
      {
        "en": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "hi": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "te": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks)."
      }
    ]
  }
},
  'PB_005': {
  "id": "PB_005",
  "cityId": "city_pb_005",
  "pillar": "budget",
  "title": {
    "en": "Finding the Money Leaks (Audit Minigame)",
    "hi": "Finding the Money Leaks (Audit Minigame)",
    "te": "Finding the Money Leaks (Audit Minigame)"
  },
  "subtitle": {
    "en": "Your study desk.",
    "hi": "Your study desk.",
    "te": "Your study desk."
  },
  "situationContext": {
    "en": "You had \u20b92,000 at the start of the week, but now you only have \u20b9200 left! You don't know where it went!",
    "hi": "You had \u20b92,000 at the start of the week, but now you only have \u20b9200 left! You don't know where it went!",
    "te": "You had \u20b92,000 at the start of the week, but now you only have \u20b9200 left! You don't know where it went!"
  },
  "stipendContext": "Teacher Lakshmi.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "PB_005_step_1",
      "title": {
        "en": "Inspecting the Expense Slips",
        "hi": "Inspecting the Expense Slips",
        "te": "Inspecting the Expense Slips"
      },
      "situationContext": {
        "en": "Look at 5 small slips of paper showing your spending and tap the 2 \"wasteful leaks\".",
        "hi": "Look at 5 small slips of paper showing your spending and tap the 2 \"wasteful leaks\".",
        "te": "Look at 5 small slips of paper showing your spending and tap the 2 \"wasteful leaks\"."
      },
      "choices": [
        {
          "id": "PB_005_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Spot the unused online game subscription (\u20b9600) and excessive daily soda drinks (\u20b9500), then cancel them.",
            "hi": "Spot the unused online game subscription (\u20b9600) and excessive daily soda drinks (\u20b9500), then cancel them.",
            "te": "Spot the unused online game subscription (\u20b9600) and excessive daily soda drinks (\u20b9500), then cancel them."
          },
          "outcomeDescription": {
            "en": "You recover \u20b91,100 for your monthly savings.",
            "hi": "You recover \u20b91,100 for your monthly savings.",
            "te": "You recover \u20b91,100 for your monthly savings."
          },
          "pedagogicalFeedback": {
            "en": "You recover \u20b91,100 for your monthly savings.",
            "hi": "You recover \u20b91,100 for your monthly savings.",
            "te": "You recover \u20b91,100 for your monthly savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_005_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Spot one leak and cut down snack spending.",
            "hi": "Spot one leak and cut down snack spending.",
            "te": "Spot one leak and cut down snack spending."
          },
          "outcomeDescription": {
            "en": "You save \u20b9500, but one leak remains active.",
            "hi": "You save \u20b9500, but one leak remains active.",
            "te": "You save \u20b9500, but one leak remains active."
          },
          "pedagogicalFeedback": {
            "en": "You save \u20b9500, but one leak remains active.",
            "hi": "You save \u20b9500, but one leak remains active.",
            "te": "You save \u20b9500, but one leak remains active."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_005_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Stop buying your daily school lunch to save money instead of cutting the game subscription.",
            "hi": "Stop buying your daily school lunch to save money instead of cutting the game subscription.",
            "te": "Stop buying your daily school lunch to save money instead of cutting the game subscription."
          },
          "outcomeDescription": {
            "en": "You feel sick and tired during class, while the game still drains your money.",
            "hi": "You feel sick and tired during class, while the game still drains your money.",
            "te": "You feel sick and tired during class, while the game still drains your money."
          },
          "pedagogicalFeedback": {
            "en": "You feel sick and tired during class, while the game still drains your money.",
            "hi": "You feel sick and tired during class, while the game still drains your money.",
            "te": "You feel sick and tired during class, while the game still drains your money."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_005_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Ignore the list and assume money disappears on its own.",
            "hi": "Ignore the list and assume money disappears on its own.",
            "te": "Ignore the list and assume money disappears on its own."
          },
          "outcomeDescription": {
            "en": "The silent leak drains your pocket money every week.",
            "hi": "The silent leak drains your pocket money every week.",
            "te": "The silent leak drains your pocket money every week."
          },
          "pedagogicalFeedback": {
            "en": "The silent leak drains your pocket money every week.",
            "hi": "The silent leak drains your pocket money every week.",
            "te": "The silent leak drains your pocket money every week."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_005_step_2",
      "title": {
        "en": "Stopping the Automated Leak",
        "hi": "Stopping the Automated Leak",
        "te": "Stopping the Automated Leak"
      },
      "situationContext": {
        "en": "Choose how to turn off the recurring \u20b9600 digital game charge.",
        "hi": "Choose how to turn off the recurring \u20b9600 digital game charge.",
        "te": "Choose how to turn off the recurring \u20b9600 digital game charge."
      },
      "choices": [
        {
          "id": "PB_005_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Open the official app store settings, cancel the auto-renew pass, and unlink your card.",
            "hi": "Open the official app store settings, cancel the auto-renew pass, and unlink your card.",
            "te": "Open the official app store settings, cancel the auto-renew pass, and unlink your card."
          },
          "outcomeDescription": {
            "en": "The recurring charge stops permanently.",
            "hi": "The recurring charge stops permanently.",
            "te": "The recurring charge stops permanently."
          },
          "pedagogicalFeedback": {
            "en": "The recurring charge stops permanently.",
            "hi": "The recurring charge stops permanently.",
            "te": "The recurring charge stops permanently."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_005_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Delete your payment card from the website.",
            "hi": "Delete your payment card from the website.",
            "te": "Delete your payment card from the website."
          },
          "outcomeDescription": {
            "en": "The charge fails, though the account remains open.",
            "hi": "The charge fails, though the account remains open.",
            "te": "The charge fails, though the account remains open."
          },
          "pedagogicalFeedback": {
            "en": "The charge fails, though the account remains open.",
            "hi": "The charge fails, though the account remains open.",
            "te": "The charge fails, though the account remains open."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_005_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Delete the game app icon from your phone home screen without canceling.",
            "hi": "Delete the game app icon from your phone home screen without canceling.",
            "te": "Delete the game app icon from your phone home screen without canceling."
          },
          "outcomeDescription": {
            "en": "The app icon is gone, but the bank keeps charging you every month.",
            "hi": "The app icon is gone, but the bank keeps charging you every month.",
            "te": "The app icon is gone, but the bank keeps charging you every month."
          },
          "pedagogicalFeedback": {
            "en": "The app icon is gone, but the bank keeps charging you every month.",
            "hi": "The app icon is gone, but the bank keeps charging you every month.",
            "te": "The app icon is gone, but the bank keeps charging you every month."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_005_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Complain on social media while leaving the subscription running.",
            "hi": "Complain on social media while leaving the subscription running.",
            "te": "Complain on social media while leaving the subscription running."
          },
          "outcomeDescription": {
            "en": "The platform continues deducting funds from your account.",
            "hi": "The platform continues deducting funds from your account.",
            "te": "The platform continues deducting funds from your account."
          },
          "pedagogicalFeedback": {
            "en": "The platform continues deducting funds from your account.",
            "hi": "The platform continues deducting funds from your account.",
            "te": "The platform continues deducting funds from your account."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "PB_005_step_3",
      "title": {
        "en": "Setting Up a Weekly Spending Tracker",
        "hi": "Setting Up a Weekly Spending Tracker",
        "te": "Setting Up a Weekly Spending Tracker"
      },
      "situationContext": {
        "en": "Choose a reliable way to monitor daily pocket spending.",
        "hi": "Choose a reliable way to monitor daily pocket spending.",
        "te": "Choose a reliable way to monitor daily pocket spending."
      },
      "choices": [
        {
          "id": "PB_005_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Use three paper envelopes (Food, Study, Fun) and put cash inside each week.",
            "hi": "Use three paper envelopes (Food, Study, Fun) and put cash inside each week.",
            "te": "Use three paper envelopes (Food, Study, Fun) and put cash inside each week."
          },
          "outcomeDescription": {
            "en": "You see your exact limits in real time and never overspend.",
            "hi": "You see your exact limits in real time and never overspend.",
            "te": "You see your exact limits in real time and never overspend."
          },
          "pedagogicalFeedback": {
            "en": "You see your exact limits in real time and never overspend.",
            "hi": "You see your exact limits in real time and never overspend.",
            "te": "You see your exact limits in real time and never overspend."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_005_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Note your spending daily in a small pocket diary.",
            "hi": "Note your spending daily in a small pocket diary.",
            "te": "Note your spending daily in a small pocket diary."
          },
          "outcomeDescription": {
            "en": "You track your expenses well, provided you remember to write.",
            "hi": "You track your expenses well, provided you remember to write.",
            "te": "You track your expenses well, provided you remember to write."
          },
          "pedagogicalFeedback": {
            "en": "You track your expenses well, provided you remember to write.",
            "hi": "You track your expenses well, provided you remember to write.",
            "te": "You track your expenses well, provided you remember to write."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_005_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Rely only on memory without writing down purchases.",
            "hi": "Rely only on memory without writing down purchases.",
            "te": "Rely only on memory without writing down purchases."
          },
          "outcomeDescription": {
            "en": "Small purchases slip by and you lose track of spending.",
            "hi": "Small purchases slip by and you lose track of spending.",
            "te": "Small purchases slip by and you lose track of spending."
          },
          "pedagogicalFeedback": {
            "en": "Small purchases slip by and you lose track of spending.",
            "hi": "Small purchases slip by and you lose track of spending.",
            "te": "Small purchases slip by and you lose track of spending."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "PB_005_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Check your balance only when your ATM card gets declined.",
            "hi": "Check your balance only when your ATM card gets declined.",
            "te": "Check your balance only when your ATM card gets declined."
          },
          "outcomeDescription": {
            "en": "You stay stressed and blind to where your money goes.",
            "hi": "You stay stressed and blind to where your money goes.",
            "te": "You stay stressed and blind to where your money goes."
          },
          "pedagogicalFeedback": {
            "en": "You stay stressed and blind to where your money goes.",
            "hi": "You stay stressed and blind to where your money goes.",
            "te": "You stay stressed and blind to where your money goes."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Needs vs Wants",
      "hi": "Needs vs Wants",
      "te": "Needs vs Wants"
    },
    "points": [
      {
        "en": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "hi": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books).",
        "te": "Need: Something you must have to live and study (like food, bus ticket, room rent, and school books)."
      },
      {
        "en": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "hi": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks).",
        "te": "Want: Something nice to have that you can live without (like movie tickets, video games, and fancy snacks)."
      }
    ]
  }
},
  'SM_001': {
  "id": "SM_001",
  "cityId": "city_sm_001",
  "pillar": "save",
  "title": {
    "en": "The Flat Bicycle Tyre",
    "hi": "The Flat Bicycle Tyre",
    "te": "The Flat Bicycle Tyre"
  },
  "subtitle": {
    "en": "The school cycle stand.",
    "hi": "The school cycle stand.",
    "te": "The school cycle stand."
  },
  "situationContext": {
    "en": "Your bicycle tyre bursts! It costs \u20b9300 to fix. Walking to school takes 1 hour each way.",
    "hi": "Your bicycle tyre bursts! It costs \u20b9300 to fix. Walking to school takes 1 hour each way.",
    "te": "Your bicycle tyre bursts! It costs \u20b9300 to fix. Walking to school takes 1 hour each way."
  },
  "stipendContext": "The campus security guard.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "SM_001_step_1",
      "title": {
        "en": "Paying for the Flat Tyre",
        "hi": "Paying for the Flat Tyre",
        "te": "Paying for the Flat Tyre"
      },
      "situationContext": {
        "en": "Decide where the \u20b9300 should come from.",
        "hi": "Decide where the \u20b9300 should come from.",
        "te": "Decide where the \u20b9300 should come from."
      },
      "choices": [
        {
          "id": "SM_001_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Pay \u20b9300 from your Emergency Money box, and replace it next month.",
            "hi": "Pay \u20b9300 from your Emergency Money box, and replace it next month.",
            "te": "Pay \u20b9300 from your Emergency Money box, and replace it next month."
          },
          "outcomeDescription": {
            "en": "Your bike is fixed in 20 minutes, and your regular food budget stays untouched.",
            "hi": "Your bike is fixed in 20 minutes, and your regular food budget stays untouched.",
            "te": "Your bike is fixed in 20 minutes, and your regular food budget stays untouched."
          },
          "pedagogicalFeedback": {
            "en": "Your bike is fixed in 20 minutes, and your regular food budget stays untouched.",
            "hi": "Your bike is fixed in 20 minutes, and your regular food budget stays untouched.",
            "te": "Your bike is fixed in 20 minutes, and your regular food budget stays untouched."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_001_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Pay \u20b9150 for a quick patch now, and replace the tyre properly next month.",
            "hi": "Pay \u20b9150 for a quick patch now, and replace the tyre properly next month.",
            "te": "Pay \u20b9150 for a quick patch now, and replace the tyre properly next month."
          },
          "outcomeDescription": {
            "en": "The cycle works, but the patch may wear out soon.",
            "hi": "The cycle works, but the patch may wear out soon.",
            "te": "The cycle works, but the patch may wear out soon."
          },
          "pedagogicalFeedback": {
            "en": "The cycle works, but the patch may wear out soon.",
            "hi": "The cycle works, but the patch may wear out soon.",
            "te": "The cycle works, but the patch may wear out soon."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_001_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Do not fix the bike; take an auto-rickshaw every day for 2 weeks (costs \u20b91,200).",
            "hi": "Do not fix the bike; take an auto-rickshaw every day for 2 weeks (costs \u20b91,200).",
            "te": "Do not fix the bike; take an auto-rickshaw every day for 2 weeks (costs \u20b91,200)."
          },
          "outcomeDescription": {
            "en": "You spend four times more money than the cost of the repair.",
            "hi": "You spend four times more money than the cost of the repair.",
            "te": "You spend four times more money than the cost of the repair."
          },
          "pedagogicalFeedback": {
            "en": "You spend four times more money than the cost of the repair.",
            "hi": "You spend four times more money than the cost of the repair.",
            "te": "You spend four times more money than the cost of the repair."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_001_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Download an \"instant cash\" app promising \u20b9300 in 1 minute.",
            "hi": "Download an \"instant cash\" app promising \u20b9300 in 1 minute.",
            "te": "Download an \"instant cash\" app promising \u20b9300 in 1 minute."
          },
          "outcomeDescription": {
            "en": "The app steals your contact list and demands \u20b91,500 back next week.",
            "hi": "The app steals your contact list and demands \u20b91,500 back next week.",
            "te": "The app steals your contact list and demands \u20b91,500 back next week."
          },
          "pedagogicalFeedback": {
            "en": "The app steals your contact list and demands \u20b91,500 back next week.",
            "hi": "The app steals your contact list and demands \u20b91,500 back next week.",
            "te": "The app steals your contact list and demands \u20b91,500 back next week."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_001_step_2",
      "title": {
        "en": "The Mechanic's Up-Sell",
        "hi": "The Mechanic's Up-Sell",
        "te": "The Mechanic's Up-Sell"
      },
      "situationContext": {
        "en": "The repairer offers: \"Buy this neon bell and horn for \u20b9400 extra!\"",
        "hi": "The repairer offers: \"Buy this neon bell and horn for \u20b9400 extra!\"",
        "te": "The repairer offers: \"Buy this neon bell and horn for \u20b9400 extra!\""
      },
      "choices": [
        {
          "id": "SM_001_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Politely decline: \"Just the basic \u20b9300 tyre repair today, thank you.\"",
            "hi": "Politely decline: \"Just the basic \u20b9300 tyre repair today, thank you.\"",
            "te": "Politely decline: \"Just the basic \u20b9300 tyre repair today, thank you.\""
          },
          "outcomeDescription": {
            "en": "You save your money for genuine needs.",
            "hi": "You save your money for genuine needs.",
            "te": "You save your money for genuine needs."
          },
          "pedagogicalFeedback": {
            "en": "You save your money for genuine needs.",
            "hi": "You save your money for genuine needs.",
            "te": "You save your money for genuine needs."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_001_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Ask if the horn includes safety reflectors before deciding.",
            "hi": "Ask if the horn includes safety reflectors before deciding.",
            "te": "Ask if the horn includes safety reflectors before deciding."
          },
          "outcomeDescription": {
            "en": "You make an informed decision and pass on the extra cost.",
            "hi": "You make an informed decision and pass on the extra cost.",
            "te": "You make an informed decision and pass on the extra cost."
          },
          "pedagogicalFeedback": {
            "en": "You make an informed decision and pass on the extra cost.",
            "hi": "You make an informed decision and pass on the extra cost.",
            "te": "You make an informed decision and pass on the extra cost."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_001_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Buy the shiny horn using money meant for your evening meals.",
            "hi": "Buy the shiny horn using money meant for your evening meals.",
            "te": "Buy the shiny horn using money meant for your evening meals."
          },
          "outcomeDescription": {
            "en": "Your bike looks flashy, but you skip dinner.",
            "hi": "Your bike looks flashy, but you skip dinner.",
            "te": "Your bike looks flashy, but you skip dinner."
          },
          "pedagogicalFeedback": {
            "en": "Your bike looks flashy, but you skip dinner.",
            "hi": "Your bike looks flashy, but you skip dinner.",
            "te": "Your bike looks flashy, but you skip dinner."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_001_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Hand your entire wallet to the mechanic and tell them to keep the change.",
            "hi": "Hand your entire wallet to the mechanic and tell them to keep the change.",
            "te": "Hand your entire wallet to the mechanic and tell them to keep the change."
          },
          "outcomeDescription": {
            "en": "You lose \u20b9500 in excess cash needlessly.",
            "hi": "You lose \u20b9500 in excess cash needlessly.",
            "te": "You lose \u20b9500 in excess cash needlessly."
          },
          "pedagogicalFeedback": {
            "en": "You lose \u20b9500 in excess cash needlessly.",
            "hi": "You lose \u20b9500 in excess cash needlessly.",
            "te": "You lose \u20b9500 in excess cash needlessly."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_001_step_3",
      "title": {
        "en": "Refilling the Emergency Safety Box",
        "hi": "Refilling the Emergency Safety Box",
        "te": "Refilling the Emergency Safety Box"
      },
      "situationContext": {
        "en": "You have \u20b91,200 left in your safety box. How do you replace the \u20b9300 you spent?",
        "hi": "You have \u20b91,200 left in your safety box. How do you replace the \u20b9300 you spent?",
        "te": "You have \u20b91,200 left in your safety box. How do you replace the \u20b9300 you spent?"
      },
      "choices": [
        {
          "id": "SM_001_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Put \u20b9100 from your weekly allowance back into the box each week for 3 weeks.",
            "hi": "Put \u20b9100 from your weekly allowance back into the box each week for 3 weeks.",
            "te": "Put \u20b9100 from your weekly allowance back into the box each week for 3 weeks."
          },
          "outcomeDescription": {
            "en": "Your safety cushion returns to full strength without straining your budget.",
            "hi": "Your safety cushion returns to full strength without straining your budget.",
            "te": "Your safety cushion returns to full strength without straining your budget."
          },
          "pedagogicalFeedback": {
            "en": "Your safety cushion returns to full strength without straining your budget.",
            "hi": "Your safety cushion returns to full strength without straining your budget.",
            "te": "Your safety cushion returns to full strength without straining your budget."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_001_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Replace the full \u20b9300 next month as soon as your stipend arrives.",
            "hi": "Replace the full \u20b9300 next month as soon as your stipend arrives.",
            "te": "Replace the full \u20b9300 next month as soon as your stipend arrives."
          },
          "outcomeDescription": {
            "en": "Your safety box is refilled, though it stays slightly lower for a few weeks.",
            "hi": "Your safety box is refilled, though it stays slightly lower for a few weeks.",
            "te": "Your safety box is refilled, though it stays slightly lower for a few weeks."
          },
          "pedagogicalFeedback": {
            "en": "Your safety box is refilled, though it stays slightly lower for a few weeks.",
            "hi": "Your safety box is refilled, though it stays slightly lower for a few weeks.",
            "te": "Your safety box is refilled, though it stays slightly lower for a few weeks."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_001_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Decide \u20b91,200 is plenty and never replace the \u20b9300.",
            "hi": "Decide \u20b91,200 is plenty and never replace the \u20b9300.",
            "te": "Decide \u20b91,200 is plenty and never replace the \u20b9300."
          },
          "outcomeDescription": {
            "en": "Your emergency reserve slowly shrinks over time.",
            "hi": "Your emergency reserve slowly shrinks over time.",
            "te": "Your emergency reserve slowly shrinks over time."
          },
          "pedagogicalFeedback": {
            "en": "Your emergency reserve slowly shrinks over time.",
            "hi": "Your emergency reserve slowly shrinks over time.",
            "te": "Your emergency reserve slowly shrinks over time."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_001_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Empty the remaining \u20b91,200 to buy festival fireworks.",
            "hi": "Empty the remaining \u20b91,200 to buy festival fireworks.",
            "te": "Empty the remaining \u20b91,200 to buy festival fireworks."
          },
          "outcomeDescription": {
            "en": "You lose your entire safety cushion right before winter term.",
            "hi": "You lose your entire safety cushion right before winter term.",
            "te": "You lose your entire safety cushion right before winter term."
          },
          "pedagogicalFeedback": {
            "en": "You lose your entire safety cushion right before winter term.",
            "hi": "You lose your entire safety cushion right before winter term.",
            "te": "You lose your entire safety cushion right before winter term."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Emergency Money & Sinking Funds",
      "hi": "Emergency Money & Sinking Funds",
      "te": "Emergency Money & Sinking Funds"
    },
    "points": [
      {
        "en": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "hi": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "te": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick)."
      },
      {
        "en": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "hi": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "te": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once."
      }
    ]
  }
},
  'SM_002': {
  "id": "SM_002",
  "cityId": "city_sm_002",
  "pillar": "save",
  "title": {
    "en": "Saving for the Festival Train Ticket",
    "hi": "Saving for the Festival Train Ticket",
    "te": "Saving for the Festival Train Ticket"
  },
  "subtitle": {
    "en": "The hostel common room.",
    "hi": "The hostel common room.",
    "te": "The hostel common room."
  },
  "situationContext": {
    "en": "In 3 months, you want to take the train home for the festival. The train ticket costs \u20b9900.",
    "hi": "In 3 months, you want to take the train home for the festival. The train ticket costs \u20b9900.",
    "te": "In 3 months, you want to take the train home for the festival. The train ticket costs \u20b9900."
  },
  "stipendContext": "Your travel buddy, Priya.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "SM_002_step_1",
      "title": {
        "en": "Making the 3-Month Plan",
        "hi": "Making the 3-Month Plan",
        "te": "Making the 3-Month Plan"
      },
      "situationContext": {
        "en": "Make a simple plan to collect the \u20b9900 without skipping meals.",
        "hi": "Make a simple plan to collect the \u20b9900 without skipping meals.",
        "te": "Make a simple plan to collect the \u20b9900 without skipping meals."
      },
      "choices": [
        {
          "id": "SM_002_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Save \u20b9300 every month for 3 months from your fun budget.",
            "hi": "Save \u20b9300 every month for 3 months from your fun budget.",
            "te": "Save \u20b9300 every month for 3 months from your fun budget."
          },
          "outcomeDescription": {
            "en": "You buy the ticket on time, relaxed and without any debt.",
            "hi": "You buy the ticket on time, relaxed and without any debt.",
            "te": "You buy the ticket on time, relaxed and without any debt."
          },
          "pedagogicalFeedback": {
            "en": "You buy the ticket on time, relaxed and without any debt.",
            "hi": "You buy the ticket on time, relaxed and without any debt.",
            "te": "You buy the ticket on time, relaxed and without any debt."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_002_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Save \u20b9450 a month over 2 months.",
            "hi": "Save \u20b9450 a month over 2 months.",
            "te": "Save \u20b9450 a month over 2 months."
          },
          "outcomeDescription": {
            "en": "You reach your goal, but month two feels tight on snacks.",
            "hi": "You reach your goal, but month two feels tight on snacks.",
            "te": "You reach your goal, but month two feels tight on snacks."
          },
          "pedagogicalFeedback": {
            "en": "You reach your goal, but month two feels tight on snacks.",
            "hi": "You reach your goal, but month two feels tight on snacks.",
            "te": "You reach your goal, but month two feels tight on snacks."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_002_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Hope someone gives you a cash gift at the last minute.",
            "hi": "Hope someone gives you a cash gift at the last minute.",
            "te": "Hope someone gives you a cash gift at the last minute."
          },
          "outcomeDescription": {
            "en": "You have no ticket and end up stuck at the hostel during the festival.",
            "hi": "You have no ticket and end up stuck at the hostel during the festival.",
            "te": "You have no ticket and end up stuck at the hostel during the festival."
          },
          "pedagogicalFeedback": {
            "en": "You have no ticket and end up stuck at the hostel during the festival.",
            "hi": "You have no ticket and end up stuck at the hostel during the festival.",
            "te": "You have no ticket and end up stuck at the hostel during the festival."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_002_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Buy an expensive last-minute emergency ticket using money meant for school fees.",
            "hi": "Buy an expensive last-minute emergency ticket using money meant for school fees.",
            "te": "Buy an expensive last-minute emergency ticket using money meant for school fees."
          },
          "outcomeDescription": {
            "en": "You go home, but your school blocks your exam admit card for unpaid fees.",
            "hi": "You go home, but your school blocks your exam admit card for unpaid fees.",
            "te": "You go home, but your school blocks your exam admit card for unpaid fees."
          },
          "pedagogicalFeedback": {
            "en": "You go home, but your school blocks your exam admit card for unpaid fees.",
            "hi": "You go home, but your school blocks your exam admit card for unpaid fees.",
            "te": "You go home, but your school blocks your exam admit card for unpaid fees."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_002_step_2",
      "title": {
        "en": "Storing the Monthly Savings",
        "hi": "Storing the Monthly Savings",
        "te": "Storing the Monthly Savings"
      },
      "situationContext": {
        "en": "You have saved your first \u20b9300 in month one. Where should you store it?",
        "hi": "You have saved your first \u20b9300 in month one. Where should you store it?",
        "te": "You have saved your first \u20b9300 in month one. Where should you store it?"
      },
      "choices": [
        {
          "id": "SM_002_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Deposit it in a separate Post Office or bank recurring deposit account.",
            "hi": "Deposit it in a separate Post Office or bank recurring deposit account.",
            "te": "Deposit it in a separate Post Office or bank recurring deposit account."
          },
          "outcomeDescription": {
            "en": "The money earns small interest and stays safe from casual spending.",
            "hi": "The money earns small interest and stays safe from casual spending.",
            "te": "The money earns small interest and stays safe from casual spending."
          },
          "pedagogicalFeedback": {
            "en": "The money earns small interest and stays safe from casual spending.",
            "hi": "The money earns small interest and stays safe from casual spending.",
            "te": "The money earns small interest and stays safe from casual spending."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_002_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Place it in an envelope marked \"Train Ticket\" inside your locked trunk.",
            "hi": "Place it in an envelope marked \"Train Ticket\" inside your locked trunk.",
            "te": "Place it in an envelope marked \"Train Ticket\" inside your locked trunk."
          },
          "outcomeDescription": {
            "en": "The money stays safe, though it earns no interest.",
            "hi": "The money stays safe, though it earns no interest.",
            "te": "The money stays safe, though it earns no interest."
          },
          "pedagogicalFeedback": {
            "en": "The money stays safe, though it earns no interest.",
            "hi": "The money stays safe, though it earns no interest.",
            "te": "The money stays safe, though it earns no interest."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_002_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Keep the cash loose in your everyday wallet.",
            "hi": "Keep the cash loose in your everyday wallet.",
            "te": "Keep the cash loose in your everyday wallet."
          },
          "outcomeDescription": {
            "en": "You accidentally spend it on canteen snacks over the weekend.",
            "hi": "You accidentally spend it on canteen snacks over the weekend.",
            "te": "You accidentally spend it on canteen snacks over the weekend."
          },
          "pedagogicalFeedback": {
            "en": "You accidentally spend it on canteen snacks over the weekend.",
            "hi": "You accidentally spend it on canteen snacks over the weekend.",
            "te": "You accidentally spend it on canteen snacks over the weekend."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_002_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Hand it to an acquaintance who promises to hold it for you.",
            "hi": "Hand it to an acquaintance who promises to hold it for you.",
            "te": "Hand it to an acquaintance who promises to hold it for you."
          },
          "outcomeDescription": {
            "en": "The acquaintance spends your money and avoids your calls.",
            "hi": "The acquaintance spends your money and avoids your calls.",
            "te": "The acquaintance spends your money and avoids your calls."
          },
          "pedagogicalFeedback": {
            "en": "The acquaintance spends your money and avoids your calls.",
            "hi": "The acquaintance spends your money and avoids your calls.",
            "te": "The acquaintance spends your money and avoids your calls."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_002_step_3",
      "title": {
        "en": "The Ticket Booking Window Opens",
        "hi": "The Ticket Booking Window Opens",
        "te": "The Ticket Booking Window Opens"
      },
      "situationContext": {
        "en": "Online booking opens. Standard sleeper is \u20b9300; luxury AC is \u20b91,100.",
        "hi": "Online booking opens. Standard sleeper is \u20b9300; luxury AC is \u20b91,100.",
        "te": "Online booking opens. Standard sleeper is \u20b9300; luxury AC is \u20b91,100."
      },
      "choices": [
        {
          "id": "SM_002_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Book the planned standard sleeper ticket for \u20b9300 on the official railway website.",
            "hi": "Book the planned standard sleeper ticket for \u20b9300 on the official railway website.",
            "te": "Book the planned standard sleeper ticket for \u20b9300 on the official railway website."
          },
          "outcomeDescription": {
            "en": "You travel safely and stay on track with your plan.",
            "hi": "You travel safely and stay on track with your plan.",
            "te": "You travel safely and stay on track with your plan."
          },
          "pedagogicalFeedback": {
            "en": "You travel safely and stay on track with your plan.",
            "hi": "You travel safely and stay on track with your plan.",
            "te": "You travel safely and stay on track with your plan."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_002_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Book standard sleeper and spend \u20b960 on a meal pack.",
            "hi": "Book standard sleeper and spend \u20b960 on a meal pack.",
            "te": "Book standard sleeper and spend \u20b960 on a meal pack."
          },
          "outcomeDescription": {
            "en": "You travel comfortably within your planned budget.",
            "hi": "You travel comfortably within your planned budget.",
            "te": "You travel comfortably within your planned budget."
          },
          "pedagogicalFeedback": {
            "en": "You travel comfortably within your planned budget.",
            "hi": "You travel comfortably within your planned budget.",
            "te": "You travel comfortably within your planned budget."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_002_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Upgrade to the \u20b91,100 luxury AC seat using your emergency medicine fund.",
            "hi": "Upgrade to the \u20b91,100 luxury AC seat using your emergency medicine fund.",
            "te": "Upgrade to the \u20b91,100 luxury AC seat using your emergency medicine fund."
          },
          "outcomeDescription": {
            "en": "You travel in luxury, but deplete your emergency safety net.",
            "hi": "You travel in luxury, but deplete your emergency safety net.",
            "te": "You travel in luxury, but deplete your emergency safety net."
          },
          "pedagogicalFeedback": {
            "en": "You travel in luxury, but deplete your emergency safety net.",
            "hi": "You travel in luxury, but deplete your emergency safety net.",
            "te": "You travel in luxury, but deplete your emergency safety net."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_002_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Buy a ticket from an unauthorized broker outside the station for double the price.",
            "hi": "Buy a ticket from an unauthorized broker outside the station for double the price.",
            "te": "Buy a ticket from an unauthorized broker outside the station for double the price."
          },
          "outcomeDescription": {
            "en": "The broker hands you a fake ticket and you get turned away at the train.",
            "hi": "The broker hands you a fake ticket and you get turned away at the train.",
            "te": "The broker hands you a fake ticket and you get turned away at the train."
          },
          "pedagogicalFeedback": {
            "en": "The broker hands you a fake ticket and you get turned away at the train.",
            "hi": "The broker hands you a fake ticket and you get turned away at the train.",
            "te": "The broker hands you a fake ticket and you get turned away at the train."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Emergency Money & Sinking Funds",
      "hi": "Emergency Money & Sinking Funds",
      "te": "Emergency Money & Sinking Funds"
    },
    "points": [
      {
        "en": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "hi": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "te": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick)."
      },
      {
        "en": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "hi": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "te": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once."
      }
    ]
  }
},
  'SM_003': {
  "id": "SM_003",
  "cityId": "city_sm_003",
  "pillar": "save",
  "title": {
    "en": "Where Should Your Money Sleep? (Safe Box vs Bank)",
    "hi": "Where Should Your Money Sleep? (Safe Box vs Bank)",
    "te": "Where Should Your Money Sleep? (Safe Box vs Bank)"
  },
  "subtitle": {
    "en": "The local Post Office savings counter.",
    "hi": "The local Post Office savings counter.",
    "te": "The local Post Office savings counter."
  },
  "situationContext": {
    "en": "You have saved \u20b92,000 over the past 6 months.",
    "hi": "You have saved \u20b92,000 over the past 6 months.",
    "te": "You have saved \u20b92,000 over the past 6 months."
  },
  "stipendContext": "Post Officer Ramesh.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "SM_003_step_1",
      "title": {
        "en": "Choosing a Safe Repository",
        "hi": "Choosing a Safe Repository",
        "te": "Choosing a Safe Repository"
      },
      "situationContext": {
        "en": "Choose the safest place to keep this money.",
        "hi": "Choose the safest place to keep this money.",
        "te": "Choose the safest place to keep this money."
      },
      "choices": [
        {
          "id": "SM_003_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Deposit it in a student bank account or Post Office savings account.",
            "hi": "Deposit it in a student bank account or Post Office savings account.",
            "te": "Deposit it in a student bank account or Post Office savings account."
          },
          "outcomeDescription": {
            "en": "Your money is safe from theft and earns a small bonus interest.",
            "hi": "Your money is safe from theft and earns a small bonus interest.",
            "te": "Your money is safe from theft and earns a small bonus interest."
          },
          "pedagogicalFeedback": {
            "en": "Your money is safe from theft and earns a small bonus interest.",
            "hi": "Your money is safe from theft and earns a small bonus interest.",
            "te": "Your money is safe from theft and earns a small bonus interest."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_003_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Keep it in a locked tin box under your hostel bed with the key on your necklace.",
            "hi": "Keep it in a locked tin box under your hostel bed with the key on your necklace.",
            "te": "Keep it in a locked tin box under your hostel bed with the key on your necklace."
          },
          "outcomeDescription": {
            "en": "It is safe for now, but there is still a small risk of loss or theft.",
            "hi": "It is safe for now, but there is still a small risk of loss or theft.",
            "te": "It is safe for now, but there is still a small risk of loss or theft."
          },
          "pedagogicalFeedback": {
            "en": "It is safe for now, but there is still a small risk of loss or theft.",
            "hi": "It is safe for now, but there is still a small risk of loss or theft.",
            "te": "It is safe for now, but there is still a small risk of loss or theft."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_003_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Leave the cash loose on your study table or inside a textbook.",
            "hi": "Leave the cash loose on your study table or inside a textbook.",
            "te": "Leave the cash loose on your study table or inside a textbook."
          },
          "outcomeDescription": {
            "en": "Someone accidentally misplaces it or it gets stolen.",
            "hi": "Someone accidentally misplaces it or it gets stolen.",
            "te": "Someone accidentally misplaces it or it gets stolen."
          },
          "pedagogicalFeedback": {
            "en": "Someone accidentally misplaces it or it gets stolen.",
            "hi": "Someone accidentally misplaces it or it gets stolen.",
            "te": "Someone accidentally misplaces it or it gets stolen."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_003_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Give the money to a neighborhood acquaintance who promises to \"double it in 5 days\".",
            "hi": "Give the money to a neighborhood acquaintance who promises to \"double it in 5 days\".",
            "te": "Give the money to a neighborhood acquaintance who promises to \"double it in 5 days\"."
          },
          "outcomeDescription": {
            "en": "The person disappears with all your hard-earned savings.",
            "hi": "The person disappears with all your hard-earned savings.",
            "te": "The person disappears with all your hard-earned savings."
          },
          "pedagogicalFeedback": {
            "en": "The person disappears with all your hard-earned savings.",
            "hi": "The person disappears with all your hard-earned savings.",
            "te": "The person disappears with all your hard-earned savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_003_step_2",
      "title": {
        "en": "Managing ATM Card Privileges",
        "hi": "Managing ATM Card Privileges",
        "te": "Managing ATM Card Privileges"
      },
      "situationContext": {
        "en": "The bank officer asks if you want an ATM debit card with your new account.",
        "hi": "The bank officer asks if you want an ATM debit card with your new account.",
        "te": "The bank officer asks if you want an ATM debit card with your new account."
      },
      "choices": [
        {
          "id": "SM_003_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Take the card, set a private PIN, and keep daily withdrawal limits low.",
            "hi": "Take the card, set a private PIN, and keep daily withdrawal limits low.",
            "te": "Take the card, set a private PIN, and keep daily withdrawal limits low."
          },
          "outcomeDescription": {
            "en": "You can access cash in real emergencies while preventing overspending.",
            "hi": "You can access cash in real emergencies while preventing overspending.",
            "te": "You can access cash in real emergencies while preventing overspending."
          },
          "pedagogicalFeedback": {
            "en": "You can access cash in real emergencies while preventing overspending.",
            "hi": "You can access cash in real emergencies while preventing overspending.",
            "te": "You can access cash in real emergencies while preventing overspending."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_003_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Opt for passbook-only access without a debit card.",
            "hi": "Opt for passbook-only access without a debit card.",
            "te": "Opt for passbook-only access without a debit card."
          },
          "outcomeDescription": {
            "en": "You avoid impulse ATM withdrawals, though visiting the branch takes extra time.",
            "hi": "You avoid impulse ATM withdrawals, though visiting the branch takes extra time.",
            "te": "You avoid impulse ATM withdrawals, though visiting the branch takes extra time."
          },
          "pedagogicalFeedback": {
            "en": "You avoid impulse ATM withdrawals, though visiting the branch takes extra time.",
            "hi": "You avoid impulse ATM withdrawals, though visiting the branch takes extra time.",
            "te": "You avoid impulse ATM withdrawals, though visiting the branch takes extra time."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_003_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Accept the card and write your PIN on the back in permanent ink.",
            "hi": "Accept the card and write your PIN on the back in permanent ink.",
            "te": "Accept the card and write your PIN on the back in permanent ink."
          },
          "outcomeDescription": {
            "en": "Anyone who finds your card can immediately withdraw all your cash.",
            "hi": "Anyone who finds your card can immediately withdraw all your cash.",
            "te": "Anyone who finds your card can immediately withdraw all your cash."
          },
          "pedagogicalFeedback": {
            "en": "Anyone who finds your card can immediately withdraw all your cash.",
            "hi": "Anyone who finds your card can immediately withdraw all your cash.",
            "te": "Anyone who finds your card can immediately withdraw all your cash."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_003_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Give the card to a friend because you don't trust yourself with it.",
            "hi": "Give the card to a friend because you don't trust yourself with it.",
            "te": "Give the card to a friend because you don't trust yourself with it."
          },
          "outcomeDescription": {
            "en": "You lose control of your bank account.",
            "hi": "You lose control of your bank account.",
            "te": "You lose control of your bank account."
          },
          "pedagogicalFeedback": {
            "en": "You lose control of your bank account.",
            "hi": "You lose control of your bank account.",
            "te": "You lose control of your bank account."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_003_step_3",
      "title": {
        "en": "Checking Your Monthly Statement",
        "hi": "Checking Your Monthly Statement",
        "te": "Checking Your Monthly Statement"
      },
      "situationContext": {
        "en": "At the end of the month, verify your account transactions.",
        "hi": "At the end of the month, verify your account transactions.",
        "te": "At the end of the month, verify your account transactions."
      },
      "choices": [
        {
          "id": "SM_003_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Check your passbook or secure mobile app to review transactions and interest earned.",
            "hi": "Check your passbook or secure mobile app to review transactions and interest earned.",
            "te": "Check your passbook or secure mobile app to review transactions and interest earned."
          },
          "outcomeDescription": {
            "en": "You spot errors early and watch your savings grow.",
            "hi": "You spot errors early and watch your savings grow.",
            "te": "You spot errors early and watch your savings grow."
          },
          "pedagogicalFeedback": {
            "en": "You spot errors early and watch your savings grow.",
            "hi": "You spot errors early and watch your savings grow.",
            "te": "You spot errors early and watch your savings grow."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_003_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Check your balance at an ATM while covering the screen.",
            "hi": "Check your balance at an ATM while covering the screen.",
            "te": "Check your balance at an ATM while covering the screen."
          },
          "outcomeDescription": {
            "en": "You confirm your balance safely.",
            "hi": "You confirm your balance safely.",
            "te": "You confirm your balance safely."
          },
          "pedagogicalFeedback": {
            "en": "You confirm your balance safely.",
            "hi": "You confirm your balance safely.",
            "te": "You confirm your balance safely."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_003_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Ignore your bank balance for months at a time.",
            "hi": "Ignore your bank balance for months at a time.",
            "te": "Ignore your bank balance for months at a time."
          },
          "outcomeDescription": {
            "en": "Hidden fees or mistakes go unnoticed.",
            "hi": "Hidden fees or mistakes go unnoticed.",
            "te": "Hidden fees or mistakes go unnoticed."
          },
          "pedagogicalFeedback": {
            "en": "Hidden fees or mistakes go unnoticed.",
            "hi": "Hidden fees or mistakes go unnoticed.",
            "te": "Hidden fees or mistakes go unnoticed."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_003_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Ask a stranger at the ATM booth to check your balance for you.",
            "hi": "Ask a stranger at the ATM booth to check your balance for you.",
            "te": "Ask a stranger at the ATM booth to check your balance for you."
          },
          "outcomeDescription": {
            "en": "You expose your PIN and balance to an unknown person.",
            "hi": "You expose your PIN and balance to an unknown person.",
            "te": "You expose your PIN and balance to an unknown person."
          },
          "pedagogicalFeedback": {
            "en": "You expose your PIN and balance to an unknown person.",
            "hi": "You expose your PIN and balance to an unknown person.",
            "te": "You expose your PIN and balance to an unknown person."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Emergency Money & Sinking Funds",
      "hi": "Emergency Money & Sinking Funds",
      "te": "Emergency Money & Sinking Funds"
    },
    "points": [
      {
        "en": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "hi": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "te": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick)."
      },
      {
        "en": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "hi": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "te": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once."
      }
    ]
  }
},
  'SM_004': {
  "id": "SM_004",
  "cityId": "city_sm_004",
  "pillar": "save",
  "title": {
    "en": "The \"Huge 70% Discount!\" Trap (Includes Budget Concept)",
    "hi": "The \"Huge 70% Discount!\" Trap (Includes Budget Concept)",
    "te": "The \"Huge 70% Discount!\" Trap (Includes Budget Concept)"
  },
  "subtitle": {
    "en": "Campus Internet room.",
    "hi": "Campus Internet room.",
    "te": "Campus Internet room."
  },
  "situationContext": {
    "en": "A shopping website shows headphones for \u20b91,999 (marked down from \u20b96,000). A timer flashes: \"Only 4 minutes left!\" You have \u20b92,200 in your total savings account.",
    "hi": "A shopping website shows headphones for \u20b91,999 (marked down from \u20b96,000). A timer flashes: \"Only 4 minutes left!\" You have \u20b92,200 in your total savings account.",
    "te": "A shopping website shows headphones for \u20b91,999 (marked down from \u20b96,000). A timer flashes: \"Only 4 minutes left!\" You have \u20b92,200 in your total savings account."
  },
  "stipendContext": "Classmate Rohit.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "SM_004_step_1",
      "title": {
        "en": "Responding to the Countdown Timer",
        "hi": "Responding to the Countdown Timer",
        "te": "Responding to the Countdown Timer"
      },
      "situationContext": {
        "en": "Make a calm decision.",
        "hi": "Make a calm decision.",
        "te": "Make a calm decision."
      },
      "choices": [
        {
          "id": "SM_004_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Close the website, wait 24 hours, and ask: \"Do I really need this, or is the timer rushing me?\"",
            "hi": "Close the website, wait 24 hours, and ask: \"Do I really need this, or is the timer rushing me?\"",
            "te": "Close the website, wait 24 hours, and ask: \"Do I really need this, or is the timer rushing me?\""
          },
          "outcomeDescription": {
            "en": "The next day you realize your current earphones work fine, and your \u20b92,200 stays safe.",
            "hi": "The next day you realize your current earphones work fine, and your \u20b92,200 stays safe.",
            "te": "The next day you realize your current earphones work fine, and your \u20b92,200 stays safe."
          },
          "pedagogicalFeedback": {
            "en": "The next day you realize your current earphones work fine, and your \u20b92,200 stays safe.",
            "hi": "The next day you realize your current earphones work fine, and your \u20b92,200 stays safe.",
            "te": "The next day you realize your current earphones work fine, and your \u20b92,200 stays safe."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_004_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Check if you have study tasks that require noise reduction, and look for a simple \u20b9400 student pair instead.",
            "hi": "Check if you have study tasks that require noise reduction, and look for a simple \u20b9400 student pair instead.",
            "te": "Check if you have study tasks that require noise reduction, and look for a simple \u20b9400 student pair instead."
          },
          "outcomeDescription": {
            "en": "You spend a sensible amount and keep most of your emergency money.",
            "hi": "You spend a sensible amount and keep most of your emergency money.",
            "te": "You spend a sensible amount and keep most of your emergency money."
          },
          "pedagogicalFeedback": {
            "en": "You spend a sensible amount and keep most of your emergency money.",
            "hi": "You spend a sensible amount and keep most of your emergency money.",
            "te": "You spend a sensible amount and keep most of your emergency money."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_004_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Buy the \u20b91,999 headphones immediately, leaving only \u20b9201 in your account.",
            "hi": "Buy the \u20b91,999 headphones immediately, leaving only \u20b9201 in your account.",
            "te": "Buy the \u20b91,999 headphones immediately, leaving only \u20b9201 in your account."
          },
          "outcomeDescription": {
            "en": "You have fancy headphones, but no money for sudden medicine or cycle repairs.",
            "hi": "You have fancy headphones, but no money for sudden medicine or cycle repairs.",
            "te": "You have fancy headphones, but no money for sudden medicine or cycle repairs."
          },
          "pedagogicalFeedback": {
            "en": "You have fancy headphones, but no money for sudden medicine or cycle repairs.",
            "hi": "You have fancy headphones, but no money for sudden medicine or cycle repairs.",
            "te": "You have fancy headphones, but no money for sudden medicine or cycle repairs."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_004_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Use a \"Buy Now, Pay Next Month\" button that charges huge late fees.",
            "hi": "Use a \"Buy Now, Pay Next Month\" button that charges huge late fees.",
            "te": "Use a \"Buy Now, Pay Next Month\" button that charges huge late fees."
          },
          "outcomeDescription": {
            "en": "Next month your scholarship arrives and half of it is immediately lost to penalties.",
            "hi": "Next month your scholarship arrives and half of it is immediately lost to penalties.",
            "te": "Next month your scholarship arrives and half of it is immediately lost to penalties."
          },
          "pedagogicalFeedback": {
            "en": "Next month your scholarship arrives and half of it is immediately lost to penalties.",
            "hi": "Next month your scholarship arrives and half of it is immediately lost to penalties.",
            "te": "Next month your scholarship arrives and half of it is immediately lost to penalties."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_004_step_2",
      "title": {
        "en": "The Next-Day Reality Check",
        "hi": "The Next-Day Reality Check",
        "te": "The Next-Day Reality Check"
      },
      "situationContext": {
        "en": "The next morning, you test your current earphones and find they work well.",
        "hi": "The next morning, you test your current earphones and find they work well.",
        "te": "The next morning, you test your current earphones and find they work well."
      },
      "choices": [
        {
          "id": "SM_004_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Delete the shopping app alert and keep your \u20b92,200 savings untouched.",
            "hi": "Delete the shopping app alert and keep your \u20b92,200 savings untouched.",
            "te": "Delete the shopping app alert and keep your \u20b92,200 savings untouched."
          },
          "outcomeDescription": {
            "en": "You avoid an unnecessary purchase and build financial discipline.",
            "hi": "You avoid an unnecessary purchase and build financial discipline.",
            "te": "You avoid an unnecessary purchase and build financial discipline."
          },
          "pedagogicalFeedback": {
            "en": "You avoid an unnecessary purchase and build financial discipline.",
            "hi": "You avoid an unnecessary purchase and build financial discipline.",
            "te": "You avoid an unnecessary purchase and build financial discipline."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_004_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Buy affordable \u20b9100 replacement foam pads to refresh your current earphones.",
            "hi": "Buy affordable \u20b9100 replacement foam pads to refresh your current earphones.",
            "te": "Buy affordable \u20b9100 replacement foam pads to refresh your current earphones."
          },
          "outcomeDescription": {
            "en": "Your earphones feel brand new for a tiny price.",
            "hi": "Your earphones feel brand new for a tiny price.",
            "te": "Your earphones feel brand new for a tiny price."
          },
          "pedagogicalFeedback": {
            "en": "Your earphones feel brand new for a tiny price.",
            "hi": "Your earphones feel brand new for a tiny price.",
            "te": "Your earphones feel brand new for a tiny price."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_004_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Go back online and buy a \u20b91,200 portable speaker instead because you \"saved\" on headphones.",
            "hi": "Go back online and buy a \u20b91,200 portable speaker instead because you \"saved\" on headphones.",
            "te": "Go back online and buy a \u20b91,200 portable speaker instead because you \"saved\" on headphones."
          },
          "outcomeDescription": {
            "en": "You still end up spending money on items you don't need.",
            "hi": "You still end up spending money on items you don't need.",
            "te": "You still end up spending money on items you don't need."
          },
          "pedagogicalFeedback": {
            "en": "You still end up spending money on items you don't need.",
            "hi": "You still end up spending money on items you don't need.",
            "te": "You still end up spending money on items you don't need."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_004_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Borrow cash to buy the headphones because the sale timer was extended.",
            "hi": "Borrow cash to buy the headphones because the sale timer was extended.",
            "te": "Borrow cash to buy the headphones because the sale timer was extended."
          },
          "outcomeDescription": {
            "en": "You fall for artificial sales urgency and go into debt.",
            "hi": "You fall for artificial sales urgency and go into debt.",
            "te": "You fall for artificial sales urgency and go into debt."
          },
          "pedagogicalFeedback": {
            "en": "You fall for artificial sales urgency and go into debt.",
            "hi": "You fall for artificial sales urgency and go into debt.",
            "te": "You fall for artificial sales urgency and go into debt."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_004_step_3",
      "title": {
        "en": "Protecting Against Future Flash Sales",
        "hi": "Protecting Against Future Flash Sales",
        "te": "Protecting Against Future Flash Sales"
      },
      "situationContext": {
        "en": "Prevent marketing alerts from tempting you into impulse purchases.",
        "hi": "Prevent marketing alerts from tempting you into impulse purchases.",
        "te": "Prevent marketing alerts from tempting you into impulse purchases."
      },
      "choices": [
        {
          "id": "SM_004_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Turn off promotional notifications and remove saved debit cards from shopping websites.",
            "hi": "Turn off promotional notifications and remove saved debit cards from shopping websites.",
            "te": "Turn off promotional notifications and remove saved debit cards from shopping websites."
          },
          "outcomeDescription": {
            "en": "Adding friction gives you time to think and stops impulse buys.",
            "hi": "Adding friction gives you time to think and stops impulse buys.",
            "te": "Adding friction gives you time to think and stops impulse buys."
          },
          "pedagogicalFeedback": {
            "en": "Adding friction gives you time to think and stops impulse buys.",
            "hi": "Adding friction gives you time to think and stops impulse buys.",
            "te": "Adding friction gives you time to think and stops impulse buys."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_004_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Unsubscribe from daily shopping email newsletters.",
            "hi": "Unsubscribe from daily shopping email newsletters.",
            "te": "Unsubscribe from daily shopping email newsletters."
          },
          "outcomeDescription": {
            "en": "You see fewer ads and spend less.",
            "hi": "You see fewer ads and spend less.",
            "te": "You see fewer ads and spend less."
          },
          "pedagogicalFeedback": {
            "en": "You see fewer ads and spend less.",
            "hi": "You see fewer ads and spend less.",
            "te": "You see fewer ads and spend less."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_004_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Leave notifications on and rely purely on willpower.",
            "hi": "Leave notifications on and rely purely on willpower.",
            "te": "Leave notifications on and rely purely on willpower."
          },
          "outcomeDescription": {
            "en": "Constant alerts wear down your willpower until you buy.",
            "hi": "Constant alerts wear down your willpower until you buy.",
            "te": "Constant alerts wear down your willpower until you buy."
          },
          "pedagogicalFeedback": {
            "en": "Constant alerts wear down your willpower until you buy.",
            "hi": "Constant alerts wear down your willpower until you buy.",
            "te": "Constant alerts wear down your willpower until you buy."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_004_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Sign up for three different \"Buy Now, Pay Later\" accounts.",
            "hi": "Sign up for three different \"Buy Now, Pay Later\" accounts.",
            "te": "Sign up for three different \"Buy Now, Pay Later\" accounts."
          },
          "outcomeDescription": {
            "en": "You accumulate hidden debts across multiple shopping apps.",
            "hi": "You accumulate hidden debts across multiple shopping apps.",
            "te": "You accumulate hidden debts across multiple shopping apps."
          },
          "pedagogicalFeedback": {
            "en": "You accumulate hidden debts across multiple shopping apps.",
            "hi": "You accumulate hidden debts across multiple shopping apps.",
            "te": "You accumulate hidden debts across multiple shopping apps."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Emergency Money & Sinking Funds",
      "hi": "Emergency Money & Sinking Funds",
      "te": "Emergency Money & Sinking Funds"
    },
    "points": [
      {
        "en": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "hi": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "te": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick)."
      },
      {
        "en": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "hi": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "te": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once."
      }
    ]
  }
},
  'SM_005': {
  "id": "SM_005",
  "cityId": "city_sm_005",
  "pillar": "save",
  "title": {
    "en": "The Small Snowball (Includes Budget & Savings Habit)",
    "hi": "The Small Snowball (Includes Budget & Savings Habit)",
    "te": "The Small Snowball (Includes Budget & Savings Habit)"
  },
  "subtitle": {
    "en": "School Mathematics room.",
    "hi": "School Mathematics room.",
    "te": "School Mathematics room."
  },
  "situationContext": {
    "en": "Teacher Sunita shows a chart: saving \u20b9200 every month gives you more than \u20b92,400 at the end of the year because the bank adds bonus interest.",
    "hi": "Teacher Sunita shows a chart: saving \u20b9200 every month gives you more than \u20b92,400 at the end of the year because the bank adds bonus interest.",
    "te": "Teacher Sunita shows a chart: saving \u20b9200 every month gives you more than \u20b92,400 at the end of the year because the bank adds bonus interest."
  },
  "stipendContext": "Math teacher Sunita.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "SM_005_step_1",
      "title": {
        "en": "Establishing the Savings Habit",
        "hi": "Establishing the Savings Habit",
        "te": "Establishing the Savings Habit"
      },
      "situationContext": {
        "en": "Pick your monthly saving habit for the whole school year.",
        "hi": "Pick your monthly saving habit for the whole school year.",
        "te": "Pick your monthly saving habit for the whole school year."
      },
      "choices": [
        {
          "id": "SM_005_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Put away \u20b9200 on the first day of every month, right after pocket money arrives.",
            "hi": "Put away \u20b9200 on the first day of every month, right after pocket money arrives.",
            "te": "Put away \u20b9200 on the first day of every month, right after pocket money arrives."
          },
          "outcomeDescription": {
            "en": "It becomes an easy habit. By exam time, you have \u20b92,500+ with interest added!",
            "hi": "It becomes an easy habit. By exam time, you have \u20b92,500+ with interest added!",
            "te": "It becomes an easy habit. By exam time, you have \u20b92,500+ with interest added!"
          },
          "pedagogicalFeedback": {
            "en": "It becomes an easy habit. By exam time, you have \u20b92,500+ with interest added!",
            "hi": "It becomes an easy habit. By exam time, you have \u20b92,500+ with interest added!",
            "te": "It becomes an easy habit. By exam time, you have \u20b92,500+ with interest added!"
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_005_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Put away whatever coins are left over on the last day of each month.",
            "hi": "Put away whatever coins are left over on the last day of each month.",
            "te": "Put away whatever coins are left over on the last day of each month."
          },
          "outcomeDescription": {
            "en": "You save some money, but some months you have nothing left to put away.",
            "hi": "You save some money, but some months you have nothing left to put away.",
            "te": "You save some money, but some months you have nothing left to put away."
          },
          "pedagogicalFeedback": {
            "en": "You save some money, but some months you have nothing left to put away.",
            "hi": "You save some money, but some months you have nothing left to put away.",
            "te": "You save some money, but some months you have nothing left to put away."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_005_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Save \u20b91,000 in month one, then take it all out in month two for party clothes.",
            "hi": "Save \u20b91,000 in month one, then take it all out in month two for party clothes.",
            "te": "Save \u20b91,000 in month one, then take it all out in month two for party clothes."
          },
          "outcomeDescription": {
            "en": "The savings habit breaks and you start over at zero.",
            "hi": "The savings habit breaks and you start over at zero.",
            "te": "The savings habit breaks and you start over at zero."
          },
          "pedagogicalFeedback": {
            "en": "The savings habit breaks and you start over at zero.",
            "hi": "The savings habit breaks and you start over at zero.",
            "te": "The savings habit breaks and you start over at zero."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_005_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Join an unregulated chit-group with strangers to earn \"super interest\".",
            "hi": "Join an unregulated chit-group with strangers to earn \"super interest\".",
            "te": "Join an unregulated chit-group with strangers to earn \"super interest\"."
          },
          "outcomeDescription": {
            "en": "The group leader runs away and your savings are gone.",
            "hi": "The group leader runs away and your savings are gone.",
            "te": "The group leader runs away and your savings are gone."
          },
          "pedagogicalFeedback": {
            "en": "The group leader runs away and your savings are gone.",
            "hi": "The group leader runs away and your savings are gone.",
            "te": "The group leader runs away and your savings are gone."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_005_step_2",
      "title": {
        "en": "Managing Mid-Year Temptation",
        "hi": "Managing Mid-Year Temptation",
        "te": "Managing Mid-Year Temptation"
      },
      "situationContext": {
        "en": "At Month 6, your savings reach \u20b91,200. A touring carnival arrives in town.",
        "hi": "At Month 6, your savings reach \u20b91,200. A touring carnival arrives in town.",
        "te": "At Month 6, your savings reach \u20b91,200. A touring carnival arrives in town."
      },
      "choices": [
        {
          "id": "SM_005_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Keep your \u20b91,200 untouched; visit the carnival using only your weekly fun budget.",
            "hi": "Keep your \u20b91,200 untouched; visit the carnival using only your weekly fun budget.",
            "te": "Keep your \u20b91,200 untouched; visit the carnival using only your weekly fun budget."
          },
          "outcomeDescription": {
            "en": "You enjoy the carnival and protect your growing savings snowball.",
            "hi": "You enjoy the carnival and protect your growing savings snowball.",
            "te": "You enjoy the carnival and protect your growing savings snowball."
          },
          "pedagogicalFeedback": {
            "en": "You enjoy the carnival and protect your growing savings snowball.",
            "hi": "You enjoy the carnival and protect your growing savings snowball.",
            "te": "You enjoy the carnival and protect your growing savings snowball."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_005_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Volunteer at the festival gates for free entry and spend just \u20b9100 on snacks.",
            "hi": "Volunteer at the festival gates for free entry and spend just \u20b9100 on snacks.",
            "te": "Volunteer at the festival gates for free entry and spend just \u20b9100 on snacks."
          },
          "outcomeDescription": {
            "en": "You have a memorable day while spending almost nothing.",
            "hi": "You have a memorable day while spending almost nothing.",
            "te": "You have a memorable day while spending almost nothing."
          },
          "pedagogicalFeedback": {
            "en": "You have a memorable day while spending almost nothing.",
            "hi": "You have a memorable day while spending almost nothing.",
            "te": "You have a memorable day while spending almost nothing."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_005_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Withdraw \u20b91,000 from savings to buy luxury carnival tickets.",
            "hi": "Withdraw \u20b91,000 from savings to buy luxury carnival tickets.",
            "te": "Withdraw \u20b91,000 from savings to buy luxury carnival tickets."
          },
          "outcomeDescription": {
            "en": "You wipe out months of progress for an afternoon of thrills.",
            "hi": "You wipe out months of progress for an afternoon of thrills.",
            "te": "You wipe out months of progress for an afternoon of thrills."
          },
          "pedagogicalFeedback": {
            "en": "You wipe out months of progress for an afternoon of thrills.",
            "hi": "You wipe out months of progress for an afternoon of thrills.",
            "te": "You wipe out months of progress for an afternoon of thrills."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_005_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Borrow \u20b92,000 to place bets at carnival game stalls.",
            "hi": "Borrow \u20b92,000 to place bets at carnival game stalls.",
            "te": "Borrow \u20b92,000 to place bets at carnival game stalls."
          },
          "outcomeDescription": {
            "en": "You lose your money on rigged games and end up in debt.",
            "hi": "You lose your money on rigged games and end up in debt.",
            "te": "You lose your money on rigged games and end up in debt."
          },
          "pedagogicalFeedback": {
            "en": "You lose your money on rigged games and end up in debt.",
            "hi": "You lose your money on rigged games and end up in debt.",
            "te": "You lose your money on rigged games and end up in debt."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "SM_005_step_3",
      "title": {
        "en": "Year-End Compounding Review",
        "hi": "Year-End Compounding Review",
        "te": "Year-End Compounding Review"
      },
      "situationContext": {
        "en": "At the end of 12 months, your account holds \u20b92,400 plus \u20b995 in bank interest. Choose your next move.",
        "hi": "At the end of 12 months, your account holds \u20b92,400 plus \u20b995 in bank interest. Choose your next move.",
        "te": "At the end of 12 months, your account holds \u20b92,400 plus \u20b995 in bank interest. Choose your next move."
      },
      "choices": [
        {
          "id": "SM_005_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Roll the full \u20b92,495 into a 1-year fixed deposit to keep earning compounding interest.",
            "hi": "Roll the full \u20b92,495 into a 1-year fixed deposit to keep earning compounding interest.",
            "te": "Roll the full \u20b92,495 into a 1-year fixed deposit to keep earning compounding interest."
          },
          "outcomeDescription": {
            "en": "Your savings grow safely and build a strong emergency cushion.",
            "hi": "Your savings grow safely and build a strong emergency cushion.",
            "te": "Your savings grow safely and build a strong emergency cushion."
          },
          "pedagogicalFeedback": {
            "en": "Your savings grow safely and build a strong emergency cushion.",
            "hi": "Your savings grow safely and build a strong emergency cushion.",
            "te": "Your savings grow safely and build a strong emergency cushion."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_005_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Keep the money in your savings account as a baseline emergency fund.",
            "hi": "Keep the money in your savings account as a baseline emergency fund.",
            "te": "Keep the money in your savings account as a baseline emergency fund."
          },
          "outcomeDescription": {
            "en": "Your cash stays liquid and ready for any student emergency.",
            "hi": "Your cash stays liquid and ready for any student emergency.",
            "te": "Your cash stays liquid and ready for any student emergency."
          },
          "pedagogicalFeedback": {
            "en": "Your cash stays liquid and ready for any student emergency.",
            "hi": "Your cash stays liquid and ready for any student emergency.",
            "te": "Your cash stays liquid and ready for any student emergency."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_005_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Withdraw all the money and spend it on new clothes in an afternoon.",
            "hi": "Withdraw all the money and spend it on new clothes in an afternoon.",
            "te": "Withdraw all the money and spend it on new clothes in an afternoon."
          },
          "outcomeDescription": {
            "en": "You reset your savings balance back to zero.",
            "hi": "You reset your savings balance back to zero.",
            "te": "You reset your savings balance back to zero."
          },
          "pedagogicalFeedback": {
            "en": "You reset your savings balance back to zero.",
            "hi": "You reset your savings balance back to zero.",
            "te": "You reset your savings balance back to zero."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "SM_005_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Hand the entire amount to a gambling bot promising guaranteed returns.",
            "hi": "Hand the entire amount to a gambling bot promising guaranteed returns.",
            "te": "Hand the entire amount to a gambling bot promising guaranteed returns."
          },
          "outcomeDescription": {
            "en": "You lose your hard-earned savings.",
            "hi": "You lose your hard-earned savings.",
            "te": "You lose your hard-earned savings."
          },
          "pedagogicalFeedback": {
            "en": "You lose your hard-earned savings.",
            "hi": "You lose your hard-earned savings.",
            "te": "You lose your hard-earned savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "Emergency Money & Sinking Funds",
      "hi": "Emergency Money & Sinking Funds",
      "te": "Emergency Money & Sinking Funds"
    },
    "points": [
      {
        "en": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "hi": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick).",
        "te": "Emergency Money: Cash set aside only for sudden surprises (like a flat bicycle tire, a broken phone screen, or buying medicine when sick)."
      },
      {
        "en": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "hi": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once.",
        "te": "Sinking Fund: Saving small amounts each week or month for a planned expense (like holiday train tickets or next term's exam fees), instead of paying a huge sum all at once."
      }
    ]
  }
},
  'INV_001': {
  "id": "INV_001",
  "cityId": "city_inv_001",
  "pillar": "invest",
  "title": {
    "en": "The Two Plants Game",
    "hi": "The Two Plants Game",
    "te": "The Two Plants Game"
  },
  "subtitle": {
    "en": "The School Science Garden.",
    "hi": "The School Science Garden.",
    "te": "The School Science Garden."
  },
  "situationContext": {
    "en": "Mali Kaka gives you 10 magical tokens in a game. You can plant them in Plant A (Steady Plant) or Plant B (Wild Flower).",
    "hi": "Mali Kaka gives you 10 magical tokens in a game. You can plant them in Plant A (Steady Plant) or Plant B (Wild Flower).",
    "te": "Mali Kaka gives you 10 magical tokens in a game. You can plant them in Plant A (Steady Plant) or Plant B (Wild Flower)."
  },
  "stipendContext": "Mali Kaka, the campus gardener.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "INV_001_step_1",
      "title": {
        "en": "Sowing the 10 Tokens",
        "hi": "Sowing the 10 Tokens",
        "te": "Sowing the 10 Tokens"
      },
      "situationContext": {
        "en": "Choose where to put your 10 tokens for your 3-year school project.",
        "hi": "Choose where to put your 10 tokens for your 3-year school project.",
        "te": "Choose where to put your 10 tokens for your 3-year school project."
      },
      "choices": [
        {
          "id": "INV_001_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Put 6 tokens in Plant A (safe) and 4 tokens in Plant B (growth).",
            "hi": "Put 6 tokens in Plant A (safe) and 4 tokens in Plant B (growth).",
            "te": "Put 6 tokens in Plant A (safe) and 4 tokens in Plant B (growth)."
          },
          "outcomeDescription": {
            "en": "Your tokens grow steadily without huge scares.",
            "hi": "Your tokens grow steadily without huge scares.",
            "te": "Your tokens grow steadily without huge scares."
          },
          "pedagogicalFeedback": {
            "en": "Your tokens grow steadily without huge scares.",
            "hi": "Your tokens grow steadily without huge scares.",
            "te": "Your tokens grow steadily without huge scares."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_001_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Put all 10 tokens in Plant A (all safe).",
            "hi": "Put all 10 tokens in Plant A (all safe).",
            "te": "Put all 10 tokens in Plant A (all safe)."
          },
          "outcomeDescription": {
            "en": "You earn steady tokens, but miss out on higher growth.",
            "hi": "You earn steady tokens, but miss out on higher growth.",
            "te": "You earn steady tokens, but miss out on higher growth."
          },
          "pedagogicalFeedback": {
            "en": "You earn steady tokens, but miss out on higher growth.",
            "hi": "You earn steady tokens, but miss out on higher growth.",
            "te": "You earn steady tokens, but miss out on higher growth."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_001_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Put all 10 tokens in Plant B when you need the tokens next week.",
            "hi": "Put all 10 tokens in Plant B when you need the tokens next week.",
            "te": "Put all 10 tokens in Plant B when you need the tokens next week."
          },
          "outcomeDescription": {
            "en": "A bad turn wipes out your tokens right before you need them.",
            "hi": "A bad turn wipes out your tokens right before you need them.",
            "te": "A bad turn wipes out your tokens right before you need them."
          },
          "pedagogicalFeedback": {
            "en": "A bad turn wipes out your tokens right before you need them.",
            "hi": "A bad turn wipes out your tokens right before you need them.",
            "te": "A bad turn wipes out your tokens right before you need them."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_001_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Borrow 20 tokens from a loan shark to plant all of them in Plant B.",
            "hi": "Borrow 20 tokens from a loan shark to plant all of them in Plant B.",
            "te": "Borrow 20 tokens from a loan shark to plant all of them in Plant B."
          },
          "outcomeDescription": {
            "en": "You lose the bet and end up in deep trouble.",
            "hi": "You lose the bet and end up in deep trouble.",
            "te": "You lose the bet and end up in deep trouble."
          },
          "pedagogicalFeedback": {
            "en": "You lose the bet and end up in deep trouble.",
            "hi": "You lose the bet and end up in deep trouble.",
            "te": "You lose the bet and end up in deep trouble."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_001_step_2",
      "title": {
        "en": "Weathering Year 2 Frost",
        "hi": "Weathering Year 2 Frost",
        "te": "Weathering Year 2 Frost"
      },
      "situationContext": {
        "en": "A dry frost hits the garden. Plant B produces zero bonus fruit, while Plant A yields 2 lemons.",
        "hi": "A dry frost hits the garden. Plant B produces zero bonus fruit, while Plant A yields 2 lemons.",
        "te": "A dry frost hits the garden. Plant B produces zero bonus fruit, while Plant A yields 2 lemons."
      },
      "choices": [
        {
          "id": "INV_001_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Stay patient and let both plants grow; use Plant A's lemons to support your score.",
            "hi": "Stay patient and let both plants grow; use Plant A's lemons to support your score.",
            "te": "Stay patient and let both plants grow; use Plant A's lemons to support your score."
          },
          "outcomeDescription": {
            "en": "You protect your tokens and allow Plant B time to recover.",
            "hi": "You protect your tokens and allow Plant B time to recover.",
            "te": "You protect your tokens and allow Plant B time to recover."
          },
          "pedagogicalFeedback": {
            "en": "You protect your tokens and allow Plant B time to recover.",
            "hi": "You protect your tokens and allow Plant B time to recover.",
            "te": "You protect your tokens and allow Plant B time to recover."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_001_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Move 1 token from Plant A to Plant B while seeds are cheap.",
            "hi": "Move 1 token from Plant A to Plant B while seeds are cheap.",
            "te": "Move 1 token from Plant A to Plant B while seeds are cheap."
          },
          "outcomeDescription": {
            "en": "You buy growth potential at a discount while keeping a solid safety cushion.",
            "hi": "You buy growth potential at a discount while keeping a solid safety cushion.",
            "te": "You buy growth potential at a discount while keeping a solid safety cushion."
          },
          "pedagogicalFeedback": {
            "en": "You buy growth potential at a discount while keeping a solid safety cushion.",
            "hi": "You buy growth potential at a discount while keeping a solid safety cushion.",
            "te": "You buy growth potential at a discount while keeping a solid safety cushion."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_001_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Cut down Plant B in anger, locking in your losses.",
            "hi": "Cut down Plant B in anger, locking in your losses.",
            "te": "Cut down Plant B in anger, locking in your losses."
          },
          "outcomeDescription": {
            "en": "You lose your tokens permanently because you panicked.",
            "hi": "You lose your tokens permanently because you panicked.",
            "te": "You lose your tokens permanently because you panicked."
          },
          "pedagogicalFeedback": {
            "en": "You lose your tokens permanently because you panicked.",
            "hi": "You lose your tokens permanently because you panicked.",
            "te": "You lose your tokens permanently because you panicked."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_001_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Abandon the garden entirely and quit the school project.",
            "hi": "Abandon the garden entirely and quit the school project.",
            "te": "Abandon the garden entirely and quit the school project."
          },
          "outcomeDescription": {
            "en": "You score zero on your assignment and lose all your tokens.",
            "hi": "You score zero on your assignment and lose all your tokens.",
            "te": "You score zero on your assignment and lose all your tokens."
          },
          "pedagogicalFeedback": {
            "en": "You score zero on your assignment and lose all your tokens.",
            "hi": "You score zero on your assignment and lose all your tokens.",
            "te": "You score zero on your assignment and lose all your tokens."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_001_step_3",
      "title": {
        "en": "The Year 3 Harvest",
        "hi": "The Year 3 Harvest",
        "te": "The Year 3 Harvest"
      },
      "situationContext": {
        "en": "Spring rain arrives in Year 3. Plant B blooms and produces 8 sweet mangoes. Choose what to do with the harvest.",
        "hi": "Spring rain arrives in Year 3. Plant B blooms and produces 8 sweet mangoes. Choose what to do with the harvest.",
        "te": "Spring rain arrives in Year 3. Plant B blooms and produces 8 sweet mangoes. Choose what to do with the harvest."
      },
      "choices": [
        {
          "id": "INV_001_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Store your 10 original tokens in your safe box and enjoy the bonus fruit.",
            "hi": "Store your 10 original tokens in your safe box and enjoy the bonus fruit.",
            "te": "Store your 10 original tokens in your safe box and enjoy the bonus fruit."
          },
          "outcomeDescription": {
            "en": "Your initial savings stay safe while you enjoy the extra reward.",
            "hi": "Your initial savings stay safe while you enjoy the extra reward.",
            "te": "Your initial savings stay safe while you enjoy the extra reward."
          },
          "pedagogicalFeedback": {
            "en": "Your initial savings stay safe while you enjoy the extra reward.",
            "hi": "Your initial savings stay safe while you enjoy the extra reward.",
            "te": "Your initial savings stay safe while you enjoy the extra reward."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_001_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Replant half the fruit seeds and store the other half.",
            "hi": "Replant half the fruit seeds and store the other half.",
            "te": "Replant half the fruit seeds and store the other half."
          },
          "outcomeDescription": {
            "en": "You balance new growth with reliable safety.",
            "hi": "You balance new growth with reliable safety.",
            "te": "You balance new growth with reliable safety."
          },
          "pedagogicalFeedback": {
            "en": "You balance new growth with reliable safety.",
            "hi": "You balance new growth with reliable safety.",
            "te": "You balance new growth with reliable safety."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_001_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Gamble all the bonus fruit on an unverified exotic seed.",
            "hi": "Gamble all the bonus fruit on an unverified exotic seed.",
            "te": "Gamble all the bonus fruit on an unverified exotic seed."
          },
          "outcomeDescription": {
            "en": "You risk losing your hard-earned returns.",
            "hi": "You risk losing your hard-earned returns.",
            "te": "You risk losing your hard-earned returns."
          },
          "pedagogicalFeedback": {
            "en": "You risk losing your hard-earned returns.",
            "hi": "You risk losing your hard-earned returns.",
            "te": "You risk losing your hard-earned returns."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_001_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Throw the harvest away because you wanted twice as much fruit.",
            "hi": "Throw the harvest away because you wanted twice as much fruit.",
            "te": "Throw the harvest away because you wanted twice as much fruit."
          },
          "outcomeDescription": {
            "en": "You throw away your gains out of greed.",
            "hi": "You throw away your gains out of greed.",
            "te": "You throw away your gains out of greed."
          },
          "pedagogicalFeedback": {
            "en": "You throw away your gains out of greed.",
            "hi": "You throw away your gains out of greed.",
            "te": "You throw away your gains out of greed."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Mango Tree Story (Safe vs Risky Growth)",
      "hi": "The Mango Tree Story (Safe vs Risky Growth)",
      "te": "The Mango Tree Story (Safe vs Risky Growth)"
    },
    "points": [
      {
        "en": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "hi": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "te": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail."
      },
      {
        "en": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "hi": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "te": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few."
      },
      {
        "en": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "hi": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "te": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!"
      }
    ]
  }
},
  'INV_002': {
  "id": "INV_002",
  "cityId": "city_inv_002",
  "pillar": "invest",
  "title": {
    "en": "The Cargo Boat Challenge (Don't Put All Eggs in One Basket)",
    "hi": "The Cargo Boat Challenge (Don't Put All Eggs in One Basket)",
    "te": "The Cargo Boat Challenge (Don't Put All Eggs in One Basket)"
  },
  "subtitle": {
    "en": "River Boat Dock.",
    "hi": "River Boat Dock.",
    "te": "River Boat Dock."
  },
  "situationContext": {
    "en": "You have 6 bags of study grain to send across the river. There are 3 different boats: a Wooden Canoe, a Motor Launch, and a Ferry.",
    "hi": "You have 6 bags of study grain to send across the river. There are 3 different boats: a Wooden Canoe, a Motor Launch, and a Ferry.",
    "te": "You have 6 bags of study grain to send across the river. There are 3 different boats: a Wooden Canoe, a Motor Launch, and a Ferry."
  },
  "stipendContext": "Boat Master Kabir.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "INV_002_step_1",
      "title": {
        "en": "Loading the Grain Sacks",
        "hi": "Loading the Grain Sacks",
        "te": "Loading the Grain Sacks"
      },
      "situationContext": {
        "en": "Place the 6 bags into the boats.",
        "hi": "Place the 6 bags into the boats.",
        "te": "Place the 6 bags into the boats."
      },
      "choices": [
        {
          "id": "INV_002_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Put 2 bags in the Canoe, 2 bags in the Motor Launch, and 2 bags in the Ferry.",
            "hi": "Put 2 bags in the Canoe, 2 bags in the Motor Launch, and 2 bags in the Ferry.",
            "te": "Put 2 bags in the Canoe, 2 bags in the Motor Launch, and 2 bags in the Ferry."
          },
          "outcomeDescription": {
            "en": "If one boat engine stalls, 4 bags still cross safely!",
            "hi": "If one boat engine stalls, 4 bags still cross safely!",
            "te": "If one boat engine stalls, 4 bags still cross safely!"
          },
          "pedagogicalFeedback": {
            "en": "If one boat engine stalls, 4 bags still cross safely!",
            "hi": "If one boat engine stalls, 4 bags still cross safely!",
            "te": "If one boat engine stalls, 4 bags still cross safely!"
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_002_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Put 3 bags in the Motor Launch and 3 bags in the Ferry.",
            "hi": "Put 3 bags in the Motor Launch and 3 bags in the Ferry.",
            "te": "Put 3 bags in the Motor Launch and 3 bags in the Ferry."
          },
          "outcomeDescription": {
            "en": "Safe and dependable, with minimal delay.",
            "hi": "Safe and dependable, with minimal delay.",
            "te": "Safe and dependable, with minimal delay."
          },
          "pedagogicalFeedback": {
            "en": "Safe and dependable, with minimal delay.",
            "hi": "Safe and dependable, with minimal delay.",
            "te": "Safe and dependable, with minimal delay."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_002_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Put 5 bags into the fastest, rickety Canoe to arrive 5 minutes earlier.",
            "hi": "Put 5 bags into the fastest, rickety Canoe to arrive 5 minutes earlier.",
            "te": "Put 5 bags into the fastest, rickety Canoe to arrive 5 minutes earlier."
          },
          "outcomeDescription": {
            "en": "Water splashes inside and spoils most of your grain.",
            "hi": "Water splashes inside and spoils most of your grain.",
            "te": "Water splashes inside and spoils most of your grain."
          },
          "pedagogicalFeedback": {
            "en": "Water splashes inside and spoils most of your grain.",
            "hi": "Water splashes inside and spoils most of your grain.",
            "te": "Water splashes inside and spoils most of your grain."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_002_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Pile all 6 bags onto a leaking raft because the operator promised a cash reward.",
            "hi": "Pile all 6 bags onto a leaking raft because the operator promised a cash reward.",
            "te": "Pile all 6 bags onto a leaking raft because the operator promised a cash reward."
          },
          "outcomeDescription": {
            "en": "The raft sinks and all your cargo is lost.",
            "hi": "The raft sinks and all your cargo is lost.",
            "te": "The raft sinks and all your cargo is lost."
          },
          "pedagogicalFeedback": {
            "en": "The raft sinks and all your cargo is lost.",
            "hi": "The raft sinks and all your cargo is lost.",
            "te": "The raft sinks and all your cargo is lost."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_002_step_2",
      "title": {
        "en": "Mid-River Rapids",
        "hi": "Mid-River Rapids",
        "te": "Mid-River Rapids"
      },
      "situationContext": {
        "en": "A rapid hits the Canoe and soaks 2 bags. The other boats navigate the river safely.",
        "hi": "A rapid hits the Canoe and soaks 2 bags. The other boats navigate the river safely.",
        "te": "A rapid hits the Canoe and soaks 2 bags. The other boats navigate the river safely."
      },
      "choices": [
        {
          "id": "INV_002_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Continue calmly with the 4 safe bags on the remaining two boats.",
            "hi": "Continue calmly with the 4 safe bags on the remaining two boats.",
            "te": "Continue calmly with the 4 safe bags on the remaining two boats."
          },
          "outcomeDescription": {
            "en": "You protect the majority of your harvest thanks to smart diversification.",
            "hi": "You protect the majority of your harvest thanks to smart diversification.",
            "te": "You protect the majority of your harvest thanks to smart diversification."
          },
          "pedagogicalFeedback": {
            "en": "You protect the majority of your harvest thanks to smart diversification.",
            "hi": "You protect the majority of your harvest thanks to smart diversification.",
            "te": "You protect the majority of your harvest thanks to smart diversification."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_002_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Signal the Ferry to pull alongside and inspect the wet bags.",
            "hi": "Signal the Ferry to pull alongside and inspect the wet bags.",
            "te": "Signal the Ferry to pull alongside and inspect the wet bags."
          },
          "outcomeDescription": {
            "en": "You rescue some damp grain without endangering the rest.",
            "hi": "You rescue some damp grain without endangering the rest.",
            "te": "You rescue some damp grain without endangering the rest."
          },
          "pedagogicalFeedback": {
            "en": "You rescue some damp grain without endangering the rest.",
            "hi": "You rescue some damp grain without endangering the rest.",
            "te": "You rescue some damp grain without endangering the rest."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_002_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Jump into the water to save the wet bags, putting yourself at risk.",
            "hi": "Jump into the water to save the wet bags, putting yourself at risk.",
            "te": "Jump into the water to save the wet bags, putting yourself at risk."
          },
          "outcomeDescription": {
            "en": "You put your safety at risk over two bags of grain.",
            "hi": "You put your safety at risk over two bags of grain.",
            "te": "You put your safety at risk over two bags of grain."
          },
          "pedagogicalFeedback": {
            "en": "You put your safety at risk over two bags of grain.",
            "hi": "You put your safety at risk over two bags of grain.",
            "te": "You put your safety at risk over two bags of grain."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_002_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Tip over the remaining boats in anger.",
            "hi": "Tip over the remaining boats in anger.",
            "te": "Tip over the remaining boats in anger."
          },
          "outcomeDescription": {
            "en": "You destroy your entire cargo.",
            "hi": "You destroy your entire cargo.",
            "te": "You destroy your entire cargo."
          },
          "pedagogicalFeedback": {
            "en": "You destroy your entire cargo.",
            "hi": "You destroy your entire cargo.",
            "te": "You destroy your entire cargo."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_002_step_3",
      "title": {
        "en": "Selling at the Trade Market",
        "hi": "Selling at the Trade Market",
        "te": "Selling at the Trade Market"
      },
      "situationContext": {
        "en": "You deliver 4 intact bags to market, earning \u20b91,600. Allocate your earnings.",
        "hi": "You deliver 4 intact bags to market, earning \u20b91,600. Allocate your earnings.",
        "te": "You deliver 4 intact bags to market, earning \u20b91,600. Allocate your earnings."
      },
      "choices": [
        {
          "id": "INV_002_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Use \u20b9800 for next season's seeds, \u20b9400 for emergency grain, and \u20b9400 for school supplies.",
            "hi": "Use \u20b9800 for next season's seeds, \u20b9400 for emergency grain, and \u20b9400 for school supplies.",
            "te": "Use \u20b9800 for next season's seeds, \u20b9400 for emergency grain, and \u20b9400 for school supplies."
          },
          "outcomeDescription": {
            "en": "You protect your business, build an emergency buffer, and fund your studies.",
            "hi": "You protect your business, build an emergency buffer, and fund your studies.",
            "te": "You protect your business, build an emergency buffer, and fund your studies."
          },
          "pedagogicalFeedback": {
            "en": "You protect your business, build an emergency buffer, and fund your studies.",
            "hi": "You protect your business, build an emergency buffer, and fund your studies.",
            "te": "You protect your business, build an emergency buffer, and fund your studies."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_002_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Deposit the full \u20b91,600 into your student savings bank account.",
            "hi": "Deposit the full \u20b91,600 into your student savings bank account.",
            "te": "Deposit the full \u20b91,600 into your student savings bank account."
          },
          "outcomeDescription": {
            "en": "Your earnings stay safe and earn modest interest.",
            "hi": "Your earnings stay safe and earn modest interest.",
            "te": "Your earnings stay safe and earn modest interest."
          },
          "pedagogicalFeedback": {
            "en": "Your earnings stay safe and earn modest interest.",
            "hi": "Your earnings stay safe and earn modest interest.",
            "te": "Your earnings stay safe and earn modest interest."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_002_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Spend the entire \u20b91,600 on market toys and carnival food.",
            "hi": "Spend the entire \u20b91,600 on market toys and carnival food.",
            "te": "Spend the entire \u20b91,600 on market toys and carnival food."
          },
          "outcomeDescription": {
            "en": "You have no funds left for next season's seeds.",
            "hi": "You have no funds left for next season's seeds.",
            "te": "You have no funds left for next season's seeds."
          },
          "pedagogicalFeedback": {
            "en": "You have no funds left for next season's seeds.",
            "hi": "You have no funds left for next season's seeds.",
            "te": "You have no funds left for next season's seeds."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_002_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Gamble the \u20b91,600 in a dice game by the river dock.",
            "hi": "Gamble the \u20b91,600 in a dice game by the river dock.",
            "te": "Gamble the \u20b91,600 in a dice game by the river dock."
          },
          "outcomeDescription": {
            "en": "You lose your entire season's earnings.",
            "hi": "You lose your entire season's earnings.",
            "te": "You lose your entire season's earnings."
          },
          "pedagogicalFeedback": {
            "en": "You lose your entire season's earnings.",
            "hi": "You lose your entire season's earnings.",
            "te": "You lose your entire season's earnings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Mango Tree Story (Safe vs Risky Growth)",
      "hi": "The Mango Tree Story (Safe vs Risky Growth)",
      "te": "The Mango Tree Story (Safe vs Risky Growth)"
    },
    "points": [
      {
        "en": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "hi": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "te": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail."
      },
      {
        "en": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "hi": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "te": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few."
      },
      {
        "en": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "hi": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "te": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!"
      }
    ]
  }
},
  'INV_003': {
  "id": "INV_003",
  "cityId": "city_inv_003",
  "pillar": "invest",
  "title": {
    "en": "The Rainy Season Storm (Market Ups and Downs)",
    "hi": "The Rainy Season Storm (Market Ups and Downs)",
    "te": "The Rainy Season Storm (Market Ups and Downs)"
  },
  "subtitle": {
    "en": "Economics Club Room.",
    "hi": "Economics Club Room.",
    "te": "Economics Club Room."
  },
  "situationContext": {
    "en": "In your class game simulation, the simulated market drops by 15% this month because of bad news. Your game score goes down. You have your real emergency cash safe in your bank box.",
    "hi": "In your class game simulation, the simulated market drops by 15% this month because of bad news. Your game score goes down. You have your real emergency cash safe in your bank box.",
    "te": "In your class game simulation, the simulated market drops by 15% this month because of bad news. Your game score goes down. You have your real emergency cash safe in your bank box."
  },
  "stipendContext": "Club President Meera.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "INV_003_step_1",
      "title": {
        "en": "Reacting to the 15% Downturn",
        "hi": "Reacting to the 15% Downturn",
        "te": "Reacting to the 15% Downturn"
      },
      "situationContext": {
        "en": "Decide what to do with your game investment units.",
        "hi": "Decide what to do with your game investment units.",
        "te": "Decide what to do with your game investment units."
      },
      "choices": [
        {
          "id": "INV_003_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Stay calm and do nothing. Since your emergency cash is safe, wait for the simulation to recover over time.",
            "hi": "Stay calm and do nothing. Since your emergency cash is safe, wait for the simulation to recover over time.",
            "te": "Stay calm and do nothing. Since your emergency cash is safe, wait for the simulation to recover over time."
          },
          "outcomeDescription": {
            "en": "The storm passes in the game, the market bounces back, and your value returns.",
            "hi": "The storm passes in the game, the market bounces back, and your value returns.",
            "te": "The storm passes in the game, the market bounces back, and your value returns."
          },
          "pedagogicalFeedback": {
            "en": "The storm passes in the game, the market bounces back, and your value returns.",
            "hi": "The storm passes in the game, the market bounces back, and your value returns.",
            "te": "The storm passes in the game, the market bounces back, and your value returns."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_003_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Add 1 extra unit while prices are lower, if you have spare pocket money.",
            "hi": "Add 1 extra unit while prices are lower, if you have spare pocket money.",
            "te": "Add 1 extra unit while prices are lower, if you have spare pocket money."
          },
          "outcomeDescription": {
            "en": "You buy at a bargain and gain more when things improve.",
            "hi": "You buy at a bargain and gain more when things improve.",
            "te": "You buy at a bargain and gain more when things improve."
          },
          "pedagogicalFeedback": {
            "en": "You buy at a bargain and gain more when things improve.",
            "hi": "You buy at a bargain and gain more when things improve.",
            "te": "You buy at a bargain and gain more when things improve."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_003_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Panic and sell everything while prices are down.",
            "hi": "Panic and sell everything while prices are down.",
            "te": "Panic and sell everything while prices are down."
          },
          "outcomeDescription": {
            "en": "You lock in your loss and lose your tokens forever.",
            "hi": "You lock in your loss and lose your tokens forever.",
            "te": "You lock in your loss and lose your tokens forever."
          },
          "pedagogicalFeedback": {
            "en": "You lock in your loss and lose your tokens forever.",
            "hi": "You lock in your loss and lose your tokens forever.",
            "te": "You lock in your loss and lose your tokens forever."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_003_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Stop eating lunch to put all your food money into the falling market.",
            "hi": "Stop eating lunch to put all your food money into the falling market.",
            "te": "Stop eating lunch to put all your food money into the falling market."
          },
          "outcomeDescription": {
            "en": "You break your daily budget and end up hungry.",
            "hi": "You break your daily budget and end up hungry.",
            "te": "You break your daily budget and end up hungry."
          },
          "pedagogicalFeedback": {
            "en": "You break your daily budget and end up hungry.",
            "hi": "You break your daily budget and end up hungry.",
            "te": "You break your daily budget and end up hungry."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_003_step_2",
      "title": {
        "en": "Managing Panic in the Room",
        "hi": "Managing Panic in the Room",
        "te": "Managing Panic in the Room"
      },
      "situationContext": {
        "en": "A classmate yells: \"The market will drop to zero! Sell right now!\"",
        "hi": "A classmate yells: \"The market will drop to zero! Sell right now!\"",
        "te": "A classmate yells: \"The market will drop to zero! Sell right now!\""
      },
      "choices": [
        {
          "id": "INV_003_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Look at long-term simulation charts showing that market ups and downs are normal.",
            "hi": "Look at long-term simulation charts showing that market ups and downs are normal.",
            "te": "Look at long-term simulation charts showing that market ups and downs are normal."
          },
          "outcomeDescription": {
            "en": "You stay calm and make rational decisions based on facts.",
            "hi": "You stay calm and make rational decisions based on facts.",
            "te": "You stay calm and make rational decisions based on facts."
          },
          "pedagogicalFeedback": {
            "en": "You stay calm and make rational decisions based on facts.",
            "hi": "You stay calm and make rational decisions based on facts.",
            "te": "You stay calm and make rational decisions based on facts."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_003_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Ask the economics teacher to explain market cycles to the class.",
            "hi": "Ask the economics teacher to explain market cycles to the class.",
            "te": "Ask the economics teacher to explain market cycles to the class."
          },
          "outcomeDescription": {
            "en": "The teacher reassures the group and reduces anxiety.",
            "hi": "The teacher reassures the group and reduces anxiety.",
            "te": "The teacher reassures the group and reduces anxiety."
          },
          "pedagogicalFeedback": {
            "en": "The teacher reassures the group and reduces anxiety.",
            "hi": "The teacher reassures the group and reduces anxiety.",
            "te": "The teacher reassures the group and reduces anxiety."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_003_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Forward the panic message to all your campus chat groups.",
            "hi": "Forward the panic message to all your campus chat groups.",
            "te": "Forward the panic message to all your campus chat groups."
          },
          "outcomeDescription": {
            "en": "You spread unverified rumors and panic among your peers.",
            "hi": "You spread unverified rumors and panic among your peers.",
            "te": "You spread unverified rumors and panic among your peers."
          },
          "pedagogicalFeedback": {
            "en": "You spread unverified rumors and panic among your peers.",
            "hi": "You spread unverified rumors and panic among your peers.",
            "te": "You spread unverified rumors and panic among your peers."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_003_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Pay the panicking student a fee to \"rescue\" your units.",
            "hi": "Pay the panicking student a fee to \"rescue\" your units.",
            "te": "Pay the panicking student a fee to \"rescue\" your units."
          },
          "outcomeDescription": {
            "en": "You get scammed out of your tokens.",
            "hi": "You get scammed out of your tokens.",
            "te": "You get scammed out of your tokens."
          },
          "pedagogicalFeedback": {
            "en": "You get scammed out of your tokens.",
            "hi": "You get scammed out of your tokens.",
            "te": "You get scammed out of your tokens."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_003_step_3",
      "title": {
        "en": "The Market Recovers",
        "hi": "The Market Recovers",
        "te": "The Market Recovers"
      },
      "situationContext": {
        "en": "Three months later, the simulation rebounds and your portfolio grows to \u20b92,200. Choose your next step.",
        "hi": "Three months later, the simulation rebounds and your portfolio grows to \u20b92,200. Choose your next step.",
        "te": "Three months later, the simulation rebounds and your portfolio grows to \u20b92,200. Choose your next step."
      },
      "choices": [
        {
          "id": "INV_003_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Continue your regular monthly savings plan without trying to time the market.",
            "hi": "Continue your regular monthly savings plan without trying to time the market.",
            "te": "Continue your regular monthly savings plan without trying to time the market."
          },
          "outcomeDescription": {
            "en": "Your steady habit builds reliable long-term growth.",
            "hi": "Your steady habit builds reliable long-term growth.",
            "te": "Your steady habit builds reliable long-term growth."
          },
          "pedagogicalFeedback": {
            "en": "Your steady habit builds reliable long-term growth.",
            "hi": "Your steady habit builds reliable long-term growth.",
            "te": "Your steady habit builds reliable long-term growth."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_003_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Move a small portion of your gains into your secure bank deposit.",
            "hi": "Move a small portion of your gains into your secure bank deposit.",
            "te": "Move a small portion of your gains into your secure bank deposit."
          },
          "outcomeDescription": {
            "en": "You lock in some gains while keeping your investments active.",
            "hi": "You lock in some gains while keeping your investments active.",
            "te": "You lock in some gains while keeping your investments active."
          },
          "pedagogicalFeedback": {
            "en": "You lock in some gains while keeping your investments active.",
            "hi": "You lock in some gains while keeping your investments active.",
            "te": "You lock in some gains while keeping your investments active."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_003_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Sell everything immediately to throw a big party.",
            "hi": "Sell everything immediately to throw a big party.",
            "te": "Sell everything immediately to throw a big party."
          },
          "outcomeDescription": {
            "en": "You cash out early and miss out on future compounding growth.",
            "hi": "You cash out early and miss out on future compounding growth.",
            "te": "You cash out early and miss out on future compounding growth."
          },
          "pedagogicalFeedback": {
            "en": "You cash out early and miss out on future compounding growth.",
            "hi": "You cash out early and miss out on future compounding growth.",
            "te": "You cash out early and miss out on future compounding growth."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_003_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Borrow large sums of money to gamble on speculative penny stocks.",
            "hi": "Borrow large sums of money to gamble on speculative penny stocks.",
            "te": "Borrow large sums of money to gamble on speculative penny stocks."
          },
          "outcomeDescription": {
            "en": "You take reckless risks that wipe out your hard-earned gains.",
            "hi": "You take reckless risks that wipe out your hard-earned gains.",
            "te": "You take reckless risks that wipe out your hard-earned gains."
          },
          "pedagogicalFeedback": {
            "en": "You take reckless risks that wipe out your hard-earned gains.",
            "hi": "You take reckless risks that wipe out your hard-earned gains.",
            "te": "You take reckless risks that wipe out your hard-earned gains."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Mango Tree Story (Safe vs Risky Growth)",
      "hi": "The Mango Tree Story (Safe vs Risky Growth)",
      "te": "The Mango Tree Story (Safe vs Risky Growth)"
    },
    "points": [
      {
        "en": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "hi": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "te": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail."
      },
      {
        "en": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "hi": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "te": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few."
      },
      {
        "en": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "hi": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "te": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!"
      }
    ]
  }
},
  'INV_004': {
  "id": "INV_004",
  "cityId": "city_inv_004",
  "pillar": "invest",
  "title": {
    "en": "The Rising Price Monster (Inflation)",
    "hi": "The Rising Price Monster (Inflation)",
    "te": "The Rising Price Monster (Inflation)"
  },
  "subtitle": {
    "en": "Town Grocery Market.",
    "hi": "Town Grocery Market.",
    "te": "Town Grocery Market."
  },
  "situationContext": {
    "en": "Uncle Karim shows you an old bill: 5 years ago, a rice bag was \u20b9500. Today, the same bag is \u20b9700! Money sitting in an almirah buys less food each year.",
    "hi": "Uncle Karim shows you an old bill: 5 years ago, a rice bag was \u20b9500. Today, the same bag is \u20b9700! Money sitting in an almirah buys less food each year.",
    "te": "Uncle Karim shows you an old bill: 5 years ago, a rice bag was \u20b9500. Today, the same bag is \u20b9700! Money sitting in an almirah buys less food each year."
  },
  "stipendContext": "Uncle Karim, the shop owner.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "INV_004_step_1",
      "title": {
        "en": "Protecting Your Future College Fund",
        "hi": "Protecting Your Future College Fund",
        "te": "Protecting Your Future College Fund"
      },
      "situationContext": {
        "en": "Protect \u20b93,000 meant for your college admission in 3 years.",
        "hi": "Protect \u20b93,000 meant for your college admission in 3 years.",
        "te": "Protect \u20b93,000 meant for your college admission in 3 years."
      },
      "choices": [
        {
          "id": "INV_004_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Keep it in a government-backed student savings scheme or bank deposit that pays bonus interest.",
            "hi": "Keep it in a government-backed student savings scheme or bank deposit that pays bonus interest.",
            "te": "Keep it in a government-backed student savings scheme or bank deposit that pays bonus interest."
          },
          "outcomeDescription": {
            "en": "The interest helps your money keep up with rising shop prices.",
            "hi": "The interest helps your money keep up with rising shop prices.",
            "te": "The interest helps your money keep up with rising shop prices."
          },
          "pedagogicalFeedback": {
            "en": "The interest helps your money keep up with rising shop prices.",
            "hi": "The interest helps your money keep up with rising shop prices.",
            "te": "The interest helps your money keep up with rising shop prices."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_004_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Put it in a Post Office savings deposit.",
            "hi": "Put it in a Post Office savings deposit.",
            "te": "Put it in a Post Office savings deposit."
          },
          "outcomeDescription": {
            "en": "Safe and dependable, keeping most of its purchasing power.",
            "hi": "Safe and dependable, keeping most of its purchasing power.",
            "te": "Safe and dependable, keeping most of its purchasing power."
          },
          "pedagogicalFeedback": {
            "en": "Safe and dependable, keeping most of its purchasing power.",
            "hi": "Safe and dependable, keeping most of its purchasing power.",
            "te": "Safe and dependable, keeping most of its purchasing power."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_004_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Keep \u20b93,000 in paper notes inside a jacket pocket for 3 years.",
            "hi": "Keep \u20b93,000 in paper notes inside a jacket pocket for 3 years.",
            "te": "Keep \u20b93,000 in paper notes inside a jacket pocket for 3 years."
          },
          "outcomeDescription": {
            "en": "The cash stays \u20b93,000, but textbook and fee prices double, so you can afford less.",
            "hi": "The cash stays \u20b93,000, but textbook and fee prices double, so you can afford less.",
            "te": "The cash stays \u20b93,000, but textbook and fee prices double, so you can afford less."
          },
          "pedagogicalFeedback": {
            "en": "The cash stays \u20b93,000, but textbook and fee prices double, so you can afford less.",
            "hi": "The cash stays \u20b93,000, but textbook and fee prices double, so you can afford less.",
            "te": "The cash stays \u20b93,000, but textbook and fee prices double, so you can afford less."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_004_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Hand the money to a fraudster promising \"100% profit in 30 days\".",
            "hi": "Hand the money to a fraudster promising \"100% profit in 30 days\".",
            "te": "Hand the money to a fraudster promising \"100% profit in 30 days\"."
          },
          "outcomeDescription": {
            "en": "You lose the money entirely.",
            "hi": "You lose the money entirely.",
            "te": "You lose the money entirely."
          },
          "pedagogicalFeedback": {
            "en": "You lose the money entirely.",
            "hi": "You lose the money entirely.",
            "te": "You lose the money entirely."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_004_step_2",
      "title": {
        "en": "Year 2 Inflation Check",
        "hi": "Year 2 Inflation Check",
        "te": "Year 2 Inflation Check"
      },
      "situationContext": {
        "en": "At Year 2, shop prices rise 6% and your bank deposit grows 7.2%. Choose how to manage the account.",
        "hi": "At Year 2, shop prices rise 6% and your bank deposit grows 7.2%. Choose how to manage the account.",
        "te": "At Year 2, shop prices rise 6% and your bank deposit grows 7.2%. Choose how to manage the account."
      },
      "choices": [
        {
          "id": "INV_004_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Leave the funds untouched to let compounding interest continue beating price rises.",
            "hi": "Leave the funds untouched to let compounding interest continue beating price rises.",
            "te": "Leave the funds untouched to let compounding interest continue beating price rises."
          },
          "outcomeDescription": {
            "en": "Your money grows faster than inflation, preserving its purchasing power.",
            "hi": "Your money grows faster than inflation, preserving its purchasing power.",
            "te": "Your money grows faster than inflation, preserving its purchasing power."
          },
          "pedagogicalFeedback": {
            "en": "Your money grows faster than inflation, preserving its purchasing power.",
            "hi": "Your money grows faster than inflation, preserving its purchasing power.",
            "te": "Your money grows faster than inflation, preserving its purchasing power."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_004_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Deposit spare change into the account to grow the balance further.",
            "hi": "Deposit spare change into the account to grow the balance further.",
            "te": "Deposit spare change into the account to grow the balance further."
          },
          "outcomeDescription": {
            "en": "You build your college fund and outpace rising costs.",
            "hi": "You build your college fund and outpace rising costs.",
            "te": "You build your college fund and outpace rising costs."
          },
          "pedagogicalFeedback": {
            "en": "You build your college fund and outpace rising costs.",
            "hi": "You build your college fund and outpace rising costs.",
            "te": "You build your college fund and outpace rising costs."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_004_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Withdraw the interest every month to spend on street food.",
            "hi": "Withdraw the interest every month to spend on street food.",
            "te": "Withdraw the interest every month to spend on street food."
          },
          "outcomeDescription": {
            "en": "You break the compounding chain and your money barely keeps up with inflation.",
            "hi": "You break the compounding chain and your money barely keeps up with inflation.",
            "te": "You break the compounding chain and your money barely keeps up with inflation."
          },
          "pedagogicalFeedback": {
            "en": "You break the compounding chain and your money barely keeps up with inflation.",
            "hi": "You break the compounding chain and your money barely keeps up with inflation.",
            "te": "You break the compounding chain and your money barely keeps up with inflation."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_004_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Break the fixed deposit early to buy temporary fashion accessories.",
            "hi": "Break the fixed deposit early to buy temporary fashion accessories.",
            "te": "Break the fixed deposit early to buy temporary fashion accessories."
          },
          "outcomeDescription": {
            "en": "You pay early withdrawal penalties and erode your college savings.",
            "hi": "You pay early withdrawal penalties and erode your college savings.",
            "te": "You pay early withdrawal penalties and erode your college savings."
          },
          "pedagogicalFeedback": {
            "en": "You pay early withdrawal penalties and erode your college savings.",
            "hi": "You pay early withdrawal penalties and erode your college savings.",
            "te": "You pay early withdrawal penalties and erode your college savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_004_step_3",
      "title": {
        "en": "Admission Day (Year 3)",
        "hi": "Admission Day (Year 3)",
        "te": "Admission Day (Year 3)"
      },
      "situationContext": {
        "en": "College admission requires \u20b93,400. Your deposit has grown to \u20b93,520.",
        "hi": "College admission requires \u20b93,400. Your deposit has grown to \u20b93,520.",
        "te": "College admission requires \u20b93,400. Your deposit has grown to \u20b93,520."
      },
      "choices": [
        {
          "id": "INV_004_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Pay the \u20b93,400 fee directly via formal bank transfer, and move the \u20b9120 surplus to your emergency box.",
            "hi": "Pay the \u20b93,400 fee directly via formal bank transfer, and move the \u20b9120 surplus to your emergency box.",
            "te": "Pay the \u20b93,400 fee directly via formal bank transfer, and move the \u20b9120 surplus to your emergency box."
          },
          "outcomeDescription": {
            "en": "Your admission is secured and you add a modest bonus to your safety fund.",
            "hi": "Your admission is secured and you add a modest bonus to your safety fund.",
            "te": "Your admission is secured and you add a modest bonus to your safety fund."
          },
          "pedagogicalFeedback": {
            "en": "Your admission is secured and you add a modest bonus to your safety fund.",
            "hi": "Your admission is secured and you add a modest bonus to your safety fund.",
            "te": "Your admission is secured and you add a modest bonus to your safety fund."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_004_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Pay the fee on time and keep the extra \u20b9120 in your savings account.",
            "hi": "Pay the fee on time and keep the extra \u20b9120 in your savings account.",
            "te": "Pay the fee on time and keep the extra \u20b9120 in your savings account."
          },
          "outcomeDescription": {
            "en": "You clear your college fees smoothly.",
            "hi": "You clear your college fees smoothly.",
            "te": "You clear your college fees smoothly."
          },
          "pedagogicalFeedback": {
            "en": "You clear your college fees smoothly.",
            "hi": "You clear your college fees smoothly.",
            "te": "You clear your college fees smoothly."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_004_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Delay paying admission fees to spend the money on an expensive party.",
            "hi": "Delay paying admission fees to spend the money on an expensive party.",
            "te": "Delay paying admission fees to spend the money on an expensive party."
          },
          "outcomeDescription": {
            "en": "You miss the admission deadline and lose your college seat.",
            "hi": "You miss the admission deadline and lose your college seat.",
            "te": "You miss the admission deadline and lose your college seat."
          },
          "pedagogicalFeedback": {
            "en": "You miss the admission deadline and lose your college seat.",
            "hi": "You miss the admission deadline and lose your college seat.",
            "te": "You miss the admission deadline and lose your college seat."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_004_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Hand the cash to an unverified broker promising \"discount admissions.\"",
            "hi": "Hand the cash to an unverified broker promising \"discount admissions.\"",
            "te": "Hand the cash to an unverified broker promising \"discount admissions.\""
          },
          "outcomeDescription": {
            "en": "The broker runs off with your money and you lose your college seat.",
            "hi": "The broker runs off with your money and you lose your college seat.",
            "te": "The broker runs off with your money and you lose your college seat."
          },
          "pedagogicalFeedback": {
            "en": "The broker runs off with your money and you lose your college seat.",
            "hi": "The broker runs off with your money and you lose your college seat.",
            "te": "The broker runs off with your money and you lose your college seat."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Mango Tree Story (Safe vs Risky Growth)",
      "hi": "The Mango Tree Story (Safe vs Risky Growth)",
      "te": "The Mango Tree Story (Safe vs Risky Growth)"
    },
    "points": [
      {
        "en": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "hi": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "te": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail."
      },
      {
        "en": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "hi": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "te": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few."
      },
      {
        "en": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "hi": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "te": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!"
      }
    ]
  }
},
  'INV_005': {
  "id": "INV_005",
  "cityId": "city_inv_005",
  "pillar": "invest",
  "title": {
    "en": "Matching the Goal to the Clock",
    "hi": "Matching the Goal to the Clock",
    "te": "Matching the Goal to the Clock"
  },
  "subtitle": {
    "en": "Career Guidance Office.",
    "hi": "Career Guidance Office.",
    "te": "Career Guidance Office."
  },
  "situationContext": {
    "en": "You have 3 different goals: Buy exam stationery in 2 months, pay for a college field trip in 1 year, and build a higher education fund in 5 years.",
    "hi": "You have 3 different goals: Buy exam stationery in 2 months, pay for a college field trip in 1 year, and build a higher education fund in 5 years.",
    "te": "You have 3 different goals: Buy exam stationery in 2 months, pay for a college field trip in 1 year, and build a higher education fund in 5 years."
  },
  "stipendContext": "Counselor Deepa.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "INV_005_step_1",
      "title": {
        "en": "Choosing the Right Homes for Your Goals",
        "hi": "Choosing the Right Homes for Your Goals",
        "te": "Choosing the Right Homes for Your Goals"
      },
      "situationContext": {
        "en": "Match each goal to the right place to put the money.",
        "hi": "Match each goal to the right place to put the money.",
        "te": "Match each goal to the right place to put the money."
      },
      "choices": [
        {
          "id": "INV_005_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Goal 1 (2 months) -> Bank savings account; Goal 2 (1 year) -> Short fixed deposit; Goal 3 (5 years) -> Long-term growth scheme.",
            "hi": "Goal 1 (2 months) -> Bank savings account; Goal 2 (1 year) -> Short fixed deposit; Goal 3 (5 years) -> Long-term growth scheme.",
            "te": "Goal 1 (2 months) -> Bank savings account; Goal 2 (1 year) -> Short fixed deposit; Goal 3 (5 years) -> Long-term growth scheme."
          },
          "outcomeDescription": {
            "en": "All goals are funded safely without panic.",
            "hi": "All goals are funded safely without panic.",
            "te": "All goals are funded safely without panic."
          },
          "pedagogicalFeedback": {
            "en": "All goals are funded safely without panic.",
            "hi": "All goals are funded safely without panic.",
            "te": "All goals are funded safely without panic."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_005_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Keep all three in a bank savings account.",
            "hi": "Keep all three in a bank savings account.",
            "te": "Keep all three in a bank savings account."
          },
          "outcomeDescription": {
            "en": "Completely safe, but long-term money grows slower.",
            "hi": "Completely safe, but long-term money grows slower.",
            "te": "Completely safe, but long-term money grows slower."
          },
          "pedagogicalFeedback": {
            "en": "Completely safe, but long-term money grows slower.",
            "hi": "Completely safe, but long-term money grows slower.",
            "te": "Completely safe, but long-term money grows slower."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_005_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Put Goal 1 (stationery money) into a volatile 5-year investment.",
            "hi": "Put Goal 1 (stationery money) into a volatile 5-year investment.",
            "te": "Put Goal 1 (stationery money) into a volatile 5-year investment."
          },
          "outcomeDescription": {
            "en": "When exam day arrives, your money is locked or down in value.",
            "hi": "When exam day arrives, your money is locked or down in value.",
            "te": "When exam day arrives, your money is locked or down in value."
          },
          "pedagogicalFeedback": {
            "en": "When exam day arrives, your money is locked or down in value.",
            "hi": "When exam day arrives, your money is locked or down in value.",
            "te": "When exam day arrives, your money is locked or down in value."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_005_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Put all your money into an unverified digital crypto token.",
            "hi": "Put all your money into an unverified digital crypto token.",
            "te": "Put all your money into an unverified digital crypto token."
          },
          "outcomeDescription": {
            "en": "The coin crashes overnight, ruining all three goals.",
            "hi": "The coin crashes overnight, ruining all three goals.",
            "te": "The coin crashes overnight, ruining all three goals."
          },
          "pedagogicalFeedback": {
            "en": "The coin crashes overnight, ruining all three goals.",
            "hi": "The coin crashes overnight, ruining all three goals.",
            "te": "The coin crashes overnight, ruining all three goals."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_005_step_2",
      "title": {
        "en": "Managing Mid-Term Urges",
        "hi": "Managing Mid-Term Urges",
        "te": "Managing Mid-Term Urges"
      },
      "situationContext": {
        "en": "At Month 6, friends invite you on an unplanned weekend getaway and suggest tapping your 5-year education fund.",
        "hi": "At Month 6, friends invite you on an unplanned weekend getaway and suggest tapping your 5-year education fund.",
        "te": "At Month 6, friends invite you on an unplanned weekend getaway and suggest tapping your 5-year education fund."
      },
      "choices": [
        {
          "id": "INV_005_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Protect the 5-year fund; spend only what you have saved in this week's fun envelope.",
            "hi": "Protect the 5-year fund; spend only what you have saved in this week's fun envelope.",
            "te": "Protect the 5-year fund; spend only what you have saved in this week's fun envelope."
          },
          "outcomeDescription": {
            "en": "You keep your long-term goals on track while spending responsibly.",
            "hi": "You keep your long-term goals on track while spending responsibly.",
            "te": "You keep your long-term goals on track while spending responsibly."
          },
          "pedagogicalFeedback": {
            "en": "You keep your long-term goals on track while spending responsibly.",
            "hi": "You keep your long-term goals on track while spending responsibly.",
            "te": "You keep your long-term goals on track while spending responsibly."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_005_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Propose a free campus picnic instead of the expensive trip.",
            "hi": "Propose a free campus picnic instead of the expensive trip.",
            "te": "Propose a free campus picnic instead of the expensive trip."
          },
          "outcomeDescription": {
            "en": "You have fun with friends without touching your education fund.",
            "hi": "You have fun with friends without touching your education fund.",
            "te": "You have fun with friends without touching your education fund."
          },
          "pedagogicalFeedback": {
            "en": "You have fun with friends without touching your education fund.",
            "hi": "You have fun with friends without touching your education fund.",
            "te": "You have fun with friends without touching your education fund."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_005_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Dip into your 1-year study trip fund to pay for the weekend trip.",
            "hi": "Dip into your 1-year study trip fund to pay for the weekend trip.",
            "te": "Dip into your 1-year study trip fund to pay for the weekend trip."
          },
          "outcomeDescription": {
            "en": "You compromise your upcoming academic field trip.",
            "hi": "You compromise your upcoming academic field trip.",
            "te": "You compromise your upcoming academic field trip."
          },
          "pedagogicalFeedback": {
            "en": "You compromise your upcoming academic field trip.",
            "hi": "You compromise your upcoming academic field trip.",
            "te": "You compromise your upcoming academic field trip."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_005_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Liquidate your entire 5-year education fund for a weekend outing.",
            "hi": "Liquidate your entire 5-year education fund for a weekend outing.",
            "te": "Liquidate your entire 5-year education fund for a weekend outing."
          },
          "outcomeDescription": {
            "en": "You destroy years of disciplined college savings for a temporary trip.",
            "hi": "You destroy years of disciplined college savings for a temporary trip.",
            "te": "You destroy years of disciplined college savings for a temporary trip."
          },
          "pedagogicalFeedback": {
            "en": "You destroy years of disciplined college savings for a temporary trip.",
            "hi": "You destroy years of disciplined college savings for a temporary trip.",
            "te": "You destroy years of disciplined college savings for a temporary trip."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "INV_005_step_3",
      "title": {
        "en": "Annual Review",
        "hi": "Annual Review",
        "te": "Annual Review"
      },
      "situationContext": {
        "en": "At Year 1, your study trip fund is ready and your 5-year fund is growing steadily.",
        "hi": "At Year 1, your study trip fund is ready and your 5-year fund is growing steadily.",
        "te": "At Year 1, your study trip fund is ready and your 5-year fund is growing steadily."
      },
      "choices": [
        {
          "id": "INV_005_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Withdraw the study trip money for its intended purpose; leave your 5-year fund untouched.",
            "hi": "Withdraw the study trip money for its intended purpose; leave your 5-year fund untouched.",
            "te": "Withdraw the study trip money for its intended purpose; leave your 5-year fund untouched."
          },
          "outcomeDescription": {
            "en": "You enjoy your study trip with zero debt and keep your college plan on track.",
            "hi": "You enjoy your study trip with zero debt and keep your college plan on track.",
            "te": "You enjoy your study trip with zero debt and keep your college plan on track."
          },
          "pedagogicalFeedback": {
            "en": "You enjoy your study trip with zero debt and keep your college plan on track.",
            "hi": "You enjoy your study trip with zero debt and keep your college plan on track.",
            "te": "You enjoy your study trip with zero debt and keep your college plan on track."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_005_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Go on the study trip and add any leftover pocket money to your 5-year fund.",
            "hi": "Go on the study trip and add any leftover pocket money to your 5-year fund.",
            "te": "Go on the study trip and add any leftover pocket money to your 5-year fund."
          },
          "outcomeDescription": {
            "en": "You complete your trip and boost your long-term savings.",
            "hi": "You complete your trip and boost your long-term savings.",
            "te": "You complete your trip and boost your long-term savings."
          },
          "pedagogicalFeedback": {
            "en": "You complete your trip and boost your long-term savings.",
            "hi": "You complete your trip and boost your long-term savings.",
            "te": "You complete your trip and boost your long-term savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_005_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Skip the educational trip and spend the money on gaming gadgets.",
            "hi": "Skip the educational trip and spend the money on gaming gadgets.",
            "te": "Skip the educational trip and spend the money on gaming gadgets."
          },
          "outcomeDescription": {
            "en": "You miss an important academic milestone for short-term entertainment.",
            "hi": "You miss an important academic milestone for short-term entertainment.",
            "te": "You miss an important academic milestone for short-term entertainment."
          },
          "pedagogicalFeedback": {
            "en": "You miss an important academic milestone for short-term entertainment.",
            "hi": "You miss an important academic milestone for short-term entertainment.",
            "te": "You miss an important academic milestone for short-term entertainment."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "INV_005_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Transfer your 5-year fund to a friend's private trading account.",
            "hi": "Transfer your 5-year fund to a friend's private trading account.",
            "te": "Transfer your 5-year fund to a friend's private trading account."
          },
          "outcomeDescription": {
            "en": "Your friend makes bad trades and loses your college savings.",
            "hi": "Your friend makes bad trades and loses your college savings.",
            "te": "Your friend makes bad trades and loses your college savings."
          },
          "pedagogicalFeedback": {
            "en": "Your friend makes bad trades and loses your college savings.",
            "hi": "Your friend makes bad trades and loses your college savings.",
            "te": "Your friend makes bad trades and loses your college savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Mango Tree Story (Safe vs Risky Growth)",
      "hi": "The Mango Tree Story (Safe vs Risky Growth)",
      "te": "The Mango Tree Story (Safe vs Risky Growth)"
    },
    "points": [
      {
        "en": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "hi": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail.",
        "te": "Safe Savings (Fixed Growth): Like a sturdy lemon tree. It gives a few lemons every week without fail."
      },
      {
        "en": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "hi": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few.",
        "te": "Growing Investment (Variable Growth): Like a mango tree. In good years it gives lots of sweet fruit, but in bad weather it may give very few."
      },
      {
        "en": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "hi": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!",
        "te": "Golden Rule: Only invest money that you will NOT need for daily life for at least 3 years. Keep your emergency cash completely safe!"
      }
    ]
  }
},
  'FS_001': {
  "id": "FS_001",
  "cityId": "city_fs_001",
  "pillar": "safety",
  "title": {
    "en": "The Fake Scholarship SMS",
    "hi": "The Fake Scholarship SMS",
    "te": "The Fake Scholarship SMS"
  },
  "subtitle": {
    "en": "The hostel hallway.",
    "hi": "The hostel hallway.",
    "te": "The hostel hallway."
  },
  "situationContext": {
    "en": "You get an SMS: \"CONGRATULATIONS! Your \u20b910,000 scholarship is approved! Enter your UPI PIN at bit.ly/claim-cash within 10 minutes or your money will be cancelled!\"",
    "hi": "You get an SMS: \"CONGRATULATIONS! Your \u20b910,000 scholarship is approved! Enter your UPI PIN at bit.ly/claim-cash within 10 minutes or your money will be cancelled!\"",
    "te": "You get an SMS: \"CONGRATULATIONS! Your \u20b910,000 scholarship is approved! Enter your UPI PIN at bit.ly/claim-cash within 10 minutes or your money will be cancelled!\""
  },
  "stipendContext": "An alert on your mobile phone screen.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "FS_001_step_1",
      "title": {
        "en": "Inspecting the Message",
        "hi": "Inspecting the Message",
        "te": "Inspecting the Message"
      },
      "situationContext": {
        "en": "Inspect the message and pick your action.",
        "hi": "Inspect the message and pick your action.",
        "te": "Inspect the message and pick your action."
      },
      "choices": [
        {
          "id": "FS_001_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Spot the fake link and the request for a UPI PIN. Delete the SMS and report it as a scam.",
            "hi": "Spot the fake link and the request for a UPI PIN. Delete the SMS and report it as a scam.",
            "te": "Spot the fake link and the request for a UPI PIN. Delete the SMS and report it as a scam."
          },
          "outcomeDescription": {
            "en": "You protect your bank account and help others stay alert.",
            "hi": "You protect your bank account and help others stay alert.",
            "te": "You protect your bank account and help others stay alert."
          },
          "pedagogicalFeedback": {
            "en": "You protect your bank account and help others stay alert.",
            "hi": "You protect your bank account and help others stay alert.",
            "te": "You protect your bank account and help others stay alert."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_001_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Do not click the link; show the message to your teacher first.",
            "hi": "Do not click the link; show the message to your teacher first.",
            "te": "Do not click the link; show the message to your teacher first."
          },
          "outcomeDescription": {
            "en": "Your teacher confirms it is fake, and your money stays safe.",
            "hi": "Your teacher confirms it is fake, and your money stays safe.",
            "te": "Your teacher confirms it is fake, and your money stays safe."
          },
          "pedagogicalFeedback": {
            "en": "Your teacher confirms it is fake, and your money stays safe.",
            "hi": "Your teacher confirms it is fake, and your money stays safe.",
            "te": "Your teacher confirms it is fake, and your money stays safe."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_001_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Click the link just to check the website, but do not enter your PIN.",
            "hi": "Click the link just to check the website, but do not enter your PIN.",
            "te": "Click the link just to check the website, but do not enter your PIN."
          },
          "outcomeDescription": {
            "en": "The fake website tries to download tracking files to your phone.",
            "hi": "The fake website tries to download tracking files to your phone.",
            "te": "The fake website tries to download tracking files to your phone."
          },
          "pedagogicalFeedback": {
            "en": "The fake website tries to download tracking files to your phone.",
            "hi": "The fake website tries to download tracking files to your phone.",
            "te": "The fake website tries to download tracking files to your phone."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_001_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Click the link and type your 6-digit UPI PIN to \"receive\" the money.",
            "hi": "Click the link and type your 6-digit UPI PIN to \"receive\" the money.",
            "te": "Click the link and type your 6-digit UPI PIN to \"receive\" the money."
          },
          "outcomeDescription": {
            "en": "Your account is drained of \u20b92,500 immediately!",
            "hi": "Your account is drained of \u20b92,500 immediately!",
            "te": "Your account is drained of \u20b92,500 immediately!"
          },
          "pedagogicalFeedback": {
            "en": "Your account is drained of \u20b92,500 immediately!",
            "hi": "Your account is drained of \u20b92,500 immediately!",
            "te": "Your account is drained of \u20b92,500 immediately!"
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_001_step_2",
      "title": {
        "en": "Reporting the Scam",
        "hi": "Reporting the Scam",
        "te": "Reporting the Scam"
      },
      "situationContext": {
        "en": "You avoided clicking the link. Choose how to handle the message.",
        "hi": "You avoided clicking the link. Choose how to handle the message.",
        "te": "You avoided clicking the link. Choose how to handle the message."
      },
      "choices": [
        {
          "id": "FS_001_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Take a screenshot and report the scam to the national cyber helpline (1930) or your school warden.",
            "hi": "Take a screenshot and report the scam to the national cyber helpline (1930) or your school warden.",
            "te": "Take a screenshot and report the scam to the national cyber helpline (1930) or your school warden."
          },
          "outcomeDescription": {
            "en": "Authorities log the fraudulent domain and protect other students.",
            "hi": "Authorities log the fraudulent domain and protect other students.",
            "te": "Authorities log the fraudulent domain and protect other students."
          },
          "pedagogicalFeedback": {
            "en": "Authorities log the fraudulent domain and protect other students.",
            "hi": "Authorities log the fraudulent domain and protect other students.",
            "te": "Authorities log the fraudulent domain and protect other students."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_001_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Block the phone number and delete the text message.",
            "hi": "Block the phone number and delete the text message.",
            "te": "Block the phone number and delete the text message."
          },
          "outcomeDescription": {
            "en": "You stop the scammer from messaging you again.",
            "hi": "You stop the scammer from messaging you again.",
            "te": "You stop the scammer from messaging you again."
          },
          "pedagogicalFeedback": {
            "en": "You stop the scammer from messaging you again.",
            "hi": "You stop the scammer from messaging you again.",
            "te": "You stop the scammer from messaging you again."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_001_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Forward the message to your class group chat asking if it works.",
            "hi": "Forward the message to your class group chat asking if it works.",
            "te": "Forward the message to your class group chat asking if it works."
          },
          "outcomeDescription": {
            "en": "Other students click the link and risk getting scammed.",
            "hi": "Other students click the link and risk getting scammed.",
            "te": "Other students click the link and risk getting scammed."
          },
          "pedagogicalFeedback": {
            "en": "Other students click the link and risk getting scammed.",
            "hi": "Other students click the link and risk getting scammed.",
            "te": "Other students click the link and risk getting scammed."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_001_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Call the number back and insult the scammer over the phone.",
            "hi": "Call the number back and insult the scammer over the phone.",
            "te": "Call the number back and insult the scammer over the phone."
          },
          "outcomeDescription": {
            "en": "The scammer marks your number as active and targets you with spam calls.",
            "hi": "The scammer marks your number as active and targets you with spam calls.",
            "te": "The scammer marks your number as active and targets you with spam calls."
          },
          "pedagogicalFeedback": {
            "en": "The scammer marks your number as active and targets you with spam calls.",
            "hi": "The scammer marks your number as active and targets you with spam calls.",
            "te": "The scammer marks your number as active and targets you with spam calls."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_001_step_3",
      "title": {
        "en": "Protecting Your Payment App",
        "hi": "Protecting Your Payment App",
        "te": "Protecting Your Payment App"
      },
      "situationContext": {
        "en": "Strengthen your payment security settings after the phishing attempt.",
        "hi": "Strengthen your payment security settings after the phishing attempt.",
        "te": "Strengthen your payment security settings after the phishing attempt."
      },
      "choices": [
        {
          "id": "FS_001_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Enable fingerprint/face unlock and turn off automatic screen notifications for incoming OTPs.",
            "hi": "Enable fingerprint/face unlock and turn off automatic screen notifications for incoming OTPs.",
            "te": "Enable fingerprint/face unlock and turn off automatic screen notifications for incoming OTPs."
          },
          "outcomeDescription": {
            "en": "Your payment apps stay locked even if your phone is borrowed.",
            "hi": "Your payment apps stay locked even if your phone is borrowed.",
            "te": "Your payment apps stay locked even if your phone is borrowed."
          },
          "pedagogicalFeedback": {
            "en": "Your payment apps stay locked even if your phone is borrowed.",
            "hi": "Your payment apps stay locked even if your phone is borrowed.",
            "te": "Your payment apps stay locked even if your phone is borrowed."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_001_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Change your UPI PIN to a fresh, non-obvious 6-digit combination.",
            "hi": "Change your UPI PIN to a fresh, non-obvious 6-digit combination.",
            "te": "Change your UPI PIN to a fresh, non-obvious 6-digit combination."
          },
          "outcomeDescription": {
            "en": "Your account credentials stay strong and secure.",
            "hi": "Your account credentials stay strong and secure.",
            "te": "Your account credentials stay strong and secure."
          },
          "pedagogicalFeedback": {
            "en": "Your account credentials stay strong and secure.",
            "hi": "Your account credentials stay strong and secure.",
            "te": "Your account credentials stay strong and secure."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_001_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Set your UPI PIN to your birth year so it is easy to remember.",
            "hi": "Set your UPI PIN to your birth year so it is easy to remember.",
            "te": "Set your UPI PIN to your birth year so it is easy to remember."
          },
          "outcomeDescription": {
            "en": "Scammers can easily guess your PIN using basic personal details.",
            "hi": "Scammers can easily guess your PIN using basic personal details.",
            "te": "Scammers can easily guess your PIN using basic personal details."
          },
          "pedagogicalFeedback": {
            "en": "Scammers can easily guess your PIN using basic personal details.",
            "hi": "Scammers can easily guess your PIN using basic personal details.",
            "te": "Scammers can easily guess your PIN using basic personal details."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_001_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Share your new PIN with your roommate for safe keeping.",
            "hi": "Share your new PIN with your roommate for safe keeping.",
            "te": "Share your new PIN with your roommate for safe keeping."
          },
          "outcomeDescription": {
            "en": "You compromise the security of your bank account.",
            "hi": "You compromise the security of your bank account.",
            "te": "You compromise the security of your bank account."
          },
          "pedagogicalFeedback": {
            "en": "You compromise the security of your bank account.",
            "hi": "You compromise the security of your bank account.",
            "te": "You compromise the security of your bank account."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Golden Rules of Security",
      "hi": "The Golden Rules of Security",
      "te": "The Golden Rules of Security"
    },
    "points": [
      {
        "en": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "hi": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "te": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money."
      },
      {
        "en": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "hi": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "te": "Banks and teachers will NEVER ask you for your password or card PIN."
      },
      {
        "en": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "hi": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "te": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap."
      }
    ]
  }
},
  'FS_002': {
  "id": "FS_002",
  "cityId": "city_fs_002",
  "pillar": "safety",
  "title": {
    "en": "The ATM Helper Trap",
    "hi": "The ATM Helper Trap",
    "te": "The ATM Helper Trap"
  },
  "subtitle": {
    "en": "The ATM booth outside the school gate.",
    "hi": "The ATM booth outside the school gate.",
    "te": "The ATM booth outside the school gate."
  },
  "situationContext": {
    "en": "You insert your student debit card to withdraw \u20b9500. A smiling stranger taps your shoulder: \"The machine is slow today, let me type your PIN for you, I know how to fix it.\"",
    "hi": "You insert your student debit card to withdraw \u20b9500. A smiling stranger taps your shoulder: \"The machine is slow today, let me type your PIN for you, I know how to fix it.\"",
    "te": "You insert your student debit card to withdraw \u20b9500. A smiling stranger taps your shoulder: \"The machine is slow today, let me type your PIN for you, I know how to fix it.\""
  },
  "stipendContext": "A stranger standing behind you.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "FS_002_step_1",
      "title": {
        "en": "Handling the Pushy Stranger",
        "hi": "Handling the Pushy Stranger",
        "te": "Handling the Pushy Stranger"
      },
      "situationContext": {
        "en": "Protect yourself at the ATM.",
        "hi": "Protect yourself at the ATM.",
        "te": "Protect yourself at the ATM."
      },
      "choices": [
        {
          "id": "FS_002_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Firmly say \"No thank you,\" shield the keypad with your hand while typing your PIN, and check that the card slot looks normal.",
            "hi": "Firmly say \"No thank you,\" shield the keypad with your hand while typing your PIN, and check that the card slot looks normal.",
            "te": "Firmly say \"No thank you,\" shield the keypad with your hand while typing your PIN, and check that the card slot looks normal."
          },
          "outcomeDescription": {
            "en": "You withdraw your \u20b9500 safely.",
            "hi": "You withdraw your \u20b9500 safely.",
            "te": "You withdraw your \u20b9500 safely."
          },
          "pedagogicalFeedback": {
            "en": "You withdraw your \u20b9500 safely.",
            "hi": "You withdraw your \u20b9500 safely.",
            "te": "You withdraw your \u20b9500 safely."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_002_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Cancel the transaction, take your card back, and walk to a different ATM.",
            "hi": "Cancel the transaction, take your card back, and walk to a different ATM.",
            "te": "Cancel the transaction, take your card back, and walk to a different ATM."
          },
          "outcomeDescription": {
            "en": "Safe and cautious; no harm done.",
            "hi": "Safe and cautious; no harm done.",
            "te": "Safe and cautious; no harm done."
          },
          "pedagogicalFeedback": {
            "en": "Safe and cautious; no harm done.",
            "hi": "Safe and cautious; no harm done.",
            "te": "Safe and cautious; no harm done."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_002_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Type your PIN out in the open while the stranger watches over your shoulder.",
            "hi": "Type your PIN out in the open while the stranger watches over your shoulder.",
            "te": "Type your PIN out in the open while the stranger watches over your shoulder."
          },
          "outcomeDescription": {
            "en": "The stranger memorizes your digits.",
            "hi": "The stranger memorizes your digits.",
            "te": "The stranger memorizes your digits."
          },
          "pedagogicalFeedback": {
            "en": "The stranger memorizes your digits.",
            "hi": "The stranger memorizes your digits.",
            "te": "The stranger memorizes your digits."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_002_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Hand your card and PIN to the stranger to help you press the buttons.",
            "hi": "Hand your card and PIN to the stranger to help you press the buttons.",
            "te": "Hand your card and PIN to the stranger to help you press the buttons."
          },
          "outcomeDescription": {
            "en": "The stranger swaps your card for a fake one and steals your money.",
            "hi": "The stranger swaps your card for a fake one and steals your money.",
            "te": "The stranger swaps your card for a fake one and steals your money."
          },
          "pedagogicalFeedback": {
            "en": "The stranger swaps your card for a fake one and steals your money.",
            "hi": "The stranger swaps your card for a fake one and steals your money.",
            "te": "The stranger swaps your card for a fake one and steals your money."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_002_step_2",
      "title": {
        "en": "Inspecting the ATM Machine",
        "hi": "Inspecting the ATM Machine",
        "te": "Inspecting the ATM Machine"
      },
      "situationContext": {
        "en": "Before inserting your card, you notice the green card reader looks loose and bulky.",
        "hi": "Before inserting your card, you notice the green card reader looks loose and bulky.",
        "te": "Before inserting your card, you notice the green card reader looks loose and bulky."
      },
      "choices": [
        {
          "id": "FS_002_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Do not insert your card; pull gently on the reader to check for skimmers, then alert the bank security guard.",
            "hi": "Do not insert your card; pull gently on the reader to check for skimmers, then alert the bank security guard.",
            "te": "Do not insert your card; pull gently on the reader to check for skimmers, then alert the bank security guard."
          },
          "outcomeDescription": {
            "en": "You spot an illegal skimming device and prevent card theft for the whole campus.",
            "hi": "You spot an illegal skimming device and prevent card theft for the whole campus.",
            "te": "You spot an illegal skimming device and prevent card theft for the whole campus."
          },
          "pedagogicalFeedback": {
            "en": "You spot an illegal skimming device and prevent card theft for the whole campus.",
            "hi": "You spot an illegal skimming device and prevent card theft for the whole campus.",
            "te": "You spot an illegal skimming device and prevent card theft for the whole campus."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_002_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Cancel your transaction and use a verified ATM inside the bank branch.",
            "hi": "Cancel your transaction and use a verified ATM inside the bank branch.",
            "te": "Cancel your transaction and use a verified ATM inside the bank branch."
          },
          "outcomeDescription": {
            "en": "You avoid the compromised machine safely.",
            "hi": "You avoid the compromised machine safely.",
            "te": "You avoid the compromised machine safely."
          },
          "pedagogicalFeedback": {
            "en": "You avoid the compromised machine safely.",
            "hi": "You avoid the compromised machine safely.",
            "te": "You avoid the compromised machine safely."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_002_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Push your card into the loose slot anyway because you need quick cash.",
            "hi": "Push your card into the loose slot anyway because you need quick cash.",
            "te": "Push your card into the loose slot anyway because you need quick cash."
          },
          "outcomeDescription": {
            "en": "The skimming device copies your card details.",
            "hi": "The skimming device copies your card details.",
            "te": "The skimming device copies your card details."
          },
          "pedagogicalFeedback": {
            "en": "The skimming device copies your card details.",
            "hi": "The skimming device copies your card details.",
            "te": "The skimming device copies your card details."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_002_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Use a knife to try and pry off the card slot yourself.",
            "hi": "Use a knife to try and pry off the card slot yourself.",
            "te": "Use a knife to try and pry off the card slot yourself."
          },
          "outcomeDescription": {
            "en": "You damage bank property and trigger the alarm.",
            "hi": "You damage bank property and trigger the alarm.",
            "te": "You damage bank property and trigger the alarm."
          },
          "pedagogicalFeedback": {
            "en": "You damage bank property and trigger the alarm.",
            "hi": "You damage bank property and trigger the alarm.",
            "te": "You damage bank property and trigger the alarm."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_002_step_3",
      "title": {
        "en": "Handling Your Cash and Receipt",
        "hi": "Handling Your Cash and Receipt",
        "te": "Handling Your Cash and Receipt"
      },
      "situationContext": {
        "en": "The machine dispenses your cash note and prints an account balance receipt.",
        "hi": "The machine dispenses your cash note and prints an account balance receipt.",
        "te": "The machine dispenses your cash note and prints an account balance receipt."
      },
      "choices": [
        {
          "id": "FS_002_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Put your cash securely in your wallet before stepping outside, and take your receipt with you.",
            "hi": "Put your cash securely in your wallet before stepping outside, and take your receipt with you.",
            "te": "Put your cash securely in your wallet before stepping outside, and take your receipt with you."
          },
          "outcomeDescription": {
            "en": "You keep your money safe from pickpockets and protect your account details.",
            "hi": "You keep your money safe from pickpockets and protect your account details.",
            "te": "You keep your money safe from pickpockets and protect your account details."
          },
          "pedagogicalFeedback": {
            "en": "You keep your money safe from pickpockets and protect your account details.",
            "hi": "You keep your money safe from pickpockets and protect your account details.",
            "te": "You keep your money safe from pickpockets and protect your account details."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_002_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Put your cash away and shred the receipt before throwing it in the bin.",
            "hi": "Put your cash away and shred the receipt before throwing it in the bin.",
            "te": "Put your cash away and shred the receipt before throwing it in the bin."
          },
          "outcomeDescription": {
            "en": "Your account balance details stay private.",
            "hi": "Your account balance details stay private.",
            "te": "Your account balance details stay private."
          },
          "pedagogicalFeedback": {
            "en": "Your account balance details stay private.",
            "hi": "Your account balance details stay private.",
            "te": "Your account balance details stay private."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_002_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Walk out of the booth counting your cash notes openly on the street.",
            "hi": "Walk out of the booth counting your cash notes openly on the street.",
            "te": "Walk out of the booth counting your cash notes openly on the street."
          },
          "outcomeDescription": {
            "en": "You draw unwanted attention from thieves outside the booth.",
            "hi": "You draw unwanted attention from thieves outside the booth.",
            "te": "You draw unwanted attention from thieves outside the booth."
          },
          "pedagogicalFeedback": {
            "en": "You draw unwanted attention from thieves outside the booth.",
            "hi": "You draw unwanted attention from thieves outside the booth.",
            "te": "You draw unwanted attention from thieves outside the booth."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_002_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Drop the receipt showing your account number and balance on the booth floor.",
            "hi": "Drop the receipt showing your account number and balance on the booth floor.",
            "te": "Drop the receipt showing your account number and balance on the booth floor."
          },
          "outcomeDescription": {
            "en": "Strangers can view your account balance and personal details.",
            "hi": "Strangers can view your account balance and personal details.",
            "te": "Strangers can view your account balance and personal details."
          },
          "pedagogicalFeedback": {
            "en": "Strangers can view your account balance and personal details.",
            "hi": "Strangers can view your account balance and personal details.",
            "te": "Strangers can view your account balance and personal details."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Golden Rules of Security",
      "hi": "The Golden Rules of Security",
      "te": "The Golden Rules of Security"
    },
    "points": [
      {
        "en": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "hi": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "te": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money."
      },
      {
        "en": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "hi": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "te": "Banks and teachers will NEVER ask you for your password or card PIN."
      },
      {
        "en": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "hi": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "te": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap."
      }
    ]
  }
},
  'FS_003': {
  "id": "FS_003",
  "cityId": "city_fs_003",
  "pillar": "safety",
  "title": {
    "en": "The \"Double Your Pocket Money\" Scheme",
    "hi": "The \"Double Your Pocket Money\" Scheme",
    "te": "The \"Double Your Pocket Money\" Scheme"
  },
  "subtitle": {
    "en": "College cafeteria.",
    "hi": "College cafeteria.",
    "te": "College cafeteria."
  },
  "situationContext": {
    "en": "Rohan tells you: \"Give me \u20b9500 today. Bring 3 friends to join and pay \u20b9500 each, and you will get \u20b91,500 every weekend without doing any work!\"",
    "hi": "Rohan tells you: \"Give me \u20b9500 today. Bring 3 friends to join and pay \u20b9500 each, and you will get \u20b91,500 every weekend without doing any work!\"",
    "te": "Rohan tells you: \"Give me \u20b9500 today. Bring 3 friends to join and pay \u20b9500 each, and you will get \u20b91,500 every weekend without doing any work!\""
  },
  "stipendContext": "Rohan, a smooth-talking acquaintance.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "FS_003_step_1",
      "title": {
        "en": "Evaluating the Offer",
        "hi": "Evaluating the Offer",
        "te": "Evaluating the Offer"
      },
      "situationContext": {
        "en": "Decide what this offer really is.",
        "hi": "Decide what this offer really is.",
        "te": "Decide what this offer really is."
      },
      "choices": [
        {
          "id": "FS_003_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Recognize that this is a chain trap (Pyramid Scam) with no real product; say \"No\" and warn your friends.",
            "hi": "Recognize that this is a chain trap (Pyramid Scam) with no real product; say \"No\" and warn your friends.",
            "te": "Recognize that this is a chain trap (Pyramid Scam) with no real product; say \"No\" and warn your friends."
          },
          "outcomeDescription": {
            "en": "You protect your money and your friendships.",
            "hi": "You protect your money and your friendships.",
            "te": "You protect your money and your friendships."
          },
          "pedagogicalFeedback": {
            "en": "You protect your money and your friendships.",
            "hi": "You protect your money and your friendships.",
            "te": "You protect your money and your friendships."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_003_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Tell him you don't have money to spare and walk away.",
            "hi": "Tell him you don't have money to spare and walk away.",
            "te": "Tell him you don't have money to spare and walk away."
          },
          "outcomeDescription": {
            "en": "Your money stays safe, though your friends might still fall for it.",
            "hi": "Your money stays safe, though your friends might still fall for it.",
            "te": "Your money stays safe, though your friends might still fall for it."
          },
          "pedagogicalFeedback": {
            "en": "Your money stays safe, though your friends might still fall for it.",
            "hi": "Your money stays safe, though your friends might still fall for it.",
            "te": "Your money stays safe, though your friends might still fall for it."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_003_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Give \u20b9200 just to \"try it out\".",
            "hi": "Give \u20b9200 just to \"try it out\".",
            "te": "Give \u20b9200 just to \"try it out\"."
          },
          "outcomeDescription": {
            "en": "You lose \u20b9200 and never see it again.",
            "hi": "You lose \u20b9200 and never see it again.",
            "te": "You lose \u20b9200 and never see it again."
          },
          "pedagogicalFeedback": {
            "en": "You lose \u20b9200 and never see it again.",
            "hi": "You lose \u20b9200 and never see it again.",
            "te": "You lose \u20b9200 and never see it again."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_003_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Pay \u20b9500 and convince your younger siblings to pay too.",
            "hi": "Pay \u20b9500 and convince your younger siblings to pay too.",
            "te": "Pay \u20b9500 and convince your younger siblings to pay too."
          },
          "outcomeDescription": {
            "en": "The scheme collapses; everyone loses their money and blames you.",
            "hi": "The scheme collapses; everyone loses their money and blames you.",
            "te": "The scheme collapses; everyone loses their money and blames you."
          },
          "pedagogicalFeedback": {
            "en": "The scheme collapses; everyone loses their money and blames you.",
            "hi": "The scheme collapses; everyone loses their money and blames you.",
            "te": "The scheme collapses; everyone loses their money and blames you."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_003_step_2",
      "title": {
        "en": "Handling the Aggressive Pitch",
        "hi": "Handling the Aggressive Pitch",
        "te": "Handling the Aggressive Pitch"
      },
      "situationContext": {
        "en": "Rohan pressures you: \"You don't understand business! Real entrepreneurs take risks!\"",
        "hi": "Rohan pressures you: \"You don't understand business! Real entrepreneurs take risks!\"",
        "te": "Rohan pressures you: \"You don't understand business! Real entrepreneurs take risks!\""
      },
      "choices": [
        {
          "id": "FS_003_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Answer calmly: \"Real businesses sell real products. If money only comes from recruiting members, it's an illegal scam.\"",
            "hi": "Answer calmly: \"Real businesses sell real products. If money only comes from recruiting members, it's an illegal scam.\"",
            "te": "Answer calmly: \"Real businesses sell real products. If money only comes from recruiting members, it's an illegal scam.\""
          },
          "outcomeDescription": {
            "en": "You stand your ground using clear logic and end the conversation.",
            "hi": "You stand your ground using clear logic and end the conversation.",
            "te": "You stand your ground using clear logic and end the conversation."
          },
          "pedagogicalFeedback": {
            "en": "You stand your ground using clear logic and end the conversation.",
            "hi": "You stand your ground using clear logic and end the conversation.",
            "te": "You stand your ground using clear logic and end the conversation."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_003_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Walk away from the table and report the recruitment activity to the campus counselor.",
            "hi": "Walk away from the table and report the recruitment activity to the campus counselor.",
            "te": "Walk away from the table and report the recruitment activity to the campus counselor."
          },
          "outcomeDescription": {
            "en": "The administration investigates the scheme and protects students.",
            "hi": "The administration investigates the scheme and protects students.",
            "te": "The administration investigates the scheme and protects students."
          },
          "pedagogicalFeedback": {
            "en": "The administration investigates the scheme and protects students.",
            "hi": "The administration investigates the scheme and protects students.",
            "te": "The administration investigates the scheme and protects students."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_003_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Stay at the table and listen to his 30-minute sales pitch.",
            "hi": "Stay at the table and listen to his 30-minute sales pitch.",
            "te": "Stay at the table and listen to his 30-minute sales pitch."
          },
          "outcomeDescription": {
            "en": "You waste study time and leave yourself open to peer pressure.",
            "hi": "You waste study time and leave yourself open to peer pressure.",
            "te": "You waste study time and leave yourself open to peer pressure."
          },
          "pedagogicalFeedback": {
            "en": "You waste study time and leave yourself open to peer pressure.",
            "hi": "You waste study time and leave yourself open to peer pressure.",
            "te": "You waste study time and leave yourself open to peer pressure."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_003_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Apologize to Rohan and promise to find money by tomorrow.",
            "hi": "Apologize to Rohan and promise to find money by tomorrow.",
            "te": "Apologize to Rohan and promise to find money by tomorrow."
          },
          "outcomeDescription": {
            "en": "You let yourself be bullied into a financial scam.",
            "hi": "You let yourself be bullied into a financial scam.",
            "te": "You let yourself be bullied into a financial scam."
          },
          "pedagogicalFeedback": {
            "en": "You let yourself be bullied into a financial scam.",
            "hi": "You let yourself be bullied into a financial scam.",
            "te": "You let yourself be bullied into a financial scam."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_003_step_3",
      "title": {
        "en": "Protecting Your Roommates",
        "hi": "Protecting Your Roommates",
        "te": "Protecting Your Roommates"
      },
      "situationContext": {
        "en": "You return to your hostel room and see Rohan pitching the same scheme to your roommates.",
        "hi": "You return to your hostel room and see Rohan pitching the same scheme to your roommates.",
        "te": "You return to your hostel room and see Rohan pitching the same scheme to your roommates."
      },
      "choices": [
        {
          "id": "FS_003_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Pull your roommates aside and explain how pyramid schemes collapse once recruitment stops.",
            "hi": "Pull your roommates aside and explain how pyramid schemes collapse once recruitment stops.",
            "te": "Pull your roommates aside and explain how pyramid schemes collapse once recruitment stops."
          },
          "outcomeDescription": {
            "en": "Your roommates keep their money safe and thank you for the warning.",
            "hi": "Your roommates keep their money safe and thank you for the warning.",
            "te": "Your roommates keep their money safe and thank you for the warning."
          },
          "pedagogicalFeedback": {
            "en": "Your roommates keep their money safe and thank you for the warning.",
            "hi": "Your roommates keep their money safe and thank you for the warning.",
            "te": "Your roommates keep their money safe and thank you for the warning."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_003_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Advise your roommates to check with a business teacher before paying any money.",
            "hi": "Advise your roommates to check with a business teacher before paying any money.",
            "te": "Advise your roommates to check with a business teacher before paying any money."
          },
          "outcomeDescription": {
            "en": "The teacher warns them against the scheme.",
            "hi": "The teacher warns them against the scheme.",
            "te": "The teacher warns them against the scheme."
          },
          "pedagogicalFeedback": {
            "en": "The teacher warns them against the scheme.",
            "hi": "The teacher warns them against the scheme.",
            "te": "The teacher warns them against the scheme."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_003_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Stay silent and think: \"It's their money, they can make their own mistakes.\"",
            "hi": "Stay silent and think: \"It's their money, they can make their own mistakes.\"",
            "te": "Stay silent and think: \"It's their money, they can make their own mistakes.\""
          },
          "outcomeDescription": {
            "en": "Your roommates lose their savings and the room atmosphere turns sour.",
            "hi": "Your roommates lose their savings and the room atmosphere turns sour.",
            "te": "Your roommates lose their savings and the room atmosphere turns sour."
          },
          "pedagogicalFeedback": {
            "en": "Your roommates lose their savings and the room atmosphere turns sour.",
            "hi": "Your roommates lose their savings and the room atmosphere turns sour.",
            "te": "Your roommates lose their savings and the room atmosphere turns sour."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_003_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Back up Rohan's pitch so you can earn a small finder's fee.",
            "hi": "Back up Rohan's pitch so you can earn a small finder's fee.",
            "te": "Back up Rohan's pitch so you can earn a small finder's fee."
          },
          "outcomeDescription": {
            "en": "You help scam your friends and lose their trust permanently.",
            "hi": "You help scam your friends and lose their trust permanently.",
            "te": "You help scam your friends and lose their trust permanently."
          },
          "pedagogicalFeedback": {
            "en": "You help scam your friends and lose their trust permanently.",
            "hi": "You help scam your friends and lose their trust permanently.",
            "te": "You help scam your friends and lose their trust permanently."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Golden Rules of Security",
      "hi": "The Golden Rules of Security",
      "te": "The Golden Rules of Security"
    },
    "points": [
      {
        "en": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "hi": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "te": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money."
      },
      {
        "en": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "hi": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "te": "Banks and teachers will NEVER ask you for your password or card PIN."
      },
      {
        "en": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "hi": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "te": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap."
      }
    ]
  }
},
  'FS_004': {
  "id": "FS_004",
  "cityId": "city_fs_004",
  "pillar": "safety",
  "title": {
    "en": "The Part-Time Job Registration Fee Scam",
    "hi": "The Part-Time Job Registration Fee Scam",
    "te": "The Part-Time Job Registration Fee Scam"
  },
  "subtitle": {
    "en": "School library computer.",
    "hi": "School library computer.",
    "te": "School library computer."
  },
  "situationContext": {
    "en": "You receive an email offering an online typing job paying \u20b915,000/month. The email says: \"Send your government ID copy and pay a \u20b9399 registration fee to receive your work laptop.\"",
    "hi": "You receive an email offering an online typing job paying \u20b915,000/month. The email says: \"Send your government ID copy and pay a \u20b9399 registration fee to receive your work laptop.\"",
    "te": "You receive an email offering an online typing job paying \u20b915,000/month. The email says: \"Send your government ID copy and pay a \u20b9399 registration fee to receive your work laptop.\""
  },
  "stipendContext": "An email from \"Global Data Entry Jobs\".",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "FS_004_step_1",
      "title": {
        "en": "Reviewing the Job Offer",
        "hi": "Reviewing the Job Offer",
        "te": "Reviewing the Job Offer"
      },
      "situationContext": {
        "en": "Review the job offer.",
        "hi": "Review the job offer.",
        "te": "Review the job offer."
      },
      "choices": [
        {
          "id": "FS_004_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Real employers never charge an upfront fee to hire you; mark the email as spam and delete it.",
            "hi": "Real employers never charge an upfront fee to hire you; mark the email as spam and delete it.",
            "te": "Real employers never charge an upfront fee to hire you; mark the email as spam and delete it."
          },
          "outcomeDescription": {
            "en": "You protect your identity details and keep your money.",
            "hi": "You protect your identity details and keep your money.",
            "te": "You protect your identity details and keep your money."
          },
          "pedagogicalFeedback": {
            "en": "You protect your identity details and keep your money.",
            "hi": "You protect your identity details and keep your money.",
            "te": "You protect your identity details and keep your money."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_004_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Show the email to your school placement teacher before doing anything.",
            "hi": "Show the email to your school placement teacher before doing anything.",
            "te": "Show the email to your school placement teacher before doing anything."
          },
          "outcomeDescription": {
            "en": "The teacher confirms it is fake and warns the school.",
            "hi": "The teacher confirms it is fake and warns the school.",
            "te": "The teacher confirms it is fake and warns the school."
          },
          "pedagogicalFeedback": {
            "en": "The teacher confirms it is fake and warns the school.",
            "hi": "The teacher confirms it is fake and warns the school.",
            "te": "The teacher confirms it is fake and warns the school."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_004_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Send your government ID copy but refuse to pay the \u20b9399 fee.",
            "hi": "Send your government ID copy but refuse to pay the \u20b9399 fee.",
            "te": "Send your government ID copy but refuse to pay the \u20b9399 fee."
          },
          "outcomeDescription": {
            "en": "You saved your money, but strangers now have a copy of your identity card.",
            "hi": "You saved your money, but strangers now have a copy of your identity card.",
            "te": "You saved your money, but strangers now have a copy of your identity card."
          },
          "pedagogicalFeedback": {
            "en": "You saved your money, but strangers now have a copy of your identity card.",
            "hi": "You saved your money, but strangers now have a copy of your identity card.",
            "te": "You saved your money, but strangers now have a copy of your identity card."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_004_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Pay the \u20b9399 fee and upload your bank details and government ID.",
            "hi": "Pay the \u20b9399 fee and upload your bank details and government ID.",
            "te": "Pay the \u20b9399 fee and upload your bank details and government ID."
          },
          "outcomeDescription": {
            "en": "You lose the \u20b9399 and your identity is used to open fake accounts.",
            "hi": "You lose the \u20b9399 and your identity is used to open fake accounts.",
            "te": "You lose the \u20b9399 and your identity is used to open fake accounts."
          },
          "pedagogicalFeedback": {
            "en": "You lose the \u20b9399 and your identity is used to open fake accounts.",
            "hi": "You lose the \u20b9399 and your identity is used to open fake accounts.",
            "te": "You lose the \u20b9399 and your identity is used to open fake accounts."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_004_step_2",
      "title": {
        "en": "Inspecting the Senders",
        "hi": "Inspecting the Senders",
        "te": "Inspecting the Senders"
      },
      "situationContext": {
        "en": "The sender writes from globaljobs.hr491@gmail.com with a free corporate logo attached.",
        "hi": "The sender writes from globaljobs.hr491@gmail.com with a free corporate logo attached.",
        "te": "The sender writes from globaljobs.hr491@gmail.com with a free corporate logo attached."
      },
      "choices": [
        {
          "id": "FS_004_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Check the official company domain website to confirm they never use free webmail addresses for recruitment.",
            "hi": "Check the official company domain website to confirm they never use free webmail addresses for recruitment.",
            "te": "Check the official company domain website to confirm they never use free webmail addresses for recruitment."
          },
          "outcomeDescription": {
            "en": "You spot a clear phishing attempt and ignore the message.",
            "hi": "You spot a clear phishing attempt and ignore the message.",
            "te": "You spot a clear phishing attempt and ignore the message."
          },
          "pedagogicalFeedback": {
            "en": "You spot a clear phishing attempt and ignore the message.",
            "hi": "You spot a clear phishing attempt and ignore the message.",
            "te": "You spot a clear phishing attempt and ignore the message."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_004_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Search online forums for complaints mentioning the email address.",
            "hi": "Search online forums for complaints mentioning the email address.",
            "te": "Search online forums for complaints mentioning the email address."
          },
          "outcomeDescription": {
            "en": "You find scam warnings from other students.",
            "hi": "You find scam warnings from other students.",
            "te": "You find scam warnings from other students."
          },
          "pedagogicalFeedback": {
            "en": "You find scam warnings from other students.",
            "hi": "You find scam warnings from other students.",
            "te": "You find scam warnings from other students."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_004_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Assume the offer is real because the email includes a corporate logo.",
            "hi": "Assume the offer is real because the email includes a corporate logo.",
            "te": "Assume the offer is real because the email includes a corporate logo."
          },
          "outcomeDescription": {
            "en": "You trust a fake image that anyone can copy from the web.",
            "hi": "You trust a fake image that anyone can copy from the web.",
            "te": "You trust a fake image that anyone can copy from the web."
          },
          "pedagogicalFeedback": {
            "en": "You trust a fake image that anyone can copy from the web.",
            "hi": "You trust a fake image that anyone can copy from the web.",
            "te": "You trust a fake image that anyone can copy from the web."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_004_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Reply to the email with your personal phone number and home address.",
            "hi": "Reply to the email with your personal phone number and home address.",
            "te": "Reply to the email with your personal phone number and home address."
          },
          "outcomeDescription": {
            "en": "Scammers add your contact info to spam marketing lists.",
            "hi": "Scammers add your contact info to spam marketing lists.",
            "te": "Scammers add your contact info to spam marketing lists."
          },
          "pedagogicalFeedback": {
            "en": "Scammers add your contact info to spam marketing lists.",
            "hi": "Scammers add your contact info to spam marketing lists.",
            "te": "Scammers add your contact info to spam marketing lists."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_004_step_3",
      "title": {
        "en": "Finding Genuine Student Work",
        "hi": "Finding Genuine Student Work",
        "te": "Finding Genuine Student Work"
      },
      "situationContext": {
        "en": "You need a legitimate part-time job to earn extra pocket money. Where should you look?",
        "hi": "You need a legitimate part-time job to earn extra pocket money. Where should you look?",
        "te": "You need a legitimate part-time job to earn extra pocket money. Where should you look?"
      },
      "choices": [
        {
          "id": "FS_004_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Check verified campus noticeboards for student tutoring jobs and library assistant posts.",
            "hi": "Check verified campus noticeboards for student tutoring jobs and library assistant posts.",
            "te": "Check verified campus noticeboards for student tutoring jobs and library assistant posts."
          },
          "outcomeDescription": {
            "en": "You find legitimate on-campus work with guaranteed pay.",
            "hi": "You find legitimate on-campus work with guaranteed pay.",
            "te": "You find legitimate on-campus work with guaranteed pay."
          },
          "pedagogicalFeedback": {
            "en": "You find legitimate on-campus work with guaranteed pay.",
            "hi": "You find legitimate on-campus work with guaranteed pay.",
            "te": "You find legitimate on-campus work with guaranteed pay."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_004_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Apply through trusted student internship platforms that vet employers.",
            "hi": "Apply through trusted student internship platforms that vet employers.",
            "te": "Apply through trusted student internship platforms that vet employers."
          },
          "outcomeDescription": {
            "en": "You find verified gigs without upfront fees.",
            "hi": "You find verified gigs without upfront fees.",
            "te": "You find verified gigs without upfront fees."
          },
          "pedagogicalFeedback": {
            "en": "You find verified gigs without upfront fees.",
            "hi": "You find verified gigs without upfront fees.",
            "te": "You find verified gigs without upfront fees."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_004_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Click on unverified work-from-home ads in social media comment sections.",
            "hi": "Click on unverified work-from-home ads in social media comment sections.",
            "te": "Click on unverified work-from-home ads in social media comment sections."
          },
          "outcomeDescription": {
            "en": "You run into more fee-charging job scams.",
            "hi": "You run into more fee-charging job scams.",
            "te": "You run into more fee-charging job scams."
          },
          "pedagogicalFeedback": {
            "en": "You run into more fee-charging job scams.",
            "hi": "You run into more fee-charging job scams.",
            "te": "You run into more fee-charging job scams."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_004_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Pay a local agent \u20b91,000 for guaranteed corporate interview access.",
            "hi": "Pay a local agent \u20b91,000 for guaranteed corporate interview access.",
            "te": "Pay a local agent \u20b91,000 for guaranteed corporate interview access."
          },
          "outcomeDescription": {
            "en": "The agent disappears with your money.",
            "hi": "The agent disappears with your money.",
            "te": "The agent disappears with your money."
          },
          "pedagogicalFeedback": {
            "en": "The agent disappears with your money.",
            "hi": "The agent disappears with your money.",
            "te": "The agent disappears with your money."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Golden Rules of Security",
      "hi": "The Golden Rules of Security",
      "te": "The Golden Rules of Security"
    },
    "points": [
      {
        "en": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "hi": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "te": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money."
      },
      {
        "en": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "hi": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "te": "Banks and teachers will NEVER ask you for your password or card PIN."
      },
      {
        "en": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "hi": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "te": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap."
      }
    ]
  }
},
  'FS_005': {
  "id": "FS_005",
  "cityId": "city_fs_005",
  "pillar": "safety",
  "title": {
    "en": "The \"SIM Card Blocked\" Phone Call",
    "hi": "The \"SIM Card Blocked\" Phone Call",
    "te": "The \"SIM Card Blocked\" Phone Call"
  },
  "subtitle": {
    "en": "Hostel staircase.",
    "hi": "Hostel staircase.",
    "te": "Hostel staircase."
  },
  "situationContext": {
    "en": "The caller speaks in a serious tone: \"This is the Telecom Office. Your phone SIM card will be deactivated in 15 minutes unless you read out the 6-digit code we just sent to your screen!\"",
    "hi": "The caller speaks in a serious tone: \"This is the Telecom Office. Your phone SIM card will be deactivated in 15 minutes unless you read out the 6-digit code we just sent to your screen!\"",
    "te": "The caller speaks in a serious tone: \"This is the Telecom Office. Your phone SIM card will be deactivated in 15 minutes unless you read out the 6-digit code we just sent to your screen!\""
  },
  "stipendContext": "An incoming phone call from an unknown number.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "FS_005_step_1",
      "title": {
        "en": "Responding to the Threat",
        "hi": "Responding to the Threat",
        "te": "Responding to the Threat"
      },
      "situationContext": {
        "en": "Handle the phone call.",
        "hi": "Handle the phone call.",
        "te": "Handle the phone call."
      },
      "choices": [
        {
          "id": "FS_005_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Hang up immediately. Never read out any one-time code (OTP) received on your phone.",
            "hi": "Hang up immediately. Never read out any one-time code (OTP) received on your phone.",
            "te": "Hang up immediately. Never read out any one-time code (OTP) received on your phone."
          },
          "outcomeDescription": {
            "en": "The hacker's attempt fails; your accounts remain safe.",
            "hi": "The hacker's attempt fails; your accounts remain safe.",
            "te": "The hacker's attempt fails; your accounts remain safe."
          },
          "pedagogicalFeedback": {
            "en": "The hacker's attempt fails; your accounts remain safe.",
            "hi": "The hacker's attempt fails; your accounts remain safe.",
            "te": "The hacker's attempt fails; your accounts remain safe."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_005_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Tell them you will visit the official telecom shop in person, then disconnect.",
            "hi": "Tell them you will visit the official telecom shop in person, then disconnect.",
            "te": "Tell them you will visit the official telecom shop in person, then disconnect."
          },
          "outcomeDescription": {
            "en": "You avoid falling for the trap.",
            "hi": "You avoid falling for the trap.",
            "te": "You avoid falling for the trap."
          },
          "pedagogicalFeedback": {
            "en": "You avoid falling for the trap.",
            "hi": "You avoid falling for the trap.",
            "te": "You avoid falling for the trap."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_005_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Panic and argue with the caller, staying on the phone for 20 minutes.",
            "hi": "Panic and argue with the caller, staying on the phone for 20 minutes.",
            "te": "Panic and argue with the caller, staying on the phone for 20 minutes."
          },
          "outcomeDescription": {
            "en": "They try other tricks to scare you into sharing your details.",
            "hi": "They try other tricks to scare you into sharing your details.",
            "te": "They try other tricks to scare you into sharing your details."
          },
          "pedagogicalFeedback": {
            "en": "They try other tricks to scare you into sharing your details.",
            "hi": "They try other tricks to scare you into sharing your details.",
            "te": "They try other tricks to scare you into sharing your details."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_005_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Read out the 6-digit code aloud to the caller.",
            "hi": "Read out the 6-digit code aloud to the caller.",
            "te": "Read out the 6-digit code aloud to the caller."
          },
          "outcomeDescription": {
            "en": "The code was a password reset for your email or payment app; your account is taken over!",
            "hi": "The code was a password reset for your email or payment app; your account is taken over!",
            "te": "The code was a password reset for your email or payment app; your account is taken over!"
          },
          "pedagogicalFeedback": {
            "en": "The code was a password reset for your email or payment app; your account is taken over!",
            "hi": "The code was a password reset for your email or payment app; your account is taken over!",
            "te": "The code was a password reset for your email or payment app; your account is taken over!"
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_005_step_2",
      "title": {
        "en": "Reading the Notification Details",
        "hi": "Reading the Notification Details",
        "te": "Reading the Notification Details"
      },
      "situationContext": {
        "en": "Look at the SMS text message containing the 6-digit code.",
        "hi": "Look at the SMS text message containing the 6-digit code.",
        "te": "Look at the SMS text message containing the 6-digit code."
      },
      "choices": [
        {
          "id": "FS_005_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Notice the warning: \"OTP for Password Reset. Never share with anyone, including bank staff.\"",
            "hi": "Notice the warning: \"OTP for Password Reset. Never share with anyone, including bank staff.\"",
            "te": "Notice the warning: \"OTP for Password Reset. Never share with anyone, including bank staff.\""
          },
          "outcomeDescription": {
            "en": "You confirm this was an account takeover attempt and protect your login.",
            "hi": "You confirm this was an account takeover attempt and protect your login.",
            "te": "You confirm this was an account takeover attempt and protect your login."
          },
          "pedagogicalFeedback": {
            "en": "You confirm this was an account takeover attempt and protect your login.",
            "hi": "You confirm this was an account takeover attempt and protect your login.",
            "te": "You confirm this was an account takeover attempt and protect your login."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_005_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Check your banking and email apps from a secure browser to verify your passwords.",
            "hi": "Check your banking and email apps from a secure browser to verify your passwords.",
            "te": "Check your banking and email apps from a secure browser to verify your passwords."
          },
          "outcomeDescription": {
            "en": "You confirm your accounts remain secure.",
            "hi": "You confirm your accounts remain secure.",
            "te": "You confirm your accounts remain secure."
          },
          "pedagogicalFeedback": {
            "en": "You confirm your accounts remain secure.",
            "hi": "You confirm your accounts remain secure.",
            "te": "You confirm your accounts remain secure."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_005_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Delete the message without reading the security warnings.",
            "hi": "Delete the message without reading the security warnings.",
            "te": "Delete the message without reading the security warnings."
          },
          "outcomeDescription": {
            "en": "You miss key details about which account the attacker targeted.",
            "hi": "You miss key details about which account the attacker targeted.",
            "te": "You miss key details about which account the attacker targeted."
          },
          "pedagogicalFeedback": {
            "en": "You miss key details about which account the attacker targeted.",
            "hi": "You miss key details about which account the attacker targeted.",
            "te": "You miss key details about which account the attacker targeted."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_005_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Forward the text message to the caller's mobile number.",
            "hi": "Forward the text message to the caller's mobile number.",
            "te": "Forward the text message to the caller's mobile number."
          },
          "outcomeDescription": {
            "en": "You hand over the reset code, giving the attacker access to your account.",
            "hi": "You hand over the reset code, giving the attacker access to your account.",
            "te": "You hand over the reset code, giving the attacker access to your account."
          },
          "pedagogicalFeedback": {
            "en": "You hand over the reset code, giving the attacker access to your account.",
            "hi": "You hand over the reset code, giving the attacker access to your account.",
            "te": "You hand over the reset code, giving the attacker access to your account."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "FS_005_step_3",
      "title": {
        "en": "Strengthening Account Defenses",
        "hi": "Strengthening Account Defenses",
        "te": "Strengthening Account Defenses"
      },
      "situationContext": {
        "en": "Secure your accounts after surviving the phone attack.",
        "hi": "Secure your accounts after surviving the phone attack.",
        "te": "Secure your accounts after surviving the phone attack."
      },
      "choices": [
        {
          "id": "FS_005_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Update your email and bank passwords using strong phrases, and turn on app-based two-factor authentication.",
            "hi": "Update your email and bank passwords using strong phrases, and turn on app-based two-factor authentication.",
            "te": "Update your email and bank passwords using strong phrases, and turn on app-based two-factor authentication."
          },
          "outcomeDescription": {
            "en": "Your accounts become much harder to breach, even if attackers know your phone number.",
            "hi": "Your accounts become much harder to breach, even if attackers know your phone number.",
            "te": "Your accounts become much harder to breach, even if attackers know your phone number."
          },
          "pedagogicalFeedback": {
            "en": "Your accounts become much harder to breach, even if attackers know your phone number.",
            "hi": "Your accounts become much harder to breach, even if attackers know your phone number.",
            "te": "Your accounts become much harder to breach, even if attackers know your phone number."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_005_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Call your official telecom carrier's helpline to report the phishing attempt.",
            "hi": "Call your official telecom carrier's helpline to report the phishing attempt.",
            "te": "Call your official telecom carrier's helpline to report the phishing attempt."
          },
          "outcomeDescription": {
            "en": "The network flags the malicious number on their systems.",
            "hi": "The network flags the malicious number on their systems.",
            "te": "The network flags the malicious number on their systems."
          },
          "pedagogicalFeedback": {
            "en": "The network flags the malicious number on their systems.",
            "hi": "The network flags the malicious number on their systems.",
            "te": "The network flags the malicious number on their systems."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_005_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Keep using your old passwords because the scammer didn't succeed.",
            "hi": "Keep using your old passwords because the scammer didn't succeed.",
            "te": "Keep using your old passwords because the scammer didn't succeed."
          },
          "outcomeDescription": {
            "en": "Your accounts remain vulnerable to future breach attempts.",
            "hi": "Your accounts remain vulnerable to future breach attempts.",
            "te": "Your accounts remain vulnerable to future breach attempts."
          },
          "pedagogicalFeedback": {
            "en": "Your accounts remain vulnerable to future breach attempts.",
            "hi": "Your accounts remain vulnerable to future breach attempts.",
            "te": "Your accounts remain vulnerable to future breach attempts."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "FS_005_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Turn off screen locks and PINs so you don't have to deal with alerts.",
            "hi": "Turn off screen locks and PINs so you don't have to deal with alerts.",
            "te": "Turn off screen locks and PINs so you don't have to deal with alerts."
          },
          "outcomeDescription": {
            "en": "Anyone who picks up your phone gets full access to your apps.",
            "hi": "Anyone who picks up your phone gets full access to your apps.",
            "te": "Anyone who picks up your phone gets full access to your apps."
          },
          "pedagogicalFeedback": {
            "en": "Anyone who picks up your phone gets full access to your apps.",
            "hi": "Anyone who picks up your phone gets full access to your apps.",
            "te": "Anyone who picks up your phone gets full access to your apps."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Golden Rules of Security",
      "hi": "The Golden Rules of Security",
      "te": "The Golden Rules of Security"
    },
    "points": [
      {
        "en": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "hi": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money.",
        "te": "An OTP or UPI PIN is ONLY entered to SEND money, NEVER to receive money."
      },
      {
        "en": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "hi": "Banks and teachers will NEVER ask you for your password or card PIN.",
        "te": "Banks and teachers will NEVER ask you for your password or card PIN."
      },
      {
        "en": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "hi": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap.",
        "te": "Any message shouting \"URGENT! ACT IN 5 MINUTES!\" is almost always a trap."
      }
    ]
  }
},
  'MC_001': {
  "id": "MC_001",
  "cityId": "city_mc_001",
  "pillar": "budget",
  "title": {
    "en": "Moving to an Off-Campus Room",
    "hi": "Moving to an Off-Campus Room",
    "te": "Moving to an Off-Campus Room"
  },
  "subtitle": {
    "en": "The Student Housing Office.",
    "hi": "The Student Housing Office.",
    "te": "The Student Housing Office."
  },
  "situationContext": {
    "en": "You are moving into a shared student room. Your monthly stipend is \u20b98,000. Rent and food will cost \u20b95,000 every month. You have \u20b93,000 saved for emergencies. You want to save \u20b9500 every month for your final year project. The broker texts: \"Scan this quick QR code right now to block the room before someone else takes it!\"",
    "hi": "You are moving into a shared student room. Your monthly stipend is \u20b98,000. Rent and food will cost \u20b95,000 every month. You have \u20b93,000 saved for emergencies. You want to save \u20b9500 every month for your final year project. The broker texts: \"Scan this quick QR code right now to block the room before someone else takes it!\"",
    "te": "You are moving into a shared student room. Your monthly stipend is \u20b98,000. Rent and food will cost \u20b95,000 every month. You have \u20b93,000 saved for emergencies. You want to save \u20b9500 every month for your final year project. The broker texts: \"Scan this quick QR code right now to block the room before someone else takes it!\""
  },
  "stipendContext": "House Broker Naresh.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "MC_001_step_1",
      "title": {
        "en": "Handling the Urgent QR Code Link (FS)",
        "hi": "Handling the Urgent QR Code Link (FS)",
        "te": "Handling the Urgent QR Code Link (FS)"
      },
      "situationContext": {
        "en": "The broker demands a \u20b92,000 reservation fee via a text message QR code. Choose your move.",
        "hi": "The broker demands a \u20b92,000 reservation fee via a text message QR code. Choose your move.",
        "te": "The broker demands a \u20b92,000 reservation fee via a text message QR code. Choose your move."
      },
      "choices": [
        {
          "id": "MC_001_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Refuse to scan the hasty QR code; visit the room in person with a friend and pay through a signed receipt.",
            "hi": "Refuse to scan the hasty QR code; visit the room in person with a friend and pay through a signed receipt.",
            "te": "Refuse to scan the hasty QR code; visit the room in person with a friend and pay through a signed receipt."
          },
          "outcomeDescription": {
            "en": "You secure a genuine room, keep your emergency safety net, avoid a scam, and stay on budget.",
            "hi": "You secure a genuine room, keep your emergency safety net, avoid a scam, and stay on budget.",
            "te": "You secure a genuine room, keep your emergency safety net, avoid a scam, and stay on budget."
          },
          "pedagogicalFeedback": {
            "en": "You secure a genuine room, keep your emergency safety net, avoid a scam, and stay on budget.",
            "hi": "You secure a genuine room, keep your emergency safety net, avoid a scam, and stay on budget.",
            "te": "You secure a genuine room, keep your emergency safety net, avoid a scam, and stay on budget."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_001_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Agree to meet the broker at their physical office and pay via official bank transfer.",
            "hi": "Agree to meet the broker at their physical office and pay via official bank transfer.",
            "te": "Agree to meet the broker at their physical office and pay via official bank transfer."
          },
          "outcomeDescription": {
            "en": "You avoid the scam link and verify the broker's identity.",
            "hi": "You avoid the scam link and verify the broker's identity.",
            "te": "You avoid the scam link and verify the broker's identity."
          },
          "pedagogicalFeedback": {
            "en": "You avoid the scam link and verify the broker's identity.",
            "hi": "You avoid the scam link and verify the broker's identity.",
            "te": "You avoid the scam link and verify the broker's identity."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_001_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Scan the QR code to check the merchant name without typing your PIN.",
            "hi": "Scan the QR code to check the merchant name without typing your PIN.",
            "te": "Scan the QR code to check the merchant name without typing your PIN."
          },
          "outcomeDescription": {
            "en": "You open a malicious payment page that risks credential theft.",
            "hi": "You open a malicious payment page that risks credential theft.",
            "te": "You open a malicious payment page that risks credential theft."
          },
          "pedagogicalFeedback": {
            "en": "You open a malicious payment page that risks credential theft.",
            "hi": "You open a malicious payment page that risks credential theft.",
            "te": "You open a malicious payment page that risks credential theft."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_001_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Scan the urgent QR code sent by text message to \"hold the room\".",
            "hi": "Scan the urgent QR code sent by text message to \"hold the room\".",
            "te": "Scan the urgent QR code sent by text message to \"hold the room\"."
          },
          "outcomeDescription": {
            "en": "\u20b93,000 is stolen from your account; the broker turns off their phone and disappears.",
            "hi": "\u20b93,000 is stolen from your account; the broker turns off their phone and disappears.",
            "te": "\u20b93,000 is stolen from your account; the broker turns off their phone and disappears."
          },
          "pedagogicalFeedback": {
            "en": "\u20b93,000 is stolen from your account; the broker turns off their phone and disappears.",
            "hi": "\u20b93,000 is stolen from your account; the broker turns off their phone and disappears.",
            "te": "\u20b93,000 is stolen from your account; the broker turns off their phone and disappears."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_001_step_2",
      "title": {
        "en": "Room Selection & Rent Budgeting (PB)",
        "hi": "Room Selection & Rent Budgeting (PB)",
        "te": "Room Selection & Rent Budgeting (PB)"
      },
      "situationContext": {
        "en": "Choose between two verified student apartments.",
        "hi": "Choose between two verified student apartments.",
        "te": "Choose between two verified student apartments."
      },
      "choices": [
        {
          "id": "MC_001_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Rent Room A for \u20b93,200/month, keeping fixed costs well below 50% of your \u20b98,000 stipend.",
            "hi": "Rent Room A for \u20b93,200/month, keeping fixed costs well below 50% of your \u20b98,000 stipend.",
            "te": "Rent Room A for \u20b93,200/month, keeping fixed costs well below 50% of your \u20b98,000 stipend."
          },
          "outcomeDescription": {
            "en": "You enjoy a clean room while leaving plenty of money for food and savings.",
            "hi": "You enjoy a clean room while leaving plenty of money for food and savings.",
            "te": "You enjoy a clean room while leaving plenty of money for food and savings."
          },
          "pedagogicalFeedback": {
            "en": "You enjoy a clean room while leaving plenty of money for food and savings.",
            "hi": "You enjoy a clean room while leaving plenty of money for food and savings.",
            "te": "You enjoy a clean room while leaving plenty of money for food and savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_001_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Rent Room A and split utility bills equally with a trusted roommate.",
            "hi": "Rent Room A and split utility bills equally with a trusted roommate.",
            "te": "Rent Room A and split utility bills equally with a trusted roommate."
          },
          "outcomeDescription": {
            "en": "You cut your living costs and save extra cash each month.",
            "hi": "You cut your living costs and save extra cash each month.",
            "te": "You cut your living costs and save extra cash each month."
          },
          "pedagogicalFeedback": {
            "en": "You cut your living costs and save extra cash each month.",
            "hi": "You cut your living costs and save extra cash each month.",
            "te": "You cut your living costs and save extra cash each month."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_001_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Choose an apartment that costs \u20b96,800/month.",
            "hi": "Choose an apartment that costs \u20b96,800/month.",
            "te": "Choose an apartment that costs \u20b96,800/month."
          },
          "outcomeDescription": {
            "en": "Your rent is too high, leaving almost zero money for food and emergencies.",
            "hi": "Your rent is too high, leaving almost zero money for food and emergencies.",
            "te": "Your rent is too high, leaving almost zero money for food and emergencies."
          },
          "pedagogicalFeedback": {
            "en": "Your rent is too high, leaving almost zero money for food and emergencies.",
            "hi": "Your rent is too high, leaving almost zero money for food and emergencies.",
            "te": "Your rent is too high, leaving almost zero money for food and emergencies."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_001_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Rent the luxury room and borrow money from peers to buy expensive furniture.",
            "hi": "Rent the luxury room and borrow money from peers to buy expensive furniture.",
            "te": "Rent the luxury room and borrow money from peers to buy expensive furniture."
          },
          "outcomeDescription": {
            "en": "You run out of cash in the first two weeks and pile up debt.",
            "hi": "You run out of cash in the first two weeks and pile up debt.",
            "te": "You run out of cash in the first two weeks and pile up debt."
          },
          "pedagogicalFeedback": {
            "en": "You run out of cash in the first two weeks and pile up debt.",
            "hi": "You run out of cash in the first two weeks and pile up debt.",
            "te": "You run out of cash in the first two weeks and pile up debt."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_001_step_3",
      "title": {
        "en": "Managing the Monthly Surplus (SM & INV)",
        "hi": "Managing the Monthly Surplus (SM & INV)",
        "te": "Managing the Monthly Surplus (SM & INV)"
      },
      "situationContext": {
        "en": "After paying for your room and food, you have \u20b92,000 left from your monthly stipend.",
        "hi": "After paying for your room and food, you have \u20b92,000 left from your monthly stipend.",
        "te": "After paying for your room and food, you have \u20b92,000 left from your monthly stipend."
      },
      "choices": [
        {
          "id": "MC_001_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Keep \u20b91,000 in your emergency fund and invest \u20b91,000 in a 2-year student growth plan.",
            "hi": "Keep \u20b91,000 in your emergency fund and invest \u20b91,000 in a 2-year student growth plan.",
            "te": "Keep \u20b91,000 in your emergency fund and invest \u20b91,000 in a 2-year student growth plan."
          },
          "outcomeDescription": {
            "en": "You grow your emergency safety cushion while letting your savings compound safely.",
            "hi": "You grow your emergency safety cushion while letting your savings compound safely.",
            "te": "You grow your emergency safety cushion while letting your savings compound safely."
          },
          "pedagogicalFeedback": {
            "en": "You grow your emergency safety cushion while letting your savings compound safely.",
            "hi": "You grow your emergency safety cushion while letting your savings compound safely.",
            "te": "You grow your emergency safety cushion while letting your savings compound safely."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_001_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Deposit the entire \u20b92,000 into your student savings bank account.",
            "hi": "Deposit the entire \u20b92,000 into your student savings bank account.",
            "te": "Deposit the entire \u20b92,000 into your student savings bank account."
          },
          "outcomeDescription": {
            "en": "Your funds stay completely safe and easily accessible.",
            "hi": "Your funds stay completely safe and easily accessible.",
            "te": "Your funds stay completely safe and easily accessible."
          },
          "pedagogicalFeedback": {
            "en": "Your funds stay completely safe and easily accessible.",
            "hi": "Your funds stay completely safe and easily accessible.",
            "te": "Your funds stay completely safe and easily accessible."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_001_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Spend the entire \u20b92,000 surplus on weekend room parties.",
            "hi": "Spend the entire \u20b92,000 surplus on weekend room parties.",
            "te": "Spend the entire \u20b92,000 surplus on weekend room parties."
          },
          "outcomeDescription": {
            "en": "You build zero long-term savings and risk shortfalls during surprises.",
            "hi": "You build zero long-term savings and risk shortfalls during surprises.",
            "te": "You build zero long-term savings and risk shortfalls during surprises."
          },
          "pedagogicalFeedback": {
            "en": "You build zero long-term savings and risk shortfalls during surprises.",
            "hi": "You build zero long-term savings and risk shortfalls during surprises.",
            "te": "You build zero long-term savings and risk shortfalls during surprises."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_001_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Put the entire \u20b92,000 into an unregulated online sports betting app.",
            "hi": "Put the entire \u20b92,000 into an unregulated online sports betting app.",
            "te": "Put the entire \u20b92,000 into an unregulated online sports betting app."
          },
          "outcomeDescription": {
            "en": "You lose your surplus to gambling.",
            "hi": "You lose your surplus to gambling.",
            "te": "You lose your surplus to gambling."
          },
          "pedagogicalFeedback": {
            "en": "You lose your surplus to gambling.",
            "hi": "You lose your surplus to gambling.",
            "te": "You lose your surplus to gambling."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Master Challenge",
      "hi": "The Master Challenge",
      "te": "The Master Challenge"
    },
    "points": [
      {
        "en": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "hi": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "te": "Budget: Keep fixed monthly living costs below 60% of future earnings."
      },
      {
        "en": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "hi": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "te": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account."
      },
      {
        "en": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "hi": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "te": "Invest: Grow your future surplus sensibly in balanced, diversified plans."
      },
      {
        "en": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "hi": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "te": "Security: Keep your doors locked against scams and never share secret PINs or OTPs."
      }
    ]
  }
},
  'MC_002': {
  "id": "MC_002",
  "cityId": "city_mc_002",
  "pillar": "budget",
  "title": {
    "en": "The College Tech Project Award",
    "hi": "The College Tech Project Award",
    "te": "The College Tech Project Award"
  },
  "subtitle": {
    "en": "The College Innovation Lab.",
    "hi": "The College Innovation Lab.",
    "te": "The College Innovation Lab."
  },
  "situationContext": {
    "en": "You win a college prize of \u20b910,000 for your science project! You must allocate money across celebration, school needs, and savings, while keeping a portion ready for next semester's lab exam fees. An online message pops up: \"To deposit your \u20b910,000 prize, install this remote-help software on your laptop.\"",
    "hi": "You win a college prize of \u20b910,000 for your science project! You must allocate money across celebration, school needs, and savings, while keeping a portion ready for next semester's lab exam fees. An online message pops up: \"To deposit your \u20b910,000 prize, install this remote-help software on your laptop.\"",
    "te": "You win a college prize of \u20b910,000 for your science project! You must allocate money across celebration, school needs, and savings, while keeping a portion ready for next semester's lab exam fees. An online message pops up: \"To deposit your \u20b910,000 prize, install this remote-help software on your laptop.\""
  },
  "stipendContext": "Professor Sharma.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "MC_002_step_1",
      "title": {
        "en": "Defending Your Device (FS)",
        "hi": "Defending Your Device (FS)",
        "te": "Defending Your Device (FS)"
      },
      "situationContext": {
        "en": "An alert demands remote-help software installation to transfer your prize money.",
        "hi": "An alert demands remote-help software installation to transfer your prize money.",
        "te": "An alert demands remote-help software installation to transfer your prize money."
      },
      "choices": [
        {
          "id": "MC_002_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Reject the remote software link; collect the prize directly from the college office.",
            "hi": "Reject the remote software link; collect the prize directly from the college office.",
            "te": "Reject the remote software link; collect the prize directly from the college office."
          },
          "outcomeDescription": {
            "en": "You celebrate, secure your fees, grow your savings, and protect your computer.",
            "hi": "You celebrate, secure your fees, grow your savings, and protect your computer.",
            "te": "You celebrate, secure your fees, grow your savings, and protect your computer."
          },
          "pedagogicalFeedback": {
            "en": "You celebrate, secure your fees, grow your savings, and protect your computer.",
            "hi": "You celebrate, secure your fees, grow your savings, and protect your computer.",
            "te": "You celebrate, secure your fees, grow your savings, and protect your computer."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_002_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Report the suspicious email link to campus IT administrators.",
            "hi": "Report the suspicious email link to campus IT administrators.",
            "te": "Report the suspicious email link to campus IT administrators."
          },
          "outcomeDescription": {
            "en": "IT blocks the malicious domain across campus systems.",
            "hi": "IT blocks the malicious domain across campus systems.",
            "te": "IT blocks the malicious domain across campus systems."
          },
          "pedagogicalFeedback": {
            "en": "IT blocks the malicious domain across campus systems.",
            "hi": "IT blocks the malicious domain across campus systems.",
            "te": "IT blocks the malicious domain across campus systems."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_002_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Download the software installer to check its size without running it.",
            "hi": "Download the software installer to check its size without running it.",
            "te": "Download the software installer to check its size without running it."
          },
          "outcomeDescription": {
            "en": "You risk accidental execution and malware infection.",
            "hi": "You risk accidental execution and malware infection.",
            "te": "You risk accidental execution and malware infection."
          },
          "pedagogicalFeedback": {
            "en": "You risk accidental execution and malware infection.",
            "hi": "You risk accidental execution and malware infection.",
            "te": "You risk accidental execution and malware infection."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_002_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Install the remote-help software on your computer to \"receive the prize\".",
            "hi": "Install the remote-help software on your computer to \"receive the prize\".",
            "te": "Install the remote-help software on your computer to \"receive the prize\"."
          },
          "outcomeDescription": {
            "en": "Hackers take over your screen and access your saved passwords and accounts.",
            "hi": "Hackers take over your screen and access your saved passwords and accounts.",
            "te": "Hackers take over your screen and access your saved passwords and accounts."
          },
          "pedagogicalFeedback": {
            "en": "Hackers take over your screen and access your saved passwords and accounts.",
            "hi": "Hackers take over your screen and access your saved passwords and accounts.",
            "te": "Hackers take over your screen and access your saved passwords and accounts."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_002_step_2",
      "title": {
        "en": "Splitting the Prize Windfall (PB & SM)",
        "hi": "Splitting the Prize Windfall (PB & SM)",
        "te": "Splitting the Prize Windfall (PB & SM)"
      },
      "situationContext": {
        "en": "The \u20b910,000 prize clears safely into your student bank account. Allocate the funds.",
        "hi": "The \u20b910,000 prize clears safely into your student bank account. Allocate the funds.",
        "te": "The \u20b910,000 prize clears safely into your student bank account. Allocate the funds."
      },
      "choices": [
        {
          "id": "MC_002_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Split the prize: \u20b92,000 for celebration, \u20b94,000 for lab fees safety box, and \u20b94,000 into a 2-year bank deposit.",
            "hi": "Split the prize: \u20b92,000 for celebration, \u20b94,000 for lab fees safety box, and \u20b94,000 into a 2-year bank deposit.",
            "te": "Split the prize: \u20b92,000 for celebration, \u20b94,000 for lab fees safety box, and \u20b94,000 into a 2-year bank deposit."
          },
          "outcomeDescription": {
            "en": "You enjoy your win, secure your academic fees, and grow your savings.",
            "hi": "You enjoy your win, secure your academic fees, and grow your savings.",
            "te": "You enjoy your win, secure your academic fees, and grow your savings."
          },
          "pedagogicalFeedback": {
            "en": "You enjoy your win, secure your academic fees, and grow your savings.",
            "hi": "You enjoy your win, secure your academic fees, and grow your savings.",
            "te": "You enjoy your win, secure your academic fees, and grow your savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_002_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Keep the entire \u20b910,000 in your bank account without investing it.",
            "hi": "Keep the entire \u20b910,000 in your bank account without investing it.",
            "te": "Keep the entire \u20b910,000 in your bank account without investing it."
          },
          "outcomeDescription": {
            "en": "You are safe from scams, but the cash slowly trickles away on small purchases.",
            "hi": "You are safe from scams, but the cash slowly trickles away on small purchases.",
            "te": "You are safe from scams, but the cash slowly trickles away on small purchases."
          },
          "pedagogicalFeedback": {
            "en": "You are safe from scams, but the cash slowly trickles away on small purchases.",
            "hi": "You are safe from scams, but the cash slowly trickles away on small purchases.",
            "te": "You are safe from scams, but the cash slowly trickles away on small purchases."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_002_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Spend the entire \u20b910,000 on a single party for friends in one night.",
            "hi": "Spend the entire \u20b910,000 on a single party for friends in one night.",
            "te": "Spend the entire \u20b910,000 on a single party for friends in one night."
          },
          "outcomeDescription": {
            "en": "The prize is gone immediately, leaving zero savings for upcoming exam fees.",
            "hi": "The prize is gone immediately, leaving zero savings for upcoming exam fees.",
            "te": "The prize is gone immediately, leaving zero savings for upcoming exam fees."
          },
          "pedagogicalFeedback": {
            "en": "The prize is gone immediately, leaving zero savings for upcoming exam fees.",
            "hi": "The prize is gone immediately, leaving zero savings for upcoming exam fees.",
            "te": "The prize is gone immediately, leaving zero savings for upcoming exam fees."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_002_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Hand the entire \u20b910,000 to a stranger promising \"instant double returns.\"",
            "hi": "Hand the entire \u20b910,000 to a stranger promising \"instant double returns.\"",
            "te": "Hand the entire \u20b910,000 to a stranger promising \"instant double returns.\""
          },
          "outcomeDescription": {
            "en": "You lose your prize money completely.",
            "hi": "You lose your prize money completely.",
            "te": "You lose your prize money completely."
          },
          "pedagogicalFeedback": {
            "en": "You lose your prize money completely.",
            "hi": "You lose your prize money completely.",
            "te": "You lose your prize money completely."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_002_step_3",
      "title": {
        "en": "Handling Peer Pressure (PB)",
        "hi": "Handling Peer Pressure (PB)",
        "te": "Handling Peer Pressure (PB)"
      },
      "situationContext": {
        "en": "Classmates expect you to pay for expensive meals because you won the prize.",
        "hi": "Classmates expect you to pay for expensive meals because you won the prize.",
        "te": "Classmates expect you to pay for expensive meals because you won the prize."
      },
      "choices": [
        {
          "id": "MC_002_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Host a fun canteen gathering within your planned \u20b92,000 celebration budget.",
            "hi": "Host a fun canteen gathering within your planned \u20b92,000 celebration budget.",
            "te": "Host a fun canteen gathering within your planned \u20b92,000 celebration budget."
          },
          "outcomeDescription": {
            "en": "You celebrate with friends without exceeding your spending limit.",
            "hi": "You celebrate with friends without exceeding your spending limit.",
            "te": "You celebrate with friends without exceeding your spending limit."
          },
          "pedagogicalFeedback": {
            "en": "You celebrate with friends without exceeding your spending limit.",
            "hi": "You celebrate with friends without exceeding your spending limit.",
            "te": "You celebrate with friends without exceeding your spending limit."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_002_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Treat close project teammates to snacks while keeping your boundaries clear.",
            "hi": "Treat close project teammates to snacks while keeping your boundaries clear.",
            "te": "Treat close project teammates to snacks while keeping your boundaries clear."
          },
          "outcomeDescription": {
            "en": "You thank your collaborators and protect your savings.",
            "hi": "You thank your collaborators and protect your savings.",
            "te": "You thank your collaborators and protect your savings."
          },
          "pedagogicalFeedback": {
            "en": "You thank your collaborators and protect your savings.",
            "hi": "You thank your collaborators and protect your savings.",
            "te": "You thank your collaborators and protect your savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_002_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Dip into your \u20b94,000 exam fee buffer to pay for a luxury dinner.",
            "hi": "Dip into your \u20b94,000 exam fee buffer to pay for a luxury dinner.",
            "te": "Dip into your \u20b94,000 exam fee buffer to pay for a luxury dinner."
          },
          "outcomeDescription": {
            "en": "You please your peers for an evening, but jeopardize your upcoming fees.",
            "hi": "You please your peers for an evening, but jeopardize your upcoming fees.",
            "te": "You please your peers for an evening, but jeopardize your upcoming fees."
          },
          "pedagogicalFeedback": {
            "en": "You please your peers for an evening, but jeopardize your upcoming fees.",
            "hi": "You please your peers for an evening, but jeopardize your upcoming fees.",
            "te": "You please your peers for an evening, but jeopardize your upcoming fees."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_002_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Give cash loans to anyone who asks, with no repayment plan.",
            "hi": "Give cash loans to anyone who asks, with no repayment plan.",
            "te": "Give cash loans to anyone who asks, with no repayment plan."
          },
          "outcomeDescription": {
            "en": "Your prize money disappears on uncollectible loans.",
            "hi": "Your prize money disappears on uncollectible loans.",
            "te": "Your prize money disappears on uncollectible loans."
          },
          "pedagogicalFeedback": {
            "en": "Your prize money disappears on uncollectible loans.",
            "hi": "Your prize money disappears on uncollectible loans.",
            "te": "Your prize money disappears on uncollectible loans."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Master Challenge",
      "hi": "The Master Challenge",
      "te": "The Master Challenge"
    },
    "points": [
      {
        "en": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "hi": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "te": "Budget: Keep fixed monthly living costs below 60% of future earnings."
      },
      {
        "en": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "hi": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "te": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account."
      },
      {
        "en": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "hi": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "te": "Invest: Grow your future surplus sensibly in balanced, diversified plans."
      },
      {
        "en": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "hi": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "te": "Security: Keep your doors locked against scams and never share secret PINs or OTPs."
      }
    ]
  }
},
  'MC_003': {
  "id": "MC_003",
  "cityId": "city_mc_003",
  "pillar": "budget",
  "title": {
    "en": "The Sudden Illness & Medical Bills",
    "hi": "The Sudden Illness & Medical Bills",
    "te": "The Sudden Illness & Medical Bills"
  },
  "subtitle": {
    "en": "The Campus Health Clinic.",
    "hi": "The Campus Health Clinic.",
    "te": "The Campus Health Clinic."
  },
  "situationContext": {
    "en": "You have a sudden viral infection. The tests and medicines cost \u20b92,000. You must cut down this month's discretionary fun budget. You have \u20b92,000 in emergency cash, and \u20b94,000 in a 3-year mutual growth deposit that is currently in a temporary downturn. Outside the clinic, someone hands you a pamphlet: \"Get a \u20b92,000 instant loan in 5 seconds without paperwork\u2014just scan this QR code!\"",
    "hi": "You have a sudden viral infection. The tests and medicines cost \u20b92,000. You must cut down this month's discretionary fun budget. You have \u20b92,000 in emergency cash, and \u20b94,000 in a 3-year mutual growth deposit that is currently in a temporary downturn. Outside the clinic, someone hands you a pamphlet: \"Get a \u20b92,000 instant loan in 5 seconds without paperwork\u2014just scan this QR code!\"",
    "te": "You have a sudden viral infection. The tests and medicines cost \u20b92,000. You must cut down this month's discretionary fun budget. You have \u20b92,000 in emergency cash, and \u20b94,000 in a 3-year mutual growth deposit that is currently in a temporary downturn. Outside the clinic, someone hands you a pamphlet: \"Get a \u20b92,000 instant loan in 5 seconds without paperwork\u2014just scan this QR code!\""
  },
  "stipendContext": "Doctor Anita.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "MC_003_step_1",
      "title": {
        "en": "Rejecting Predatory Credit (FS)",
        "hi": "Rejecting Predatory Credit (FS)",
        "te": "Rejecting Predatory Credit (FS)"
      },
      "situationContext": {
        "en": "Handle the instant loan pamphlet outside the clinic doors.",
        "hi": "Handle the instant loan pamphlet outside the clinic doors.",
        "te": "Handle the instant loan pamphlet outside the clinic doors."
      },
      "choices": [
        {
          "id": "MC_003_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Ignore the predatory loan pamphlet and verify your own savings.",
            "hi": "Ignore the predatory loan pamphlet and verify your own savings.",
            "te": "Ignore the predatory loan pamphlet and verify your own savings."
          },
          "outcomeDescription": {
            "en": "You steer clear of debt traps and protect your finances.",
            "hi": "You steer clear of debt traps and protect your finances.",
            "te": "You steer clear of debt traps and protect your finances."
          },
          "pedagogicalFeedback": {
            "en": "You steer clear of debt traps and protect your finances.",
            "hi": "You steer clear of debt traps and protect your finances.",
            "te": "You steer clear of debt traps and protect your finances."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_003_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Check if the clinic accepts your university student health coverage.",
            "hi": "Check if the clinic accepts your university student health coverage.",
            "te": "Check if the clinic accepts your university student health coverage."
          },
          "outcomeDescription": {
            "en": "You discover part of your prescription is subsidized.",
            "hi": "You discover part of your prescription is subsidized.",
            "te": "You discover part of your prescription is subsidized."
          },
          "pedagogicalFeedback": {
            "en": "You discover part of your prescription is subsidized.",
            "hi": "You discover part of your prescription is subsidized.",
            "te": "You discover part of your prescription is subsidized."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_003_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Download the loan app to review terms without signing up.",
            "hi": "Download the loan app to review terms without signing up.",
            "te": "Download the loan app to review terms without signing up."
          },
          "outcomeDescription": {
            "en": "The app tries to access your contact list and gallery.",
            "hi": "The app tries to access your contact list and gallery.",
            "te": "The app tries to access your contact list and gallery."
          },
          "pedagogicalFeedback": {
            "en": "The app tries to access your contact list and gallery.",
            "hi": "The app tries to access your contact list and gallery.",
            "te": "The app tries to access your contact list and gallery."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_003_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Scan the pamphlet's loan QR code and agree to a 200% interest daily loan.",
            "hi": "Scan the pamphlet's loan QR code and agree to a 200% interest daily loan.",
            "te": "Scan the pamphlet's loan QR code and agree to a 200% interest daily loan."
          },
          "outcomeDescription": {
            "en": "You now owe \u20b96,000 next week, and debt collectors call your family.",
            "hi": "You now owe \u20b96,000 next week, and debt collectors call your family.",
            "te": "You now owe \u20b96,000 next week, and debt collectors call your family."
          },
          "pedagogicalFeedback": {
            "en": "You now owe \u20b96,000 next week, and debt collectors call your family.",
            "hi": "You now owe \u20b96,000 next week, and debt collectors call your family.",
            "te": "You now owe \u20b96,000 next week, and debt collectors call your family."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_003_step_2",
      "title": {
        "en": "Paying the Clinic Bill (SM vs INV)",
        "hi": "Paying the Clinic Bill (SM vs INV)",
        "te": "Paying the Clinic Bill (SM vs INV)"
      },
      "situationContext": {
        "en": "Choose which fund to use to pay the \u20b92,000 medical bill.",
        "hi": "Choose which fund to use to pay the \u20b92,000 medical bill.",
        "te": "Choose which fund to use to pay the \u20b92,000 medical bill."
      },
      "choices": [
        {
          "id": "MC_003_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Use your liquid Emergency Money to pay the \u20b92,000; leave your 3-year investment untouched to recover.",
            "hi": "Use your liquid Emergency Money to pay the \u20b92,000; leave your 3-year investment untouched to recover.",
            "te": "Use your liquid Emergency Money to pay the \u20b92,000; leave your 3-year investment untouched to recover."
          },
          "outcomeDescription": {
            "en": "Your bill is paid, your long-term growth is protected, and you avoid loan traps.",
            "hi": "Your bill is paid, your long-term growth is protected, and you avoid loan traps.",
            "te": "Your bill is paid, your long-term growth is protected, and you avoid loan traps."
          },
          "pedagogicalFeedback": {
            "en": "Your bill is paid, your long-term growth is protected, and you avoid loan traps.",
            "hi": "Your bill is paid, your long-term growth is protected, and you avoid loan traps.",
            "te": "Your bill is paid, your long-term growth is protected, and you avoid loan traps."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_003_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Pay \u20b91,500 from your emergency fund and request a short payment slip for the remaining \u20b9500.",
            "hi": "Pay \u20b91,500 from your emergency fund and request a short payment slip for the remaining \u20b9500.",
            "te": "Pay \u20b91,500 from your emergency fund and request a short payment slip for the remaining \u20b9500."
          },
          "outcomeDescription": {
            "en": "You settle your treatment safely without selling investments.",
            "hi": "You settle your treatment safely without selling investments.",
            "te": "You settle your treatment safely without selling investments."
          },
          "pedagogicalFeedback": {
            "en": "You settle your treatment safely without selling investments.",
            "hi": "You settle your treatment safely without selling investments.",
            "te": "You settle your treatment safely without selling investments."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_003_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Panic and sell your 3-year growth deposit at a loss to pay the bill.",
            "hi": "Panic and sell your 3-year growth deposit at a loss to pay the bill.",
            "te": "Panic and sell your 3-year growth deposit at a loss to pay the bill."
          },
          "outcomeDescription": {
            "en": "You lock in an unnecessary loss because you forgot to use your liquid emergency cash first.",
            "hi": "You lock in an unnecessary loss because you forgot to use your liquid emergency cash first.",
            "te": "You lock in an unnecessary loss because you forgot to use your liquid emergency cash first."
          },
          "pedagogicalFeedback": {
            "en": "You lock in an unnecessary loss because you forgot to use your liquid emergency cash first.",
            "hi": "You lock in an unnecessary loss because you forgot to use your liquid emergency cash first.",
            "te": "You lock in an unnecessary loss because you forgot to use your liquid emergency cash first."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_003_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Walk away without treatment to avoid spending money.",
            "hi": "Walk away without treatment to avoid spending money.",
            "te": "Walk away without treatment to avoid spending money."
          },
          "outcomeDescription": {
            "en": "Your illness worsens, leading to higher medical bills later.",
            "hi": "Your illness worsens, leading to higher medical bills later.",
            "te": "Your illness worsens, leading to higher medical bills later."
          },
          "pedagogicalFeedback": {
            "en": "Your illness worsens, leading to higher medical bills later.",
            "hi": "Your illness worsens, leading to higher medical bills later.",
            "te": "Your illness worsens, leading to higher medical bills later."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_003_step_3",
      "title": {
        "en": "Rebalancing After the Crisis (PB)",
        "hi": "Rebalancing After the Crisis (PB)",
        "te": "Rebalancing After the Crisis (PB)"
      },
      "situationContext": {
        "en": "Your emergency cushion is empty. Adjust your monthly plan to recover.",
        "hi": "Your emergency cushion is empty. Adjust your monthly plan to recover.",
        "te": "Your emergency cushion is empty. Adjust your monthly plan to recover."
      },
      "choices": [
        {
          "id": "MC_003_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Cut discretionary cafe and snack spending for the next two months to rebuild your emergency fund.",
            "hi": "Cut discretionary cafe and snack spending for the next two months to rebuild your emergency fund.",
            "te": "Cut discretionary cafe and snack spending for the next two months to rebuild your emergency fund."
          },
          "outcomeDescription": {
            "en": "Your safety cushion returns to full strength without borrowing.",
            "hi": "Your safety cushion returns to full strength without borrowing.",
            "te": "Your safety cushion returns to full strength without borrowing."
          },
          "pedagogicalFeedback": {
            "en": "Your safety cushion returns to full strength without borrowing.",
            "hi": "Your safety cushion returns to full strength without borrowing.",
            "te": "Your safety cushion returns to full strength without borrowing."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_003_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Rebuild the safety box slowly across three months using small weekly savings.",
            "hi": "Rebuild the safety box slowly across three months using small weekly savings.",
            "te": "Rebuild the safety box slowly across three months using small weekly savings."
          },
          "outcomeDescription": {
            "en": "Your buffer recovers gradually with low daily friction.",
            "hi": "Your buffer recovers gradually with low daily friction.",
            "te": "Your buffer recovers gradually with low daily friction."
          },
          "pedagogicalFeedback": {
            "en": "Your buffer recovers gradually with low daily friction.",
            "hi": "Your buffer recovers gradually with low daily friction.",
            "te": "Your buffer recovers gradually with low daily friction."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_003_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Continue regular fun spending, leaving your safety box at zero.",
            "hi": "Continue regular fun spending, leaving your safety box at zero.",
            "te": "Continue regular fun spending, leaving your safety box at zero."
          },
          "outcomeDescription": {
            "en": "You run out of pocket money early and remain vulnerable to emergencies.",
            "hi": "You run out of pocket money early and remain vulnerable to emergencies.",
            "te": "You run out of pocket money early and remain vulnerable to emergencies."
          },
          "pedagogicalFeedback": {
            "en": "You run out of pocket money early and remain vulnerable to emergencies.",
            "hi": "You run out of pocket money early and remain vulnerable to emergencies.",
            "te": "You run out of pocket money early and remain vulnerable to emergencies."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_003_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Skip hostel meals to restore your savings immediately.",
            "hi": "Skip hostel meals to restore your savings immediately.",
            "te": "Skip hostel meals to restore your savings immediately."
          },
          "outcomeDescription": {
            "en": "You fall sick again and face fresh clinic bills.",
            "hi": "You fall sick again and face fresh clinic bills.",
            "te": "You fall sick again and face fresh clinic bills."
          },
          "pedagogicalFeedback": {
            "en": "You fall sick again and face fresh clinic bills.",
            "hi": "You fall sick again and face fresh clinic bills.",
            "te": "You fall sick again and face fresh clinic bills."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Master Challenge",
      "hi": "The Master Challenge",
      "te": "The Master Challenge"
    },
    "points": [
      {
        "en": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "hi": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "te": "Budget: Keep fixed monthly living costs below 60% of future earnings."
      },
      {
        "en": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "hi": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "te": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account."
      },
      {
        "en": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "hi": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "te": "Invest: Grow your future surplus sensibly in balanced, diversified plans."
      },
      {
        "en": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "hi": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "te": "Security: Keep your doors locked against scams and never share secret PINs or OTPs."
      }
    ]
  }
},
  'MC_004': {
  "id": "MC_004",
  "cityId": "city_mc_004",
  "pillar": "budget",
  "title": {
    "en": "The First Freelance Typing Gig",
    "hi": "The First Freelance Typing Gig",
    "te": "The First Freelance Typing Gig"
  },
  "subtitle": {
    "en": "The Campus Library Cyber Corner.",
    "hi": "The Campus Library Cyber Corner.",
    "te": "The Campus Library Cyber Corner."
  },
  "situationContext": {
    "en": "You complete an online typing project for \u20b93,000. You must budget irregular earnings, set aside \u20b91,000 for maintenance, and put \u20b91,000 toward learning resources. The client sends a payment screenshot: \"Oops! I accidentally sent you \u20b98,000 instead of \u20b93,000! Please send back the extra \u20b95,000 to this UPI number right now!\"",
    "hi": "You complete an online typing project for \u20b93,000. You must budget irregular earnings, set aside \u20b91,000 for maintenance, and put \u20b91,000 toward learning resources. The client sends a payment screenshot: \"Oops! I accidentally sent you \u20b98,000 instead of \u20b93,000! Please send back the extra \u20b95,000 to this UPI number right now!\"",
    "te": "You complete an online typing project for \u20b93,000. You must budget irregular earnings, set aside \u20b91,000 for maintenance, and put \u20b91,000 toward learning resources. The client sends a payment screenshot: \"Oops! I accidentally sent you \u20b98,000 instead of \u20b93,000! Please send back the extra \u20b95,000 to this UPI number right now!\""
  },
  "stipendContext": "An online client named \"Apex Media\".",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "MC_004_step_1",
      "title": {
        "en": "Handling the Overpayment Trick (FS)",
        "hi": "Handling the Overpayment Trick (FS)",
        "te": "Handling the Overpayment Trick (FS)"
      },
      "situationContext": {
        "en": "Respond to the client's screenshot and refund demand.",
        "hi": "Respond to the client's screenshot and refund demand.",
        "te": "Respond to the client's screenshot and refund demand."
      },
      "choices": [
        {
          "id": "MC_004_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Check your official bank balance directly; see that no \u20b98,000 was received (the screenshot is fake!); report the client, keep your work files safe, and avoid sending any money.",
            "hi": "Check your official bank balance directly; see that no \u20b98,000 was received (the screenshot is fake!); report the client, keep your work files safe, and avoid sending any money.",
            "te": "Check your official bank balance directly; see that no \u20b98,000 was received (the screenshot is fake!); report the client, keep your work files safe, and avoid sending any money."
          },
          "outcomeDescription": {
            "en": "You spot the overpayment scam, protect your account, and stay safe.",
            "hi": "You spot the overpayment scam, protect your account, and stay safe.",
            "te": "You spot the overpayment scam, protect your account, and stay safe."
          },
          "pedagogicalFeedback": {
            "en": "You spot the overpayment scam, protect your account, and stay safe.",
            "hi": "You spot the overpayment scam, protect your account, and stay safe.",
            "te": "You spot the overpayment scam, protect your account, and stay safe."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_004_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Wait for your bank statement to update before making any moves, refusing to send money back.",
            "hi": "Wait for your bank statement to update before making any moves, refusing to send money back.",
            "te": "Wait for your bank statement to update before making any moves, refusing to send money back."
          },
          "outcomeDescription": {
            "en": "You avoid losing money, though you spent hours worrying.",
            "hi": "You avoid losing money, though you spent hours worrying.",
            "te": "You avoid losing money, though you spent hours worrying."
          },
          "pedagogicalFeedback": {
            "en": "You avoid losing money, though you spent hours worrying.",
            "hi": "You avoid losing money, though you spent hours worrying.",
            "te": "You avoid losing money, though you spent hours worrying."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_004_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Assume the job was real and spend \u20b93,000 from your existing savings before the money clears.",
            "hi": "Assume the job was real and spend \u20b93,000 from your existing savings before the money clears.",
            "te": "Assume the job was real and spend \u20b93,000 from your existing savings before the money clears."
          },
          "outcomeDescription": {
            "en": "You spent money you never actually received.",
            "hi": "You spent money you never actually received.",
            "te": "You spent money you never actually received."
          },
          "pedagogicalFeedback": {
            "en": "You spent money you never actually received.",
            "hi": "You spent money you never actually received.",
            "te": "You spent money you never actually received."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_004_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Panic and immediately send \u20b95,000 from your own pocket back to the scammer.",
            "hi": "Panic and immediately send \u20b95,000 from your own pocket back to the scammer.",
            "te": "Panic and immediately send \u20b95,000 from your own pocket back to the scammer."
          },
          "outcomeDescription": {
            "en": "You lose \u20b95,000 of your own savings to a fake screenshot scam.",
            "hi": "You lose \u20b95,000 of your own savings to a fake screenshot scam.",
            "te": "You lose \u20b95,000 of your own savings to a fake screenshot scam."
          },
          "pedagogicalFeedback": {
            "en": "You lose \u20b95,000 of your own savings to a fake screenshot scam.",
            "hi": "You lose \u20b95,000 of your own savings to a fake screenshot scam.",
            "te": "You lose \u20b95,000 of your own savings to a fake screenshot scam."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_004_step_2",
      "title": {
        "en": "Confirming Legitimate Payment",
        "hi": "Confirming Legitimate Payment",
        "te": "Confirming Legitimate Payment"
      },
      "situationContext": {
        "en": "After you catch the scam, the platform escrow steps in to verify the real \u20b93,000 project payment.",
        "hi": "After you catch the scam, the platform escrow steps in to verify the real \u20b93,000 project payment.",
        "te": "After you catch the scam, the platform escrow steps in to verify the real \u20b93,000 project payment."
      },
      "choices": [
        {
          "id": "MC_004_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Check your official banking app and verify the incoming \u20b93,000 transaction has cleared.",
            "hi": "Check your official banking app and verify the incoming \u20b93,000 transaction has cleared.",
            "te": "Check your official banking app and verify the incoming \u20b93,000 transaction has cleared."
          },
          "outcomeDescription": {
            "en": "You ensure legitimate earnings are safely in your account before spending.",
            "hi": "You ensure legitimate earnings are safely in your account before spending.",
            "te": "You ensure legitimate earnings are safely in your account before spending."
          },
          "pedagogicalFeedback": {
            "en": "You ensure legitimate earnings are safely in your account before spending.",
            "hi": "You ensure legitimate earnings are safely in your account before spending.",
            "te": "You ensure legitimate earnings are safely in your account before spending."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_004_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Download the platform's official escrow payment receipt for your records.",
            "hi": "Download the platform's official escrow payment receipt for your records.",
            "te": "Download the platform's official escrow payment receipt for your records."
          },
          "outcomeDescription": {
            "en": "You keep clean records for future freelance projects.",
            "hi": "You keep clean records for future freelance projects.",
            "te": "You keep clean records for future freelance projects."
          },
          "pedagogicalFeedback": {
            "en": "You keep clean records for future freelance projects.",
            "hi": "You keep clean records for future freelance projects.",
            "te": "You keep clean records for future freelance projects."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_004_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Hand over your raw source files before payment clearance is confirmed.",
            "hi": "Hand over your raw source files before payment clearance is confirmed.",
            "te": "Hand over your raw source files before payment clearance is confirmed."
          },
          "outcomeDescription": {
            "en": "You deliver work without ensuring you get paid.",
            "hi": "You deliver work without ensuring you get paid.",
            "te": "You deliver work without ensuring you get paid."
          },
          "pedagogicalFeedback": {
            "en": "You deliver work without ensuring you get paid.",
            "hi": "You deliver work without ensuring you get paid.",
            "te": "You deliver work without ensuring you get paid."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_004_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Share your email login details with the client to verify delivery.",
            "hi": "Share your email login details with the client to verify delivery.",
            "te": "Share your email login details with the client to verify delivery."
          },
          "outcomeDescription": {
            "en": "You give an untrusted user access to your accounts.",
            "hi": "You give an untrusted user access to your accounts.",
            "te": "You give an untrusted user access to your accounts."
          },
          "pedagogicalFeedback": {
            "en": "You give an untrusted user access to your accounts.",
            "hi": "You give an untrusted user access to your accounts.",
            "te": "You give an untrusted user access to your accounts."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_004_step_3",
      "title": {
        "en": "Managing Irregular Gig Income (PB, SM & INV)",
        "hi": "Managing Irregular Gig Income (PB, SM & INV)",
        "te": "Managing Irregular Gig Income (PB, SM & INV)"
      },
      "situationContext": {
        "en": "You have your hard-earned \u20b93,000 in your account. Allocate the funds.",
        "hi": "You have your hard-earned \u20b93,000 in your account. Allocate the funds.",
        "te": "You have your hard-earned \u20b93,000 in your account. Allocate the funds."
      },
      "choices": [
        {
          "id": "MC_004_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Set aside \u20b91,000 for laptop maintenance, put \u20b91,000 into a study growth fund, and use \u20b91,000 for daily living costs.",
            "hi": "Set aside \u20b91,000 for laptop maintenance, put \u20b91,000 into a study growth fund, and use \u20b91,000 for daily living costs.",
            "te": "Set aside \u20b91,000 for laptop maintenance, put \u20b91,000 into a study growth fund, and use \u20b91,000 for daily living costs."
          },
          "outcomeDescription": {
            "en": "You budget for tool upkeep, invest in your education, and cover daily needs.",
            "hi": "You budget for tool upkeep, invest in your education, and cover daily needs.",
            "te": "You budget for tool upkeep, invest in your education, and cover daily needs."
          },
          "pedagogicalFeedback": {
            "en": "You budget for tool upkeep, invest in your education, and cover daily needs.",
            "hi": "You budget for tool upkeep, invest in your education, and cover daily needs.",
            "te": "You budget for tool upkeep, invest in your education, and cover daily needs."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_004_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Deposit \u20b92,000 into your student savings account and use \u20b91,000 for living costs.",
            "hi": "Deposit \u20b92,000 into your student savings account and use \u20b91,000 for living costs.",
            "te": "Deposit \u20b92,000 into your student savings account and use \u20b91,000 for living costs."
          },
          "outcomeDescription": {
            "en": "You protect your earnings and support your daily routine.",
            "hi": "You protect your earnings and support your daily routine.",
            "te": "You protect your earnings and support your daily routine."
          },
          "pedagogicalFeedback": {
            "en": "You protect your earnings and support your daily routine.",
            "hi": "You protect your earnings and support your daily routine.",
            "te": "You protect your earnings and support your daily routine."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_004_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Treat the full \u20b93,000 as play money and spend it all on clothes in one day.",
            "hi": "Treat the full \u20b93,000 as play money and spend it all on clothes in one day.",
            "te": "Treat the full \u20b93,000 as play money and spend it all on clothes in one day."
          },
          "outcomeDescription": {
            "en": "You spend your earnings quickly and have no savings for equipment upkeep.",
            "hi": "You spend your earnings quickly and have no savings for equipment upkeep.",
            "te": "You spend your earnings quickly and have no savings for equipment upkeep."
          },
          "pedagogicalFeedback": {
            "en": "You spend your earnings quickly and have no savings for equipment upkeep.",
            "hi": "You spend your earnings quickly and have no savings for equipment upkeep.",
            "te": "You spend your earnings quickly and have no savings for equipment upkeep."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_004_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Bet your \u20b93,000 earnings on speculative daily trading tips.",
            "hi": "Bet your \u20b93,000 earnings on speculative daily trading tips.",
            "te": "Bet your \u20b93,000 earnings on speculative daily trading tips."
          },
          "outcomeDescription": {
            "en": "You lose your freelance earnings on risky bets.",
            "hi": "You lose your freelance earnings on risky bets.",
            "te": "You lose your freelance earnings on risky bets."
          },
          "pedagogicalFeedback": {
            "en": "You lose your freelance earnings on risky bets.",
            "hi": "You lose your freelance earnings on risky bets.",
            "te": "You lose your freelance earnings on risky bets."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Master Challenge",
      "hi": "The Master Challenge",
      "te": "The Master Challenge"
    },
    "points": [
      {
        "en": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "hi": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "te": "Budget: Keep fixed monthly living costs below 60% of future earnings."
      },
      {
        "en": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "hi": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "te": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account."
      },
      {
        "en": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "hi": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "te": "Invest: Grow your future surplus sensibly in balanced, diversified plans."
      },
      {
        "en": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "hi": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "te": "Security: Keep your doors locked against scams and never share secret PINs or OTPs."
      }
    ]
  }
},
  'MC_005': {
  "id": "MC_005",
  "cityId": "city_mc_005",
  "pillar": "budget",
  "title": {
    "en": "The Final Graduation Bridge",
    "hi": "The Final Graduation Bridge",
    "te": "The Final Graduation Bridge"
  },
  "subtitle": {
    "en": "The School Auditorium.",
    "hi": "The School Auditorium.",
    "te": "The School Auditorium."
  },
  "situationContext": {
    "en": "You are finishing Grade 12 and stepping into adulthood! You have built a total student savings balance of \u20b912,000 over the year.",
    "hi": "You are finishing Grade 12 and stepping into adulthood! You have built a total student savings balance of \u20b912,000 over the year.",
    "te": "You are finishing Grade 12 and stepping into adulthood! You have built a total student savings balance of \u20b912,000 over the year."
  },
  "stipendContext": "The School Principal and your Family.",
  "educationalHint": {
    "en": "Hint unavailable",
    "hi": "Hint unavailable",
    "te": "Hint unavailable"
  },
  "steps": [
    {
      "id": "MC_005_step_1",
      "title": {
        "en": "Establishing the Safety Shield (PB & SM)",
        "hi": "Establishing the Safety Shield (PB & SM)",
        "te": "Establishing the Safety Shield (PB & SM)"
      },
      "situationContext": {
        "en": "Allocate your \u20b912,000 savings to start your independent life.",
        "hi": "Allocate your \u20b912,000 savings to start your independent life.",
        "te": "Allocate your \u20b912,000 savings to start your independent life."
      },
      "choices": [
        {
          "id": "MC_005_step_1_choice_1",
          "tier": "best",
          "text": {
            "en": "Keep \u20b96,000 as your emergency buffer in a liquid bank account, put \u20b94,000 into a diversified growth plan, allocate \u20b92,000 for your new study supplies, and set up strong security on all your banking apps.",
            "hi": "Keep \u20b96,000 as your emergency buffer in a liquid bank account, put \u20b94,000 into a diversified growth plan, allocate \u20b92,000 for your new study supplies, and set up strong security on all your banking apps.",
            "te": "Keep \u20b96,000 as your emergency buffer in a liquid bank account, put \u20b94,000 into a diversified growth plan, allocate \u20b92,000 for your new study supplies, and set up strong security on all your banking apps."
          },
          "outcomeDescription": {
            "en": "You graduate with full financial independence, protected against surprises and scams!",
            "hi": "You graduate with full financial independence, protected against surprises and scams!",
            "te": "You graduate with full financial independence, protected against surprises and scams!"
          },
          "pedagogicalFeedback": {
            "en": "You graduate with full financial independence, protected against surprises and scams!",
            "hi": "You graduate with full financial independence, protected against surprises and scams!",
            "te": "You graduate with full financial independence, protected against surprises and scams!"
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_005_step_1_choice_2",
          "tier": "good",
          "text": {
            "en": "Keep all \u20b912,000 in a safe bank account; completely safe, but missing long-term growth.",
            "hi": "Keep all \u20b912,000 in a safe bank account; completely safe, but missing long-term growth.",
            "te": "Keep all \u20b912,000 in a safe bank account; completely safe, but missing long-term growth."
          },
          "outcomeDescription": {
            "en": "You stay safe and debt-free, though inflation slowly chips away at your savings.",
            "hi": "You stay safe and debt-free, though inflation slowly chips away at your savings.",
            "te": "You stay safe and debt-free, though inflation slowly chips away at your savings."
          },
          "pedagogicalFeedback": {
            "en": "You stay safe and debt-free, though inflation slowly chips away at your savings.",
            "hi": "You stay safe and debt-free, though inflation slowly chips away at your savings.",
            "te": "You stay safe and debt-free, though inflation slowly chips away at your savings."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_005_step_1_choice_3",
          "tier": "bad",
          "text": {
            "en": "Spend \u20b910,000 on a high-end celebration smartphone, leaving only \u20b92,000 for your college transition.",
            "hi": "Spend \u20b910,000 on a high-end celebration smartphone, leaving only \u20b92,000 for your college transition.",
            "te": "Spend \u20b910,000 on a high-end celebration smartphone, leaving only \u20b92,000 for your college transition."
          },
          "outcomeDescription": {
            "en": "You start your next phase of study with almost no financial safety net.",
            "hi": "You start your next phase of study with almost no financial safety net.",
            "te": "You start your next phase of study with almost no financial safety net."
          },
          "pedagogicalFeedback": {
            "en": "You start your next phase of study with almost no financial safety net.",
            "hi": "You start your next phase of study with almost no financial safety net.",
            "te": "You start your next phase of study with almost no financial safety net."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_005_step_1_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Hand the entire \u20b912,000 to an online \"crypto doubling bot\" promising guaranteed riches.",
            "hi": "Hand the entire \u20b912,000 to an online \"crypto doubling bot\" promising guaranteed riches.",
            "te": "Hand the entire \u20b912,000 to an online \"crypto doubling bot\" promising guaranteed riches."
          },
          "outcomeDescription": {
            "en": "The bot steals your entire year's savings, leaving you back at square one.",
            "hi": "The bot steals your entire year's savings, leaving you back at square one.",
            "te": "The bot steals your entire year's savings, leaving you back at square one."
          },
          "pedagogicalFeedback": {
            "en": "The bot steals your entire year's savings, leaving you back at square one.",
            "hi": "The bot steals your entire year's savings, leaving you back at square one.",
            "te": "The bot steals your entire year's savings, leaving you back at square one."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_005_step_2",
      "title": {
        "en": "Managing Living Costs on Your First Job (PB)",
        "hi": "Managing Living Costs on Your First Job (PB)",
        "te": "Managing Living Costs on Your First Job (PB)"
      },
      "situationContext": {
        "en": "You land your first junior job earning \u20b915,000/month. Balance your living budget.",
        "hi": "You land your first junior job earning \u20b915,000/month. Balance your living budget.",
        "te": "You land your first junior job earning \u20b915,000/month. Balance your living budget."
      },
      "choices": [
        {
          "id": "MC_005_step_2_choice_1",
          "tier": "best",
          "text": {
            "en": "Keep essential needs below \u20b98,500, allocate \u20b92,500 to savings, and spend \u20b94,000 on leisure.",
            "hi": "Keep essential needs below \u20b98,500, allocate \u20b92,500 to savings, and spend \u20b94,000 on leisure.",
            "te": "Keep essential needs below \u20b98,500, allocate \u20b92,500 to savings, and spend \u20b94,000 on leisure."
          },
          "outcomeDescription": {
            "en": "You maintain living costs below 60% of earnings and build wealth steadily.",
            "hi": "You maintain living costs below 60% of earnings and build wealth steadily.",
            "te": "You maintain living costs below 60% of earnings and build wealth steadily."
          },
          "pedagogicalFeedback": {
            "en": "You maintain living costs below 60% of earnings and build wealth steadily.",
            "hi": "You maintain living costs below 60% of earnings and build wealth steadily.",
            "te": "You maintain living costs below 60% of earnings and build wealth steadily."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_005_step_2_choice_2",
          "tier": "good",
          "text": {
            "en": "Spend \u20b99,500 on needs and save \u20b91,500, keeping spending within your means.",
            "hi": "Spend \u20b99,500 on needs and save \u20b91,500, keeping spending within your means.",
            "te": "Spend \u20b99,500 on needs and save \u20b91,500, keeping spending within your means."
          },
          "outcomeDescription": {
            "en": "You cover all bills and maintain a modest savings habit.",
            "hi": "You cover all bills and maintain a modest savings habit.",
            "te": "You cover all bills and maintain a modest savings habit."
          },
          "pedagogicalFeedback": {
            "en": "You cover all bills and maintain a modest savings habit.",
            "hi": "You cover all bills and maintain a modest savings habit.",
            "te": "You cover all bills and maintain a modest savings habit."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_005_step_2_choice_3",
          "tier": "bad",
          "text": {
            "en": "Rent a luxury apartment for \u20b912,000/month, leaving almost zero cash for food.",
            "hi": "Rent a luxury apartment for \u20b912,000/month, leaving almost zero cash for food.",
            "te": "Rent a luxury apartment for \u20b912,000/month, leaving almost zero cash for food."
          },
          "outcomeDescription": {
            "en": "You end up in immediate financial stress and accumulate debt.",
            "hi": "You end up in immediate financial stress and accumulate debt.",
            "te": "You end up in immediate financial stress and accumulate debt."
          },
          "pedagogicalFeedback": {
            "en": "You end up in immediate financial stress and accumulate debt.",
            "hi": "You end up in immediate financial stress and accumulate debt.",
            "te": "You end up in immediate financial stress and accumulate debt."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_005_step_2_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Buy a luxury motorcycle on expensive monthly payments, spending more than you earn.",
            "hi": "Buy a luxury motorcycle on expensive monthly payments, spending more than you earn.",
            "te": "Buy a luxury motorcycle on expensive monthly payments, spending more than you earn."
          },
          "outcomeDescription": {
            "en": "You enter severe debt in your first month of independent adulthood.",
            "hi": "You enter severe debt in your first month of independent adulthood.",
            "te": "You enter severe debt in your first month of independent adulthood."
          },
          "pedagogicalFeedback": {
            "en": "You enter severe debt in your first month of independent adulthood.",
            "hi": "You enter severe debt in your first month of independent adulthood.",
            "te": "You enter severe debt in your first month of independent adulthood."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    },
    {
      "id": "MC_005_step_3",
      "title": {
        "en": "Securing Your Digital Future (FS)",
        "hi": "Securing Your Digital Future (FS)",
        "te": "Securing Your Digital Future (FS)"
      },
      "situationContext": {
        "en": "Complete your financial security checklist as you enter adulthood.",
        "hi": "Complete your financial security checklist as you enter adulthood.",
        "te": "Complete your financial security checklist as you enter adulthood."
      },
      "choices": [
        {
          "id": "MC_005_step_3_choice_1",
          "tier": "best",
          "text": {
            "en": "Turn on two-factor authentication on all banking apps, keep your PINs and OTPs private, and review bank statements monthly.",
            "hi": "Turn on two-factor authentication on all banking apps, keep your PINs and OTPs private, and review bank statements monthly.",
            "te": "Turn on two-factor authentication on all banking apps, keep your PINs and OTPs private, and review bank statements monthly."
          },
          "outcomeDescription": {
            "en": "Your hard-earned money stays secure against modern scams and fraud.",
            "hi": "Your hard-earned money stays secure against modern scams and fraud.",
            "te": "Your hard-earned money stays secure against modern scams and fraud."
          },
          "pedagogicalFeedback": {
            "en": "Your hard-earned money stays secure against modern scams and fraud.",
            "hi": "Your hard-earned money stays secure against modern scams and fraud.",
            "te": "Your hard-earned money stays secure against modern scams and fraud."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_005_step_3_choice_2",
          "tier": "good",
          "text": {
            "en": "Set strong passwords and update them across all apps every six months.",
            "hi": "Set strong passwords and update them across all apps every six months.",
            "te": "Set strong passwords and update them across all apps every six months."
          },
          "outcomeDescription": {
            "en": "You maintain strong account security.",
            "hi": "You maintain strong account security.",
            "te": "You maintain strong account security."
          },
          "pedagogicalFeedback": {
            "en": "You maintain strong account security.",
            "hi": "You maintain strong account security.",
            "te": "You maintain strong account security."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_005_step_3_choice_3",
          "tier": "bad",
          "text": {
            "en": "Use one simple password across your email, social accounts, and banking apps.",
            "hi": "Use one simple password across your email, social accounts, and banking apps.",
            "te": "Use one simple password across your email, social accounts, and banking apps."
          },
          "outcomeDescription": {
            "en": "A single leak exposes all your accounts to attackers.",
            "hi": "A single leak exposes all your accounts to attackers.",
            "te": "A single leak exposes all your accounts to attackers."
          },
          "pedagogicalFeedback": {
            "en": "A single leak exposes all your accounts to attackers.",
            "hi": "A single leak exposes all your accounts to attackers.",
            "te": "A single leak exposes all your accounts to attackers."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        },
        {
          "id": "MC_005_step_3_choice_4",
          "tier": "very_bad",
          "text": {
            "en": "Store written copies of your bank passwords and PINs in an unlocked notes app.",
            "hi": "Store written copies of your bank passwords and PINs in an unlocked notes app.",
            "te": "Store written copies of your bank passwords and PINs in an unlocked notes app."
          },
          "outcomeDescription": {
            "en": "Anyone who accesses your phone gets complete control of your finances.",
            "hi": "Anyone who accesses your phone gets complete control of your finances.",
            "te": "Anyone who accesses your phone gets complete control of your finances."
          },
          "pedagogicalFeedback": {
            "en": "Anyone who accesses your phone gets complete control of your finances.",
            "hi": "Anyone who accesses your phone gets complete control of your finances.",
            "te": "Anyone who accesses your phone gets complete control of your finances."
          },
          "financialImpact": {
            "walletDelta": 0,
            "emergencyDelta": 0,
            "scoreDelta": 0,
            "stressDelta": 0
          }
        }
      ]
    }
  ],
  "ideaCard": {
    "title": {
      "en": "The Master Challenge",
      "hi": "The Master Challenge",
      "te": "The Master Challenge"
    },
    "points": [
      {
        "en": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "hi": "Budget: Keep fixed monthly living costs below 60% of future earnings.",
        "te": "Budget: Keep fixed monthly living costs below 60% of future earnings."
      },
      {
        "en": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "hi": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account.",
        "te": "Safety Box: Keep at least 2 months of basic expenses in a safe, liquid bank account."
      },
      {
        "en": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "hi": "Invest: Grow your future surplus sensibly in balanced, diversified plans.",
        "te": "Invest: Grow your future surplus sensibly in balanced, diversified plans."
      },
      {
        "en": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "hi": "Security: Keep your doors locked against scams and never share secret PINs or OTPs.",
        "te": "Security: Keep your doors locked against scams and never share secret PINs or OTPs."
      }
    ]
  }
},
};
