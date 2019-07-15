const words = [
    'Acne', 'Acre', 'Addendum', 'Advertise', 'Aircraft', 'Aisle', 'Alligator', 'Alphabetize', 'America', 'Ankle', 'Apathy', 'Applause', 'Applesauc', 'Application', 'Archaeologist', 'Aristocrat', 'Arm', 'Armada', 'Asleep', 'Astronaut', 'Athlete', 'Atlantis', 'Aunt', 'Avocado', 'Baby-Sitter', 'Backbone', 'Bag', 'Baguette', 'Bald', 'Balloon', 'Banana', 'Banister', 'Baseball', 'Baseboards', 'Basketball', 'Bat', 'Battery', 'Beach', 'Beanstalk', 'Bedbug', 'Beer', 'Beethoven', 'Belt', 'Bib', 'Bicycle', 'Big', 'Bike', 'Billboard', 'Bird', 'Birthday', 'Bite', 'Blacksmith', 'Blanket', 'Bleach', 'Blimp', 'Blossom', 'Blueprint', 'Blunt', 'Blur', 'Boa', 'Boat', 'Bob', 'Bobsled', 'Body', 'Bomb', 'Bonnet', 'Book', 'Booth', 'Bowtie', 'Box', 'Boy', 'Brainstorm', 'Brand', 'Brave', 'Bride', 'Bridge', 'Broccoli', 'Broken', 'Broom', 'Bruise', 'Brunette', 'Bubble', 'Buddy', 'Buffalo', 'Bulb', 'Bunny', 'Bus', 'Buy', 'Cabin', 'Cafeteria', 'Cake', 'Calculator', 'Campsite', 'Can', 'Canada', 'Candle', 'Candy', 'Cape', 'Capitalism', 'Car', 'Cardboard', 'Cartography', 'Cat', 'Cd', 'Ceiling', 'Cell', 'Century', 'Chair', 'Chalk', 'Champion', 'Charger', 'Cheerleader', 'Chef', 'Chess', 'Chew', 'Chicken', 'Chime', 'China', 'Chocolate', 'Church', 'Circus', 'Clay', 'Cliff', 'Cloak', 'Clockwork', 'Clown', 'Clue', 'Coach', 'Coal', 'Coaster', 'Cog', 'Cold', 'College', 'Comfort', 'Computer', 'Cone', 'Constrictor', 'Continuum', 'Conversation', 'Cook', 'Coop', 'Cord', 'Corduroy', 'Cot', 'Cough', 'Cow', 'Cowboy', 'Crayon', 'Cream', 'Crisp', 'Criticize', 'Crow', 'Cruise', 'Crumb', 'Crust', 'Cuff', 'Curtain', 'Cuticle', 'Czar', 'Dad', 'Dart', 'Dawn', 'Day', 'Deep', 'Defect', 'Dent', 'Dentist', 'Desk', 'Dictionary', 'Dimple', 'Dirty', 'Dismantle', 'Ditch', 'Diver', 'Doctor', 'Dog', 'Doghouse', 'Doll', 'Dominoes', 'Door', 'Dot', 'Drain', 'Draw', 'Dream', 'Dress', 'Drink', 'Drip', 'Drums', 'Dryer', 'Duck', 'Dump', 'Dunk', 'Dust', 'Ear', 'Eat', 'Ebony', 'Elbow', 'Electricity', 'Elephant', 'Elevator', 'Elf', 'Elm', 'Engine', 'England', 'Ergonomic', 'Escalator', 'Eureka', 'Europe', 'Evolution', 'Extension', 'Eyebrow', 'Fan', 'Fancy', 'Fast', 'Feast', 'Fence', 'Feudalism', 'Fiddle', 'Figment', 'Finger', 'Fire', 'First', 'Fishing', 'Fix', 'Fizz', 'Flagpole', 'Flannel', 'Flashlight', 'Flock', 'Flotsam', 'Flower', 'Flu', 'Flush', 'Flutter', 'Fog', 'Foil', 'Football', 'Forehead', 'Forever', 'Fortnight', 'France', 'Freckle', 'Freight', 'Fringe', 'Frog', 'Frown', 'Gallop', 'Game', 'Garbage', 'Garden', 'Gasoline', 'Gem', 'Ginger', 'Gingerbread', 'Girl', 'Glasses', 'Goblin', 'Gold', 'Goodbye', 'Grandpa', 'Grape', 'Grass', 'Gratitude', 'Gray', 'Green', 'Guitar', 'Gum', 'Gumball', 'Hair', 'Half', 'Handle', 'Handwriting', 'Hang', 'Happy', 'Hat', 'Hatch', 'Headache', 'Heart', 'Hedge', 'Helicopter', 'Hem', 'Hide', 'Hill', 'Hockey', 'Homework', 'Honk', 'Hopscotch', 'Horse', 'Hose', 'Hot', 'House', 'Houseboat', 'Hug', 'Humidifier', 'Hungry', 'Hurdle', 'Hurt', 'Hut', 'Ice', 'Implode', 'Inn', 'Inquisition', 'Intern', 'Internet', 'Invitation', 'Ironic', 'Ivory', 'Ivy', 'Jade', 'Japan', 'Jeans', 'Jelly', 'Jet', 'Jig', 'Jog', 'Journal', 'Jump', 'Key', 'Killer', 'Kilogram', 'King', 'Kitchen', 'Kite', 'Knee', 'Kneel', 'Knife', 'Knight', 'Koala', 'Lace', 'Ladder', 'Ladybug', 'Lag', 'Landfill', 'Lap', 'Laugh', 'Laundry', 'Law', 'Lawn', 'Lawnmower', 'Leak', 'Leg', 'Letter', 'Level', 'Lifestyle', 'Ligament',
    'Light', 'Lightsaber', 'Lime', 'Lion', 'Lizard', 'Log', 'Loiterer', 'Lollipop', 'Loveseat', 'Loyalty', 'Lunch', 'Lunchbox', 'Lyrics', 'Machine', 'Macho', 'Mailbox', 'Mammoth', 'Mark', 'Mars', 'Mascot', 'Mast', 'Matchstick', 'Mate', 'Mattress', 'Mess', 'Mexico', 'Midsummer', 'Mine', 'Mistake', 'Modern', 'Mold', 'Mom', 'Monday', 'Money', 'Monitor', 'Monster', 'Mooch', 'Moon', 'Mop', 'Moth', 'Motorcycle', 'Mountain', 'Mouse', 'Mower', 'Mud', 'Music', 'Mute', 'Nature', 'Negotiate', 'Neighbor', 'Nest', 'Neutron', 'Niece', 'Night', 'Nightmare', 'Nose', 'Oar', 'Observatory', 'Office', 'Oil', 'Old', 'Olympian', 'Opaque', 'Opener', 'Orbit', 'Organ', 'Organize', 'Outer', 'Outside', 'Ovation', 'Overture', 'Pail', 'Paint', 'Pajamas', 'Palace', 'Pants', 'Paper', 'Paper', 'Park', 'Parody', 'Party', 'Password', 'Pastry', 'Pawn', 'Pear', 'Pen', 'Pencil', 'Pendulum', 'Penis',
    'Penny', 'Pepper', 'Personal', 'Philosopher', 'Phone', 'Photograph', 'Piano', 'Picnic', 'Pigpen', 'Pillow', 'Pilot', 'Pinch', 'Ping', 'Pinwheel', 'Pirate', 'Plaid', 'Plan', 'Plank', 'Plate', 'Platypus', 'Playground', 'Plow', 'Plumber', 'Pocket', 'Poem', 'Point', 'Pole', 'Pomp', 'Pong', 'Pool', 'Popsicle', 'Population', 'Portfolio', 'Positive', 'Post', 'Princess', 'Procrastinate', 'Protestant', 'Psychologist', 'Publisher', 'Punk', 'Puppet', 'Puppy', 'Push', 'Puzzle', 'Quarantine', 'Queen', 'Quicksand', 'Quiet', 'Race', 'Radio', 'Raft', 'Rag', 'Rainbow', 'Rainwater', 'Random', 'Ray', 'Recycle', 'Red', 'Regret', 'Reimbursement', 'Retaliate', 'Rib', 'Riddle', 'Rim', 'Rink', 'Roller', 'Room', 'Rose', 'Round', 'Roundabout', 'Rung', 'Runt', 'Rut', 'Sad', 'Safe', 'Salmon', 'Salt', 'Sandbox', 'Sandcastle', 'Sandwich', 'Sash', 'Satellite', 'Scar', 'Scared', 'School', 'Scoundrel', 'Scramble', 'Scuff', 'Seashell', 'Season', 'Sentence', 'Sequins', 'Set', 'Shaft', 'Shallow', 'Shampoo', 'Shark', 'Sheep', 'Sheets', 'Sheriff', 'Shipwreck', 'Shirt', 'Shoelace', 'Short', 'Shower', 'Shrink', 'Sick', 'Siesta', 'Silhouette', 'Singer', 'Sip', 'Skate', 'Skating', 'Ski', 'Slam', 'Sleep', 'Sling', 'Slow', 'Slump', 'Smith', 'Sneeze', 'Snow', 'Snuggle', 'Song', 'Space', 'Spare', 'Speakers',
    'Spider', 'Spit', 'Sponge', 'Spool', 'Spoon', 'Spring', 'Sprinkler', 'Spy', 'Square', 'Squint', 'Stairs', 'Standing', 'Star', 'State', 'Stick', 'Stockholder', 'Stoplight', 'Stout', 'Stove', 'Stowaway', 'Straw', 'Stream', 'Streamline', 'Stripe', 'Student', 'Sun', 'Sunburn', 'Sushi', 'Swamp', 'Swarm', 'Sweater', 'Swimming', 'Swing', 'Tachometer', 'Talk', 'Taxi', 'Teacher', 'Teapot', 'Teenager', 'Telephone', 'Ten', 'Tennis', 'Thief', 'Think', 'Throne', 'Through', 'Thunder', 'Tide', 'Tiger', 'Time', 'Tinting', 'Tiptoe', 'Tiptop', 'Tired', 'Tissue', 'Toast', 'Toilet', 'Tool', 'Toothbrush', 'Tornado', 'Tournament', 'Tractor', 'Train', 'Trash', 'Treasure', 'Tree', 'Triangle', 'Trip', 'Truck', 'Tub', 'Tuba', 'Tutor', 'Television', 'Twang', 'Twig', 'Twitterpated', 'Type', 'Unemployed', 'Upgrade', 'Vest', 'Vision', 'Wag', 'Water', 'Watermelon',
    'Wax', 'Wedding', 'Weed', 'Welder', 'Whatever', 'Wheelchair', 'Whiplash', 'Whisk', 'Whistle', 'White', 'Wig', 'Will', 'Windmill', 'Winter', 'Wish', 'Wolf', 'Wool', 'World', 'Worm', 'Wristwatch', 'Yardstick', 'Zamboni', 'Zen', 'Zero', 'Zipper', 'Zone', 'Zoo',
]

