import Auth0Strategy from 'passport-auth0';
import * as dotenv from 'dotenv';

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const auth0Strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN!,
    clientID: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    callbackURL: process.env.AUTH0_CALLBACK_URL!,
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

export default auth0Strategy;