jQuery('#contact-form').validate({
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
        email:true
      },
      subject: {
        required: true
      }
    },
    messages:{
      name:{
        required:"Name is required",
        minlength:"Name should be atleast 3 characters"
      },
      email:{
        required:"Email is required",
        email:"Invalid email"
      },
      subject:"Subject is required",
    },
    submitHandler: function (form) {
      form.submit();
    }
  })