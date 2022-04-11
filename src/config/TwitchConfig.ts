
export const TwitchApiAuthorization = {
            headers: {
                'Client-Id': `${process.env.TWITCH_CLIENT_ID}`,
                Authorization: `Bearer ${process.env.TWITCH_TOKEN}`
            }
        }