const gamediv = document.getElementById('game')
const rand = (min, max) => Math.floor((Math.random() * max) + min)
const make = (text, color) => {
    const el = document.createElement('div')
    el.classList.add('word', color)
    el.innerHTML = text
    return el
}

const indexes = []
while (indexes.length < 25) {
    let num = rand(0, words.length - 1)
    if (indexes.includes(num)) {
        continue;
    }
    indexes.push(num)
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

let where = 0
function next(arr, count) {
    n = arr.slice(where, where + count)
    where += count
    return n
}

const picked = indexes.map(idx => words[idx])
console.log(picked)
const bad = next(picked, 1)
const own = next(picked, 8)
const enemy = next(picked, 9)
const neutral = next(picked, 7)

console.log(bad, bad.length)
console.log(own, own.length)
console.log(enemy, enemy.length)
console.log(neutral, enemy.length)

const elements = []
bad.forEach(item => {
    elements.push(make(item, 'bad'))
})
own.forEach(item => {
    elements.push(make(item, 'own'))
})
enemy.forEach(item => {
    elements.push(make(item, 'enemy'))
})
neutral.forEach(item => {
    elements.push(make(item, 'neutral'))
})
const shuffled = shuffle(elements)
shuffled.forEach(el => {
    gamediv.appendChild(el)
})

button = document.createElement('div')
button.innerHTML = 'open secret'
document.body.appendChild(button)
let secret = null
button.onclick= function() {
    if (secret != null) {
        secret.close()
    }
    secret = window.open('', 'secret')
    secret.document.write(`
    <meta charset="utf-8" />
    <style>
        body {
            font-family: sans-serif;
            font-weight: bold;
        }
        .bad {
            color: #3f3e37;
        }
        .bad:before {
            content: "🏴"
        }

        .own {
            color: #107fa6
        }
        .own:before {
            content: " 🔵 "
        }

        .enemy {
            color: #e73c3f
        }
        .enemy:before {
            content: "♦️"
        }

        .neutral {
            color: #a1856e
        }

        .neutral:before {
            content: "🥔"
        }

        #game {
            display: grid;
            grid-template-columns: auto auto auto auto auto;
            grid-gap: 10px;
        }
        .word {
            border: solid 1px black;
            background: #e4ceb3;
            padding: 10px;
            border-radius: 5px;
        }
    </style>`)
    secret.document.write(gamediv.outerHTML)
}