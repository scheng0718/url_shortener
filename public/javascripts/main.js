const form = document.querySelector('#form')
const submitButton = document.querySelector('#submitButton')
const targetUrl = document.querySelector('#target_url')
const copyBtn = document.querySelector('#copy_btn')

submitButton.addEventListener('click', function onSubmitButtonClicked(event) {
  form.classList.add('was-validated')
})

form.addEventListener('submit', function onFormSubmit(event) {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
})

function copyUrl() {
  const url = targetUrl.innerText
  navigator.clipboard.writeText(url)
    .then(() => alert('URL Copied!'))
    .catch(error => console.log(error))
}