const fs = require('fs');

const SUPER_SECRET = fs.readFileSync('super.secret').toString().trim();
const emails = fs.readFileSync('emails.secret').toString().trim().split(/\r?\n/g);

fetch("https://cs571.org/api/auth/generate-bids", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-CS571-SECRET": SUPER_SECRET
    },
    body: JSON.stringify({
        sendEmails: false,
        bids: emails.map(em => {
            return {
                nickname: "CS571 S24 Default",
                email: em
            }
        })
    })
})

