exports.handler = async function (event) {
    const body = JSON.parse(event.body);
    const token = body["cf-turnstile-response"];

    const secret = process.env.TURNSTILE_SECRET_KEY;

    const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `secret=${secret}&response=${token}`
        }
    );

    const data = await response.json();

    if (data.success) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Captcha verified"
            })
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: "Captcha failed"
        })
    };
};
