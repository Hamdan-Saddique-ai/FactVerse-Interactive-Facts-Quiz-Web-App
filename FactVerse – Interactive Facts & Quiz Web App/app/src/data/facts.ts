export interface Fact {
  id: number;
  text: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  facts: Fact[];
}

export const categories: Category[] = [
  {
    id: "earth",
    name: "Earth",
    icon: "🌍",
    color: "#22c55e",
    gradient: "from-green-400 to-emerald-600",
    facts: [
      { id: 1, text: "Earth is the only known planet to support life." },
      { id: 2, text: "About 71% of Earth's surface is covered by water." },
      { id: 3, text: "Earth's core is as hot as the surface of the Sun." },
      { id: 4, text: "The Amazon rainforest produces 20% of the world's oxygen." },
      { id: 5, text: "Earth has over 8 million species of living things." },
      { id: 6, text: "The Great Barrier Reef is the largest living structure on Earth." },
      { id: 7, text: "Earth's magnetic field protects us from harmful solar radiation." },
      { id: 8, text: "The deepest point on Earth is the Mariana Trench, about 11,000 meters deep." },
      { id: 9, text: "Earth is approximately 4.54 billion years old." },
      { id: 10, text: "The Sahara Desert is larger than the entire United States." },
      { id: 11, text: "Lightning strikes Earth about 100 times every second." },
      { id: 12, text: "The Amazon River carries 20% of all river water on Earth." },
      { id: 13, text: "Earth's atmosphere is composed of 78% nitrogen and 21% oxygen." },
      { id: 14, text: "Mount Everest grows about 4 millimeters taller every year." },
      { id: 15, text: "There are more trees on Earth than stars in the Milky Way galaxy." },
      { id: 16, text: "The Pacific Ocean is wider than the Moon." },
      { id: 17, text: "Earth rotates at about 1,600 km/h at the equator." },
      { id: 18, text: "Antarctica contains about 70% of Earth's fresh water." },
      { id: 19, text: "The Grand Canyon is visible from space." },
      { id: 20, text: "Earth has over 1,500 active volcanoes." }
    ]
  },
  {
    id: "space",
    name: "Space",
    icon: "🚀",
    color: "#8b5cf6",
    gradient: "from-violet-400 to-purple-600",
    facts: [
      { id: 1, text: "A day on Venus is longer than its year." },
      { id: 2, text: "There are more stars in the universe than grains of sand on Earth." },
      { id: 3, text: "Neutron stars can spin at up to 600 rotations per second." },
      { id: 4, text: "The Sun makes up 99.86% of the mass in our solar system." },
      { id: 5, text: "One million Earths could fit inside the Sun." },
      { id: 6, text: "The footprints on the Moon will last for millions of years." },
      { id: 7, text: "Jupiter has 95 known moons." },
      { id: 8, text: "A black hole's gravity is so strong that not even light can escape." },
      { id: 9, text: "The Milky Way galaxy is about 100,000 light-years across." },
      { id: 10, text: "Saturn's rings are made mostly of ice particles." },
      { id: 11, text: "The largest known star, UY Scuti, is 1,700 times bigger than our Sun." },
      { id: 12, text: "Space is completely silent because there is no air to carry sound." },
      { id: 13, text: "The International Space Station travels at 28,000 km/h." },
      { id: 14, text: "A year on Mercury is just 88 Earth days." },
      { id: 15, text: "There is a planet made of diamonds, called 55 Cancri e." },
      { id: 16, text: "The Andromeda Galaxy is heading towards us at 110 km/second." },
      { id: 17, text: "Astronauts grow taller in space due to lack of gravity." },
      { id: 18, text: "The observable universe is about 93 billion light-years across." },
      { id: 19, text: "Mars has the largest volcano in the solar system, Olympus Mons." },
      { id: 20, text: "The Hubble Space Telescope can see galaxies 13.4 billion light-years away." }
    ]
  },
  {
    id: "human",
    name: "Human Body",
    icon: "🧠",
    color: "#f97316",
    gradient: "from-orange-400 to-red-500",
    facts: [
      { id: 1, text: "The human brain contains about 86 billion neurons." },
      { id: 2, text: "Your heart beats about 100,000 times per day." },
      { id: 3, text: "The human body has 206 bones." },
      { id: 4, text: "Your blood travels 19,000 km through your body daily." },
      { id: 5, text: "The human eye can distinguish about 10 million colors." },
      { id: 6, text: "Your skin is your largest organ, covering about 2 square meters." },
      { id: 7, text: "The human body produces about 1 liter of saliva daily." },
      { id: 8, text: "Your bones are stronger than steel, gram for gram." },
      { id: 9, text: "The human nose can detect over 1 trillion different scents." },
      { id: 10, text: "Your DNA would stretch to the Sun and back 60 times if uncoiled." },
      { id: 11, text: "The human body has about 37 trillion cells." },
      { id: 12, text: "Your fingerprints are unique, even identical twins have different ones." },
      { id: 13, text: "The human heart pumps about 7,500 liters of blood daily." },
      { id: 14, text: "Your brain uses 20% of your body's total energy." },
      { id: 15, text: "The human body can survive without food for about 3 weeks." },
      { id: 16, text: "Your stomach acid is strong enough to dissolve metal." },
      { id: 17, text: "The human body grows about 6 km of hair in a lifetime." },
      { id: 18, text: "Your eyes blink about 20,000 times per day." },
      { id: 19, text: "The human liver can regenerate itself completely." },
      { id: 20, text: "Your body produces 25 million new cells every second." }
    ]
  },
  {
    id: "animals",
    name: "Animals",
    icon: "🦁",
    color: "#eab308",
    gradient: "from-yellow-400 to-amber-600",
    facts: [
      { id: 1, text: "Octopuses have three hearts and blue blood." },
      { id: 2, text: "A group of flamingos is called a 'flamboyance'." },
      { id: 3, text: "Honey never spoils - 3,000-year-old honey is still edible." },
      { id: 4, text: "Elephants are the only mammals that can't jump." },
      { id: 5, text: "A blue whale's heart is the size of a small car." },
      { id: 6, text: "Cows have best friends and get stressed when separated." },
      { id: 7, text: "Sloths can hold their breath longer than dolphins - up to 40 minutes." },
      { id: 8, text: "Penguins propose to their mates with a pebble." },
      { id: 9, text: "Dolphins have names for each other using signature whistles." },
      { id: 10, text: "A giraffe's tongue is about 20 inches long and blue-black in color." },
      { id: 11, text: "Koalas sleep up to 22 hours a day." },
      { id: 12, text: "The mantis shrimp punches with the force of a bullet." },
      { id: 13, text: "Butterflies taste with their feet." },
      { id: 14, text: "A snail can sleep for three years." },
      { id: 15, text: "Hummingbirds are the only birds that can fly backwards." },
      { id: 16, text: "Axolotls can regenerate their entire limbs." },
      { id: 17, text: "Crows are as smart as a 7-year-old human child." },
      { id: 18, text: "A flea can jump 350 times its body length." },
      { id: 19, text: "Polar bears have black skin under their white fur." },
      { id: 20, text: "The pistol shrimp creates a bubble hotter than the Sun's surface." }
    ]
  },
  {
    id: "history",
    name: "History",
    icon: "🏛️",
    color: "#a855f7",
    gradient: "from-purple-400 to-indigo-600",
    facts: [
      { id: 1, text: "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid." },
      { id: 2, text: "The shortest war in history lasted only 38 minutes." },
      { id: 3, text: "Napoleon was once attacked by rabbits." },
      { id: 4, text: "The Great Wall of China is not visible from space with the naked eye." },
      { id: 5, text: "Albert Einstein was offered the presidency of Israel in 1952." },
      { id: 6, text: "The ancient Egyptians used honey as a form of currency." },
      { id: 7, text: "Vikings used the bones of slain animals when smithing new weapons." },
      { id: 8, text: "The first computer bug was an actual moth found in a computer in 1947." },
      { id: 9, text: "Julius Caesar was kidnapped by pirates and demanded a higher ransom." },
      { id: 10, text: "The Eiffel Tower can grow taller in summer due to heat expansion." },
      { id: 11, text: "Ancient Romans used urine as mouthwash." },
      { id: 12, text: "The Titanic's chief baker survived by drinking whiskey." },
      { id: 13, text: "Napoleon was of average height for his time." },
      { id: 14, text: "The first oranges weren't orange - they were green." },
      { id: 15, text: "Oxford University is older than the Aztec Empire." },
      { id: 16, text: "The Leaning Tower of Pisa was never straight." },
      { id: 17, text: "Ancient Greek statues were originally painted in bright colors." },
      { id: 18, text: "The longest reigning monarch was Louis XIV of France - 72 years." },
      { id: 19, text: "The first email was sent in 1971." },
      { id: 20, text: "The Great Fire of London destroyed over 13,000 houses but killed only 6 people." }
    ]
  },
  {
    id: "science",
    name: "Science",
    icon: "⚗️",
    color: "#06b6d4",
    gradient: "from-cyan-400 to-blue-500",
    facts: [
      { id: 1, text: "Water can boil and freeze at the same time in a vacuum." },
      { id: 2, text: "Bananas are naturally radioactive due to their potassium content." },
      { id: 3, text: "A teaspoonful of neutron star would weigh 6 billion tons." },
      { id: 4, text: "Hot water freezes faster than cold water - the Mpemba effect." },
      { id: 5, text: "The speed of light is 299,792,458 meters per second." },
      { id: 6, text: "DNA was first discovered in 1869 by Friedrich Miescher." },
      { id: 7, text: "The average cloud weighs about 1.1 million pounds." },
      { id: 8, text: "Glass is actually a liquid that flows very slowly." },
      { id: 9, text: "A day on Earth is getting longer by 1.7 milliseconds per century." },
      { id: 10, text: "The human body contains enough carbon to make 900 pencils." },
      { id: 11, text: "Sound travels 4 times faster in water than in air." },
      { id: 12, text: "The coldest temperature ever recorded is -273.15°C, absolute zero." },
      { id: 13, text: "Helium becomes a superfluid at temperatures near absolute zero." },
      { id: 14, text: "The average lightning bolt contains enough energy to toast 100,000 slices of bread." },
      { id: 15, text: "Gold is edible and has been used in food for thousands of years." },
      { id: 16, text: "A single bolt of lightning is five times hotter than the Sun's surface." },
      { id: 17, text: "The human brain generates about 23 watts of power." },
      { id: 18, text: "Water is the only substance that exists naturally in all three states on Earth." },
      { id: 19, text: "The speed of sound is 343 meters per second in air at room temperature." },
      { id: 20, text: "Astronauts can't burp in space due to lack of gravity." }
    ]
  },
  {
    id: "technology",
    name: "Technology",
    icon: "💻",
    color: "#3b82f6",
    gradient: "from-blue-400 to-indigo-600",
    facts: [
      { id: 1, text: "The first computer mouse was made of wood in 1964." },
      { id: 2, text: "The first 1GB hard drive was announced in 1980 and weighed 550 pounds." },
      { id: 3, text: "More than 90% of the world's currency is digital." },
      { id: 4, text: "The first domain name ever registered was Symbolics.com in 1985." },
      { id: 5, text: "Google processes over 8.5 billion searches per day." },
      { id: 6, text: "The first smartphone was IBM's Simon in 1994." },
      { id: 7, text: "There are over 1.9 billion websites on the internet." },
      { id: 8, text: "The QWERTY keyboard was designed to slow down typing." },
      { id: 9, text: "The first video on YouTube was uploaded in April 2005." },
      { id: 10, text: "Bitcoin was created in 2009 by an unknown person using the name Satoshi Nakamoto." },
      { id: 11, text: "The first computer virus was created in 1983." },
      { id: 12, text: "Over 500 hours of video are uploaded to YouTube every minute." },
      { id: 13, text: "The first text message was sent in 1992." },
      { id: 14, text: "There are more mobile phones than people in the world." },
      { id: 15, text: "The first iPhone was released in 2007." },
      { id: 16, text: "Email was invented before the World Wide Web." },
      { id: 17, text: "The first computer game was created in 1962." },
      { id: 18, text: "Over 3.8 billion people use social media worldwide." },
      { id: 19, text: "The first Wi-Fi network was launched in 1997." },
      { id: 20, text: "Amazon started as an online bookstore in 1994." }
    ]
  },
  {
    id: "food",
    name: "Food",
    icon: "🍕",
    color: "#ef4444",
    gradient: "from-red-400 to-rose-600",
    facts: [
      { id: 1, text: "Honey is the only food that never expires." },
      { id: 2, text: "Apples float in water because they are 25% air." },
      { id: 3, text: "Peanuts are not nuts - they are legumes." },
      { id: 4, text: "Chocolate was once used as currency by the Aztecs." },
      { id: 5, text: "Carrots were originally purple, not orange." },
      { id: 6, text: "Tomatoes are fruits, not vegetables." },
      { id: 7, text: "The most expensive pizza in the world costs $12,000." },
      { id: 8, text: "Ketchup was once sold as medicine in the 1830s." },
      { id: 9, text: "Strawberries are the only fruit with seeds on the outside." },
      { id: 10, text: "Potatoes can absorb and reflect Wi-Fi signals." },
      { id: 11, text: "The most stolen food in the world is cheese." },
      { id: 12, text: "Bananas are berries, but strawberries are not." },
      { id: 13, text: "Pound cake got its name from the original recipe using a pound of each ingredient." },
      { id: 14, text: "The fear of cooking is called mageirocophobia." },
      { id: 15, text: "White chocolate isn't actually chocolate." },
      { id: 16, text: "The most expensive spice in the world is saffron." },
      { id: 17, text: "Fortune cookies were invented in America, not China." },
      { id: 18, text: "Avocados are toxic to birds." },
      { id: 19, text: "The world's hottest pepper is the Carolina Reaper." },
      { id: 20, text: "McDonald's sells 75 hamburgers every second." }
    ]
  }
];

export const totalFacts = categories.reduce((acc, cat) => acc + cat.facts.length, 0);
