# Secret Key Generator for JWT (HS256 & HS512)

This repository contains a simple script that allows you to generate secret keys for JWT (JSON Web Tokens) using the HS256 (256-bit) and HS512 (512-bit) algorithms. The script asks the user to choose an algorithm and generates a corresponding base64-encoded secret key. This is useful for securing your JWT tokens for authentication.

## Features

- **Generate HS256 or HS512 Secret Keys**: Based on the user's selection, the script will generate a 256-bit (HS256) or 512-bit (HS512) secret key.
- **Base64 Encoding**: The generated secret key is encoded in base64 format, making it suitable for use with JWT libraries.

## Prerequisites

Before using the script, you need to have **Node.js** installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone this repository to your local machine:
