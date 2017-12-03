/*global $*/

// const data = {
//     positiveTraits: ['loyal', 'dutiful', 'faithful', 'loving', 'kind', 
//     'generous', 'charitable','Honest', 'respectful', 'responsible', 'humble',
//     'compassionate', 'fair', 'forgiving', 'authentic', 'courageous', 'generous',
//     'perseverant', 'polite', 'optimistic', 'reliable', 'conscientious', 
//     'self-disciplined', 'Accessible','Adaptable', 'Agreeable', 'Amiable', 
//     'Appreciative', 'Benevolent', 'Calm','Capable', 'Caring', 'Charismatic', 
//     'Cheerful', 'Confident', 'Considerate','Constant', 'Contemplative', 
//     'Cooperative', 'Courteous', 'Curious', 'Daring','Discreet', 'Ebullient', 
//     'Efficient', 'Empathetic', 'Enthusiastic', 'Firm','Flexible', 'Focused', 
//     'Forthright', 'Friendly', 'Gallant', 'Gentle', 'Genuine','Good-natured', 
//     'Gracious', 'Hardworking', 'Helpful', 'Heroic', 'High-minded','Honorable',
//     'Humorous', 'Idealistic', 'Imaginative', 'Incisive', 'Independent', 
//     'Innovative', 'Insightful', 'Leaderly', 'Logical', 'Lovable', 'Mature',
//     'Methodical', 'Modest', 'Objective', 'Observant', 'Open', 'Orderly', 
//     'Organized', 'Original', 'Painstaking', 'Passionate', 'Patient', 
//     'Patriotic', 'Peaceful', 'Perceptive', 'Personable', 'Playful', 'Polished', 
//     'Practical', 'Principled', 'Protective', 'Prudent', 'Rational', 'Realistic', 
//     'Reflective', 'Relaxed', 'Resourceful', 'Sage', 'Secure', 'Selfless', 
//     'Self-critical', 'Self-reliant', 'Self-sufficent', 'Sensitive', 'Sentimental', 
//     'Simple', 'Skillful', 'Sober', 'Sociable', 'Spontaneous', 'Sporting', 
//     'Steadfast', 'Studious', 'Sweet', 'Sympathetic', 'Systematic', 'Tasteful', 
//     'Thorough', 'Tidy', 'Tolerant', 'Trusting', 'Uncomplaining', 'Understanding', 
//     'Upright', 'Venturesome', 'Warm', 'Well-read', 'Well-rounded', 'Wise'],
    
