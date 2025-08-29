# Bajaj Test BFHL API – Node.js/Express

Implementation of the VIT BFHL assignment using Node.js/Express.

## Features
- POST `/bfhl` endpoint with required response format
- Numbers as strings, classified odd/even
- Alphabets uppercased, special characters extracted
- Sum of numbers returned as string
- Concatenated string: reverse of all alphabets (with alternating caps)
- `user_id`: `<full_name_in_lowercase_with_underscores>_<DOB_DDMMYYYY>`

## Run Locally
```bash
npm install
cp .env.example .env
npm run dev
