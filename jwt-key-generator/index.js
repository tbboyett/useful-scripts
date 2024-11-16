const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Generates a secret key for the selected algorithm and encodes it in base64 format.
 * 
 * @param {string} algorithm - The algorithm to generate the key for ("HS256" or "HS512").
 * @returns {string} A base64-encoded secret key.
 * @throws {Error} Throws an error if the provided algorithm is unsupported.
 */
const generateSecretKey = (algorithm) => {
    let bytes;

    if (algorithm === 'HS256') {
        bytes = 32;  // 256 bits
    } else if (algorithm === 'HS512') {
        bytes = 64;  // 512 bits
    } else {
        throw new Error('Unsupported algorithm. Please choose either "HS256" or "HS512".');
    }

    // Generate the key and return it as a base64-encoded string
    return crypto.randomBytes(bytes).toString('base64');
};

/**
 * Displays the available algorithm options to the user.
 * Prompts the user to choose one of the algorithms: HS256 or HS512.
 * 
 * @returns {void} This function does not return anything.
 */
const displayMenu = () => {
    console.log("Please choose an algorithm by entering the corresponding number:");
    console.log("1. HS256 (256-bit secret key)");
    console.log("2. HS512 (512-bit secret key)");
};

/**
 * Validates and processes the user's input to select an algorithm (HS256 or HS512).
 * 
 * @param {string} answer - The raw input from the user.
 * @returns {string|null} The selected algorithm ('HS256' or 'HS512') or null if invalid.
 */
const selectAlgorithm = (answer) => {
    const sanitizedAnswer = answer.trim().toUpperCase();

    if (sanitizedAnswer === '1') {
        return 'HS256';
    } else if (sanitizedAnswer === '2') {
        return 'HS512';
    } else {
        console.error('Invalid choice. Please choose 1 or 2.');
        return null;
    }
};

/**
 * Prompts the user to select an algorithm (HS256 or HS512) and processes their choice.
 * If the user provides an invalid input, the prompt will ask them to try again.
 * Once a valid input is received, the corresponding secret key is generated and displayed.
 * 
 * @returns {void} This function does not return anything, but outputs a secret key to the console.
 */
const promptForAlgorithm = () => {
    displayMenu();  

    rl.question('Enter your choice (1 or 2): ', (answer) => {
        console.log(`Raw input received: "${answer}"`);

        // Get the selected algorithm based on user input
        const selectedAlgorithm = selectAlgorithm(answer);

        if (selectedAlgorithm) {
            try {
                const secretKey = generateSecretKey(selectedAlgorithm);
                console.log(`Generated ${selectedAlgorithm} Secret Key:`, secretKey);
            } catch (error) {
                console.error('Error:', error.message);
            }

            rl.close();  // close the readline interface after a valid selection
        } else {
            // if invalid input, prompt again
            promptForAlgorithm();
        }
    });
};

promptForAlgorithm();
