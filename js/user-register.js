'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()  // Ngừng hành động gửi form
      event.stopPropagation() // Ngừng sự kiện gửi tiếp
    }

    form.classList.add('was-validated') // Thêm lớp 'was-validated' vào form
  }, false)
})
