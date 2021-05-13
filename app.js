let myName = "Donald Smith";
let capMyName = myName.toUpperCase();
console.log("Name: " + capMyName);


let careerField = "Software Developer";
console.log("Career: " + careerField);

let description = "Description:";
console.log(description);

let myDescription =
  "I am married with 2 beautiful children! Amir is 8 and Nia is 7. I am originally from Mobile, AL. I moved to Birmingham in 2004 to go to UAB.  I graduated from UAB with a Bachelor's degree in Accounting. I also met my wife during my senior year at UAB. We have been married for 12 years. I am very excited to be a part of this program because I believe that software development is a skill that will become increasingly important to our society and will provide opportunites for me to have a successful career in technology!";
   console.log("Description: " + myDescription);

let interests = "My Interests:";
console.log(interests);

let myInterests = [" Sports", " Working Out", " The Stock Market", " Cryptocurrency", " Travelling", " Family", " Anything tech related."]
displayPosition2(myInterests);

let positions = "My Previous Experience:";
console.log(positions);

let myPositions = [" Whole Foods Market/Birmingham, AL: Associate Team Leader-Meat Department-Responsible for managing the operations of the Meat Department with a focus on customer service, employee engagement, and sales operations.", " US Department of Treasury/Birmingham, AL: Special Agent- All about TAXES!!", " University of Alabama at Birmingham, AL: Student Assistant-Responsible for classroom maintenance and various other errands."];
// console.log(myPositions);

displayPosition(myPositions);
let skills = "My Skills:";
console.log(skills);

let mySkills = [" BAM: Certified Butcher", " BAM: AWESOME DAD SKILLS", " Microsoft Office", " BAM: Javascript", " Swift", " HTML", " CSS"];

// displayPosition1(mySkills);

function displayPosition(companyName, jobTitle, description) {
  for (let i = 0; i < myPositions.length; i++) {
    console.log("*"+ myPositions[i]);
  }

}
function displayPosition1(companyName, jobTitle, description) {
  for (let i = 0; i < mySkills.length; i++) {
    console.log("*"+ mySkills[i]);
  }

}
function displayPosition2(companyName, jobTitle, description) {
  for (let i = 0; i < myInterests.length; i++) {
    console.log("*"+ myInterests[i]);
  }

}

function displaySkill(skillName) {
  for (let i = 0; i < mySkills.length; i++) {
    console.log(mySkills[i]);
    
  }
  if (mySkills == "BAM:") {
    console.log("BAM:" + myskills[i]);
    
    
  }
}
displaySkill();