const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

GOOGLE_CLIENT_ID =
  "117695372414-h7madtjn6if25ksqq3qil3uhd84sjlre.apps.googleusercontent.com";
GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