//     negativeTraits: ['vain', 'gluttonous', 'jealous', 'envious', 'sloth',
//     'proud', 'Abrasive', 'Abrupt', 'Aimless', 'Aloof', 'Amoral', 'Angry', 
//     'Anxious', 'Apathetic', 'Arbitrary', 'Argumentative', 'Arrogant', 
//     'Artificial', 'Asocial', 'Barbaric', 'Bland', 'Blunt', 'Brittle', 'Brutal', 
//     'Calculating', 'Callous', 'Cantakerous', 'Careless', 'Charmless', 'Coarse', 
//     'Cold', 'Complacent', 'Complaintive', 'Compulsive', 'Conceited', 
//     'Condemnatory', 'Conformist', 'Contemptible', 'Cowardly', 'Crafty', 
//     'Crass', 'Criminal', 'Critical', 'Crude', 'Cruel', 'Cynical', 'Decadent', 
//     'Deceitful', 'Demanding', 'Dependent', 'Desperate', 'Destructive', 
//     'Devious', 'Difficult', 'Dirty', 'Disconcerting', 'Discontented', 
//     'Discourteous', 'Dishonest', 'Disloyal', 'Disobedient', 'Disorderly', 
//     'Disrespectful', 'Disruptive', 'Dissolute', 'Dogmatic', 'Domineering', 
//     'Easily Discouraged', 'Egocentric', 'Escapist', 'Extreme', 'Faithless', 
//     'Fanatical', 'Fanciful', 'Fatalistic', 'Fearful', 'Fickle', 'Fiery', 
//     'Fixed', 'Flamboyant', 'Foolish', 'Forgetful', 'Fraudulent', 'Frightening',
//     'Frivolous', 'Gloomy', 'Graceless', 'Greedy', 'Grim', 'Gullible', 'Hateful',
//     'Haughty', 'Hedonistic', 'High-handed', 'Hostile', 'Ignorant', 'Impatient',
//     'Impractical', 'Imprudent', 'Impulsive', 'Inconsiderate', 'Indecisive',
//     'Indulgent', 'Insecure', 'Insensitive', 'Insincere', 'Intolerant', 
//     'Irascible', 'Irrational', 'Irresponsible', 'Irritable', 'Lazy',
//     'Malicious', 'Mannered', 'Mannerless', 'Mawkish', 'Mealymouthed',
//     'Meddlesome', 'Melancholic', 'Miserable', 'Miserly', 'Misguided', 
//     'Money-minded', 'Moody', 'Morbid', 'Muddle-headed', 'Naive', 'Narcissistic',
//     'Narrow-minded', 'Neglectful', 'Neurotic', 'Nihilistic', 'Obnoxious', 
//     'Obsessive', 'Opinionated', 'Opportunistic', 'Paranoid', 'Passive', 
//     'Pedantic', 'Perverse', 'Petty', 'Pompous', 'Possessive', 'Power-hungry',
//     'Predatory', 'Prejudiced', 'Presumptuous', 'Pretentious', 'Profligate',
//     'Provocative', 'Pugnacious', 'Puritanical', 'Reactionary', 'Reactive',
//     'Resentful', 'Rigid', 'Ritualistic', 'Sadistic', 'Sanctimonious', 
//     'Scornful', 'Secretive', 'Selfish', 'Self-indulgent', 'Shallow', 
//     'Shortsighted', 'Single-minded', 'Sloppy', 'Slow', 'Sly', 'Stiff', 
//     'Strong-willed', 'Stupid', 'Superficial', 'Superstitious', 'Tactless', 
//     'Tasteless', 'Thievish', 'Thoughtless', 'Treacherous', 'Troublesome', 
//     'Unappreciative', 'Uncaring', 'Uncharitable', 'Uncooperative', 'Unctuous', 
//     'Undisciplined', 'Unfriendly', 'Ungrateful', 'Unprincipled', 'Unrealistic', 
//     'Unreliable', 'Unstable', 'Venal', 'Vindictive', 'Weak-willed', 'Willful'],
    
//     characterTypes: ['Hero', 'Villian', 'Hero\'s Sidekick', 
//     'Protagonist\'s Love Interest', 'Mentor'],
    
//     names: ['Name of a city', 'Name of a monument', 'Furniture item', 
//     'Type of jewel', 'Type of car', 'Astronomy', 'Greek/Roman mythology',
//     'Norse mythology', 'Biblical', 'Shakespearean', 
//     'Presidents of the United States', 'Type of animal', 
//     'Type of plant', 'Color', 'Author’s first name', 'Author’s last name', 
//     'Type of metal', 'Name of a friend', 'Name of a musician', 
//     'Name from a Beatles’ song', 'Name of a cartoon character', 
//     'Type of rock', 'Something you’d find in a workshop', 'State in the U.S.', 
//     'Something you’d find in a card game', 'Something from under the sea', 
//     'Brand names you’d find in a bathroom', 
//     'Something you’d read in a newspaper headline', 'Electronic brand names',
//     'Clothing brand names', 'Title of favorite movie', 'Occupation']
// };

$(document).ready(function() {
    init();
});

function init() {
    ajaxRequest('#trait-button', '#name-button');
}

function randomGenerator(data, idString, dataArray) {
    let randNumber = Math.floor(Math.random() * data[dataArray]['list'].length);
    $(idString).empty();
    $(idString).append(
        '<p>' + data[dataArray]['list'][randNumber] + '</p>');
}

function ajaxRequest(traitButtonId, nameButtonId) {
    $.ajax({
        url: '/generating',
        type: 'GET',
        dataType: 'json',
        
        success: function(response) {
            console.log('The server sent back this text: ' + response.traits[0].list[0]);
            $(traitButtonId).on('click', function() {
                randomGenerator(response.traits, '#positive-trait', 0);
                randomGenerator(response.traits, '#negative-trait', 1);
                randomGenerator(response.traits, '#character-type', 2);
            });
            $(nameButtonId).on('click', function() {
                randomGenerator(response.names[0], '#first-name', 'names');
                randomGenerator(response.names[0], '#last-name', 'names');
            });
            
            
        },
        error: function(error) {
            console.log(error);
        },
        complete: function(xhr, status) {
            console.log('The request is complete');
        }
        
    });
}

