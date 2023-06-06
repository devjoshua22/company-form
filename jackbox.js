const ballAnimation = document.getElementById('ball')
const submit = document.getElementById('submit')
const mainContainer = document.getElementById('main-container')


function submittingForm(){
   submit.classList.add('no-display')
   ballAnimation.classList.add('ball')

  }


function submittedForm(){
  mainContainer.innerHTML=``
  mainContainer.classList.add('submmited')
}



// JavaScript for form submission
      const form = document.getElementById('companyForm');
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
  
        // Display a loading message or spinner while the form is being submitted
        // (Replace the following line with your own loading indicator)
        submittingForm();
  
        // Fetch the Formspree endpoint URL
        const url = form.getAttribute('action');
  
        // Create a new FormData object to store the form data
        const formData = new FormData(form);
  
        // Make a POST request to Formspree with the form data
        fetch(url, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from Formspree
          if (data.success) {
            // Display a success message (replace with your own success handling)
            setTimeout(submittedForm, 3000);
           }
           else {
            // Display an error message (replace with your own error handling)
            setTimeout(submittedForm, 3000);
          }
        })
        .catch(error => {
          // Display an error message if there was a problem with the form submission
          alert('An error occurred. Please try again later.');
        });
      });

   // // JavaScript for form submission
    // const form = document.getElementById('companyForm');
    // form.addEventListener('submit', function(event) {
    //   event.preventDefault(); // Prevent the form from submitting normally

    //   // Display a loading message or spinner while the form is being submitted
    //   // (Replace the following line with your own loading indicator)
    //   alert('Submitting form... Please wait.');

    //   // Create a new FormData object to store the form data
    //   const formData = new FormData(form);

    //   // Make a POST request to Formspree with the form data
    //   fetch(form.getAttribute('action'), {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //       'Accept': 'application/json'
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the response from Formspree
    //     if (data.success) {
    //       // Display a success message (replace with your own success handling)
    //       alert('Form submitted successfully!');
    //   }
    //       })
    // })