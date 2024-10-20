// Function to return a greeting with a given name
function introduction(name) {
    return `Hi, my name is ${name}.`; // Ensure there are no extra spaces
  }
  
  // Example usage:
  console.log(introduction("Aki")); // Output: "Hi, my name is Aki."
  // Function to return a greeting with a given name and language
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I speak ${language}.`;
  }
  
  // Example usage:
  console.log(introductionWithLanguage("Aki", "Japanese")); // Output: "Hi, my name is Aki and I speak Japanese."
// Function to return a greeting with a given name and language
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Example usage:
  console.log(introductionWithLanguage("Aki", "Ember.js")); 
  // Output: "Hi, my name is Aki and I am learning to program in Ember.js."
  // Function to return a greeting with a given name and language
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Example usages:
  console.log(introductionWithLanguageOptional("Aki", "Ember.js")); 
  // Output: "Hi, my name is Aki and I am learning to program in Ember.js."
  
  console.log(introductionWithLanguageOptional("John")); 
  // Output: "Hi, my name is John and I am learning to program in JavaScript."
  
  
  
  
  