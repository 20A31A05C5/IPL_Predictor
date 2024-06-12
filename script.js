/* Input */
console.log("Script Loaded");
const inputFields = document.querySelectorAll('.input-field');
const optionsLists = document.querySelectorAll('.options-list');

for (let i = 0; i < inputFields.length; i++) {
  const inputField = inputFields[i];
  const optionsList = optionsLists[i];

  inputField.addEventListener('mouseenter', () => {
    optionsList.style.display = 'block';
  });

  /* Handle clicks outside the input field to hide the options list */
  document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('input-field') && !event.target.classList.contains('options-list')) {
      optionsLists.forEach(list => list.style.display = 'none');
    }
  });

  optionsList.addEventListener('click', (event) => {
    const selectedOption = event.target.textContent;

    // Update input field value
    inputField.value = selectedOption;

    // Remove previously selected options from other lists
    optionsLists.forEach(list => {
      if (list !== optionsList) {
        list.querySelectorAll('li').forEach(option => {
          if (option.textContent === selectedOption) {
            option.remove(); // Remove the option from the list
          }
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Your script logic that accesses form elements
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    // No need to prevent default form submission here
  
    const team1 = document.getElementById('t1').value;
    const team2 = document.getElementById('t2').value;
  
    document.getElementById('hiddenTeam1').value = team1;
    document.getElementById('hiddenTeam2').value = team2;
  });
  
  
});

// Remove getTeams() call here
