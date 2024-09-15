// Fetch and update the total donations
async function fetchDonationTotal() {
    try {
        // URL of the donation page
        const url = 'https://support.oslerfoundation.org/site/TR/DIY/DIY;jsessionid=00000000.app30114c?NONCE_TOKEN=BA958AA106427DED1DC33F6C86B21C63&px=1181183&pg=personal&fr_id=1160';
        
        // Fetch the page content (may not work due to CORS)
        const response = await fetch(url);
        const text = await response.text();

        // Parse the response to find the donation total (requires updating based on the page structure)
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const donationElement = doc.querySelector('.ProgressBar-total'); // Adjust this selector as needed

        // Extract and display the donation total
        if (donationElement) {
            const donationTotal = donationElement.textContent.trim();
            document.getElementById('donation-amount').textContent = donationTotal;
        } else {
            document.getElementById('donation-amount').textContent = 'Unable to load donation total.';
        }
    } catch (error) {
        console.error('Error fetching donation total:', error);
        document.getElementById('donation-amount').textContent = 'Error loading donation total.';
    }
}

// Call the function to fetch the total donations
fetchDonationTotal();
