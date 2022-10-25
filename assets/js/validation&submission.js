jQuery('#submit-form').validate({
  rules: {
    name: {
      required: true,
      minlength: 3,
      normalizer: function (value) {
        return $.trim(value);
      }
    },
    email: {
      required: true,
      email: true
    },
    subject: {
      required: true
    }
  },
  messages: {
    name: {
      required: "Name is required",
      minlength: "Name should be atleast 3 characters"
    },
    email: {
      required: "Email is required",
      email: "Invalid email"
    },
    subject: "Subject is required",
  },
  submitHandler: function (form) {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwFz64M4lWGCQaS1PoTxuj3MPoxy5UX6KbvDDdnZTvs_1cQdRHxw-sfrRhxwC_KCarIkQ/exec",
      method: "post",
      data: $(form).serialize(),
      success: (response) => {
        Swal.fire({
          title: 'Message Sent Successfully',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(()=>{
          location.reload()
        })
      },
      error: (err) => {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong, try again!',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#e14343',
          confirmButtonText: 'OK'
        }).then(()=>{
          location.reload()
        })
      }
    })
  }
})