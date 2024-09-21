const micIcon = document.getElementById('mic')

if (annyang) {

    let commands = {
        'scroll up': function () {
            window.scrollBy(0, -500) // Scroll up by 200 pixels
        },
        'scroll down': function () {
            window.scrollBy(0, 500) // Scroll down by 200 pixels
        }
    }

    switch (window.location.pathname) {
        case '/': {
            commands = {
                ...commands,
                'buy now': function () {
                    window.location.href = window.location.origin + '/checkout.html'
                },
                'contact': function () {
                    window.location.href = window.location.origin + '#contact'
                },
                'hero product': function () {
                    window.location.href = window.location.origin + '#hero'
                }
            }
            break
        }
        case '/checkout.html': {
            commands = {
                ...commands,
                'go to home': function () {
                    window.location.href = window.location.origin
                },
                'first name *first_name': function (first_name) {
                    document.getElementById('firstName').value = first_name
                },
                'last name *last_name': function (last_name) {
                    document.getElementById('lastName').value = last_name
                },
                'email *email': function (email) {
                    document.getElementById('email').value = email
                },
                'address *address': function (address) {
                    document.getElementById('address').value = address
                },
                'show countries': function () {
                    document.getElementById('country').size = 3
                },
                'select country *country': function (country) {
                    const countrySelect = document.getElementById('country')
                    const options = Array.from(countrySelect.options)
                    const selectedOption = options.find(option => option.value.toLowerCase() === country.toLowerCase())

                    if (selectedOption) {
                        countrySelect.value = selectedOption.value
                    } else {
                        alert('Country not found')
                    }
                    countrySelect.size = 0
                },
                'show states': function () {
                    document.getElementById('state').size = 3
                },
                'select state *state': function (country) {
                    const stateSelect = document.getElementById('state')
                    const options = Array.from(stateSelect.options)
                    const selectedOption = options.find(option => option.value.toLowerCase() === country.toLowerCase())

                    if (selectedOption) {
                        stateSelect.value = selectedOption.value
                    } else {
                        alert('State not found')
                    }
                    stateSelect.size = 0
                },
                'zip *zip': function (zip) {
                    document.getElementById('zip').value = zip
                },
                'check shipping address is the same as my billing address': function () {
                    document.getElementById('same-address').checked = true
                },
                'place order': function () {
                    alert('Order Placed. Thank You!!!')
                    window.location.href = window.location.origin
                }
            }
            break
        }
    }

    // Add commands to annyang
    annyang.addCommands(commands)

    // Show green mic when listening
    annyang.addCallback('start', function () {
        micIcon.classList.add('active')
    })

    // Show red mic when not listening
    annyang.addCallback('end', function () {
        micIcon.classList.remove('active')
    })

    // Start listening when mic is clicked
    micIcon.addEventListener('click', function () {
        if (micIcon.classList.contains('active')) {
            annyang.abort()  // Stop listening
        } else {
            annyang.start()  // Start listening
        }
    })

} else {
    alert('Speech recognition is not supported in your browser.')
}