import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: "/auth/google/callback",
  },
  function (token, tokenSecret, profile, done) {
    return done(null, profile);
  }
);

export default googleStrategy;