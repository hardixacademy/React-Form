function NewsLetterForm() {
  const handleSubmit = event => {
    event.preventDefault()
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    alert(`Your email is ${email} and password is ${password}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
