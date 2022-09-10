const secret = {
    JWT: "7gsj7b035ww1s0p157sm0lgqbh67r4eblsvs55514q1u6n3re4wl8515",
}

const loginSecret = {
    googleLogin: "143278732650-pobf3sup5r6n838387ogk17ftd5ufgiq.apps.googleusercontent.com",
}

const awsConfig = {
    path: "./config/aws/development.json"
    // path: ""./config/aws/production.json"
}
module.exports = {
    secret,
    loginSecret,
    awsConfig
}

